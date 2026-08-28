# Nuvio Frontend Contract

Status: **Draft for review**

## Frontend responsibilities

The frontend owns navigation, context selection, form presentation, loading states, empty states, and clear permission-aware UX.

The frontend does not own authorization. It may hide unavailable actions for clarity, but the backend must enforce every business, branch, role, and plan restriction.

## Navigation

### Public routes

```text
/
/pricing
/login
/join/:invitationToken
```

The landing page must show USD pricing. It should also state that joining a business is free for invited users.

The current working product name is **Nuvio**, with the proposed tagline:

> A clearer way to run business.

### Account and onboarding routes

```text
/onboarding/business
/onboarding/business/plan
/onboarding/business/checkout
/account
```

### Business routes

```text
/app/:businessId
/app/:businessId/sales
/app/:businessId/products
/app/:businessId/inventory
/app/:businessId/customers
/app/:businessId/team
/app/:businessId/branches
/app/:businessId/billing
```

## Application shell

The authenticated shell should expose two selectors:

```text
[Nana's Electronics ▼] [Accra Branch ▼]
```

### Business switcher

The business switcher lists active memberships for the current user. Switching business should refresh:

- Dashboard metrics.
- Navigation permissions.
- Branch selector options.
- Product and customer data.
- Billing settings visibility.

### Branch selector

The branch selector lists only branches from the current business that the user can access. The `All branches` option appears only when the context response says `canViewAllBranches: true`.

## Screen contracts

### Landing page

Must include:

- Product promise.
- Business and branch value proposition.
- USD pricing cards.
- Free-to-join explanation.
- Create-business entry point.
- Join-business entry point.

### Dashboard

Must include:

- Current business and branch context.
- Today's sales.
- Order count.
- Product count.
- Low-stock items.
- Recent activity.
- Currency grouping when more than one currency is present.

The dashboard must not display a combined revenue number across currencies unless a conversion policy is explicitly available.

### Products

Must include:

- Business product catalog.
- Product name and category.
- Price with currency.
- Inventory summary by permitted branch.
- Low-stock status.

### Inventory

Must include:

- Current branch.
- Product stock quantity.
- Low-stock threshold.
- Stock adjustment history or recent adjustment state.

### Sales

Must include:

- Branch context.
- Customer selection.
- Product and quantity selection.
- Explicit transaction currency.
- Sale confirmation.
- Inventory update result.

### Team

Must include:

- Active members.
- Pending invitations.
- Role.
- Assigned branches.
- Invite flow.
- Role and branch editing for authorized users.

### Billing

Must include:

- Current plan.
- USD price.
- Branch allowance and usage.
- Active-user allowance and usage.
- Upgrade path.
- Clear demo checkout label while real payments are disabled.

## Data-loading contract

On entering a business route, the frontend should load the business context before rendering privileged navigation or branch-scoped data.

The context response is the frontend's source for:

- Current membership role.
- Available permissions.
- Accessible branches.
- All-branches capability.

The URL may contain `businessId` and `branchId`, but the frontend should recover gracefully when either is invalid or inaccessible:

- Show an access error for a direct unauthorized URL.
- Do not silently switch to another business.
- Offer a valid business or branch selection when available.

## Required states

Every major screen should define:

- Loading state.
- Empty state.
- Permission-denied state.
- API error state.
- Plan-limit state where relevant.
- Success confirmation after a mutation.

## Creation and invitation UX

### Create-business flow

```text
Business details
  → First branch
  → USD plan selection
  → Demo checkout
  → Business dashboard
```

### Join-business flow

```text
Invitation link
  → Sign in or create individual account
  → Review business and branch assignment
  → Accept invitation
  → Business dashboard
```

The join flow must never ask the invitee to select a payment plan.
