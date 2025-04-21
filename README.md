# Relume React Template

A clean template for building websites with Relume's React component library.

## Features

- React + TypeScript
- Vite for fast development
- Tailwind CSS with Relume preset
- ESLint for code quality
- Organized component structure

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
  ├── components/
  │   ├── sections/    # Page sections (headers, footers, etc.)
  │   └── elements/    # Reusable UI elements
  ├── App.tsx         # Main application component
  ├── main.tsx        # Application entry point
  └── index.css       # Global styles (Tailwind imports)
```

## Using Relume Components

1. Import components from `@relume_io/relume-ui`:
   ```tsx
   import { Button } from "@relume_io/relume-ui";
   ```

2. Use the components in your code:
   ```tsx
   <Button variant="primary">Click me</Button>
   ```

## Building for Production

```bash
npm run build
```

## License

MIT
