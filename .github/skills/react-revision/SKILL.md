---
name: react-revision
description: "Revise forgotten React concepts by walking through existing projects. Use when: reviewing old code, refreshing React knowledge, re-learning hooks, understanding past projects, revision, recap, forgot concepts, need to remember React."
argument-hint: "Optional: project folder name (e.g., quiz-app) or concept (e.g., useReducer)"
---

# React Concept Revision

## When to Use
- User says they forgot React concepts
- User wants to review an old project
- User wants to understand their own code
- User asks to revise or recap a specific hook/pattern
- Starting a new session after a break from React

## Procedure

### Step 1: Identify What to Revise

If user specified a project folder or concept, focus on that.
Otherwise, read the learning progress from `.github/copilot-instructions.md` and ask:
- "Which project do you want to walk through?" or
- "Which concept feels rusty? (useState, useReducer, useEffect, useContext, routing, custom hooks)"

### Step 2: Code Walkthrough

For the selected project:

1. Read `src/App.jsx` first — this is the entry point showing overall structure
2. Read each component file in `src/components/` (or `src/pages/`)
3. For EACH file, explain:
   - **What this component does** (in plain English)
   - **Which React concepts it demonstrates** (map to `.learning/concepts.md`)
   - **Key patterns used** (controlled forms, derived state, callback props, etc.)
   - **Common gotchas related to this code** (reference `.learning/gotchas.md`)

Format explanations at **beginner level** — explain WHY, not just WHAT.

### Step 3: Active Recall Quiz

After the walkthrough, quiz the user with 3-5 questions:

```
1. In this component, why did we use useReducer instead of useState?
2. What would break if we removed the dependency array from this useEffect?
3. Why is the key prop important in this .map() call?
```

Wait for user answers. Correct gently with code examples.

### Step 4: Modification Challenge

Suggest ONE small modification to the project:
- "Add a reset button to the quiz app"
- "Add a loading skeleton to the movie search"
- "Add a date filter to the expense tracker"

This forces active recall — reading code is passive, modifying it is active.

### Step 5: Update Memory

After revision, remind the user:
> "Update your memory files — run `/update-memory` or tell me what to update in `.github/copilot-instructions.md`"

## Reference

- Concepts detail: `.learning/concepts.md`
- Gotchas history: `.learning/gotchas.md`
- Learning progress: `.github/copilot-instructions.md`

## Notes
- Never rebuild a project from scratch for revision — that's inefficient
- Focus on understanding PATTERNS, not memorizing syntax
- Always connect concepts to the specific project where they were learned
