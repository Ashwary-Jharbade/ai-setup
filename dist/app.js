import { CalculatorEngine } from './engine.js';
/**
 * UI Controller for the Calculator.
 * Connects DOM elements to the CalculatorEngine.
 */
class CalculatorUI {
    constructor(currentOperandTextElement, previousOperandTextElement) {
        this.engine = new CalculatorEngine();
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.updateDisplay();
    }
    /**
     * Updates the UI based on the current state of the engine.
     */
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.engine.getDisplayValue();
        this.previousOperandTextElement.innerText = this.engine.getExpression();
    }
    /**
     * Handles number button clicks.
     */
    handleNumber(number) {
        this.engine.appendDigit(number);
        this.updateDisplay();
    }
    /**
     * Handles operation button clicks.
     */
    handleOperation(operation) {
        this.engine.chooseOperation(operation);
        this.updateDisplay();
    }
    /**
     * Handles equals button click.
     */
    handleEquals() {
        this.engine.compute();
        this.updateDisplay();
    }
    /**
     * Handles all clear button click.
     */
    handleAllClear() {
        this.engine.allClear();
        this.updateDisplay();
    }
    /**
     * Handles clear button click.
     */
    handleClear() {
        this.engine.clear();
        this.updateDisplay();
    }
    /**
     * Handles sign toggle button click.
     */
    handleToggleSign() {
        this.engine.toggleSign();
        this.updateDisplay();
    }
    /**
     * Handles percentage button click.
     */
    handlePercentage() {
        this.engine.percentage();
        this.updateDisplay();
    }
    /**
     * Handles square root button click.
     */
    handleSqrt() {
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
    const previousOperandTextElement = document.querySelector('[data-previous-operand]');
    const currentOperandTextElement = document.querySelector('[data-current-operand]');
    if (!currentOperandTextElement || !previousOperandTextElement)
        return;
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
    equalsButton === null || equalsButton === void 0 ? void 0 : equalsButton.addEventListener('click', () => {
        calculatorUI.handleEquals();
    });
    allClearButton === null || allClearButton === void 0 ? void 0 : allClearButton.addEventListener('click', () => {
        calculatorUI.handleAllClear();
    });
    clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', () => {
        calculatorUI.handleClear();
    });
    toggleSignButton === null || toggleSignButton === void 0 ? void 0 : toggleSignButton.addEventListener('click', () => {
        calculatorUI.handleToggleSign();
    });
    percentageButton === null || percentageButton === void 0 ? void 0 : percentageButton.addEventListener('click', () => {
        calculatorUI.handlePercentage();
    });
    sqrtButton === null || sqrtButton === void 0 ? void 0 : sqrtButton.addEventListener('click', () => {
        calculatorUI.handleSqrt();
    });
});
