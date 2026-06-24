// Single source of truth for the case-study filter vocabulary.
// Used by the public filters (CaseStudyOverview) and the admin panel
// (contentTypes) — CMS case studies must use these exact values for the
// existing industry/service filters to match them.

export const INDUSTRIES = [
  "Climate Tech", "Sustainability", "Construction", "Agritech",
  "Fashion", "Lifestyle", "Dairy", "Events", "Social Organisation",
  "Corporate", "NGO", "Mining", "Health", "Travel", "Real-estate", "AI",
];

// value = logoKey used across the site; label = human-readable service name
export const SERVICE_OPTIONS = [
  { value: "starr", label: "Branding / Identity Design" },
  { value: "penn", label: "Digital Marketing / Content / Print" },
  { value: "togglee", label: "UI-UX / Development" },
  { value: "motion", label: "Motion Graphics" },
];
