# AGENTS.md

## Cursor Cloud specific instructions

This is a React SPA (Create React App) with no backend services. All computation is client-side.

### Running the application

- `npm start` — starts Webpack dev server on port 3000
- `npm run build` — production build (no source maps)
- `npm test` — Jest tests in watch mode; use `CI=true npm test -- --watchAll=false` for non-interactive runs

### Linting

- ESLint is configured via `react-scripts` (extends `react-app` and `react-app/jest`)
- Run: `npx eslint src/ --ext .ts,.tsx`
- Prettier is configured (`.prettierrc`) but has no script in package.json; run with `npx prettier --check src/`

### Tech stack summary

- React 18, TypeScript 4.9, Material UI 5, i18next
### Known issues

- Some integration tests (`CalculatorManiany.spec.tsx`, `CalculatorContainer.spec.tsx`) fail due to i18n label mismatches — the app renders English keys but tests assert Polish strings. This is a pre-existing issue in the repository.

### Tech stack summary

- React 18, TypeScript 4.9, Material UI 5, i18next, react-router-dom 6
- Package manager: npm (lockfile: `package-lock.json`)
- Node.js 18+ required
