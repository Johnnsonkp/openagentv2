# Types Directory

This directory contains TypeScript type definitions used throughout the frontend application.

## Structure

- `index.ts` - Main type exports (centralized type definitions)

## Usage

Import types from the centralized location:

```typescript
import type { HealthCheckResponse, ApiResponse, ApiError } from './types';
// or with path alias:
import type { HealthCheckResponse } from '@/types';
```

## Best Practices

1. **Centralize common types** - Keep shared types in `index.ts`
2. **Feature-specific types** - Create separate files for large feature modules (e.g., `user.ts`, `auth.ts`)
3. **Use type imports** - Prefer `import type` for type-only imports
4. **Generic types** - Use generics for reusable response/request types
5. **Export organization** - Re-export all types from `index.ts` for convenience

## Example: Adding New Types

### For a new feature module:

```typescript
// types/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface UserCreateRequest {
  email: string;
  name: string;
  password: string;
}
```

Then re-export in `index.ts`:

```typescript
export * from './user';
```

### For component-specific types:

Keep them in the same file as the component if they're only used there, or add to this directory if shared.
