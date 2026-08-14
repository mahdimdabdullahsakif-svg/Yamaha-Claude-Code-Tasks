# Two-Wheeler Market Radar

Daily competitor/market-intelligence report for Yamaha Motorcycle Bangladesh's
Digital Marketing team. Tracks Honda (Bangladesh Honda), Bajaj & Suzuki
(Uttara Motors), TVS, Hero (Niloy Motors / Nitol Niloy), Runner and Walton
against Yamaha, comparing official MSRP to real Bikroy.com market/dealer
pricing, plus new-launch and campaign signals.

- `two-wheeler-market-radar.html` — the report template/current version.
  Published as a Claude Artifact; the daily Routine edits this file's data
  in place (values, table rows, date chips) and keeps the design untouched,
  then republishes it to the same artifact link.
- `latest-data.json` — rolling snapshot of the most recently captured data
  per brand. Overwritten each run (not appended), used to diff "what
  changed since yesterday" for the daily summary. Not a dated history —
  git log is the audit trail if one is ever needed.

No browser-use plugin is available in this environment; data is gathered
with built-in web search/fetch against each brand's official Bangladesh
site and Bikroy.com listings.
