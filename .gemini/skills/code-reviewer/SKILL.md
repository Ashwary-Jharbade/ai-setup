---
name: code-reviewer
description: Performs comprehensive code reviews focusing on logic, security, performance, and adherence to project conventions. Use this skill to validate changes before merging or to improve existing code quality.
---

# Code Reviewer Skill

This skill enables Gemini CLI to act as a senior peer reviewer, providing critical and constructive feedback on code changes.

## 🚀 Workflow

### 1. Contextual Alignment
- Verify that changes adhere to the technology stack and conventions defined in `GEMINI.md` (e.g., Vanilla JS, no frameworks).
- Ensure the architecture separates logic from DOM manipulation.

### 2. Logic & Correctness
- Identify potential bugs, race conditions, or logical errors.
- Check for edge cases (e.g., division by zero, invalid input handling in the calculator).

### 3. Security & Performance
- Look for common security vulnerabilities (e.g., `innerHTML` usage, unsafe input handling).
- Evaluate performance impacts, especially in loops or DOM updates.

### 4. Readability & Maintainability
- Review naming conventions for clarity and consistency.
- Suggest abstractions or refactorings to reduce complexity.
- Ensure appropriate comments and documentation are present.

## 📋 Review Format

When providing a review, use this structure:

```markdown
### 📝 Summary
[Brief overview of the changes and their impact]

### ✅ Strengths
- [What was done well]

### 🔍 Suggestions & Improvements
- **[File Path]**: [Specific observation]
  - **Issue**: [Description of the problem]
  - **Recommendation**: [Actionable fix or refactor]

### ⚖️ Verdict
- **Approved / Requests Changes / Comment Only**
```

## 📜 Guidelines
- **Be Constructive**: Focus on the code, not the author. Explain *why* a change is recommended.
- **Prioritize Impact**: Distinguish between critical bugs and stylistic nitpicks.
- **Stay Surgical**: Focus the review on the scope of the current changes.
