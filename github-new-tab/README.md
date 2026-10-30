# New Tab

A retro "old internet" style new tab page: pastel pink gradient sky, a search box with a provider dropdown
(Google, Live Search, DuckDuckGo), a mascot in the corner, and a "presentation mode" (blue theme, no mascot)
from the hamburger menu in the top-right.

It's plain HTML/CSS/JS with no build step and no server code.

## Use it

Open `index.html` in a browser to try it. To make it your new tab page, host the folder anywhere that serves
static files (GitHub Pages, a Raspberry Pi, `python3 -m http.server`) and set that URL as your new tab page with
an extension such as "New Tab Redirect".

## Customize

- Add or change search providers in the `ENGINES` list near the bottom of `index.html` (`{q}` is replaced with the search text).
- Swap the mascot by replacing `img/mascot_full.png` and `img/mascot_icon.png`.
- The mascot's speech bubble text is in `index.html` (and `peek.js` handles the click).
