# Orello Creatives website — standing rules

This file holds standing engagement rules for working on this repo. Follow these
without being asked again each time.

## Explore Work page — thumbnail service icons (master brief)

On the Explore Work page (`WorkPage.jsx` → `CaseStudySecond.jsx`'s `PortfolioGrid`),
each case study card shows small service icons next to its title. These icons are
driven entirely by `serviceKeys` on the case study doc (see `LOGO_BY_KEY` in
`CaseStudySecond.jsx`), mapped against the canonical vocabulary in
`src/constants/caseStudyFilters.js`:

- `starr` — Branding / Identity Design
- `penn` — Digital Marketing / Content / Print (the pencil icon)
- `togglee` — UI-UX / Development
- `motion` — Video Production / Motion Graphics

**Rule: `serviceKeys` must always reflect the services actually delivered for that
case study, nothing more and nothing less.** When a case study's deliverables
change (a flyer gets added, a video gets added, a brand identity package gets
delivered, etc.), update `serviceKeys` in the same change so the thumbnail icons
stay accurate. A case study with only a video deliverable should show only the
`motion` icon; one with a video and a print flyer should show both `motion` and
`penn`; and so on. Never leave a stale or invalid key (e.g. a key not in
`SERVICE_OPTIONS`) in `serviceKeys` — it silently produces either a missing icon
or, if it happens to collide with another key's logo, a duplicate icon.

Apply this check whenever adding, editing, or reviewing any case study's gallery
or deliverables.

## Other standing rules (carried over from engagement history)

- Keep Orello's existing brand look and feel; responsive and accessible.
- Work one section/case-study at a time unless told otherwise.
- All case-study copy must use only real information from source materials — no
  fabricated metrics or claims — except the client's own direct, stated facts
  about their own company's work history, which are taken at face value.
- Push iterative fixes to `staging` without asking each time; only check in
  before outward-facing actions (e.g. a prod deploy).
- Ask only one blocking question when genuinely stuck.
- Never use em dashes in any response or commit message.
