/**
 * Mathematical engine for the calculator.
 * Handles state and arithmetic operations independently of the UI.
 */
export declare class CalculatorEngine {
    private currentOperand;
    private previousOperand;
    private operation;
    private shouldResetScreen;
    constructor();
    /**
     * Resets the entire state.
     */
    allClear(): void;
    /**
     * Resets the current operand only.
     */
    clear(): void;
    /**
     * Appends a digit or decimal point to the current operand.
     * @param digit - The digit or '.' to append.
     */
    appendDigit(digit: string): void;
    /**
     * Sets the operation to be performed.
     * @param operation - The operator (+, -, *, /).
     */
    chooseOperation(operation: string): void;
    /**
     * Performs the calculation based on the stored operands and operator.
     */
    compute(): void;
    /**
     * Toggles the sign of the current operand.
     */
    toggleSign(): void;
    /**
     * Converts the current operand to a percentage.
     */
    percentage(): void;
    /**
     * Gets the current value to display.
     */
    getDisplayValue(): string;
    /**
     * Gets the full expression for historical context or secondary display.
     */
    getExpression(): string;
}
//# sourceMappingURL=engine.d.ts.map