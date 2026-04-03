---
title: "Elysia: Type-Safe APIs"
summary: "A deep dive into Elysia, the ergonomic web framework for Bun with end-to-end type safety and exceptional performance."
date: "2024-03-25"
tags: [elysia, bun, api, typescript]
type: project
---

# Elysia: Type-Safe APIs

When it comes to building APIs with Bun, Elysia stands out as the go-to framework. Let's explore why.

## Why Elysia?

Elysia combines:

- **End-to-end type safety** with Eden
- **Exceptional performance** leveraging Bun
- **Ergonomic API** that feels natural

## Basic Example

```typescript
import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/user/:id", ({ params }) => {
    return { id: params.id };
  })
  .post("/user", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
    }),
  })
  .listen(3000);
```

## Type Safety with Eden

The magic happens when you use Eden on the client:

```typescript
import { treaty } from "@elysiajs/eden";
import type { App } from "./server";

const client = treaty<App>("localhost:3000");

// Fully typed!
const { data } = await client.user({ id: "123" }).get();
```

## Integration with Next.js

Elysia works seamlessly with Next.js App Router:

```typescript
// app/api/[[...slugs]]/route.ts
import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .get("/hello", () => "world");

export const GET = app.handle;
export const POST = app.handle;
```

## Conclusion

If you're building with Bun, Elysia should be at the top of your list for API development. The DX is unmatched.
