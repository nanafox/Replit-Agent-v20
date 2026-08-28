# Backend Contract

Status: **Draft for review**

## Contract source of truth

The OpenAPI document is the source of truth for request and response shapes. Database schema, server handlers, generated client hooks, and frontend types should follow that contract rather than inventing separate shapes.

The backend owns:

- Identity-to-membership resolution.
- Business and branch authorization.
- Plan limits and subscription state.
- Currency validation.
- Inventory changes caused by sales.
- Consistent error responses.

## Tenancy model

### Global identity

```text
User
- id
- name
- email
```

The user is global to the application. A user record is not duplicated when the person joins another business.

### Business

```text
Business
- id
- name
- default_operational_currency
- status
- created_at
```

### Business membership

```text
BusinessMembership
- id
- user_id
- business_id
- role: owner | admin | manager | staff
- status: invited | active | suspended
- created_at
```

The pair `user_id + business_id` must be unique.

### Branch

```text
Branch
- id
- business_id
- name
- location
- status
- created_at
```

A branch belongs to exactly one business.

### Branch assignment

```text
BranchAssignment
- membership_id
- branch_id
```

The pair `membership_id + branch_id` must be unique. A branch assignment is valid only when the membership and branch belong to the same business.

Active-user limits are enforced per business, not per branch. The backend counts each active `user_id + business_id` membership once, regardless of how many branch assignments that membership has. Branch assignments control access scope; they do not multiply billing or active-user usage.

## Domain ownership

### Business-scoped records

- Product catalog.
- Product categories.
- Customer directory.
- Team membership.
- Business settings.
- Subscription and plan state.

### Branch-scoped records

- Inventory quantity.
- Sales.
- Daily branch metrics.
- Branch activity.
- Branch expenses if expenses are added later.

Every record must carry `business_id`. Branch-scoped records must carry both `business_id` and `branch_id`.

## Authorization contract

Every authenticated request that names a business must verify:

1. The user has an active membership in that business.
2. The requested action is allowed for the user's role.
3. If the record is branch-scoped, the user can access the requested branch.
4. The branch belongs to the same business in the request.

The browser's selected business and branch are context hints, not proof of authorization.

### Initial permission matrix

| Capability | Owner | Admin | Manager | Staff |
|---|---:|---:|---:|---:|
| View all business branches | Yes | Yes | No | No |
| Manage business settings | Yes | Yes | No | No |
| Manage billing | Yes | Optional | No | No |
| Manage branches | Yes | Yes | No | No |
| Manage team | Yes | Yes | Optional | No |
| Manage products | Yes | Yes | Assigned branches | No |
| View inventory | Yes | Yes | Assigned branches | Assigned branches |
| Record sales | Yes | Yes | Assigned branches | Assigned branches |
| View dashboard | All branches | All branches | Assigned branches | Assigned branches |

For the first implementation, owner and admin access is business-wide. Manager and staff access is branch-scoped.

## API boundary

### Identity and context

```http
GET /me
GET /me/businesses
GET /businesses/{businessId}/context
```

The context response should provide the active business, membership role, permissions, accessible branches, and whether an all-branches view is allowed.

```json
{
  "business": {
    "id": "business_123",
    "name": "Nana's Electronics"
  },
  "membership": {
    "role": "manager",
    "permissions": [
      "products.read",
      "sales.read",
      "sales.create"
    ]
  },
  "branches": [
    { "id": "branch_accra", "name": "Accra" },
    { "id": "branch_tema", "name": "Tema" }
  ],
  "canViewAllBranches": false
}
```

### Businesses and branches

```http
POST /businesses
GET /businesses/{businessId}
PATCH /businesses/{businessId}

POST /businesses/{businessId}/branches
GET /businesses/{businessId}/branches
PATCH /businesses/{businessId}/branches/{branchId}
```

### Team and invitations

```http
GET /businesses/{businessId}/members
POST /businesses/{businessId}/invitations
POST /businesses/{businessId}/invitations/{invitationId}/accept
PATCH /businesses/{businessId}/members/{memberId}
PUT /businesses/{businessId}/members/{memberId}/branches
DELETE /businesses/{businessId}/members/{memberId}
```

### Products and inventory

```http
GET /businesses/{businessId}/products
POST /businesses/{businessId}/products
PATCH /businesses/{businessId}/products/{productId}

GET /businesses/{businessId}/branches/{branchId}/inventory
PATCH /businesses/{businessId}/branches/{branchId}/inventory/{productId}
```

### Sales and dashboard

```http
GET /businesses/{businessId}/sales
POST /businesses/{businessId}/branches/{branchId}/sales
GET /businesses/{businessId}/sales/{saleId}
GET /businesses/{businessId}/dashboard
```

List endpoints should accept filters such as `branchId`, `from`, `to`, and `currency`, but the backend must validate every requested branch.

### Plans and subscriptions

```http
GET /plans
POST /businesses/{businessId}/billing/checkout
POST /businesses/{businessId}/billing/demo-complete
GET /businesses/{businessId}/subscription
```

The demo completion endpoint is temporary. It exists to keep the billing boundary explicit so it can later be replaced by a payment-provider checkout and webhook.

## Money contract

Operational monetary amounts must be represented as minor units plus an ISO 4217 currency code:

```json
{
  "amountMinor": 125000,
  "currency": "GHS"
}
```

Rules:

- Never store a monetary amount as an unqualified number.
- Never infer currency from a user's locale.
- Product prices and sales carry their own currency.
- A business may have a default operational currency for convenience.
- Billing plans and subscriptions always use `USD`.
- Reports must not add amounts from different currencies without an explicit conversion policy.
- If foreign-exchange conversion is introduced later, store the rate and timestamp used for the conversion.

## Error contract

The API should use stable machine-readable error codes alongside human-readable messages:

```json
{
  "error": {
    "code": "BRANCH_ACCESS_DENIED",
    "message": "You do not have access to this branch."
  }
}
```

Initial codes:

- `AUTHENTICATION_REQUIRED`
- `BUSINESS_MEMBERSHIP_REQUIRED`
- `BRANCH_ACCESS_DENIED`
- `ROLE_NOT_PERMITTED`
- `PLAN_LIMIT_REACHED`
- `INVALID_CURRENCY`
- `INVALID_MONEY_AMOUNT`
- `INVITATION_EXPIRED`
