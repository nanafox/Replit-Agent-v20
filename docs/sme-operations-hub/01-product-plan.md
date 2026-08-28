# Product Plan

Status: **Draft for review**

## Product summary

The SME Operations Hub is a multi-tenant workspace for small and growing businesses to manage products, inventory, customers, sales, staff, and branches from one application.

The central product promise is:

> One person can use one account to work across multiple businesses, while every business keeps its own people, branches, operational data, and access rules separate.

## Target customer

The first demo should focus on a small retail business, such as an electronics shop, fashion retailer, or general store. The underlying product model should remain useful for other SMEs without trying to support every industry on day one.

## Users and responsibilities

### Individual user

The person has one global account. They may:

- Own one or more businesses.
- Work for multiple businesses.
- Have a different role in each business.
- Be assigned to different branches in each business.
- Switch between businesses without creating additional accounts.

### Business owner

The owner creates the business, chooses a plan, manages billing, creates branches, and controls team access.

### Business administrator

An administrator can manage business settings, branches, products, team members, and operational records according to the permissions assigned by the business.

### Branch manager

A manager works within their assigned branches and can manage day-to-day operations there.

### Staff member

Staff can perform permitted operational actions, such as recording sales, within their assigned branches.

## Core user journeys

### Create a business

1. User creates or signs into their individual account.
2. User selects **Create a business**.
3. User enters the business name and default operational currency.
4. User adds the first branch.
5. User chooses a USD subscription plan.
6. User completes the simulated checkout for the demo.
7. The business is provisioned and the user becomes its owner.

### Join a business

1. An owner or administrator invites a person by email.
2. The person signs in or creates an individual account.
3. The person accepts the invitation.
4. The business appears in their business switcher.
5. The person sees only the branches and actions assigned to them.

Joining a business never requires the invited person to pay.

### Switch businesses

1. The user opens the business switcher.
2. The switcher lists their active business memberships.
3. The user selects a business.
4. The dashboard, branch selector, navigation, and permissions update to that business context.

### Work across branches

1. The user selects a permitted branch or an all-branches view if their role allows it.
2. Branch-scoped records are filtered to that selection.
3. The user cannot select or access an unassigned branch.

### Record a sale

1. Staff selects a branch.
2. Staff selects products and quantities.
3. Staff selects or creates a customer.
4. Staff records the sale in an explicit operational currency.
5. Branch inventory decreases.
6. The dashboard and recent activity update.

## MVP scope

### Included

- Individual account and authentication boundary.
- Multiple business memberships per user.
- Business roles.
- Multiple branches per business.
- Branch assignments per membership.
- Business switcher.
- Branch selector.
- Products and product categories.
- Branch-specific inventory.
- Customers.
- Sales.
- Dashboard metrics.
- Team invitations.
- USD pricing page.
- Plan selection during business creation.
- Simulated checkout for the demo.

### Not included in the first build

- Real payment processing.
- Payroll.
- Full accounting.
- Tax filing.
- Supplier marketplace.
- Delivery logistics.
- Complex invoicing.
- Per-transaction billing.
- Cross-currency financial consolidation.
- User-specific billing when joining a business.

## Product principles

1. **Business is the billing owner.** Individual users do not pay to join.
2. **Membership is contextual.** A user's role is defined per business, not globally.
3. **Branch access is explicit.** A user sees only assigned branches unless their role grants business-wide access.
4. **Operational currency is explicit.** Every monetary amount records the currency it belongs to.
5. **Billing currency is fixed.** Subscription pricing and payment are always shown and processed in USD.
6. **The server is authoritative.** Frontend hiding is not a substitute for authorization.

## Open product decisions

- **Customer scope:** Should customers be visible across the whole business, or only in branches where they have activity?
- **Branch transfers:** Will inventory transfers between branches be part of the next version?
- **Business currency:** Should the business default currency be changeable after creation?
- **Trials:** Should real businesses receive a 14-day trial before payment is required?
- **Read-only users:** Should read-only users be excluded from active-user billing?
