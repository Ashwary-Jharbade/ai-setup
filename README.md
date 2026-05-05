# 🧮 Modern Web Calculator

A professional, responsive, and robust web-based calculator built with TypeScript and Vanilla CSS. It features a strict separation between mathematical logic and UI interaction.

## 🚀 Features

- **Standard Operations**: Addition, Subtraction, Multiplication, Division.
- **Advanced Features**: Square Root (√), Percentage, Sign Toggle (+/-), Decimal support.
- **Precision**: Handles floating-point arithmetic precision (e.g., 0.1 + 0.2 = 0.3).
- **Clear Logic**: Clear (C) and All Clear (AC) functionality.
- **Responsive Design**: Modern dark theme that works on mobile and desktop.
- **Tested Engine**: Unit tests ensure mathematical accuracy.

## 🏗️ Architecture

The project follows a clean architecture:
- `src/engine.ts`: Contains the `CalculatorEngine` class which manages the state and logic.
- `src/app.ts`: Contains the `CalculatorUI` class which handles DOM manipulation and user events.
- `src/style.css`: Vanilla CSS for a modern, framework-free UI.

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (installed with Node.js)

### Installation & Build

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-setup.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project (compiles TypeScript):
   ```bash
   npm run build
   ```
4. Open `index.html` in your browser.

### Running Tests

To verify the mathematical engine, run:
```bash
npm test
```

## 🛠️ Built With

- **TypeScript**: For typed and reliable logic.
- **Vanilla CSS**: For high-performance, responsive styling.
- **Vitest**: For fast and reliable unit testing.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
