"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  Download,
  ExternalLink,
  Search,
  BellRing,
  Calendar,
  ArrowRight,
  X,
  Trophy,
  GraduationCap,
  CalendarDays,
  Wallet,
  ScrollText,
  Mic,
  Pin,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { useEffect } from "react";
import {
  NOTICES_DATA,
  QUICK_ACCESS,
  NoticeItem
} from "@/data/noticesData";
import { getStoredNotices } from "@/data/noticesStore";

/* ──────────────────────────────────────────────────
   Icon resolver — maps string keys to Lucide icons
   ────────────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  graduation: GraduationCap,
  calendar: CalendarDays,
  wallet: Wallet,
  scroll: ScrollText,
  mic: Mic,
};

/* ──────────────────────────────────────────────────
   Animation variants — matching existing homepage
   ────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] as const } }
};

/* ══════════════════════════════════════════════════
   LATEST NOTICES — MAIN COMPONENT
   ══════════════════════════════════════════════════ */
export default function LatestNotices() {
  const [noticesList, setNoticesList] = useState<NoticeItem[]>([]);
  // Track active tile by its unique ID — NOT by category
  const [activeTileId, setActiveTileId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedNotice, setExpandedNotice] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNoticesList(getStoredNotices());
    const handleUpdate = () => {
      setNoticesList(getStoredNotices());
    };
    window.addEventListener("bu_notices_updated", handleUpdate);
    return () => window.removeEventListener("bu_notices_updated", handleUpdate);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const decorY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // Resolve the active tile object
  const activeTile = useMemo(() => {
    return QUICK_ACCESS.find((t) => t.id === activeTileId) || null;
  }, [activeTileId]);

  // ── Filter notices based on active tile + search ──
  const activeData = noticesList.length > 0 ? noticesList : NOTICES_DATA;

  const filteredNotices = useMemo(() => {
    return activeData.filter((notice) => {
      // Category filter from active tile
      const matchCat = !activeTile || notice.category === activeTile.filterCategory;

      // Sub-keyword filter from active tile (e.g. "result" vs "schedule")
      const matchKeyword =
        !activeTile?.filterKeyword ||
        notice.title.toLowerCase().includes(activeTile.filterKeyword.toLowerCase()) ||
        notice.excerpt.toLowerCase().includes(activeTile.filterKeyword.toLowerCase());

      // Search query
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        notice.title.toLowerCase().includes(q) ||
        notice.department.toLowerCase().includes(q) ||
        notice.excerpt.toLowerCase().includes(q);

      return matchCat && matchKeyword && matchSearch;
    });
  }, [activeTile, searchQuery, activeData]);

  // Context-aware pinned notice
  const featuredNotice = useMemo(() => {
    if (activeTile) {
      const catNotice = filteredNotices.find((n) => n.isImportant);
      if (catNotice) return catNotice;
      if (filteredNotices.length > 0) return filteredNotices[0];
    }
    return activeData.find((n) => n.isImportant && n.isNew) || activeData[0] || NOTICES_DATA[0];
  }, [activeTile, filteredNotices, activeData]);

  // Active heading label
  const activeLabel = activeTile?.label || "All Notices";

  // Single handler — toggle tile by unique ID
  const handleQuickAccess = (tileId: string) => {
    setActiveTileId(tileId === activeTileId ? null : tileId);
    setSearchQuery("");
    setExpandedNotice(null);
  };

  return (
    <section
      ref={containerRef}
      id="latest-notices"
      className="py-14 md:py-18 bg-white border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* ═══════════════════════════════════════
            SECTION HEADER — heading left, search bar right
            ═══════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-montserrat text-[9px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-2.5">
              INSTITUTIONAL BULLETIN BOARD
            </span>
            <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Notices, Circulars & Announcements
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-96 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search results, datesheets, circulars, fees..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setActiveTileId(null); }}
              className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-full pl-11 pr-10 py-3 text-[12px] font-outfit text-[#0f172a] placeholder-gray-400 focus:outline-none focus:border-burgundy/50 focus:ring-2 focus:ring-burgundy/10 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            QUICK ACCESS GRID — only ONE tile can be active at a time
            ═══════════════════════════════════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12"
        >
          {QUICK_ACCESS.map((item) => {
            const Icon = iconMap[item.icon] || FileText;
            const isActive = activeTileId === item.id;
            return (
              <motion.button
                key={item.id}
                variants={cardVariants}
                onClick={() => handleQuickAccess(item.id)}
                className={`group relative flex flex-col items-start p-4 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-[#0f172a] border-[#0f172a] shadow-lg"
                    : "bg-white border-[#E2E8F0] hover:border-burgundy/20 hover:shadow-md"
                }`}
              >
                <span className={`absolute top-3 right-3 font-montserrat text-[10px] font-extrabold rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-300 ${
                  isActive
                    ? "bg-burgundy text-white"
                    : "bg-[#f8fafc] text-gray-400 group-hover:bg-burgundy/10 group-hover:text-burgundy"
                }`}>
                  {item.count}
                </span>

                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors duration-500 ${
                  isActive
                    ? "bg-burgundy text-white"
                    : "bg-burgundy/5 text-burgundy group-hover:bg-burgundy group-hover:text-white"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <span className={`font-outfit text-[13px] font-bold leading-tight transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#0f172a] group-hover:text-burgundy"
                }`}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ═══════════════════════════════════════
            MAIN CONTENT — 12-col asymmetric grid
            ═══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ─── LEFT COLUMN (5 cols): Pinned Notice Card — STICKY IN VIEW ─── */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500 group relative depth-card">
              <motion.div
                style={{ y: decorY }}
                className="absolute -top-8 -right-8 w-40 h-40 bg-burgundy/5 rounded-full blur-3xl pointer-events-none"
              />

              <div className="h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy" />

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-montserrat text-[9px] font-bold text-burgundy bg-burgundy/5 border border-burgundy/10 rounded-full px-3 py-0.5 tracking-[0.25em] uppercase inline-flex items-center gap-1.5">
                    <Pin className="w-3 h-3" /> PINNED NOTICE
                  </span>
                  {featuredNotice.isNew && (
                    <span className="flex items-center gap-1 bg-burgundy text-white text-[8px] font-montserrat font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5 text-gold" /> NEW
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-[9px] text-burgundy font-montserrat font-bold tracking-wider bg-burgundy/5 px-2 py-0.5 rounded-full">
                    {featuredNotice.category.toUpperCase()}
                  </span>
                  <span className="text-[9px] text-slate-700 font-semibold font-montserrat tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-burgundy" /> {featuredNotice.date}
                  </span>
                </div>

                <h3 className="font-outfit text-base font-bold text-[#0f172a] mb-2 leading-snug group-hover:text-burgundy transition-colors duration-300">
                  {featuredNotice.title}
                </h3>

                <p className="font-outfit text-[12px] text-slate-700 font-normal leading-relaxed mb-5">
                  {featuredNotice.excerpt}
                </p>

                <div className="border-t border-[#E2E8F0] pt-4 flex items-center justify-between">
                  <span className="text-[11px] text-slate-800 font-montserrat font-bold tracking-wider">
                    {featuredNotice.department}
                  </span>
                  <a
                    href={featuredNotice.downloadUrl || featuredNotice.linkUrl || "#"}
                    className="text-burgundy font-montserrat text-[9px] font-bold tracking-widest uppercase flex items-center gap-1.5 hover:text-burgundy-dark transition-colors duration-300 cursor-pointer"
                  >
                    {featuredNotice.type === "pdf" ? "DOWNLOAD PDF" : "VIEW DETAILS"}
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN (7 cols): Notice Feed ─── */}
          <div className="lg:col-span-7">
            <div className="border-b border-[#E2E8F0] pb-3 mb-5 flex items-center justify-between">
              <h3 className="font-outfit text-base font-bold text-[#0f172a] flex items-center gap-1.5">
                <BellRing className="w-4.5 h-4.5 text-burgundy" />
                {activeLabel}
              </h3>
              <span className="font-montserrat text-[8px] font-bold text-gray-500 tracking-wider">
                {filteredNotices.length} {filteredNotices.length === 1 ? "NOTICE" : "NOTICES"}
              </span>
            </div>

            <div className="space-y-0">
              <AnimatePresence mode="popLayout">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((notice, idx) => {
                    const isExpanded = expandedNotice === notice.id;
                    return (
                      <motion.div
                        key={notice.id}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="group border-b border-[#E2E8F0] hover:border-burgundy transition-all duration-300"
                      >
                        <div
                          className="flex flex-col sm:flex-row gap-3 justify-between items-start py-4.5 cursor-pointer"
                          onClick={() => setExpandedNotice(isExpanded ? null : notice.id)}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              <span className="text-[9px] text-burgundy font-montserrat font-bold tracking-wider bg-burgundy/5 px-2 py-0.5 rounded-full">
                                {notice.category.toUpperCase()}
                              </span>
                              {notice.isImportant && (
                                <span className="text-[8px] text-white bg-[#0f172a] font-montserrat font-bold tracking-wider px-1.5 py-0.5 rounded">
                                  IMPORTANT
                                </span>
                              )}
                              {notice.isNew && (
                                <span className="text-[8px] text-white bg-burgundy font-montserrat font-extrabold tracking-wider px-1.5 py-0.5 rounded">
                                  NEW
                                </span>
                              )}
                              <span className="text-[9px] text-slate-700 font-semibold font-montserrat tracking-wider flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-burgundy" /> {notice.date}
                              </span>
                            </div>
                            <h4 className="font-outfit text-sm font-bold text-[#0f172a] group-hover:text-burgundy transition-colors duration-300 mb-1 leading-snug">
                              {notice.title}
                            </h4>
                            <p className="font-outfit text-[11px] text-gray-500 font-light leading-relaxed line-clamp-1">
                              {notice.department} — {notice.excerpt}
                            </p>
                          </div>
                          <div className={`mt-1 sm:mt-2 p-2 rounded-full border border-[#E2E8F0] text-gray-500 group-hover:bg-burgundy group-hover:text-white group-hover:border-burgundy transition-all duration-300 flex-shrink-0 ${isExpanded ? "rotate-90" : ""}`}>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-5">
                                <div className="bg-[#f8fafc] border border-[#E2E8F0] rounded-2xl p-5 space-y-4">
                                  <p className="font-outfit text-[13px] text-gray-600 font-light leading-relaxed">
                                    {notice.excerpt}
                                  </p>
                                  <div className="grid grid-cols-2 gap-3 border-t border-[#E2E8F0] pt-3">
                                    <div>
                                      <span className="text-[9px] font-montserrat font-bold text-burgundy uppercase tracking-wider block mb-0.5">DEPARTMENT</span>
                                      <span className="text-[12px] font-outfit font-medium text-[#0f172a]">{notice.department}</span>
                                    </div>
                                    <div>
                                      <span className="text-[9px] font-montserrat font-bold text-burgundy uppercase tracking-wider block mb-0.5">PUBLISHED BY</span>
                                      <span className="text-[12px] font-outfit font-medium text-[#0f172a]">{notice.publishedBy || "University Administration"}</span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                                    {notice.type === "pdf" && (
                                      <a
                                        href={notice.downloadUrl || "#"}
                                        className="bg-burgundy hover:bg-burgundy-light text-white font-montserrat text-[10px] font-bold tracking-widest px-5 py-2.5 rounded-full text-center shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-burgundy/20"
                                      >
                                        <Download className="w-3.5 h-3.5" />
                                        DOWNLOAD PDF {notice.fileSize && `(${notice.fileSize})`}
                                      </a>
                                    )}
                                    {(notice.type === "link" || notice.type === "external" || notice.type === "article") && (
                                      <a
                                        href={notice.linkUrl || "#"}
                                        className="bg-burgundy hover:bg-burgundy-light text-white font-montserrat text-[10px] font-bold tracking-widest px-5 py-2.5 rounded-full text-center shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-burgundy/20"
                                      >
                                        <ExternalLink className="w-3.5 h-3.5" /> VIEW FULL NOTICE
                                      </a>
                                    )}
                                    <button
                                      onClick={(e) => { e.stopPropagation(); setExpandedNotice(null); }}
                                      className="bg-white hover:bg-slate-50 text-[#0f172a] font-montserrat text-[10px] font-bold tracking-widest px-5 py-2.5 rounded-full text-center border border-[#E2E8F0] transition-all duration-300 cursor-pointer"
                                    >
                                      CLOSE
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-16 text-center"
                  >
                    <FileText className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                    <p className="font-outfit text-sm text-gray-400 font-medium mb-2">
                      No notices found for this filter.
                    </p>
                    <button
                      onClick={() => { setActiveTileId(null); setSearchQuery(""); }}
                      className="text-burgundy font-montserrat text-[10px] font-bold tracking-widest uppercase hover:text-burgundy-dark transition-colors cursor-pointer"
                    >
                      RESET FILTERS
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
