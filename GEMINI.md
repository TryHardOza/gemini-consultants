# Project Memory & Operating Guidelines: Gemini Consultants

This document serves as the persistent memory, architectural reference, and operational rules for **Gemini Consultants**.

---

## 1. Brand Identity & Strict Constraints

- **Firm Name**: Gemini Consultants
- **Tagline**: Tax • GST • Financial Solutions (or *Tax, GST & Business Solutions*)
- **Principal Advisor**: Jeet Oza
- **Direct Phone**: `+91 88306 34354` (`tel:8830634354`)
- **Email**: `jeetoza12@protonmail.com`
- **WhatsApp Consultation Link**: `https://wa.me/918830634354?text=...`
- **Official Brand Mark**: GC monogram badge with Cinzel/Plus Jakarta Sans typography.

> [!CAUTION]
> **CRITICAL RULE: ZERO LOCATION REFERENCES**
> Never include any city, state, pin code, or regional identifiers anywhere on the website, metadata, JSON-LD schemas, business cards, or code comments. The firm operates with a strictly nationwide (pan-India) digital advisory mandate.

---

## 2. Core Practice Areas (Strict 1:1 Parity)

There are exactly **5 core practice areas**. The official business card, the hero overview, the services track, and the consultation router must maintain **1:1 alignment** across all 5 areas:

1. **Direct Taxation (DT)**
   - ITR filing (ITR-1 through ITR-7).
   - Section 44ADA 50% presumptive taxation for professionals, freelancers, and tech creators.
   - Section 194J TDS refund recoveries.
   - Capital gains calculation and portfolio tax planning.
2. **Goods & Services Tax (GST)**
   - GST registration and threshold advisory.
   - Monthly/quarterly compliance: GSTR-1, GSTR-3B, GSTR-9 annual returns.
   - 2B Input Tax Credit (ITC) reconciliation.
   - Letter of Undertaking (LUT) for zero-rated export of digital services/goods without payment of IGST.
3. **Startup & Business Setup**
   - Partnership deeds drafting compliant with Section 40(b) (remuneration & interest optimization).
   - MSME Udyam registration, Shop Act licenses, PAN/TAN issuance.
   - Current bank account facilitation and founder compliance structuring.
4. **Co-operative Housing Societies (CHS)**
   - Monthly maintenance billings and member dues ledgers.
   - Statutory registers maintenance (Form "I" and "J" membership registers).
   - Computerized income & expenditure accounts, balance sheets, and statutory audit readiness.
5. **Accounting & Bank Loan CMA**
   - Credit Monitoring Arrangement (CMA) data preparation for Cash Credit (CC), Overdraft (OD), and Term Loans.
   - Ratio analysis, drawing power calculation, and bank-approved financial statements.

---

## 3. UI/UX & Design System Architecture

- **Visual Palette**:
  - **Light Mode**: Editorial Warm Ivory (`#FBF9F5` page, `#F3EFE8` surface, `#FFFFFF` cards).
  - **Dark Mode**: Pure OLED Black (`#000000` page, `#0B0B0C` surface, `#141416` cards). Zero navy/blue tint.
  - **Accents**: Champagne Gold (`#855F20` light, `#C19A5B` dark/card vector icons) meeting WCAG AA contrast (>= 4.5:1).
- **Typography Hierarchy**:
  - Headings: *Cormorant Garamond* (editorial serif).
  - Body & UI: *Plus Jakarta Sans* (modern geometric sans-serif).
  - Brand Mark: *Cinzel*.
  - Fonts must be preloaded non-blocking: `<link rel="preload" as="style" ... onload="this.media='all'">`.
- **Layout Principles**:
  - **Clean Hero**: The hero section must remain spacious and uncluttered. **Do NOT reintroduce the 4 trust/metric stats cards strip** into the hero.
  - **Mobile Horizontal Scroll**: `#practiceTabs` uses touch scroll snap. Its parent must **never** have `overflow-hidden` that clips the leftmost snap margins or cuts off the first tab.
  - **Universal Direct Calling**: Direct phone call access (`+91 88306 34354`) must remain immediately available without requiring a business card click:
    - Desktop Header: Telephone link pill.
    - Mobile Header: Dedicated touch icon button (36x36px).
    - Hero: Dedicated "Direct Call" button.
    - Floating Concierge: Dual pill `[ WhatsApp | Call ]`.
    - Practice Cards & Modal: Quick call actions.

---

## 4. Asset Generation & Performance Budget

- **Business Card Assets**:
  - Master file: `website/business_card.png` (1702 x 976 px).
  - Compressed WebP: `website/business_card.webp` (~82 KB, PIL quality=92, method=6).
  - Served via progressive `<picture>` element with `<link rel="preload" as="image" href="business_card.webp" type="image/webp" fetchpriority="high">`.
  - Whenever `business_card.png` is modified, regenerate `business_card.webp` immediately.
- **Hero Dark Background**:
  - `website/hero_dark_bg.webp` (~29 KB) with JPG fallback.
- **Dependencies & Scripts**:
  - CDN scripts must pin exact versions (e.g. `lucide@0.468.0`) to avoid HTTP 302 redirect penalties.
  - Scripts deferred to the footer; resize/scroll event listeners use `{ passive: true }`.

---

## 5. Deployment & Release Workflow

1. **Git Repository**:
   - Location: `d:\gemini consultants\website`
   - Remote: `origin` -> `https://github.com/TryHardOza/gemini-consultants.git`
   - Production Branch: `main`
2. **Live Hosting**:
   - Platform: Netlify (`https://geminiconsultants.netlify.app/`)
   - Automatic continuous deployment triggered upon pushes to `origin/main`.
3. **Offline Deployment Archive**:
   - Always refresh `d:\gemini consultants\gemini-consultants-website.zip` whenever changes are committed to ensure local archive parity.
