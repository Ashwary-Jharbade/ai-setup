---
name: test-generator
description: Expert in designing and implementing comprehensive test suites, focusing on unit tests for core logic, integration tests for component interaction, and end-to-end verification. Use this skill to ensure reliability and prevent regressions.
---

# Test Generator Skill

This skill enables Gemini CLI to build and maintain a robust test suite for the ai-setup project.

## 🚀 Workflow

### 1. Test Strategy Identification
- Determine the appropriate level of testing (Unit, Integration, E2E) for the task.
- Identify core mathematical logic that requires exhaustive unit testing.

### 2. Unit Testing (Core Logic)
- Create isolated tests for calculator operations (add, subtract, multiply, divide, etc.).
- Ensure edge cases (large numbers, precision issues, invalid operators) are covered.

### 3. Integration & UI Testing
- Test the interaction between the UI (DOM events) and the calculator engine.
- Verify that user inputs correctly trigger calculations and update the display.

### 4. Regression Testing
- Add new test cases when bugs are fixed to prevent them from reappearing.
- Ensure all existing tests pass before finalizing any changes.

## 📋 Testing Standards

- **Isolation**: Unit tests should not depend on external systems or the DOM unless necessary.
- **Readability**: Test cases should clearly describe the behavior being verified.
- **Coverage**: Aim for high coverage of the mathematical engine.
- **Automation**: Tests should be easy to run via CLI commands.

## 🛠️ Tasks

- **Generate Unit Tests**: For new mathematical functions.
- **UI Interaction Tests**: For new button behaviors or display modes.
- **Fix Failing Tests**: Investigate and resolve test failures.
