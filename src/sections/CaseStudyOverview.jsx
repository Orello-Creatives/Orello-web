import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import starr   from '../assets/logos/starr.svg';
import togglee from '../assets/logos/togglee.svg';
import penn    from '../assets/logos/penn.svg';
import uiux    from '../assets/logos/uiux.svg';

gsap.registerPlugin(ScrollTrigger);

// ── Constants ─────────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  "Climate Tech", "Sustainability", "Construction", "Agritech",
  "Fashion", "Lifestyle", "Dairy", "Events", "Social Organisation",
  "Corporate", "NGO", "Mining", "Health", "Travel", "Real-estate", "AI",
];

export const SERVICES = [
  { label: "Branding / Identity Design",          logoKey: "starr",   logo: starr   },
  { label: "Digital Marketing / Content / Print", logoKey: "penn",    logo: penn    },
  { label: "UI-UX / Development",                 logoKey: "togglee", logo: togglee },
  { label: "Motion Graphics",                     logoKey: "motion",  logo: uiux    },
];

// ── DropdownPortal ────────────────────────────────────────────────────────────
function DropdownPortal({ anchorRef, portalRef, children, align = "left" }) {
  const [style, setStyle] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => { if (portalRef) portalRef.current = wrapperRef.current; });

  useEffect(() => {
    function compute() {
      if (!anchorRef.current) return;
      const rect = anchorRef.current.getBoundingClientRect();
      const base = { position: "fixed", top: rect.bottom + 6, zIndex: 999999 };
      if (align === "right") base.right = window.innerWidth - rect.right;
      else base.left = rect.left;
      setStyle(base);
    }
    compute();
    window.addEventListener("scroll", compute, true);
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute, true);
      window.removeEventListener("resize", compute);
    };
  }, [anchorRef, align]);

  if (!style) return null;
  return createPortal(
    <div ref={wrapperRef} style={style}>{children}</div>,
    document.body
  );
}

// ── RemoveButton ──────────────────────────────────────────────────────────────
function RemoveButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 26, height: 26, borderRadius: "50%",
        background: "#D4892A", border: "none",
        cursor: "pointer", flexShrink: 0, padding: 0,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 2L10 10M10 2L2 10" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </button>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
// All filter state (selIndustries, selServices, setSelIndustries, setSelServices)
// is owned by WorkPage and passed down — no local filter state here.
export default function ExploreWorkSection({
  selIndustries,
  selServices,
  setSelIndustries,
  setSelServices,
  portfolioRef,
}) {
  const containerRef      = useRef(null);
  const circleRefs        = useRef([]);
  const industryBtnRef    = useRef(null);
  const servicesBtnRef    = useRef(null);
  const industryPortalRef = useRef(null);
  const servicesPortalRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  const totalSel     = selIndustries.length + selServices.length;
  const industryOpen = openDropdown === "industry";
  const servicesOpen = openDropdown === "services";

  // Outside click closes dropdowns
  useEffect(() => {
    function onDown(e) {
      const inInd  = industryBtnRef.current?.contains(e.target);
      const inSvc  = servicesBtnRef.current?.contains(e.target);
      const inIndP = industryPortalRef.current?.contains(e.target);
      const inSvcP = servicesPortalRef.current?.contains(e.target);
      if (!inInd && !inSvc && !inIndP && !inSvcP) setOpenDropdown(null);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // GSAP
  useEffect(() => {
    gsap.config({ force3D: true, nullTargetWarn: false });
    circleRefs.current.forEach((el) => {
      if (!el) return;
      gsap.to(el, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", end: "40% top", scrub: 2, anticipatePin: 1,
        },
        scale: 8,
        keyframes: [
          { opacity: 0.6, duration: 0.3, ease: "power2.in" },
          { opacity: 0,   duration: 0.7, ease: "power2.out" },
        ],
        ease: "power2.inOut",
      });
    });
    gsap.fromTo(".work-content",
      { y: 60, opacity: 0 },
      { scrollTrigger: { trigger: containerRef.current, start: "top 70%", end: "top 40%", scrub: 1 },
        y: 0, opacity: 1, ease: "power2.out" }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Toggle handlers — update parent state directly
  function toggleIndustry(item) {
    const has = selIndustries.includes(item);
    if (!has && totalSel >= 2) return;
    setSelIndustries(has
      ? selIndustries.filter((x) => x !== item)
      : [...selIndustries, item]
    );
  }

  function toggleService(key) {
    const has = selServices.includes(key);
    if (!has && totalSel >= 2) return;
    setSelServices(has
      ? selServices.filter((x) => x !== key)
      : [...selServices, key]
    );
  }

  function removeIndustry(item) {
    setSelIndustries(selIndustries.filter((x) => x !== item));
  }

  function removeService(key) {
    setSelServices(selServices.filter((x) => x !== key));
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-[#eadecf] py-20 sm:py-28 md:py-32 lg:py-40"
      style={{ overflow: "visible" }}
    >
      {/* Semicircle bg */}
      <div className="fixed inset-0 flex items-end justify-center pointer-events-none overflow-hidden z-0">
        {[
          { w: "120vw", h: "110vw", bg: "#fdf6e9", bottom: "-60vw" },
          { w: "95vw",  h: "85vw",  bg: "#eadecf", bottom: "-50vw" },
          { w: "70vw",  h: "65vw",  bg: "#fdf6e9", bottom: "-40vw" },
          { w: "45vw",  h: "45vw",  bg: "#eadecf", bottom: "-30vw" },
          { w: "30vw",  h: "25vw",  bg: "#fdf6e9", bottom: "-20vw" },
        ].map((c, i) => (
          <div key={i} ref={(el) => (circleRefs.current[i] = el)} className="absolute left-1/2"
            style={{ width: c.w, height: c.h, background: c.bg, borderRadius: "50%",
              bottom: c.bottom, opacity: 0.6, transform: "translateX(-50%)", willChange: "transform,opacity" }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#402E1D] mb-6 sm:mb-8 leading-tight">
            Explore Our Work
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
            Orello is a purpose-driven global design partner that helps impact-oriented organisations
            communicate with clarity, empathy, and intention.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A]">Filter by</span>

            <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-4">

              {/* INDUSTRY */}
              <div ref={industryBtnRef}>
                <button
                  onClick={() => setOpenDropdown(industryOpen ? null : "industry")}
                  style={{
                    padding: "14px 36px", borderRadius: "999px", fontSize: "18px",
                    fontWeight: "500", cursor: "pointer", border: "none",
                    display: "flex", alignItems: "center", gap: "8px",
                    background: industryOpen ? "#F7AF19" : "#4b433b",
                    color:      industryOpen ? "#0A0A0A" : "#fff",
                    transition: "background 0.2s",
                  }}
                >
                  Industry <span style={{ fontSize: "12px" }}>{industryOpen ? "▼" : "▲"}</span>
                </button>

                {industryOpen && (
                  <DropdownPortal anchorRef={industryBtnRef} portalRef={industryPortalRef} align="left">
                    <div style={{ background: "#fff", borderRadius: "16px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                      border: "1px solid #f0ece6", width: "220px", overflow: "hidden" }}>
                      <div style={{ maxHeight: "280px", overflowY: "auto" }}>
                        {INDUSTRIES.map((item) => {
                          const sel = selIndustries.includes(item);
                          const dis = !sel && totalSel >= 2;
                          return (
                            <button key={item} onClick={() => toggleIndustry(item)}
                              style={{
                                display: "block", width: "100%", textAlign: "left",
                                padding: "12px 20px", fontSize: "15px",
                                fontWeight: sel ? "600" : "400",
                                color: sel ? "#F7AF19" : dis ? "#bbb" : "#1a1a1a",
                                background: "transparent", border: "none",
                                cursor: dis ? "not-allowed" : "pointer", opacity: dis ? 0.5 : 1,
                              }}
                              onMouseEnter={e => { if (!dis) e.currentTarget.style.background = "#f9f7f4"; }}
                              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                            >{item}</button>
                          );
                        })}
                      </div>
                    </div>
                  </DropdownPortal>
                )}
              </div>

              {/* SERVICES */}
              <div ref={servicesBtnRef}>
                <button
                  onClick={() => setOpenDropdown(servicesOpen ? null : "services")}
                  style={{
                    padding: "14px 36px", borderRadius: "999px", fontSize: "18px",
                    fontWeight: "500", cursor: "pointer", border: "none",
                    display: "flex", alignItems: "center", gap: "8px",
                    background: servicesOpen ? "#4b433b" : "#F7AF19",
                    color:      servicesOpen ? "#fff"    : "#0A0A0A",
                    transition: "background 0.2s",
                  }}
                >
                  Services <span style={{ fontSize: "12px" }}>{servicesOpen ? "▼" : "▲"}</span>
                </button>

                {servicesOpen && (
                  <DropdownPortal anchorRef={servicesBtnRef} portalRef={servicesPortalRef} align="right">
                    <div style={{ background: "#fff", borderRadius: "16px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                      border: "1px solid #f0ece6", width: "320px", overflow: "hidden", padding: "8px 0" }}>
                      {SERVICES.map((svc) => {
                        const sel = selServices.includes(svc.logoKey);
                        const dis = !sel && totalSel >= 2;
                        return (
                          <button key={svc.logoKey} onClick={() => toggleService(svc.logoKey)}
                            style={{
                              display: "flex", alignItems: "center", gap: "12px",
                              width: "100%", padding: "12px 20px", fontSize: "15px",
                              fontWeight: sel ? "600" : "400",
                              color: sel ? "#F7AF19" : dis ? "#bbb" : "#1a1a1a",
                              background: "transparent", border: "none",
                              cursor: dis ? "not-allowed" : "pointer",
                              textAlign: "left", opacity: dis ? 0.5 : 1,
                            }}
                            onMouseEnter={e => { if (!dis) e.currentTarget.style.background = "#f9f7f4"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                          >
                            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
                              <img src={svc.logo} alt={svc.logoKey} style={{ width: 20, height: 20, objectFit: "contain" }} />
                            </span>
                            <span>{svc.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </DropdownPortal>
                )}
              </div>

            </div>
          </div>

          {/* Active filter pills */}
          {totalSel > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center",
              justifyContent: "center", gap: "12px", marginTop: "8px" }}>
              {selIndustries.map((item) => (
                <span key={item} style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "8px 8px 8px 20px", border: "1.5px solid #4b433b",
                  borderRadius: "999px", color: "#1a1a1a", fontSize: "15px", fontWeight: "500", background: "transparent",
                }}>
                  {item}
                  <RemoveButton onClick={() => removeIndustry(item)} />
                </span>
              ))}
              {selServices.map((key) => {
                const svc = SERVICES.find((s) => s.logoKey === key);
                return (
                  <span key={key} style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    padding: "8px 8px 8px 20px", border: "1.5px solid #4b433b",
                    borderRadius: "999px", color: "#1a1a1a", fontSize: "15px", fontWeight: "500", background: "transparent",
                  }}>
                    {svc?.label}
                    <RemoveButton onClick={() => removeService(key)} />
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}