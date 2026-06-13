---
name: react-learn
description: "Guide building a new React project for learning. Use when: starting a new project, learning a new concept, building next project, implementing a feature, new React concept, hands-on project, project-based learning, next project, build, create, implement."
argument-hint: "Concept or project name (e.g., 'useRef' or 'pomodoro timer')"
---

# React Project-Based Learning

## When to Use
- User wants to learn a new React concept
- User is starting the next project in their learning path
- User wants to build a specific feature or app

## Procedure

### Step 1: Check Current Progress

Read `.github/copilot-instructions.md` to see:
- Which project number is next (check the learning progress table)
- What concepts have already been covered
- What the last session was about

### Step 2: Scope the Project

Before writing any code:

1. **Name the concept(s)** this project will teach
2. **Describe the project** in 2-3 sentences
3. **List the new concepts** vs concepts being reinforced
4. **Estimate time**: "This should take ~X hours across Y sessions"
5. **Show the folder structure** upfront

Ask user to confirm before proceeding.

### Step 3: Build Incrementally

Follow this pedagogy for each new concept:

1. **Explain the concept** in plain English with a simple analogy
   - WHY does this exist? What problem does it solve?
   - WHEN would you use it vs alternatives?

2. **Show the minimal example** (5-10 lines) in isolation
   ```jsx
   // Minimal example of useRef
   const inputRef = useRef(null)
   // ...explain what's happening
   ```

3. **Build it into the project** — write the actual component together
   - User should type, not just read. Guide them line by line.
   - After each file, ask: "Does this make sense? Any questions?"

4. **Connect to what they already know**
   - "This is like useReducer from the expense tracker, but..."
   - "Remember how we did state lifting in the quiz app? This replaces that."

### Step 4: Concept Documentation

After each new concept is implemented, update `.learning/concepts.md`:

```markdown
### [Concept Name]
- **Learned in:** [project-folder]
- [2-3 bullet point explanation]
- [Code snippet showing usage]
```

### Step 5: Gotcha Tracking

When the user hits a mistake or confusion:
1. Flag it: "🔴 GOTCHA: [explanation]"
2. Show the ❌ wrong way and ✅ right way
3. Add it to `.learning/gotchas.md`

### Step 6: Project Completion

When the project is done:

1. Update the progress table in `.github/copilot-instructions.md`
2. Update the "Concepts Learned" section in `README.md`
3. Add the project to the README projects table
4. Remind user to commit with a descriptive message

## Project Conventions (match existing patterns)

- Folder: `XX-project-name/` (sequential numbering)
- Bundler: Vite 8
- React: v19
- Files: `.jsx` (no TypeScript unless learning TypeScript)
- CSS: Plain CSS (no Tailwind unless learning Tailwind)
- Structure: `components/` for UI, `pages/` for routes, `data/` for mock data
- Data: Static `data/*.js` files for mock data

## Scaffolding Command

```bash
npm create vite@latest XX-project-name -- --template react
cd XX-project-name
npm install
```

## Teaching Style Rules

1. **Beginner level** — explain WHY, not just HOW
2. **One concept at a time** — don't introduce useRef and useMemo in the same component
3. **Build incrementally** — start with hardcoded data, then add state, then add effects
4. **No magic** — every line must be understood. If user doesn't understand, stop and explain
5. **Connect the dots** — always reference which past project used a related concept
6. **Celebrate progress** — acknowledge when user grasps something new

## Reference

- Learning progress: `.github/copilot-instructions.md`
- Concepts covered: `.learning/concepts.md`
- Known pitfalls: `.learning/gotchas.md`
- Session logs: `.learning/sessions/`
