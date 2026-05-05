# Project Instructions (GEMINI.md)

This file provides foundational context and instructions for AI interactions within the `ai-setup` workspace.

## 🚀 Project Overview

The project is a **Web-based Calculator** with a robust mathematical engine and a modern UI.

- **Status:** Development/Active Phase.
- **Goal:** Maintain a high-quality, tested calculator application.

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3 (Vanilla), TypeScript.
- **Testing:** Vitest.
- **Build System:** TypeScript (tsc).

## 🚦 Development Workflow

### Building and Running
- **Build**: `npm run build` - Compiles TypeScript files from `src/` to `dist/`.
- **Test**: `npm test` - Runs unit tests for the mathematical logic in `tests/`.
- **Run**: Open `index.html` in any modern web browser.

### Development Guidelines
- **Mathematical Engine**: Always keep `src/engine.ts` independent of the DOM.
- **UI Logic**: Handle all DOM interactions in `src/app.ts`.
- **Styling**: Use responsive Vanilla CSS in `src/style.css`.
- **Testing**: New mathematical features must have corresponding tests in `tests/engine.test.ts`.

## 📜 Conventions & Guidelines

- **Style:** Mobile-first, responsive design with dark mode preference.
- **Code:** Strict TypeScript with documented classes and methods (JSDoc).
- **Architecture**: Strict separation between UI and Logic layers.

---

*This file should be updated as the project structure evolves and specific technologies or tools are adopted.*
