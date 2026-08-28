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

These prices are an initial proposal for the landing page. They should remain marked as draft until the product owner confirms them.

| Plan | Price | Included branches | Included active users | Intended customer |
|---|---:|---:|---:|---|
| Starter | $19/month | 1 | 5 | One-location small business |
| Growth | $59/month | 3 | 20 | Growing business with several locations |
| Scale | $149/month | 10 | 75 | Larger SME with distributed teams |

Suggested landing-page copy:

> Staff join businesses for free. Businesses pay in USD based on the branches and active users they manage.

### Proposed add-ons

- Additional branch: **$15/month**.
- Additional pack of 10 active users: **$10/month**.

These add-ons keep the relationship between price and business scale visible without charging staff individually for every action.

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
- Are the proposed prices appropriate for the target market?
- Should read-only users be excluded from active-user billing?
- Should the business be allowed to mix add-ons and plan upgrades?
- Should annual billing receive a discount?
- What happens to data and access after a failed payment?
- Do we want to charge for branches, active users, or both in the first real release?
