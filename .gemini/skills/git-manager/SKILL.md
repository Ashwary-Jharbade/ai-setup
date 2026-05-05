---
name: git-manager
description: Expert in source control management, focusing on staging changes, crafting semantic commit messages, and managing project history. Use this skill to safely and professionally commit your work.
---

# Git Manager Skill

This skill enables Gemini CLI to handle source control tasks with precision and clarity.

## 🚀 Workflow

### 1. Change Review
- Run \`git status\` and \`git diff\` to identify all changes.
- Categorize changes (e.g., features, bug fixes, refactoring, documentation).
- Ensure no sensitive information (secrets, .env files) is being staged.

### 2. Selective Staging
- Use \`git add <file>\` or \`git add .\` to stage files related to a single logical change.
- Avoid "mega-commits" by grouping related changes together.

### 3. Commit Message Crafting
- Propose a semantic commit message following the format: \`type(scope): subject\`
  - Types: \`feat\`, \`fix\`, \`docs\`, \`style\`, \`refactor\`, \`test\`, \`chore\`.
  - Subject: Imperative mood, no period at the end.
- Include a body for complex changes to explain the *why*.

### 4. Verification & Commit
- Run one final \`git status\` to confirm the staged set.
- Execute the commit via \`git commit -m "message"\` and confirm success.

## 📋 Standards

- **Atomic Commits**: Each commit should represent a single, complete logical unit of work.
- **Clarity**: Messages must be descriptive enough for a teammate to understand the change without reading the code.
- **Safety**: Never stage build artifacts (\`dist/\`, \`node_modules/\`) or sensitive configuration.

## 🛠️ Tasks

- **Stage and Commit**: The primary task for wrapping up a feature or fix. Use \`git add\` followed by \`git commit\`.
- **Review History**: Check \`git log -n 5 --oneline\` to ensure consistent messaging style.
- **Fix Commit Mistakes**: Use \`git commit --amend\` for simple typo fixes in the last commit.
