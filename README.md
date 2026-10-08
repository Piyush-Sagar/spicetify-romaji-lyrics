# Romaji Lyrics

Read Japanese lyrics in **romaji** inside Spotify with Spicetify. Switch back to the original Japanese at any time.

![Romaji Lyrics demonstration with original sample text](assets/preview.png)

## Features

- Converts hiragana, katakana and kanji to spaced Hepburn romaji, including long vowels such as `ō`.
- Works on Spotify's native lyrics page and native Now Playing lyrics panel using supported layouts.
- Keeps lyric elements, click handlers and synced playback intact.
- Restores Japanese immediately when switched off; saves your preference between sessions.
- Loads its dictionary only when Japanese text appears. Leaves original lyrics visible while loading or if conversion fails.
- Bundles the conversion code in one installable JavaScript file. No translation account, API key or external script loader.

## Install

You need Spotify Desktop with [Spicetify](https://spicetify.app/docs/getting-started) installed and working. This is a Spicetify extension, not a Chrome extension.

### Marketplace

Open **Marketplace → Extensions**, search for **Romaji Lyrics**, install it and reload Spotify. Marketplace discovery can take time after a repository is published. If the card is not available yet, use the manual method below.

### Manual installation

1. Download [romaji_lyrics.js](https://raw.githubusercontent.com/Piyush-Sagar/spicetify-romaji-lyrics/main/romaji_lyrics.js) (use **Save link as**, keeping the `.js` extension).
2. Run `spicetify path` to find your configuration directory. Copy the file into its `Extensions` subfolder. Create that subfolder if needed. The directory can vary by installation; use the command's output.
3. Enable and apply it:

```sh
spicetify config extensions romaji_lyrics.js
spicetify apply
```

Spicetify's `config extensions` command appends to the enabled extensions. If you previously installed the reference extension with this same filename, replace its file with this download and run `spicetify apply`. Avoid installing it manually and through Marketplace simultaneously.

## Use

Play a Japanese track and open Spotify's lyrics. The extension starts enabled. Click the **Romaji Lyrics** language icon in the playback bar, or select **Romaji Lyrics** in your profile menu, to toggle it. The profile menu remains available if your layout does not display playback-bar extensions.

The first Japanese track downloads approximately 17 MB of compressed dictionary data. Downloads use the browser's normal HTTP cache; the initialized dictionary stays in memory until Spotify reloads. Subsequent tracks in that session use the same dictionary.

## Compatibility and limitations

- This extension converts lyrics Spotify already displays. It does not retrieve missing lyrics or bypass Spotify's lyrics availability restrictions.
- Supports the legacy `.lyrics-lyricsContent-text` layout, explicit lyric test IDs, and Spotify 1.3.3's primary lyric text class. Spotify can change these internal selectors in later releases; report unsupported layouts through [Issues](https://github.com/Piyush-Sagar/spicetify-romaji-lyrics/issues).
- Third-party lyrics extensions, iframe content and word-by-word romanization are not guaranteed. Nested word elements retain their structure, but converting separate text nodes can lose sentence context.
- Dictionary readings can be wrong for names, unusual kanji, poetic readings and lyrics with nonstandard pronunciations. Romaji is a reading aid, not an English translation.
- Han characters are shared by Japanese and Chinese. The extension cannot reliably distinguish kanji-only Japanese lines from Chinese; switch it off for Chinese lyrics.
- The release is checked with real Kuromoji dictionaries, DOM regression tests and a Chromium integration harness. The harness simulates Spicetify APIs; it is not an authenticated live Spotify playback test.

## Privacy and network access

Romanization happens on your computer. Lyrics, track identifiers and Spotify credentials are never sent to an external conversion service. The only extension network requests are fixed dictionary files from `https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/`, without credentials or referrer. The CDN receives normal connection information such as your IP address. Each dictionary file is verified against a SHA-256 digest recorded in the bundle before use. The extension uses no analytics and stores only its enabled preference in Spicetify local storage. Its temporary line cache is bounded to 1,000 entries.

## Troubleshooting

If the dictionary fails to load, the Japanese lyrics remain visible and a notification appears. Check your connection and access to jsDelivr, then switch the extension off and on to retry. No lyrics are hidden during loading.

If nothing changes, confirm the extension is enabled and the track has Japanese lyrics. Try Spotify's native lyrics page with other lyric extensions disabled. If Spotify has updated, include your Spotify and Spicetify versions in a bug report. Do not include account tokens or private data.

To remove a manual installation:

```sh
spicetify config extensions romaji_lyrics.js-
spicetify apply
```

For a Marketplace installation, uninstall the card in Marketplace and reload Spotify.

## Development

Requires Node.js 22 or later:

```sh
npm ci
npm run check
npx playwright install chromium
npm run test:browser
```

`src/` contains the readable implementation. `npm run build` bundles it into the committed `romaji_lyrics.js` and regenerates the dictionary digests from the locked Kuromoji package. `npm run test:browser` runs the real bundle against a local test page, downloads and verifies the actual CDN dictionary, checks toggling and failure recovery, and saves `assets/preview.png`. It can use installed Microsoft Edge or Chrome; otherwise install Playwright Chromium as shown above. The preview uses original sample text, not a screenshot of a user's account or copyrighted song lyrics.

The CI workflow runs the regression tests, validates Marketplace files and verifies that the committed bundle matches a clean build.

## Marketplace publication

This repository follows the [official publishing format](https://github.com/spicetify/marketplace/wiki/Publishing-to-Marketplace): it is public, has the `spicetify-extensions` topic, and provides a root `manifest.json` with `name`, `description`, `preview`, `main` and `readme`. All referenced files are committed to the default branch. Extensions are discovered from tagged repositories; a pull request to the Marketplace repository is not part of the documented extension publication process. Search indexing and Marketplace caching determine when it appears.

## Credits and license

Written using the user-supplied `romaji_lyrics.js` as a behavioral reference, with a new implementation for loading, lifecycle management and lyric updates. The original reference is not redistributed.

Project code: [MIT](LICENSE). Conversion uses [Kuroshiro](https://github.com/hexenq/kuroshiro), [Kuromoji](https://github.com/takuyaa/kuromoji.js), [doublearray](https://github.com/takuyaa/doublearray) and [fflate](https://github.com/101arrowz/fflate). Third-party copyrights and full license texts are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and `licenses/`, and included in the installable bundle. Dictionary notices are preserved separately. This community extension is not affiliated with Spotify.
