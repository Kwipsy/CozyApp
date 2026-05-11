# Frontend Project Structure

This Next.js application follows a clean, scalable folder structure to maintain code organization and separation of concerns.

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── CharacterList.tsx  # Character list component
│   ├── ErrorMessage.tsx   # Error display component
│   ├── Loading.tsx        # Loading spinner component
│   └── index.ts           # Component exports
├── lib/                   # Utility functions and services
│   └── api.ts             # API service functions
├── types/                 # TypeScript type definitions
│   ├── character.ts       # Character-related types
│   └── index.ts           # Type exports
├── hooks/                 # Custom React hooks (for future use)
├── constants/             # Configuration constants
│   └── config.ts          # API configuration
└── ...
```

## Key Principles

### 1. **Separation of Concerns**
- **Components**: Pure UI components focused on presentation
- **Lib**: Business logic, API calls, utilities
- **Types**: Type definitions and interfaces
- **Constants**: Configuration and static values

### 2. **Scalability**
- Feature-based organization ready for growth
- Index files for clean imports
- Modular architecture

### 3. **Maintainability**
- TypeScript for type safety
- Consistent naming conventions
- Error boundaries and loading states

## Usage Examples

### Importing Components
```typescript
import { CharacterList, ErrorMessage } from '@/components';
```

### Using API Services
```typescript
import { fetchCharacters } from '@/lib/api';
```

### Type Definitions
```typescript
import type { Character } from '@/types';
```

## Future Enhancements

As the application grows, consider adding:

- `features/` directory for feature-based organization
- `utils/` for additional utility functions
- `hooks/` for custom React hooks
- `stores/` for state management (Zustand, Redux, etc.)
- `styles/` for component-specific styles

## Development

- Use `npm run dev` for development
- Use `npm run build` for production builds
- Use `npm run lint` for code linting