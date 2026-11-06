# Monorepo-Estudo

A study project that sets up a monorepo by hand with [pnpm workspaces](https://pnpm.io/workspaces), without a build system such as Turborepo. ("Estudo" means "study" in Portuguese.)

Two React apps import the same `Button` component from a local package, so a change to the package reaches both apps.

## Structure

```text
apps/
  front1/       React + Vite app that uses the default Button
  front2/       React + Vite app that uses the yellow Button
packages/
  ui/           Shared component package (@my-project/ui)
```

Each app declares the package as a workspace dependency:

```json
"@my-project/ui": "workspace:*"
```

And imports it like any other package:

```tsx
import { Button } from "@my-project/ui";

<Button color="yellow">Click me</Button>
```

## Tech stack

- pnpm workspaces
- React 19 and TypeScript
- Vite

## Getting started

You need Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

`pnpm dev` starts both apps in parallel. Vite prints the local URL for each one in the terminal.

To build both apps:

```bash
pnpm -r build
```
