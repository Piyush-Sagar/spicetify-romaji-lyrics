# Changelog

## 1.0.2

- Support Spotify 1.3.4's renamed primary lyric text element in native previews and full lyrics.
- Add a regression check for conversion and original restoration while preserving translations and controls.

## 1.0.1

- Wait for Spotify's React and ReactJSX runtime before constructing the profile menu. This fixes a startup exception that prevented lyric conversion and toggle registration in live Spotify.
- Add a regression test for delayed runtime availability.

## 1.0.0

- Single-file extension with locally bundled Japanese conversion libraries.
- Pinned, integrity-checked dictionary downloads with timeout and toggle-to-retry recovery.
- Native Spotify lyric adapters, text-only updates, original restoration and stale-result protection.
- Playback-bar and profile-menu toggles with saved preference.
- Marketplace manifest, original-text demo preview, license notices and automated checks.
