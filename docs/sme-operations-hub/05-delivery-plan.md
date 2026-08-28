# Delivery Plan

Status: **Proposed for review**

## Build sequence

The work should follow the contract-first approach used in the session:

### Phase 1: Contract and tenancy foundation

- Confirm the product, pricing, and access decisions in these documents.
- Define the OpenAPI contract.
- Define the user, business, membership, branch, assignment, and subscription models.
- Implement business membership and branch authorization.
- Add representative data for two businesses and multiple branches.

### Phase 2: Core operations

- Build products and categories.
- Build branch-specific inventory.
- Build customers.
- Build sales and inventory decrement.
- Build dashboard metrics.

### Phase 3: Frontend workspace

- Build the landing page and USD pricing cards.
- Build account and business onboarding.
- Build business switcher.
- Build branch selector.
- Build dashboard, products, inventory, sales, customers, and team screens.
- Add permission-aware navigation and actions.

### Phase 4: Demo billing

- Add plan selection.
- Add demo checkout.
- Activate the business after demo completion.
- Persist the selected plan and limits.
- Show usage and upgrade prompts.

### Phase 5: Hardening

- Test cross-business isolation.
- Test cross-branch isolation.
- Test different roles across different businesses.
- Test one user assigned to multiple branches.
- Test one user belonging to multiple businesses.
- Test plan limits.
- Test mixed operational currencies.

### Phase 6: Real billing later

- Select a payment provider.
- Replace the demo checkout adapter.
- Add provider checkout and webhooks.
- Add subscription lifecycle handling.
- Add invoices, payment history, and failed-payment behavior.

## Suggested parallel workstreams

### Contract and backend

Owns the OpenAPI contract, database models, authorization rules, plan limits, and operational APIs.

### Frontend

Owns the landing page, onboarding, business and branch context, operational screens, and permission-aware UX.

### Billing

Owns the plan catalog, USD pricing presentation, demo checkout adapter, and subscription state.

### QA and reconciliation

Owns cross-tenant tests, cross-branch tests, role checks, currency checks, and the final integrated demo flow.

## Tomorrow's demo acceptance checklist

- [ ] Landing page shows the proposed plans in USD.
- [ ] Landing page states that joining a business is free.
- [ ] A user can create one individual account.
- [ ] The user can create a business and select a plan.
- [ ] The checkout is clearly labeled as simulated.
- [ ] The business owner can create multiple branches.
- [ ] The owner can invite another user.
- [ ] The invited user can join without paying.
- [ ] The invited user can be assigned to selected branches.
- [ ] One user can belong to two businesses.
- [ ] The user can switch businesses without logging out.
- [ ] The dashboard changes when the active business changes.
- [ ] Branch-scoped data is hidden from unauthorized branches.
- [ ] A sale updates inventory in the selected branch.
- [ ] Operational amounts show their entered currency.
- [ ] Subscription prices remain in USD.

## Demo seed scenario

### Business A: Nana's Electronics

- Branches: Accra and Tema.
- User role: Manager.
- Branch access: Accra and Tema.
- Products: phones, chargers, and accessories.

### Business B: Accra Fashion House

- Branches: Accra.
- User role: Staff.
- Branch access: Accra only.
- Products: clothing and accessories.

The same individual account should be able to switch between these businesses and receive different roles, branch access, dashboards, products, and actions.
