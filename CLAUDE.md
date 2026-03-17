# CLAUDE.md — realhaus-sdk

## Project Overview

**realhaus-sdk** is a TypeScript SDK for Realhaus Technologies Inc — a real estate rental management platform. It is a **pure type definitions library** (zero external runtime dependencies) exporting shared interfaces, enums, and constants used across Realhaus frontend and backend services.

- Current version: `2.0.0`
- Active branch for Stripe integration work: `dijis/stripe_updates`

## Repository Structure

```
src/
  index.ts          # Re-exports all public APIs — always update when adding new exports
  constants/        # Lookup tables and constant values
  enums/            # TypeScript enum definitions
  interfaces/       # TypeScript interface definitions
dist/               # Compiled output (generated, do not edit)
```

## Build & Scripts

```bash
npm run build    # Compile TypeScript → dist/ (runs tsc)
npm run prepare  # Runs build automatically before publish
```

**No test framework or linter configured.** VSCode is configured to use single quotes and format on save (see `.vscode/settings.json`).

## TypeScript Configuration

- **Target**: `es2016`, **Module**: `commonjs`
- **Strict mode**: enabled
- **Output**: `dist/` with `.d.ts` declaration files and source maps
- Root: `src/`, distributes both `src/` and `dist/`

## Code Conventions

### Naming
- Interfaces: `I` prefix — `IUser`, `ILease`, `IProperty`
- Types with embedded ID: `Id` prefix — `IdUser`, `IdProperty`, `IdPropertyListing`
- Enums: PascalCase with descriptive suffix — `PropertyTypeEnum`, `LeaseAgreementStatus`, `TransactionType`
- Constants: camelCase arrays or PascalCase objects — `provinces`, `Amenities`, `creditScoreRanges`

### Quote Style
- Use **single quotes** for all string literals — `'PAYPAL'`, `'draft'`, `'user.ts'`

### Patterns
- **Base entity**: `IEntity { id: string }` and `IDocument { id: string; createdAt: Timestamp; updatedAt: Timestamp }`
- **Composite types**: Use `&` intersections and `Omit<>` to compose derived types
- **Discriminated unions**: Enums as type discriminators in interfaces
- **No classes** — this is a pure type/interface library; do not add runtime logic unless necessary
- **Enums in interface files**: Some enums are defined directly in `interfaces/` files rather than `enums/` when tightly coupled to that domain (e.g. `IncomeType`, `ProofOfOccupationType`, `IdentityType` in `interfaces/user.ts`)

### Adding New Types
1. Create the file in `src/interfaces/` or `src/enums/` or `src/constants/` as appropriate
2. Export the new type from `src/index.ts`
3. Run `npm run build` to verify compilation

## Domain Overview

The SDK covers these core domains:

| Domain | Key Files |
|---|---|
| User/Profile | `interfaces/user.ts` |
| Property & Listings | `interfaces/property.ts` |
| Lease Agreements | `interfaces/lease.ts`, `interfaces/leaseAgreement.ts`, `enums/lease.ts`, `constants/lease.ts` |
| Rent Applications | `interfaces/rentApplication.ts`, `enums/rentApplication.ts` |
| Wallet & Transactions | `interfaces/wallet.ts`, `enums/wallet.ts` |
| Banking / Stripe PAD | `interfaces/bankAccount.ts`, `enums/bankAccount.ts` |
| Credit Reports | `interfaces/creditReport.ts`, `enums/creditScore.ts` |
| Identity Verification | `interfaces/identityVerification.ts`, `enums/identityVerification.ts` |
| Messaging | `interfaces/message.ts`, `interfaces/userGroups.ts` |
| Ratings & Reviews | `interfaces/rating.ts` |
| Appointments | `interfaces/appointment.ts`, `enums/appointment.ts` |
| Coupons | `interfaces/coupon.ts`, `enums/coupon.ts` |

## Important Notes

- **Canada-focused**: Province/region data covers Canadian provinces only (`constants/provinces.ts`)
- **Stripe integration**: Active work on `dijis/stripe_updates` branch — `IAutoDebitSetup`, `IPreAuthDebitMandateAgreement`, `IConfirmAutoDebitAgreementRequest/Response`, and `IAccountConnectionStatusResponse` are part of Stripe PAD (Pre-Authorized Debit) and connected account support
- **Bank vendors**: `Vendors` enum contains `PAYPAL` and `STRIPE` only — Flinks has been removed
- **Account connection state**: `IAccountConnectionStatusResponse.state` uses the `AccountConnectionState` enum (`enums/bankAccount.ts`) — do not use raw string literals
- **Tenant insurance**: `ILeasePolicy` includes `tenantInsuranceDoc?: IInsuranceDoc` (with `RentInsuranceStatus`) for tracking proof of insurance upload and review status
- **`ITransactionLogMeta`** retains its `[x: string]: any` index signature intentionally to allow arbitrary vendor/integration metadata; do not remove it
- **Rent application boolean fields**: `IRentApplicationForm.hasPets`, `hasVehicle`, `smokes` are `boolean` — not strings
- **Always run `npm run build`** after changes to confirm TypeScript compiles without errors before committing
