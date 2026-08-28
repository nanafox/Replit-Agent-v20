# SME Operations Hub

Status: **Draft for review**

This folder contains the working product and implementation plans for the multi-tenant SME Operations Hub. These documents are intentionally written as reviewable contracts rather than final specifications. Decisions that are not yet confirmed are marked as **Proposed** or **Open**.

## Current direction

- One global user account can belong to multiple businesses.
- A business can have multiple branches.
- A business membership carries the user's role for that business.
- A membership can be assigned to one or more branches.
- Business owners and invited staff use the product for free as individual users.
- The business owns the subscription and pays for its branches and active operational users.
- Subscription pricing and payment are always in **USD**.
- Business operational amounts can be entered in an explicit currency such as GHS, USD, NGN, or EUR.
- Tomorrow's payment step is a clearly labeled simulated checkout, not a real charge.

## Documents

1. [Product plan](./01-product-plan.md) — users, journeys, MVP scope, and product decisions.
2. [Backend contract](./02-backend-contract.md) — tenancy, membership, branch authorization, money, and API boundaries.
3. [Frontend contract](./03-frontend-contract.md) — routes, screens, context switching, permissions, and user flows.
4. [Pricing and billing](./04-pricing-and-billing.md) — USD plans, limits, add-ons, checkout, and future payment integration.
5. [Delivery plan](./05-delivery-plan.md) — proposed build sequence and demo acceptance checklist.

## How to review

When reviewing, focus on sections marked:

- **Proposed** — a recommendation that can be changed.
- **Open** — a decision that needs product input.
- **Agreed** — a direction already established in the discussion.
