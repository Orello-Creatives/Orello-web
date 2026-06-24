// Single source of truth driving the admin list pages and the
// config-driven SimpleForm (services / faqs / team / benefits).
// Blogs and case studies have bespoke forms.

import { INDUSTRIES, SERVICE_OPTIONS } from "../constants/caseStudyFilters";

export { INDUSTRIES };
export const SERVICE_KEY_OPTIONS = SERVICE_OPTIONS;

export const TAG_COLOR_OPTIONS = [
  { value: "bg-orange-500", label: "Orange" },
  { value: "bg-purple-400", label: "Purple" },
  { value: "bg-yellow-500", label: "Yellow" },
  { value: "bg-green-500", label: "Green" },
  { value: "bg-blue-500", label: "Blue" },
];

export const CONTENT_TYPES = {
  blogs: {
    label: "Blog Posts",
    singular: "Blog Post",
    endpoint: "blogs",
    form: "blog",
    columns: [
      { key: "title", label: "Title" },
      { key: "author", label: "Author" },
      { key: "tag", label: "Tag" },
      { key: "published", label: "Published" },
    ],
  },
  "case-studies": {
    label: "Case Studies",
    singular: "Case Study",
    endpoint: "case-studies",
    form: "caseStudy",
    ordered: true,
    columns: [
      { key: "title", label: "Title" },
      { key: "industries", label: "Industries" },
      { key: "published", label: "Published" },
    ],
  },
  faqs: {
    label: "FAQs",
    singular: "FAQ",
    endpoint: "faqs",
    ordered: true,
    columns: [
      { key: "question", label: "Question" },
      { key: "published", label: "Published" },
    ],
    fields: [
      { name: "question", label: "Question", type: "text", required: true },
      { name: "answer", label: "Answer", type: "textarea", required: true },
      { name: "published", label: "Published", type: "checkbox" },
    ],
    defaults: { question: "", answer: "", published: true },
  },
  team: {
    label: "Team Members",
    singular: "Team Member",
    endpoint: "team",
    ordered: true,
    columns: [
      { key: "name", label: "Name" },
      { key: "role", label: "Role" },
      { key: "linkedin", label: "LinkedIn" },
      { key: "published", label: "Published" },
    ],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "role", label: "Role / Title", type: "text" },
      { name: "linkedin", label: "LinkedIn URL", type: "text" },
      { name: "personImage", label: "Photo (headshot)", type: "image", folder: "team" },
      { name: "published", label: "Published", type: "checkbox" },
    ],
    defaults: { name: "", role: "", linkedin: "", personImage: "", published: true },
  },
  testimonials: {
    label: "Testimonials",
    singular: "Testimonial",
    endpoint: "testimonials",
    ordered: true,
    columns: [
      { key: "name", label: "Name" },
      { key: "title", label: "Title / Company" },
      { key: "published", label: "Published" },
    ],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "title", label: "Title / Company", type: "text" },
      { name: "quote", label: "Quote", type: "textarea", required: true },
      { name: "companyLogo", label: "Company logo", type: "image", folder: "testimonials" },
      { name: "avatar", label: "Avatar (photo)", type: "image", folder: "testimonials" },
      { name: "published", label: "Published", type: "checkbox" },
    ],
    defaults: { name: "", title: "", quote: "", companyLogo: "", avatar: "", published: true },
  },
};
