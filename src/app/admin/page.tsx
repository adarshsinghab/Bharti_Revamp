"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  User,
  ShieldCheck,
  Plus,
  Trash2,
  Edit3,
  FileText,
  Download,
  ExternalLink,
  Search,
  CheckCircle2,
  AlertCircle,
  Pin,
  Sparkles,
  LogOut,
  RefreshCw,
  Eye,
  ArrowLeft,
  Calendar,
  Building2,
  ChevronRight,
  ShieldAlert,
  X
} from "lucide-react";
import { NoticeItem, NoticeCategory, NoticeType, CATEGORY_FILTERS } from "@/data/noticesData";
import {
  getStoredNotices,
  addNoticeItem,
  updateNoticeItem,
  deleteNoticeItem,
  resetNoticesToDefault
} from "@/data/noticesStore";

export default function AdminDashboard() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Notices Management State
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState<NoticeItem | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Admin View Mode Tab
  const [activeAdminTab, setActiveAdminTab] = useState<"notices" | "erp" | "analytics">("notices");

  // Form State for Adding / Editing Notice
  const [formData, setFormData] = useState({
    title: "",
    category: "circulars" as NoticeCategory,
    type: "pdf" as NoticeType,
    department: "Office of the Registrar",
    excerpt: "",
    fileSize: "1.2 MB",
    downloadUrl: "/notices/official_notice.pdf",
    linkUrl: "#",
    publishedBy: "Registrar Secretariat",
    isImportant: false,
    isNew: true,
    date: "22 Jul 2026"
  });

  // Check existing session
  useEffect(() => {
    const session = sessionStorage.getItem("bu_admin_session");
    if (session === "true") {
      setIsAuthenticated(true);
    }
    setNotices(getStoredNotices());
  }, []);

  const triggerNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "nishu123" && password === "nishu123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("bu_admin_session", "true");
      setLoginError("");
      triggerNotification("Authenticated successfully as Super Admin");
    } else {
      setLoginError("Invalid credentials. For testing use ID: nishu123 / Pass: nishu123");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("bu_admin_session");
  };

  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.excerpt.trim()) {
      triggerNotification("Title and excerpt are required fields.", "error");
      return;
    }

    if (editingNotice) {
      const updated = updateNoticeItem(editingNotice.id, formData);
      setNotices(updated);
      triggerNotification("Notice updated successfully!");
    } else {
      const created = addNoticeItem(formData);
      setNotices(getStoredNotices());
      triggerNotification(`New Notice published: "${created.title.slice(0, 30)}..."`);
    }

    setShowAddModal(false);
    setEditingNotice(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      category: "circulars",
      type: "pdf",
      department: "Office of the Registrar",
      excerpt: "",
      fileSize: "1.2 MB",
      downloadUrl: "/notices/official_document.pdf",
      linkUrl: "#",
      publishedBy: "Registrar Secretariat",
      isImportant: false,
      isNew: true,
      date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    });
  };

  const handleEditClick = (notice: NoticeItem) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      category: notice.category,
      type: notice.type,
      department: notice.department,
      excerpt: notice.excerpt,
      fileSize: notice.fileSize || "1.2 MB",
      downloadUrl: notice.downloadUrl || "#",
      linkUrl: notice.linkUrl || "#",
      publishedBy: notice.publishedBy || "Registrar Secretariat",
      isImportant: !!notice.isImportant,
      isNew: !!notice.isNew,
      date: notice.date
    });
    setShowAddModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this official notice?")) {
      const updated = deleteNoticeItem(id);
      setNotices(updated);
      triggerNotification("Notice deleted successfully.");
    }
  };

  const handleReset = () => {
    if (confirm("Reset notices database to factory defaults?")) {
      const defaults = resetNoticesToDefault();
      setNotices(defaults);
      triggerNotification("Notices reset to default dataset.");
    }
  };

  const filteredNotices = useMemo(() => {
    return notices.filter((n) => {
      const matchCat = selectedCategory === "all" || n.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.department.toLowerCase().includes(q) ||
        n.excerpt.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [notices, selectedCategory, searchQuery]);

  // ═════════════════════════════════════════════════════════
  // LIGHT THEME UNAUTHENTICATED LOGIN SCREEN (MATCHING WEBSITE)
  // ═════════════════════════════════════════════════════════
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FCFAF7] text-[#0f172a] flex flex-col justify-center items-center px-6 relative overflow-hidden font-outfit">
        {/* Subtle Radial Glows matching website */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top return home link */}
        <a
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-xs font-montserrat font-bold tracking-widest text-gray-500 hover:text-burgundy transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> RETURN TO VISHWAVIDYALAYA HOMEPAGE
        </a>

        <div className="max-w-md w-full relative z-10">
          {/* Logo & Title Header */}
          <div className="text-center mb-8">
            <img src="/img/logo.png" alt="Bharti Vishwavidyalaya Crest" className="h-14 w-auto object-contain mx-auto mb-4" />
            <span className="font-montserrat text-[9px] font-bold text-gold-dark tracking-[0.25em] uppercase block mb-1">
              BHARTI VISHWAVIDYALAYA DURG
            </span>
            <h1 className="font-outfit text-3xl font-extrabold tracking-tight text-[#0f172a] mb-2">
              ERP & Admin CMS Gateway
            </h1>
            <p className="font-outfit text-xs text-gray-500 font-light max-w-xs mx-auto leading-relaxed">
              Secure institutional administrative login for managing circulars, notices, datesheets & official publications.
            </p>
          </div>

          {/* Login Form Card — Light Theme */}
          <form
            onSubmit={handleLogin}
            className="bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-xl space-y-5 relative depth-card"
          >
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-3 text-xs font-outfit flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block font-montserrat text-[10px] font-bold tracking-wider text-gray-700 uppercase mb-1.5">
                Admin Username / ERP ID
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Enter admin ID (nishu123)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-xs font-outfit text-[#0f172a] placeholder-gray-400 focus:outline-none focus:border-burgundy focus:bg-white focus:ring-2 focus:ring-burgundy/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block font-montserrat text-[10px] font-bold tracking-wider text-gray-700 uppercase mb-1.5">
                Secret Access Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="Enter password (nishu123)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-xs font-outfit text-[#0f172a] placeholder-gray-400 focus:outline-none focus:border-burgundy focus:bg-white focus:ring-2 focus:ring-burgundy/10 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-burgundy hover:bg-burgundy-light text-white font-montserrat text-xs font-bold tracking-widest uppercase py-3.5 rounded-xl shadow-lg hover:shadow-burgundy/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              AUTHENTICATE ADMIN PORTAL <ChevronRight className="w-4 h-4" />
            </button>

            {/* Test Credentials Helper Callout */}
            <div className="pt-4 border-t border-[#E2E8F0] text-center bg-amber-50/50 rounded-2xl p-3 border">
              <span className="font-montserrat text-[9px] font-bold text-amber-800 tracking-wider uppercase block mb-1">
                🔑 Testing Credentials
              </span>
              <p className="font-outfit text-[11px] text-gray-600">
                Username: <code className="text-burgundy font-bold bg-white px-1.5 py-0.5 rounded border border-amber-200 font-mono">nishu123</code> &nbsp;|&nbsp; Password: <code className="text-burgundy font-bold bg-white px-1.5 py-0.5 rounded border border-amber-200 font-mono">nishu123</code>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // ═════════════════════════════════════════════════════════
  // LIGHT THEME AUTHENTICATED ADMIN DASHBOARD
  // ═════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#0f172a] flex flex-col font-outfit">

      {/* Notification Banner */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className={`fixed top-4 right-4 z-[99999] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-outfit text-white ${notification.type === "success" ? "bg-emerald-600" : "bg-red-600"
              }`}
          >
            {notification.type === "success" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ADMIN TOP NAVIGATION BAR — LIGHT THEME */}
      <header className="bg-white text-[#0f172a] sticky top-0 z-40 border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3 group">
              <img src="/img/logo.png" alt="Bharti Crest" className="h-10 w-auto object-contain" />
              <div>
                <span className="font-outfit text-lg font-extrabold tracking-tight block leading-none text-[#0f172a]">
                  Bharti Vishwavidyalaya
                </span>
                <span className="font-montserrat text-[8px] font-bold tracking-[0.2em] text-gold-dark uppercase block">
                  ADMINISTRATIVE CONTROL CMS
                </span>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-[#f8fafc] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-burgundy" />
              <span className="font-montserrat text-[10px] font-bold text-gray-600 uppercase">
                Active User: <strong className="text-[#0f172a]">nishu123</strong> (Super Admin)
              </span>
            </div>

            <a
              href="/"
              target="_blank"
              className="bg-[#f8fafc] hover:bg-slate-100 text-[#0f172a] border border-[#E2E8F0] font-montserrat text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-burgundy" /> LIVE WEBSITE
            </a>

            <button
              onClick={handleLogout}
              className="bg-burgundy/10 hover:bg-burgundy text-burgundy hover:text-white border border-burgundy/20 font-montserrat text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> LOGOUT
            </button>
          </div>
        </div>
      </header>

      {/* MAIN ADMIN BODY */}
      <main className="max-w-[1600px] w-full mx-auto px-6 md:px-12 py-10 flex-1">

        {/* Dashboard Title & Actions Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-burgundy" />
              <span className="font-montserrat text-xs font-bold text-burgundy tracking-[0.2em] uppercase">
                CMS CONTROL PANEL
              </span>
            </div>
            <h1 className="font-outfit text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Manage Notices, Circulars & Official Announcements
            </h1>
            <p className="font-outfit text-xs text-gray-500 font-light mt-1">
              Changes published here will instantly appear on the live university homepage notice board and circular archives.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handleReset}
              className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 font-montserrat text-[10px] font-bold tracking-wider uppercase px-4 py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-gray-500" /> RESET TO DEFAULT DATA
            </button>

            <button
              onClick={() => {
                resetForm();
                setEditingNotice(null);
                setShowAddModal(true);
              }}
              className="bg-burgundy hover:bg-burgundy-light text-white font-montserrat text-[10px] font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-lg hover:shadow-burgundy/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" /> PUBLISH NEW NOTICE
            </button>
          </div>
        </div>

        {/* SUPER ADMIN MODE TABS */}
        <div className="flex items-center gap-3 mb-8 border-b border-[#E2E8F0] pb-4 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveAdminTab("notices")}
            className={`px-5 py-2.5 rounded-full font-montserrat text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${activeAdminTab === "notices"
                ? "bg-burgundy text-white shadow-md shadow-burgundy/20"
                : "bg-white text-gray-600 border border-[#E2E8F0] hover:bg-gray-100"
              }`}
          >
            NOTICES & CIRCULARS CMS
          </button>

          <button
            onClick={() => setActiveAdminTab("erp")}
            className={`px-5 py-2.5 rounded-full font-montserrat text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${activeAdminTab === "erp"
                ? "bg-burgundy text-white shadow-md shadow-burgundy/20"
                : "bg-white text-gray-600 border border-[#E2E8F0] hover:bg-gray-100"
              }`}
          >
            SUPER ADMIN ERP ROLES
          </button>

          <button
            onClick={() => setActiveAdminTab("analytics")}
            className={`px-5 py-2.5 rounded-full font-montserrat text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${activeAdminTab === "analytics"
                ? "bg-burgundy text-white shadow-md shadow-burgundy/20"
                : "bg-white text-gray-600 border border-[#E2E8F0] hover:bg-gray-100"
              }`}
          >
            SYSTEM ANALYTICS & AUDIT
          </button>
        </div>

        {activeAdminTab === "notices" && (
          <>
            {/* FILTER & SEARCH CONTROL STRIP */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 mb-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Filter Chips */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                <span className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-wider pr-2">Filter:</span>
                {CATEGORY_FILTERS.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-4 py-2 rounded-full font-montserrat text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${selectedCategory === cat.key
                        ? "bg-burgundy text-white shadow-md shadow-burgundy/20"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search published notices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-full pl-10 pr-4 py-2 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* NOTICES LIST TABLE */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] border-b border-[#E2E8F0] font-montserrat text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">
                      <th className="py-4 px-6">Status & Tag</th>
                      <th className="py-4 px-6">Notice Title & Details</th>
                      <th className="py-4 px-6">Issuing Department</th>
                      <th className="py-4 px-6">Date</th>
                      <th className="py-4 px-6">Type & Link</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] font-outfit text-xs text-gray-700">
                    {filteredNotices.length > 0 ? (
                      filteredNotices.map((notice) => (
                        <tr key={notice.id} className="hover:bg-warm-white/60 transition-colors group">
                          {/* Status Badges */}
                          <td className="py-4 px-6 align-top">
                            <div className="flex flex-col items-start gap-1.5">
                              <span className="bg-burgundy/10 text-burgundy font-montserrat font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase">
                                {notice.category}
                              </span>
                              {notice.isImportant && (
                                <span className="bg-amber-500 text-white font-montserrat font-extrabold text-[8px] px-2 py-0.5 rounded flex items-center gap-1 uppercase">
                                  <Pin className="w-2.5 h-2.5" /> PINNED
                                </span>
                              )}
                              {notice.isNew && (
                                <span className="bg-red-500 text-white font-montserrat font-extrabold text-[8px] px-2 py-0.5 rounded uppercase">
                                  NEW
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Title & Excerpt */}
                          <td className="py-4 px-6 align-top max-w-md">
                            <h3 className="font-bold text-sm text-[#0f172a] group-hover:text-burgundy transition-colors mb-1 line-clamp-2">
                              {notice.title}
                            </h3>
                            <p className="text-gray-500 text-xs font-light line-clamp-2 leading-relaxed">
                              {notice.excerpt}
                            </p>
                          </td>

                          {/* Department */}
                          <td className="py-4 px-6 align-top font-medium text-gray-800">
                            {notice.department}
                          </td>

                          {/* Date */}
                          <td className="py-4 px-6 align-top whitespace-nowrap text-gray-500 font-montserrat text-[11px]">
                            {notice.date}
                          </td>

                          {/* Type & Link */}
                          <td className="py-4 px-6 align-top">
                            <span className="inline-flex items-center gap-1 font-montserrat text-[10px] font-bold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg uppercase">
                              {notice.type === "pdf" ? <FileText className="w-3 h-3 text-burgundy" /> : <ExternalLink className="w-3 h-3 text-blue-600" />}
                              {notice.type.toUpperCase()} ({notice.fileSize || "LINK"})
                            </span>
                          </td>

                          {/* Action buttons */}
                          <td className="py-4 px-6 align-top text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEditClick(notice)}
                                className="p-2 rounded-lg bg-gray-100 hover:bg-burgundy hover:text-white text-gray-600 transition-colors cursor-pointer"
                                title="Edit Notice"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDelete(notice.id)}
                                className="p-2 rounded-lg bg-gray-100 hover:bg-red-600 hover:text-white text-gray-600 transition-colors cursor-pointer"
                                title="Delete Notice"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-gray-400">
                          No published notices match the current filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* SUPER ADMIN ERP ROLES & PERMISSIONS VIEW */}
        {activeAdminTab === "erp" && (
          <div className="space-y-6">
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-montserrat text-[9px] font-bold text-gold-dark tracking-widest uppercase block mb-1">
                    ERP ACCESS CONTROL MATRIX
                  </span>
                  <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a]">
                    Super Admin Role Management & System Privileges
                  </h2>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-montserrat font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ERP SSO GATEWAY ONLINE
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { role: "Super Admin", user: "nishu123", access: "Full Control (Read/Write/Delete/System Config)", status: "Active Session" },
                  { role: "Academic Registrar", user: "registrar_bu", access: "Publish Circulars & Academic Calendars", status: "Enabled" },
                  { role: "Exam Controller", user: "exam_cell_bu", access: "Publish Datesheets & Results", status: "Enabled" },
                  { role: "Student Welfare (DSW)", user: "dsw_bu", access: "Scholarships & Hostel Notifications", status: "Enabled" },
                ].map((r, idx) => (
                  <div key={idx} className="bg-[#f8fafc] border border-[#E2E8F0] rounded-2xl p-5">
                    <span className="font-montserrat text-[10px] font-bold text-burgundy uppercase block mb-1">{r.role}</span>
                    <span className="font-outfit text-base font-bold text-[#0f172a] block mb-2">{r.user}</span>
                    <p className="font-outfit text-xs text-gray-500 font-light leading-relaxed mb-4">{r.access}</p>
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-[9px] font-montserrat font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-[#f8fafc] border border-[#E2E8F0] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-outfit text-base font-bold text-[#0f172a] mb-1">Single Sign-On (SSO) Single Access Token</h4>
                  <p className="font-outfit text-xs text-gray-600 font-light">
                    Testing credential <code className="text-burgundy font-bold bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">nishu123</code> grants global Super Admin privileges across all faculties.
                  </p>
                </div>
                <button className="bg-burgundy text-white font-montserrat text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider shrink-0 cursor-pointer shadow-md">
                  GENERATE NEW AUTH TOKEN
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SYSTEM ANALYTICS VIEW */}
        {activeAdminTab === "analytics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
                <span className="font-montserrat text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">TOTAL PUBLISHED NOTICES</span>
                <span className="font-outfit text-3xl font-extrabold text-[#0f172a]">{notices.length}</span>
                <span className="text-xs text-emerald-600 font-montserrat font-bold block mt-1">✓ Live Syncing</span>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
                <span className="font-montserrat text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">PINNED ANNOUNCEMENTS</span>
                <span className="font-outfit text-3xl font-extrabold text-burgundy">{notices.filter(n => n.isImportant).length}</span>
                <span className="text-xs text-gray-500 font-montserrat block mt-1">Featured Spotlight</span>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
                <span className="font-montserrat text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">ACTIVE ERP USERS</span>
                <span className="font-outfit text-3xl font-extrabold text-[#0f172a]">4</span>
                <span className="text-xs text-emerald-600 font-montserrat font-bold block mt-1">1 Super Admin Active</span>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
                <span className="font-montserrat text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">SYSTEM HEALTH STATUS</span>
                <span className="font-outfit text-3xl font-extrabold text-emerald-600">100%</span>
                <span className="text-xs text-gray-500 font-montserrat block mt-1">Next.js Turbopack</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ═════════════════════════════════════════════════════════
          ADD / EDIT NOTICE MODAL OVERLAY
          ═════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4 py-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-gray-100 relative overflow-hidden my-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-burgundy to-gold" />

              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingNotice(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-burgundy" />
                <span className="font-montserrat text-xs font-bold text-burgundy tracking-widest uppercase">
                  {editingNotice ? "EDIT OFFICIAL CIRCULAR" : "NEW PUBLICATION ENTRY"}
                </span>
              </div>

              <h2 className="font-outfit text-2xl font-extrabold text-[#0f172a] mb-6">
                {editingNotice ? "Update Notice Details" : "Publish Official Notice to Portal"}
              </h2>

              <form onSubmit={handleSaveNotice} className="space-y-4">
                {/* Notice Title */}
                <div>
                  <label className="block font-montserrat text-[10px] font-bold text-gray-700 uppercase mb-1">
                    Notice Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. End-Semester Examination Schedule for B.Tech & MCA Spring 2026"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                  />
                </div>

                {/* Grid: Category & Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-montserrat text-[10px] font-bold text-gray-700 uppercase mb-1">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as NoticeCategory })}
                      className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                    >
                      <option value="admissions">Admissions</option>
                      <option value="examinations">Examinations</option>
                      <option value="circulars">Circulars</option>
                      <option value="scholarships">Scholarships</option>
                      <option value="events">Events & Conferences</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-montserrat text-[10px] font-bold text-gray-700 uppercase mb-1">
                      Document / Resource Type *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as NoticeType })}
                      className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                    >
                      <option value="pdf">PDF Document Attachment</option>
                      <option value="link">Internal Page Link</option>
                      <option value="article">Text Article / Press Release</option>
                      <option value="external">External Portal / URL</option>
                    </select>
                  </div>
                </div>

                {/* Grid: Department & Published Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-montserrat text-[10px] font-bold text-gray-700 uppercase mb-1">
                      Issuing Department *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Controller of Examinations"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-montserrat text-[10px] font-bold text-gray-700 uppercase mb-1">
                      Published Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 22 Jul 2026"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* PDF / File Attachment or Link URL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-montserrat text-[10px] font-bold text-gray-700 uppercase mb-1">
                      PDF Document URL / Path
                    </label>
                    <input
                      type="text"
                      placeholder="/notices/official_circular.pdf"
                      value={formData.downloadUrl}
                      onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-montserrat text-[10px] font-bold text-gray-700 uppercase mb-1">
                      File Size Display
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1.8 MB"
                      value={formData.fileSize}
                      onChange={(e) => setFormData({ ...formData, fileSize: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Excerpt / Summary */}
                <div>
                  <label className="block font-montserrat text-[10px] font-bold text-gray-700 uppercase mb-1">
                    Notice Excerpt / Summary *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Brief 2-3 sentence overview of the circular content for students and faculty..."
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full bg-[#f8fafc] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs font-outfit text-[#0f172a] focus:outline-none focus:border-burgundy focus:bg-white transition-all"
                  />
                </div>

                {/* Switches: Is Important & Is New */}
                <div className="flex items-center gap-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer font-montserrat text-xs text-gray-700">
                    <input
                      type="checkbox"
                      checked={formData.isImportant}
                      onChange={(e) => setFormData({ ...formData, isImportant: e.target.checked })}
                      className="w-4 h-4 accent-burgundy rounded cursor-pointer"
                    />
                    <span>Pin to Top (Featured Notice)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer font-montserrat text-xs text-gray-700">
                    <input
                      type="checkbox"
                      checked={formData.isNew}
                      onChange={(e) => setFormData({ ...formData, isNew: e.target.checked })}
                      className="w-4 h-4 accent-burgundy rounded cursor-pointer"
                    />
                    <span>Highlight as "NEW" Badge</span>
                  </label>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingNotice(null);
                    }}
                    className="px-6 py-2.5 rounded-full font-montserrat text-xs font-bold text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-burgundy hover:bg-burgundy-light text-white font-montserrat text-xs font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-burgundy/20 transition-all duration-300 flex items-center gap-2 cursor-pointer uppercase tracking-wider"
                  >
                    {editingNotice ? "Save Changes" : "Publish Notice Live"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
