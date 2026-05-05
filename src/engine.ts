/**
 * Mathematical engine for the calculator.
 * Handles state and arithmetic operations independently of the UI.
 */
export class CalculatorEngine {
  private currentOperand: string = '0';
  private previousOperand: string = '';
  private operation: string | undefined;
  private shouldResetScreen: boolean = false;

  constructor() {
    this.allClear();
  }

  /**
   * Resets the entire state.
   */
  allClear(): void {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.shouldResetScreen = false;
  }

  /**
   * Resets the current operand only.
   */
  clear(): void {
    this.currentOperand = '0';
  }

  /**
   * Appends a digit or decimal point to the current operand.
   * @param digit - The digit or '.' to append.
   */
  appendDigit(digit: string): void {
    if (this.shouldResetScreen) {
      this.currentOperand = '';
      this.shouldResetScreen = false;
    }

    if (digit === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand === '0' && digit !== '.') {
      this.currentOperand = digit;
    } else {
      this.currentOperand = this.currentOperand + digit;
    }
  }

  /**
   * Sets the operation to be performed.
   * @param operation - The operator (+, -, *, /).
   */
  chooseOperation(operation: string): void {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.shouldResetScreen = true;
  }

  /**
   * Performs the calculation based on the stored operands and operator.
   */
  compute(): void {
    let computation: number;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        if (current === 0) {
          this.currentOperand = 'Error';
          this.operation = undefined;
          this.previousOperand = '';
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }

    // Handle floating point precision issues
    this.currentOperand = parseFloat(computation.toFixed(10)).toString();
    this.operation = undefined;
    this.previousOperand = '';
  }

  /**
   * Toggles the sign of the current operand.
   */
  toggleSign(): void {
    if (this.currentOperand === '0' || this.currentOperand === 'Error') return;
    if (this.currentOperand.startsWith('-')) {
      this.currentOperand = this.currentOperand.slice(1);
    } else {
      this.currentOperand = '-' + this.currentOperand;
    }
  }

  /**
   * Converts the current operand to a percentage.
   */
  percentage(): void {
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return;
    this.currentOperand = (current / 100).toString();
  }

  /**
   * Gets the current value to display.
   */
  getDisplayValue(): string {
    return this.currentOperand;
  }

  /**
   * Gets the full expression for historical context or secondary display.
   */
  getExpression(): string {
    if (this.operation) {
      return `${this.previousOperand} ${this.operation}`;
    }
    return '';
  }
}
