Cup Stack Challenge v1.2

Changes:
- Full-screen responsive layout; the page itself no longer needs vertical scrolling.
- Swipe left = next question; swipe right = previous question.
- Keyboard Left Arrow = previous; Right Arrow = next.
- Configurable question count from 1 to 100.
- Questions are generated as a finite deck, so previous questions are preserved.
- Same-orientation cups are never separate vertical stack positions. They are nested instead.
- Question counter shows current / total, e.g. #7 / 20.

GitHub Pages deployment:
1. Replace your old index.html with the new index.html.
2. Commit the change.
3. If GitHub Pages is already enabled, it will redeploy automatically.
4. After the Actions deployment is green, hard refresh the site.

No backend, database, paid API, package manager, or external library is required.
