// Sticky, full-bleed header bar for admin pages — stays pinned to the top of
// the scrolling <main> while the page content scrolls underneath. Negative
// horizontal margins make it span the full width (covering main's padding) so
// scrolled content can't peek past its sides; the solid page-colour background
// hides anything sliding beneath it.
export default function PageHeader({ children }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 sm:-mx-10 px-6 sm:px-10 pt-6 sm:pt-7 pb-4 mb-6 sm:mb-8 bg-[#eadecf] border-b border-[#4B433B]/10">
      {children}
    </div>
  );
}
