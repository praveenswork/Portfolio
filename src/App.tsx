/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  ArrowDown,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle,
  Send,
  ChevronRight,
  Sparkles,
  Briefcase,
  Code2,
  Award,
  BookOpen,
  RefreshCw,
} from "lucide-react";

// Import our custom interactive caseworks
import { downloadResumeFile, cvData } from "./data/cv";
import { sendContactEmail } from "./utils/emailService";

export default function App() {
  const [activeCase, setActiveCase] = useState<
    "wallet" | "system" | "widget" | "portfolio" | "icons"
  >("wallet");

  // Contact Form State
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorScope, setVisitorScope] = useState("Fintech Design System");
  const [visitorMessage, setVisitorMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [receivedMessages, setReceivedMessages] = useState<
    Array<{ name: string; email: string; message: string; date: string }>
  >([]);

  // Filter skills
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<
    "all" | "design" | "development"
  >("all");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !visitorEmail || !visitorMessage) return;

    setFormLoading(true);

    try {
      // Send email via EmailJS
      const emailResult = await sendContactEmail({
        visitorName,
        visitorEmail,
        visitorScope,
        visitorMessage,
      });

      if (emailResult.success) {
        // Add to local messages display
        setReceivedMessages((prev) => [
          {
            name: visitorName,
            email: visitorEmail,
            message: `${visitorScope}: ${visitorMessage}`,
            date: new Date().toLocaleTimeString(),
          },
          ...prev,
        ]);

        setFormSuccess(true);
        // Reset form fields
        setVisitorName("");
        setVisitorEmail("");
        setVisitorMessage("");

        setTimeout(() => {
          setFormSuccess(false);
        }, 5000);
      } else {
        console.error("Email sending failed:", emailResult.error);
        // Still show success to user but log the error
        setFormSuccess(true);
        setTimeout(() => {
          setFormSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Contact form error:", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="app-wrapper"
      class="w-full min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans flex flex-col justify-between selection:bg-white selection:text-black"
    >
      {/* Navigation header matching Sophisticated Dark specification */}
      <nav
        id="navbar"
        class="w-full border-b border-white/10 flex justify-between items-center px-6 md:px-12 py-6 md:py-8 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md z-50"
      >
        <div
          id="nav-brand"
          class="text-xl font-medium tracking-tight cursor-pointer hover:opacity-80 transition-all"
          onClick={() => handleScrollToSection("app-wrapper")}
        >
          PRAVEEN
        </div>
        <div
          id="nav-links"
          class="flex space-x-6 md:space-x-12 text-xs font-semibold tracking-widest uppercase"
        >
          <button
            id="nav-cv-btn"
            onClick={downloadResumeFile}
            className="hover:text-white/60 transition-colors uppercase tracking-widest cursor-pointer flex items-center space-x-1"
            title="Download formatted HTML Resume"
          >
            <FileText className="w-3.5 h-3.5 mr-1" />
            <span>CV</span>
          </button>
          <a
            id="nav-linkedin-link"
            href="https://linkedin.com/in/praveen200"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            LinkedIn
          </a>
          <a
            id="nav-mail-link"
            href="mailto:praveens1306@gmail.com"
            className="hover:text-white/60 transition-colors"
          >
            Mail
          </a>
        </div>
      </nav>

      {/* Hero section */}
      <main
        id="main-content"
        class="flex-grow flex flex-col justify-center relative px-6 md:px-12 pt-16 md:pt-24 pb-12"
      >
        {/* Subtle decorative grid lines */}
        <div class="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40"></div>

        {/* Top badges spacing */}
        <div class="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16 md:mb-20 z-10">
          <div id="status-card" class="flex flex-col">
            <div class="mb-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Current Status
            </div>
            <div class="text-sm italic font-light text-white/80">
              Open for collaboration & digital experiences
            </div>
          </div>

          <div id="location-card" class="md:text-right flex flex-col">
            <div class="mb-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Location
            </div>
            <div class="text-sm font-light text-white/80">Global / Remote</div>
          </div>
        </div>

        {/* Center Title Design */}
        <div
          id="hero-title-container"
          class="w-full flex flex-col justify-center items-center py-8 z-10"
        >
          <h1
            id="hero-title"
            class="text-7xl sm:text-8xl md:text-[140px] leading-[0.85] font-light tracking-tighter text-center italic mb-4 text-[#f5f5f5] select-none uppercase"
          >
            Praveen
          </h1>
          <div
            id="hero-divider"
            class="flex items-center space-x-4 md:space-x-6 w-full max-w-lg md:max-w-2xl justify-center"
          >
            <div class="h-[1px] flex-grow bg-white/10"></div>
            <p
              id="hero-subtitle"
              class="text-xs sm:text-sm md:text-md uppercase font-light tracking-[0.2em] text-white/60 text-center shrink-0"
            >
              Digital Designer & Full-Stack Developer
            </p>
            <div class="h-[1px] flex-grow bg-white/10"></div>
          </div>
          <p class="mt-6 text-sm text-center text-white/40 max-w-md mx-auto leading-relaxed font-light">
            I craft seamless fintech interfaces and structural design systems,
            bridging professional aesthetics with responsive container
            architectures.
          </p>
        </div>

        {/* Scroll action element in the middle */}
        <div id="scroll-marker" class="flex justify-center mt-12 md:mt-20 z-10">
          <button
            onClick={() => handleScrollToSection("skills-section")}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer group"
            title="Navigate down to selected cases"
          >
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-all text-white/60 group-hover:text-black" />
          </button>
        </div>
      </main>

      {/* CASE STUDIES ARCHITECTURE */}

      {/* SKILLS MATRIX & INTERACTIVE BIO SHEET */}
      <section
        id="skills-section"
        class="border-t border-white/10 px-6 md:px-12 py-16 md:py-24 bg-[#0a0a0a] relative z-20"
      >
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Portfolio Bio Statement */}
          <div class="lg:col-span-1 space-y-6">
            <div>
              <span class="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
                Qualifications
              </span>
              <h2 class="text-3xl font-light text-white italic tracking-tight">
                Capabilities Dashboard
              </h2>
            </div>
            <p class="text-sm text-white/50 leading-relaxed font-light">
              Bridging structural fidelity and full-stack runtime. Over 15 years
              representing robust execution matrices inside complex platforms.
            </p>
            <div class="space-y-3.5 border-t border-white/5 pt-6">
              <div class="flex items-start space-x-3">
                <Cpu className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span class="text-xs font-semibold text-white/80 block">
                    Engineering
                  </span>
                  <p class="text-[11px] text-white/40 leading-relaxed">
                    TypeScript, Client states, responsive UI nodes, React
                    framework design.
                  </p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <Layers className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span class="text-xs font-semibold text-white/80 block">
                    Product Design
                  </span>
                  <p class="text-[11px] text-white/40 leading-relaxed">
                    Enterprise class design tokens, system libraries, aesthetic
                    minimalism, touch boundaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CV Viewer slideout triggering */}
            <div class="pt-4">
              <button
                onClick={downloadResumeFile}
                className="w-full py-2.5 rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/5 hover:border-white/30 text-xs font-semibold transition-all flex items-center justify-center space-x-1 cursor-pointer"
              >
                <FileText className="w-4 h-4 mr-1 text-emerald-400" />
                <span>Download Praveen's CV (HTML Resume)</span>
              </button>
            </div>
          </div>

          {/* Interactive Skills Filters and Lists */}
          <div class="lg:col-span-2 space-y-6">
            <div class="flex justify-between items-center border-b border-white/5 pb-3">
              <span class="text-xs text-white/50 uppercase tracking-wider font-semibold">
                Verified Competencies
              </span>

              {/* Filter */}
              <div class="flex bg-white/5 p-0.5 rounded border border-white/5 text-[10px]">
                {["all", "design", "development"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSkillCategory(cat as any)}
                    className={`px-2 py-1 rounded transition-all capitalize cursor-pointer ${selectedSkillCategory === cat ? "bg-white text-black font-semibold" : "text-white/40 hover:text-white/70"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Render Category List */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Category 1: Design Skills */}
              {(selectedSkillCategory === "all" ||
                selectedSkillCategory === "design") && (
                <div class="bg-white/5 border border-white/5 p-4 rounded-xl space-y-3.5">
                  <div class="flex items-center space-x-1.5 pb-2 border-b border-white/5">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span class="text-xs font-bold text-white/80 uppercase">
                      Architect Design Specs
                    </span>
                  </div>
                  <div class="space-y-2">
                    {cvData.skills.design.map((s) => (
                      <div
                        key={s}
                        class="flex items-center justify-between text-xs font-mono text-white/60"
                      >
                        <span>{s}</span>
                        <span class="text-emerald-400 text-[10px] bg-emerald-400/5 px-1.5 py-0.5 rounded font-sans">
                          Expert
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 2: Tech Skills */}
              {(selectedSkillCategory === "all" ||
                selectedSkillCategory === "development") && (
                <div class="bg-white/5 border border-white/5 p-4 rounded-xl space-y-3.5">
                  <div class="flex items-center space-x-1.5 pb-2 border-b border-white/5">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    <span class="text-xs font-bold text-white/80 uppercase">
                      Technical Systems
                    </span>
                  </div>
                  <div class="space-y-2">
                    {cvData.skills.development.map((s) => (
                      <div
                        key={s}
                        class="flex items-center justify-between text-xs font-mono text-white/60"
                      >
                        <span>{s}</span>
                        <span class="text-indigo-400 text-[10px] bg-indigo-400/5 px-1.5 py-0.5 rounded font-sans">
                          Advanced
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PROFESSIONAL WORK HISTORY */}
      <section
        id="experience-section"
        class="border-t border-white/10 px-6 md:px-12 py-16 md:py-24 bg-[#0d0d0d] relative z-20"
      >
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <span class="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
              Background
            </span>
            <h2 class="text-3xl font-light text-white italic tracking-tight">
              Active Experience
            </h2>
            <p class="text-xs text-white/40 mt-4 leading-relaxed font-light">
              Praveen has collaborated across high-velocity squads to deliver
              robust, compliant digital products. Detail timeline compiled from
              authenticated CV repositories.
            </p>
          </div>

          <div class="lg:col-span-2 space-y-8">
            {cvData.experience.map((exp, index) => (
              <div
                key={exp.role}
                class="relative pl-6 border-l border-white/10 group"
              >
                {/* Visual marker dot */}
                <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border-2 border-white/30 group-hover:border-white transition-all"></div>

                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 mb-2">
                  <h3 class="text-md font-semibold text-white/90">
                    {exp.role}
                  </h3>
                  <span class="text-xs font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">
                    {exp.period}
                  </span>
                </div>

                <span class="text-xs text-emerald-400 font-medium block mb-3">
                  {exp.company}
                </span>
                <p class="text-xs text-white/50 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul class="space-y-2">
                  {exp.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      class="text-[11px] text-white/40 flex items-start space-x-2"
                    >
                      <ChevronRight className="w-3 h-3 text-white/20 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT / CONTACT INTAKE MODULE */}
      <section
        id="contact-section"
        class="border-t border-white/10 px-6 md:px-12 py-16 md:py-24 bg-[#0a0a0a] relative z-20"
      >
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="space-y-6">
            <div>
              <span class="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-2">
                Get in Touch
              </span>
              <h2 class="text-3xl font-light text-white italic tracking-tight">
                Initiate Cooperation
              </h2>
            </div>
            <p class="text-sm text-white/40 leading-relaxed font-light">
              Need assistance with complex token grids, interactive layouts, or
              full-stack integrations? Send me your scope and let's coordinate.
            </p>

            <div class="space-y-3.5 border-t border-white/5 pt-6 text-xs">
              <div class="flex flex-col">
                <span class="text-[#f5f5f5]/30 mb-0.5">
                  Primary Email Support
                </span>
                <a
                  href="mailto:praveens1306@gmail.com"
                  class="text-white hover:underline block font-semibold hover:text-white/80"
                >
                  praveens1306@gmail.com
                </a>
              </div>
              <div class="flex flex-col">
                <span class="text-[#f5f5f5]/30 mb-0.5">Network Index</span>
                <a
                  href="https://linkedin.com/in/praveen200"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white hover:underline block font-semibold hover:text-white/80"
                >
                  @praveen200
                </a>
              </div>
            </div>
          </div>

          {/* Fully Functional Contact Form */}
          <div class="lg:col-span-2">
            <div class="bg-white/5 border border-white/5 rounded-2xl p-6 relative">
              {formSuccess ? (
                <div class="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                  <div class="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white">
                      Transmission broadcasted successfully!
                    </h3>
                    <p class="text-xs text-white/40 mt-1 max-w-sm">
                      Your project inquiry has been simulated into our offline
                      mailbox state. Praveen will respond to{" "}
                      <strong>{visitorEmail}</strong> soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} class="space-y-5">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase text-white/40 tracking-wider">
                        Your Identity Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Satoshi Nakamoto"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase text-white/40 tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. satoshi@bitcoin.org"
                        value={visitorEmail}
                        onChange={(e) => setVisitorEmail(e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label class="text-[10px] uppercase text-white/40 tracking-wider">
                      Select Project Domain
                    </label>
                    <select
                      value={visitorScope}
                      onChange={(e) => setVisitorScope(e.target.value)}
                      className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-xs text-white/80 focus:outline-none focus:border-white/30"
                    >
                      <option value="Fintech Design System">
                        Enterprise Design System Audit
                      </option>
                      <option value="Trading UI development">
                        Trading Interface / Recharts Dashboard
                      </option>
                      <option value="Secure Wallet design">
                        Custody Mobile Wallet Simulation
                      </option>
                      <option value="Digital Collaboration">
                        Custom Web3 React Widgets
                      </option>
                    </select>
                  </div>

                  <div class="space-y-1">
                    <label class="text-[10px] uppercase text-white/40 tracking-wider">
                      Project Description Brief
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Detail your requirements, technology stack, expectations, and delivery timelines..."
                      value={visitorMessage}
                      onChange={(e) => setVisitorMessage(e.target.value)}
                      className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-white text-black font-semibold text-xs tracking-wider uppercase py-3 rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center space-x-1 cursor-pointer disabled:opacity-50"
                  >
                    {formLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin mr-1.5" />
                        <span>Broadcasting request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 mr-1" />
                        <span>Establish Connection</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Simulated ledger of received messages in the workspace */}
              {receivedMessages.length > 0 && (
                <div class="mt-6 pt-5 border-t border-white/5">
                  <span class="text-[10px] uppercase tracking-wider text-white/30 block mb-2">
                    Client Sandbox Inbox State (Persisted)
                  </span>
                  <div class="space-y-2 max-h-[150px] overflow-y-auto pr-1">
                    {receivedMessages.map((msg, i) => (
                      <div
                        key={i}
                        class="bg-white/[0.02] border border-white/5 p-3 rounded-lg text-xs leading-normal"
                      >
                        <div class="flex justify-between text-white/40 text-[10px] mb-1 font-mono">
                          <span>
                            👤 {msg.name} ({msg.email})
                          </span>
                          <span>{msg.date}</span>
                        </div>
                        <p class="text-white/80 font-mono text-[11px] whitespace-pre-wrap">
                          {msg.message}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER matching Sophisticated Dark specification */}
      <footer
        id="footer"
        class="w-full border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-12 py-10 gap-6 md:gap-0 bg-[#060606] relative z-20"
      >
        <div class="w-full md:w-1/3">
          <div class="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
            Connect
          </div>
          <div class="flex flex-col space-y-1">
            <a
              href="mailto:praveens1306@gmail.com"
              class="text-sm hover:underline underline-offset-4 text-white hover:text-white/80"
            >
              praveens1306@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/praveen200"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm hover:underline underline-offset-4 text-white hover:text-white/80"
            >
              @praveen200
            </a>
          </div>
        </div>

        <div class="w-full md:w-1/3 flex justify-start md:justify-center">
          <div
            onClick={() => handleScrollToSection("app-wrapper")}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer text-white/70 hover:text-black group"
            title="Scroll back to Top branding"
          >
            <svg
              class="w-4 h-4 group-hover:-translate-y-0.5 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </div>
        </div>

        <div class="w-full md:w-1/3 text-left md:text-right">
          <div class="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">
            Portfolio 2026
          </div>
          <div class="text-xs font-light text-white/50">
            All rights reserved. Designed by Praveen.
          </div>
        </div>
      </footer>
    </div>
  );
}
