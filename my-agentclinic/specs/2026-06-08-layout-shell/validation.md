# Phase 1 — Layout Shell: Validation

Phase 1 is complete and mergeable when all of the following pass.

## 1. Server Starts and Root Route Returns 200

```bash
npm run dev
# in another terminal:
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
# expected: 200
```

## 2. Visual Check in Browser

Open `http://localhost:3000/` and confirm:

- [ ] Page title is "AgentClinic" (browser tab)
- [ ] Header is visible with the AgentClinic wordmark
- [ ] No broken nav links or placeholder `#` anchors
- [ ] Hero section is present with a headline and supporting subtext
- [ ] "What We Do" section is visible below the hero
- [ ] Three feature-preview cards (Agents, Ailments, Therapies) render without broken links
- [ ] Footer is visible with a tagline
- [ ] Tailwind styles are applied (font, spacing, colors — not raw unstyled HTML)

## 3. Vitest Smoke Test Passes

```bash
npm test
# expected: 1 test suite, 1 passing test
```

The test must assert:
- `GET /` returns HTTP 200
- Response body contains the string `"AgentClinic"`

## 4. TypeScript Compiles Clean

```bash
npx tsc --noEmit
# expected: exit code 0, no errors printed
```

## Not Required for Merge

- No errors on `/agents`, `/ailments`, or any unbuilt route (those 404 cleanly)
- Pixel-perfect design — layout and Tailwind styles just need to be recognizably applied
- Mobile responsiveness beyond basic viewport meta tag (fine to improve in a later phase)
