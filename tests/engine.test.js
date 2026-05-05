import { describe, it, expect, beforeEach } from 'vitest';
import { CalculatorEngine } from '../src/engine';
describe('CalculatorEngine', () => {
    let engine;
    beforeEach(() => {
        engine = new CalculatorEngine();
    });
    it('should start with 0', () => {
        expect(engine.getDisplayValue()).toBe('0');
    });
    it('should append digits', () => {
        engine.appendDigit('1');
        engine.appendDigit('2');
        expect(engine.getDisplayValue()).toBe('12');
    });
    it('should handle decimal points', () => {
        engine.appendDigit('1');
        engine.appendDigit('.');
        engine.appendDigit('5');
        expect(engine.getDisplayValue()).toBe('1.5');
        engine.appendDigit('.');
        expect(engine.getDisplayValue()).toBe('1.5'); // Should not add multiple dots
    });
    it('should perform addition', () => {
        engine.appendDigit('5');
        engine.chooseOperation('+');
        engine.appendDigit('3');
        engine.compute();
        expect(engine.getDisplayValue()).toBe('8');
    });
    it('should perform subtraction', () => {
        engine.appendDigit('1');
        engine.appendDigit('0');
        engine.chooseOperation('-');
        engine.appendDigit('4');
        engine.compute();
        expect(engine.getDisplayValue()).toBe('6');
    });
    it('should perform multiplication', () => {
        engine.appendDigit('7');
        engine.chooseOperation('*');
        engine.appendDigit('6');
        engine.compute();
        expect(engine.getDisplayValue()).toBe('42');
    });
    it('should perform division', () => {
        engine.appendDigit('2');
        engine.appendDigit('0');
        engine.chooseOperation('/');
        engine.appendDigit('5');
        engine.compute();
        expect(engine.getDisplayValue()).toBe('4');
    });
    it('should handle division by zero', () => {
        engine.appendDigit('5');
        engine.chooseOperation('/');
        engine.appendDigit('0');
        engine.compute();
        expect(engine.getDisplayValue()).toBe('Error');
    });
    it('should toggle sign', () => {
        engine.appendDigit('5');
        engine.toggleSign();
        expect(engine.getDisplayValue()).toBe('-5');
        engine.toggleSign();
        expect(engine.getDisplayValue()).toBe('5');
    });
    it('should calculate percentage', () => {
        engine.appendDigit('5');
        engine.appendDigit('0');
        engine.percentage();
        expect(engine.getDisplayValue()).toBe('0.5');
    });
    it('should all clear', () => {
        engine.appendDigit('5');
        engine.chooseOperation('+');
        engine.appendDigit('5');
        engine.allClear();
        expect(engine.getDisplayValue()).toBe('0');
        expect(engine.getExpression()).toBe('');
    });
    it('should handle floating point precision', () => {
        engine.appendDigit('0');
        engine.appendDigit('.');
        engine.appendDigit('1');
        engine.chooseOperation('+');
        engine.appendDigit('0');
        engine.appendDigit('.');
        engine.appendDigit('2');
        engine.compute();
        expect(engine.getDisplayValue()).toBe('0.3');
    });
});
//# sourceMappingURL=engine.test.js.map