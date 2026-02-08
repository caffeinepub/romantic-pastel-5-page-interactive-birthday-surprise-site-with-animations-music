# Specification

## Summary
**Goal:** Build a romantic, pastel, 5-page linear interactive birthday surprise website with gentle transitions, ambient animations, background music, and replay.

**Planned changes:**
- Create 5 distinct pages/screens in a fixed sequence (1→2→3→4→5) with the exact provided titles/body text (including emojis and line breaks).
- Add interactive option buttons on Pages 1–2 with a visible selected state, and a wish typing input on Page 3 that retains text during the session.
- Add a heart-shaped “Next” button on Pages 1–4 and a “Replay the Surprise” 💫 button on Page 5 that returns to Page 1 and resets selections/input.
- Apply a consistent romantic pastel theme (baby blue, lavender, blush pink, cream) with soft gold sparkle accents and soft/rounded styling.
- Implement smooth fade transitions for page navigation (including Replay).
- Add ambient animated visuals across the experience (floating hearts, gentle glitter, tiny stars) plus page-specific effects:
  - Page 1: floating hearts background + cute hopping rabbit
  - Page 2: sparkles localized around the text
  - Page 3: rabbit holding a tiny balloon near the wish input
  - Page 4: glowing gold sparkles + slower floating hearts
  - Page 5: confetti hearts, flying balloons, glitter rain, cute rabbits, and a soft pastel sky background
- Add soft instrumental background music that loops, persists across page navigation without restarting, autostarts with a clear autoplay-blocked fallback, and includes an unobtrusive mute/unmute control (optional volume).
- Add and reference required generated static image assets from `frontend/public/assets/generated` (no backend image fetching).

**User-visible outcome:** The user experiences a dreamy 5-step birthday surprise, makes selections, types a wish, enjoys animations and looping music throughout, and can replay the entire surprise from the end.
