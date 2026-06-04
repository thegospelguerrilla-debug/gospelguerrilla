# Resuming this Grok conversation and editing the GospelGuerrilla site

**Easiest way to resume this exact conversation:**

1. Open Terminal
2. Run: `cd ~/Desktop/gospelguerrilla`
3. Run: `./resume-grok`

This will launch Grok and automatically try to resume the most recent session for this project (using the `-r` flag). On the welcome screen you can also pick previous sessions for this folder if needed.

(If `./resume-grok` doesn't work, fall back to the full path below.)

## Alternative / manual steps

1. Open your terminal.
2. `cd ~/Desktop/gospelguerrilla`
3. Launch Grok: `/Users/jamieguthrie/.grok/bin/grok` (or just `grok` if it's in your PATH).
4. On the welcome screen, you will see recent sessions for this directory. Select the one you want (this conversation).
5. Or, inside Grok, type `/load` (or `/resume`) to browse and load previous sessions for this workspace.
6. From command line you can also do: `grok -r` (resumes most recent) or `grok -r <session-id>`.

Sessions are saved automatically in `~/.grok/sessions/`.

You can also run `grok sessions` to list them.

## How to edit the site (I will do the code changes for you)

## How to edit the site (I will do the code changes for you)

You do **not** need to edit code yourself. Just tell me what you want changed (text, layout, colors, new section, image swap, etc.) and I will use tools to edit the files, commit if appropriate, and guide you on deploying.

Typical flow:
- Describe the change (e.g. "make the hero text bigger and change the button to say 'Find Hope'").
- I will propose / make the edits.
- You run `npm run dev` locally to preview.
- When happy, run `npx vercel --prod` from `~/Desktop/gospelguerrilla` to deploy (this updates the live site at https://gospelguerrilla.vercel.app and creates a new share link).
- After deploy, to update your shareable link: in Vercel UI go to the new deployment → Share → "publicly accessible" → copy the new link.

### Common edits
- **Text / content**: Tell me the page and the new wording. I edit the .tsx files in `app/`.
- **Images / heroes**: Put the new image file in `public/images/` (with a good name like `prayer-hero-v2.jpg`), then tell me which page to use it on. I update the `<img src=...>` and alt text.
- **Styling**: Describe the look (bigger text, different color, more space, etc.). I adjust Tailwind classes.
- **New page or section**: Describe it; I can scaffold it.
- **vercel.json**: Already present to force correct Next.js settings.

### Commands you will use
```bash
cd ~/Desktop/gospelguerrilla
npm run dev          # local preview (http://localhost:3000)
npx vercel --prod    # deploy to live + update https://gospelguerrilla.vercel.app
git status
git add .
git commit -m "your message"
git push
```

The main live site is always at https://gospelguerrilla.vercel.app (updated on every successful --prod).

Old share links you sent stay on the version they were created for. Generate a fresh one after each deploy if you want to share the latest.

## Notes
- Always `cd ~/Desktop/gospelguerrilla` before running grok or vercel commands.
- `vercel.json` is committed and pins the framework so builds stay consistent.
- If you close the Grok window, just relaunch as above and use /load to continue this exact conversation history.

If you tell me a specific edit ("change the 'THE TRUTH' section to say X instead of Y"), I will make the change right away using the editor tools.
