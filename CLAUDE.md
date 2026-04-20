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

## Goal
This codebase should be readable and maintainable by a developer who has never used AI assistance. Prioritize clarity over brevity at every level.
