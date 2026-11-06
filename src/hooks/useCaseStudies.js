import { useCmsContent } from "./useCmsContent";
import { STATIC_CASE_STUDIES } from "../data/staticCaseStudies";

// All case studies: CMS documents plus any static ones shipped in the
// codebase (src/data/staticCaseStudies.js), de-duplicated by slug (a CMS
// document with the same slug wins, so adding it in the CMS later just
// takes over cleanly). Used anywhere the Work grid, "More Case Studies",
// or a single case-study page needs the combined list.
export function useCaseStudies() {
  const cmsDocs = useCmsContent("/case-studies", []) || [];
  const cmsSlugs = new Set(cmsDocs.map((d) => d.slug));
  const extra = STATIC_CASE_STUDIES.filter((d) => !cmsSlugs.has(d.slug));
  return [...cmsDocs, ...extra];
}

export function useCaseStudyBySlug(slug) {
  return STATIC_CASE_STUDIES.find((d) => d.slug === slug) || null;
}
