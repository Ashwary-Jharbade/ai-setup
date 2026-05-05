import { CalculatorEngine } from './engine.js';

/**
 * UI Controller for the Calculator.
 * Connects DOM elements to the CalculatorEngine.
 */
class CalculatorUI {
  private engine: CalculatorEngine;
  private currentOperandTextElement: HTMLElement;
  private previousOperandTextElement: HTMLElement;

  constructor(
    currentOperandTextElement: HTMLElement,
    previousOperandTextElement: HTMLElement
  ) {
    this.engine = new CalculatorEngine();
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
    this.updateDisplay();
  }

  /**
   * Updates the UI based on the current state of the engine.
   */
  updateDisplay(): void {
    this.currentOperandTextElement.innerText = this.engine.getDisplayValue();
    this.previousOperandTextElement.innerText = this.engine.getExpression();
  }

  /**
   * Handles number button clicks.
   */
  handleNumber(number: string): void {
    this.engine.appendDigit(number);
    this.updateDisplay();
  }

  /**
   * Handles operation button clicks.
   */
  handleOperation(operation: string): void {
    this.engine.chooseOperation(operation);
    this.updateDisplay();
  }

  /**
   * Handles equals button click.
   */
  handleEquals(): void {
    this.engine.compute();
    this.updateDisplay();
  }

  /**
   * Handles all clear button click.
   */
  handleAllClear(): void {
    this.engine.allClear();
    this.updateDisplay();
  }

  /**
   * Handles clear button click.
   */
  handleClear(): void {
    this.engine.clear();
    this.updateDisplay();
  }

  /**
   * Handles sign toggle button click.
   */
  handleToggleSign(): void {
    this.engine.toggleSign();
    this.updateDisplay();
  }

  /**
   * Handles percentage button click.
   */
  handlePercentage(): void {
    this.engine.percentage();
    this.updateDisplay();
  }

  /**
   * Handles square root button click.
   */
  handleSqrt(): void {
    this.engine.sqrt();
    this.updateDisplay();
  }
}

// Initialize the UI when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const numberButtons = document.querySelectorAll('[data-number]');
  const operationButtons = document.querySelectorAll('[data-operation]');
  const equalsButton = document.querySelector('[data-equals]');
  const allClearButton = document.querySelector('[data-all-clear]');
  const clearButton = document.querySelector('[data-clear]');
  const toggleSignButton = document.querySelector('[data-toggle-sign]');
  const percentageButton = document.querySelector('[data-percentage]');
  const sqrtButton = document.querySelector('[data-sqrt]');
  const previousOperandTextElement = document.querySelector('[data-previous-operand]') as HTMLElement;
  const currentOperandTextElement = document.querySelector('[data-current-operand]') as HTMLElement;

  if (!currentOperandTextElement || !previousOperandTextElement) return;

  const calculatorUI = new CalculatorUI(currentOperandTextElement, previousOperandTextElement);

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculatorUI.handleNumber(button.innerHTML);
    });
  });

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculatorUI.handleOperation(button.innerHTML);
    });
  });

  equalsButton?.addEventListener('click', () => {
    calculatorUI.handleEquals();
  });

  allClearButton?.addEventListener('click', () => {
    calculatorUI.handleAllClear();
  });

  clearButton?.addEventListener('click', () => {
    calculatorUI.handleClear();
  });

  toggleSignButton?.addEventListener('click', () => {
    calculatorUI.handleToggleSign();
  });

  percentageButton?.addEventListener('click', () => {
    calculatorUI.handlePercentage();
  });

  sqrtButton?.addEventListener('click', () => {
    calculatorUI.handleSqrt();
  });
});
