@AGENTS.md

# Code Style

## Naming
- Function and variable names must describe what they do or hold — a reader should understand purpose without reading the body. Prefer `fetchProductBySlug` over `getProduct`, `isOutOfStock` over `check`.
- Avoid abbreviations unless universally understood (e.g. `url`, `id`).
- Boolean variables and functions should read as a question: `isLoading`, `hasItemsInCart`, `canAddToCart`.

## Readability
- Keep functions small and single-purpose. If a function does two things, split it.
- Prefer explicit over clever. A longer, obvious expression beats a short, tricky one.
- No magic numbers or strings — assign them to a named constant that explains what they represent.

## Comments
- Only comment the *why*, never the *what*. If the code needs a comment to explain what it does, rename or restructure it instead.
- A short comment is acceptable for non-obvious business rules (e.g. prices stored in bani/cents) or external constraints.

## Structure
- One concept per file. Components, context, utilities, and types each live in their own file.
- Export only what other modules need — keep internals unexported.

## Language
- All file and folder names must be in English (e.g. `about/`, `collections/`, `cart-item.tsx`).
- UI-facing text and content should be in Romanian.

## Components
- Extract a component when the same UI pattern appears in more than one place, or when a `map` callback becomes too long to read at a glance.
- Only add `'use client'` when the component needs `useState`, `useEffect`, event handlers, or browser APIs. If it just renders and navigates, keep it a server component.

## Data fetching
- All Supabase queries happen in server components. Client components receive data as props or read from context — they never query Supabase directly.
- Filter, search, and sort state belongs in URL search params, not in component state. This keeps URLs shareable and lets server components do the filtering.

## Supabase types
- Always derive enum types from `Database['public']['Enums']['name']` — never redefine them manually.
- The `Constants` object in `types/supabase.ts` holds the runtime enum values when you need to iterate over them.
- When the DB schema changes: run `npx supabase gen types typescript --project-id qlsgznygjkcxzvciyhyv > types/supabase.ts`, then update `types/product.ts` to match.

## Goal
This codebase should be readable and maintainable by a developer who has never used AI assistance. Prioritize clarity over brevity at every level.
