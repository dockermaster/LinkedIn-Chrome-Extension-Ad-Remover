# LinkedIn Promoted Post Remover

A lightweight Chrome extension that automatically removes promoted (sponsored) posts from your LinkedIn feed.

## What it does

- Scans your LinkedIn feed for promoted posts and hides them instantly
- Continues watching for new posts as you scroll, removing ads as they load
- Shows a small badge in the top-right corner of the page with a count of how many ads have been removed

## Installation

Since this extension is not on the Chrome Web Store, install it manually:

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked** and select the folder containing this repo
5. Navigate to [linkedin.com](https://www.linkedin.com) — promoted posts will be removed automatically

## How it works

The extension injects a content script into every `linkedin.com` page. It queries all feed list items and hides any that contain the text "Promoted". A `MutationObserver` watches for DOM changes (e.g. infinite scroll loading new posts) and re-runs the check with a short debounce, so ads are caught as they appear.

## Files

| File | Description |
|------|-------------|
| `manifest.json` | Chrome extension manifest (v3) |
| `content.js` | Content script that detects and removes promoted posts |
