# Nuvio Pricing and Billing

Status: **Proposed for review**

## Currency policy

The platform has two separate currency concepts:

### Operational currency

The business may enter prices, sales, inventory values, and other operating amounts in the currency that applies to that transaction. Examples include GHS, USD, NGN, or EUR.

Each amount must retain its currency. The app should show the currency next to the amount and avoid combining amounts from different currencies without a conversion rule.

### Billing currency

All subscription plans, add-ons, invoices, and payment-provider amounts are displayed and charged in **USD**.

The business's operational currency does not change its subscription price.

## Draft public pricing

These prices are an initial, more accessible proposal for the landing page. They should remain marked as draft until the product owner confirms them.

The model uses a modest base subscription plus small individual add-ons. There are no 10-user bundles: if a business needs one additional user, it pays for one additional user.

| Plan | Base price | Included branches | Included active users | Extra branch | Extra active user | Intended customer |
|---|---:|---:|---:|---:|---:|---|
| Starter | $9/month | 1 | 3 | $6/month | $1.50/month | One-location small business |
| Growth | $29/month | 3 | 10 | $5/month | $1.25/month | Growing business with several locations |
| Scale | $79/month | 10 | 30 | $4/month | $1.00/month | Larger SME with distributed teams |

## Plan comparison

The landing page should show what each plan actually includes rather than presenting only different limits.

| Capability | Starter | Growth | Scale |
|---|---|---|---|
| Monthly base price | $9 | $29 | $79 |
| Included branches | 1 | 3 | 10 |
| Included active users | 3 | 10 | 30 |
| Additional active users | $1.50 each/month | $1.25 each/month | $1.00 each/month |
| Additional branches | $6 each/month | $5 each/month | $4 each/month |
| Product catalog | Yes | Yes | Yes |
| Branch inventory | Yes | Yes | Yes |
| Customers and sales | Yes | Yes | Yes |
| Business roles and branch assignments | Yes | Yes | Yes |
| Operational currencies | Yes | Yes | Yes |
| Basic dashboard | Yes | Yes | Yes |
| Multi-branch dashboard | No | Yes | Yes |
| Low-stock alerts | Basic | Yes | Yes |
| CSV exports | No | Yes | Yes |
| Activity history | 30 days | 12 months | Full history |
| Advanced reports | No | Basic | Yes |
| Priority support | No | No | Yes |

All plans support the core operating workflow. Higher plans primarily add scale, multi-branch visibility, reporting, history, and support.

Suggested landing-page copy:

> Staff join businesses for free. Businesses pay in USD based on the branches and active users they manage.

### Proposed add-ons

- Additional branch: charged individually at the rate shown for the selected plan.
- Additional active user: charged individually at the rate shown for the selected plan.

These add-ons keep the relationship between price and business scale visible without charging staff individually for every action or forcing a business to buy users in large bundles.

## Monthly billing formula

```text
monthly total =
  plan base price
  + max(0, active branches - included branches) × branch add-on rate
  + max(0, active users - included users) × user add-on rate
```

Example:

```text
Growth plan
3 active branches
12 active users

$29 base
+ 0 extra branches
+ 2 extra users × $1.25
= $31.50/month
```

The business is billed for each unique active user once. A user assigned to three branches still counts as one active user for that business.

## Usage definitions

### Active user

An active user is a non-suspended member with access to the business. A user assigned to multiple branches counts once for that business, not once per branch.

The same individual can count once in Business A and once in Business B because each business owns a separate subscription.

Pending invitations do not count until accepted.

### Branch

A branch is an active operational location belonging to the business. Archived branches should not count toward the current limit, but their historical data must remain available according to retention rules.

## Plan enforcement

The backend should enforce limits at the business level:

- A business cannot activate a branch beyond its allowance without an upgrade or add-on.
- A business cannot activate a user beyond its allowance without an upgrade or add-on.
- Existing data should remain readable if a subscription becomes past due, subject to the eventual collections policy.
- A pending invitation should not be rejected solely because it is pending, but acceptance should check the active-user limit.

The frontend should show:

- Current usage.
- Plan allowance.
- Current estimated monthly total.
- Per-user and per-branch add-on rates.
- Remaining capacity.
- An upgrade prompt when a limit is reached.

## Business creation checkout

The production-shaped flow is:

```text
Business details
  → Choose USD plan
  → Review plan and limits
  → Checkout
  → Subscription active
  → Business provisioned
```

For tomorrow's demo:

```text
Business details
  → Choose USD plan
  → Review plan and limits
  → Demo checkout
  → Subscription marked active
  → Business provisioned
```

The checkout screen must explicitly say:

> Demo checkout — no real payment will be processed.

## Subscription contract

```text
Subscription
- business_id
- plan_id
- status: trialing | active | past_due | canceled
- billing_currency: USD
- branch_limit
- active_user_limit
- current_period_start
- current_period_end
```

Plan limits should be persisted on the subscription or resolved from a versioned plan record so that future pricing changes do not unexpectedly change an existing subscription.

## Future payment-provider boundary

The application should expose a provider-neutral billing interface:

```text
createCheckoutSession(businessId, planId)
handleCheckoutCompletion(providerEvent)
getSubscriptionStatus(businessId)
```

Tomorrow's implementation can use a demo provider. A real provider can later replace that adapter and confirm activation through a webhook without changing the business onboarding experience.

## Open pricing questions

- Should there be a free business plan, or only a trial?
- Are the proposed USD prices appropriate for the target market?
- Should read-only users be excluded from active-user billing?
- Should businesses be allowed to mix add-ons and plan upgrades?
- Should annual billing receive a discount?
- What happens to data and access after a failed payment?
- Are the proposed feature differences between Starter, Growth, and Scale meaningful enough?
