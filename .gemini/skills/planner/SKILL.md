---
name: planner
description: Analyzes user requirements and generates a comprehensive, step-by-step execution plan. Use this skill when starting a new feature, a complex refactor, or a multi-step bug fix to ensure a structured and verified implementation.
---

# Planner Skill

This skill helps Gemini CLI act as a senior technical lead by analyzing requirements and drafting robust execution plans.

## 🚀 Workflow

### 1. Requirements Analysis
- Deconstruct the user's request into core functional and non-functional requirements.
- Identify the scope of the change and potential impact on existing features.
- Ask clarifying questions if the requirements are ambiguous.

### 2. Contextual Research
- Search the codebase for relevant files, functions, and patterns.
- Identify dependencies and constraints (e.g., following the HTML/CSS/JS stack defined in GEMINI.md).
- For bug fixes, prioritize empirical reproduction before planning the fix.

### 3. Technical Strategy
- Define the high-level architecture for the change.
- Select appropriate design patterns (e.g., separating logic from DOM manipulation).
- Ensure the strategy aligns with project-specific instructions in `GEMINI.md`.

### 4. Step-by-Step Execution Plan
Create a detailed plan using the following structure:
- **Phase 1: Setup/Preparation** (e.g., creating new files, installing dependencies).
- **Phase 2: Core Implementation** (broken down into surgical, verifiable steps).
- **Phase 3: Testing & Validation** (defining specific test cases and manual verification steps).
- **Phase 4: Cleanup & Documentation** (linting, updating README, etc.).

## 📋 Plan Template

When generating a plan, aim for this format:

```markdown
### 🎯 Objective
[Clear statement of what is being achieved]

### 🏗️ Technical Strategy
- [Point 1]
- [Point 2]

### 📝 Step-by-Step Plan
1. **Step Name**: [Actionable instruction]
   - **Validation**: [How to verify this step]
2. ...

### 🧪 Verification Strategy
- [Test Case 1]
- [Test Case 2]
```

## 📜 Guidelines
- **Surgical Changes**: Plans should favor small, incremental updates over large, monolithic changes.
- **Validation-First**: Every implementation step must have a corresponding validation check.
- **Constraint Adherence**: Always respect the technology stack and conventions defined in the workspace's `GEMINI.md`.
