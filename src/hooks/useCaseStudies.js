import { useCmsContent } from "./useCmsContent";
import { STATIC_CASE_STUDIES } from "../data/staticCaseStudies";

// A CMS document only ever carries a subset of a case study's fields (the
// admin's "Listing Card" section: title, images, tags). The full page body
// (description, gallery, deliverables, metrics, etc.) lives in the static
// file. So a CMS doc must be merged ON TOP of its matching static entry,
// field by field, not swapped in wholesale, otherwise a case study that
// only has a CMS doc for its card ends up with a near-empty detail page.
// Only fields the CMS doc actually set (non-null, non-undefined, and not
// an empty array) override the static value; everything else keeps the
// static content.
function mergeWithStatic(cmsDoc, staticDoc) {
  if (!staticDoc) return cmsDoc;
  const merged = { ...staticDoc };
  for (const [key, value] of Object.entries(cmsDoc)) {
    const isEmptyArray = Array.isArray(value) && value.length === 0;
    if (value !== null && value !== undefined && value !== "" && !isEmptyArray) {
      merged[key] = value;
    }
  }
  return merged;
}

// All case studies: CMS documents merged onto any matching static entry
// (src/data/staticCaseStudies.js) by slug, plus any static-only entries
// that have no CMS doc yet. Used anywhere the Work grid, "More Case
// Studies", or a single case-study page needs the combined list.
export function useCaseStudies() {
  const cmsDocs = useCmsContent("/case-studies", []) || [];
  const staticBySlug = new Map(STATIC_CASE_STUDIES.map((d) => [d.slug, d]));
  const cmsSlugs = new Set(cmsDocs.map((d) => d.slug));
  const merged = cmsDocs.map((d) => mergeWithStatic(d, staticBySlug.get(d.slug)));
  const extra = STATIC_CASE_STUDIES.filter((d) => !cmsSlugs.has(d.slug));
  return [...merged, ...extra];
}

// Single case study by slug: the CMS document (if one exists for that
// slug) merged onto the matching static entry, so CMS edits to title/
// images/tags show up while the rest of the page body still renders from
// the static content. Falls back to CMS-only or static-only when just one
// of the two exists.
//
// This fetches the single-item endpoint (/case-studies/:slug), not the
// list endpoint. The list endpoint (used by useCaseStudies() above, for
// the grid) returns a trimmed projection of each doc for listing-card
// fields only (title, images, industries, serviceKeys) and omits
// deliverables/metrics/gallery entirely; the single-item endpoint returns
// the full document. Filtering the list response for one slug (as this
// used to do) silently dropped any deliverables/metrics/gallery content
// actually saved to a case study's CMS doc.
export function useCaseStudyBySlug(slug) {
  const cmsMatch = useCmsContent(`/case-studies/${slug}`, null);
  const staticMatch = STATIC_CASE_STUDIES.find((d) => d.slug === slug) || null;
  if (cmsMatch) return mergeWithStatic(cmsMatch, staticMatch);
  return staticMatch;
}
