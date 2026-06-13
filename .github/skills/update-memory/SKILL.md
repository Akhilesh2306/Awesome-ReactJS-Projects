---
name: update-memory
description: "Update learning memory files at end of session. Use when: session ending, done for today, save progress, update memory, end of session, wrap up, what did I learn, log session, save what I learned."
argument-hint: "Optional: summary of what you worked on"
---

# End-of-Session Memory Update

## When to Use
- At the end of every learning session
- When user says "I'm done for today" / "wrap up" / "save progress"
- When user asks to update memory or log what they learned

## Procedure

### Step 1: Gather Session Summary

If user didn't provide a summary, ask:
- "What did you work on today?"
- "Did you hit any gotchas or confusing moments?"
- "What's your plan for next time?"

### Step 2: Update copilot-instructions.md

Update `.github/copilot-instructions.md` with:

1. **Learning Progress table** — update status of current project (if changed)
2. **Critical Gotchas** — add any new gotchas (keep top 5-7 only, move rest to gotchas.md)
3. **Session Continuity** section:
   ```
   **Last session:** YYYY-MM-DD — [brief description]
   **What was done:** [1-2 sentences]
   **Next steps:** [what to do next time]
   ```

### Step 3: Update Detailed Files (if new concepts/gotchas)

If new concepts were learned:
- Add to `.learning/concepts.md` under the appropriate section
- Include: which project, explanation, code snippet

If new gotchas were hit:
- Add to `.learning/gotchas.md` with:
  - Severity (🔴/🟡/🟢)
  - Project where it happened
  - ❌ wrong code and ✅ right code

### Step 4: Create Session Log (Optional)

Copy `.learning/sessions/_template.md` to `.learning/sessions/YYYY-MM-DD-topic.md` and fill in:
- What was worked on
- Concepts learned
- Gotchas hit
- Code snippet you're proud of
- What's next
- Time spent

Only create if the session had substantial learning. Skip for short sessions.

### Step 5: Confirm

Show the user a summary of what was updated:

```
✅ Memory updated:
- copilot-instructions.md: Updated session continuity, added 1 gotcha
- concepts.md: Added useRef section
- gotchas.md: Added "stale closure in useEffect" gotcha
- Session log: .learning/sessions/2026-06-14-useref.md created
```

Remind: "Commit these changes so they're saved in git."
