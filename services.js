/**
 * Gemini Consultants - Enterprise Practice Data & Content Model
 * Core Services: Direct Tax (DT), Goods & Services Tax (GST), New Business & Startup Setup,
 * Co-operative Housing Society (CHS), and Accounting & Bank Loan CMA.
 * Zero location references. 100% pure black & high-contrast.
 */

const FIRM_CONFIG = {
    brand: {
        name: "GEMINI CONSULTANTS",
        tagline: "Tax • GST • Business Solutions",
        leadConsultant: "Jeet Oza",
        role: "Principal Tax Consultant & Financial Advisor",
        experienceBadge: "Premier Advisory Practice",
        phone: "8830634354",
        phoneInternational: "+91 88306 34354",
        email: "jeetoza12@protonmail.com"
    },

    // Trust Metrics for Hero
    stats: [
        { label: "Audit Accuracy Rate", value: "100%", sub: "Full AIS/TIS Reconciliation" },
        { label: "Creator Tax Savings", value: "Sec 44ADA", sub: "Flat 50% Deemed Profit" },
        { label: "Startup Onboarding", value: "Turnkey", sub: "Deeds u/s 40(b) & MSME" },
        { label: "Notice Philosophy", value: "Zero Notice", sub: "Pre-emptive Dept. Defense" }
    ],

    // 5 Comprehensive Practice Verticals
    practiceAreas: [
        {
            id: "direct-tax",
            badge: "Direct Tax (DT)",
            shortTitle: "Direct Tax & ITR",
            title: "Direct Taxation (DT) & Tax Defense",
            subtitle: "Personal & business ITR filings, Section 44ADA for creators, capital gains, and scrutiny defense",
            icon: "scale",
            summary: "End-to-end direct tax advisory engineered for content creators, new businesses, salaried executives, and established firms. We maximize legal tax deductions under Section 44ADA, recover withheld Section 194J TDS refunds, and forensically reconcile every filing against ITD databases.",
            deliverables: [
                {
                    head: "Section 44ADA Presumptive Tax for Creators & Freelancers",
                    desc: "Declare only 50% of your gross digital receipts (up to ₹75 Lakhs) as taxable income with zero requirement to maintain tedious accounts or ledgers."
                },
                {
                    head: "Section 194J TDS Refund Extraction",
                    desc: "Reclaim 10% or 2% TDS deducted by influencer agencies, brand sponsors, hospitals, and corporate clients directly back into your bank account."
                },
                {
                    head: "Capital Gains & Multi-Broker Tradebooks (ITR-2 / ITR-3)",
                    desc: "Aggregation of equities, mutual funds, real estate sales, and F&O trading turnover with 8-year loss carryforward optimization."
                },
                {
                    head: "Salaried & Executive Tax Optimization (ITR-1 / ITR-2)",
                    desc: "Form 16 cross-verification, HRA, home loan deductions, Section 80C/80D optimizations, and ESOP stock taxation."
                },
                {
                    head: "100% AIS, TIS & Form 26AS Scrutiny Reconciliation",
                    desc: "Pre-filing cross-verification eliminating automated mismatch notices and high-value financial transaction scrutiny."
                },
                {
                    head: "Departmental Notice Defense & Defective Returns",
                    desc: "Formulating factual, statute-backed responses to Section 143(1) intimations, 139(9) defect notices, and 148 reassessment notices."
                }
            ]
        },
        {
            id: "gst-compliance",
            badge: "Indirect Tax (GST)",
            shortTitle: "GST Compliance",
            title: "Goods & Services Tax (GST)",
            subtitle: "Registrations, monthly returns, 2B ITC matching, and zero-tax LUT export for creators",
            icon: "receipt",
            summary: "Comprehensive indirect tax framework safeguarding your input tax credits, ensuring error-free periodic filings, and providing zero-tax GST export filings for creators and digital businesses with foreign revenue.",
            deliverables: [
                {
                    head: "New GST Registrations & Threshold Advisory",
                    desc: "Principal and additional place of business registrations, composition scheme advisory, and e-commerce seller onboarding."
                },
                {
                    head: "GST LUT Filing on Foreign Monetization (Zero-Rated Export)",
                    desc: "Revenue from Google AdSense, YouTube, Stripe, PayPal, Upwork, and global brand sponsors qualifies as export of services. We file Letters of Undertaking (LUT) so you pay 0% GST legally."
                },
                {
                    head: "Monthly & Quarterly Filings (GSTR-1, GSTR-3B & QRMP)",
                    desc: "Timely outward and inward return submissions with rigorous e-way bill and turnover reconciliation."
                },
                {
                    head: "Automated GSTR-2B Input Tax Credit (ITC) Matching",
                    desc: "Continuous vendor invoice verification to prevent credit reversals, ensure Section 16(4) compliance, and maximize cash flow."
                },
                {
                    head: "Annual GST Return (GSTR-9 & GSTR-9C)",
                    desc: "Exhaustive annual reconciliation between audited books of accounts and portal returns with tax difference calculations."
                },
                {
                    head: "Departmental Notices & Scrutiny Defense",
                    desc: "Drafting robust replies to Form ASMT-10, DRC-01, and DRC-07 notices regarding tax or ITC mismatches."
                }
            ]
        },
        {
            id: "business-setup",
            badge: "Startups & Entities",
            shortTitle: "Startup Formation",
            title: "New Business & Startup Formation",
            subtitle: "Entity structuring, partnership deeds u/s 40(b), MSME Udyam, Shop Act & banking",
            icon: "briefcase",
            summary: "Guiding first-time entrepreneurs and expanding ventures from legal incorporation to commercial bank operations. We establish tax-optimized entity structures that protect founders and attract commercial credit.",
            deliverables: [
                {
                    head: "Entity Structuring (Proprietorship vs. Partnership vs. LLP)",
                    desc: "Strategic advisory comparing tax liability, founder liability, and compliance overhead to select the ideal corporate vehicle for your stage."
                },
                {
                    head: "Partnership Deed Drafting u/s 40(b)",
                    desc: "Formulating bulletproof deeds with partner remuneration, interest on capital, and profit-sharing clauses that legally reduce firm-level tax."
                },
                {
                    head: "MSME / Udyam Aadhar Registration",
                    desc: "Central Government certification enabling priority sector bank credit, lower collateral interest rates, and Section 43B(h) 45-day payment protections."
                },
                {
                    head: "Shop & Establishment (Gumasta) Licensing",
                    desc: "Complete municipal registration for offices, creative studios, retail outlets, commercial distribution hubs, and warehouses."
                },
                {
                    head: "Corporate Current Account Onboarding",
                    desc: "Drafting board resolutions, partner authorisations, and verified KYC dossiers to ensure hassle-free corporate current account sanctioning."
                },
                {
                    head: "Founders' First-Year Compliance Blueprint",
                    desc: "Setting up invoice serial templates, expense tracking workflows, and statutory filing calendars from Day 1 to avoid penalties."
                }
            ]
        },
        {
            id: "co-op-society",
            badge: "Housing Societies",
            shortTitle: "Co-op Societies (CHS)",
            title: "Co-operative Housing Society (CHS) Services",
            subtitle: "Maintenance bill generation, computerized accounts handling, registers, and audit readiness",
            icon: "building-2",
            summary: "Turnkey society management ensuring complete statutory compliance and financial transparency between managing committees, society members, and the Registrar under the Co-operative Societies Act.",
            deliverables: [
                {
                    head: "Quarterly / Monthly Maintenance Billing",
                    desc: "Automated billing with sinking funds, repair funds, interest on overdue arrears, and computerized member receipts."
                },
                {
                    head: "Complete Books of Accounts & Cash/Bank Ledgers",
                    desc: "Day-to-day cashbook, bank book, investment ledgers, and voucher accounting conforming to statutory society accounting norms."
                },
                {
                    head: "Statutory Member Register Maintenance",
                    desc: "Up-to-date maintenance of Member Registers (Form 'I'), Share Registers (Form 'J'), and nomination registers."
                },
                {
                    head: "Statutory Audit Preparation & Balance Sheets",
                    desc: "Compiling year-end Balance Sheets, Income & Expenditure Accounts, audit memos, and submission to the Co-operative Department."
                },
                {
                    head: "Society TDS Compliance u/s 194C & 194J",
                    desc: "Deducting and depositing TDS on security contracts, housekeeping, and lift maintenance, with quarterly Form 26Q return filings."
                },
                {
                    head: "Managing Committee & AGM Financial Advisory",
                    desc: "Preparing annual financial budgets, sinking fund utilization reports, and presenting clear audit accounts at the Annual General Meeting."
                }
            ]
        },
        {
            id: "financial-reporting",
            badge: "Accounting & CMA",
            shortTitle: "Accounts & Bank CMA",
            title: "Accounting, Balance Sheets & Bank Loan CMA",
            subtitle: "ICAI Non-Corporate Entity vertical statements, banker-ready T-Format, and CMA credit data",
            icon: "landmark",
            summary: "Audit-ready financial reporting and loan credit documentation structured to satisfy commercial bank underwriting, credit rating agencies, and statutory authorities.",
            deliverables: [
                {
                    head: "Credit Monitoring Arrangement (CMA) Data",
                    desc: "Preparation of in-depth 7-sheet CMA data reports (past actuals, estimates, 5-year projections, MPBF working capital calculations, and DSCR ratios) mandated by banks for loan approvals."
                },
                {
                    head: "Bank Loan & Credit Appraisal Files (CC / OD Limits)",
                    desc: "Classic horizontal T-Format balance sheets, fund flow statements, debt-service coverage ratios, and current ratio optimization for loan sanctions."
                },
                {
                    head: "ICAI Non-Corporate Entity (NCE) Statements",
                    desc: "Standardized vertical Schedule III-adapted balance sheets, statements of profit and loss, and comprehensive notes (Notes 1 to 21)."
                },
                {
                    head: "Full Bookkeeping & Periodic Ledgers",
                    desc: "Accrual-basis accounting, computerized journal vouchers, bank reconciliations, and fixed asset registers with WDV depreciation."
                },
                {
                    head: "5-Year Projected Financial Viability Models",
                    desc: "Techno-economic viability models and projected cash flow statements for term loans, commercial vehicle loans, and business expansions."
                },
                {
                    head: "Depreciation & Section 32 Asset Accounting",
                    desc: "Tax depreciation calculations reconciling Income Tax Act block rates with commercial accounting standards."
                }
            ]
        }
    ],

    // WhatsApp Routing Options for Consultation Desk
    consultationOptions: [
        { label: "Direct Tax (DT) & ITR Filing", value: "Direct Tax (DT) & ITR Filing" },
        { label: "Goods & Services Tax (GST) Compliance", value: "Goods & Services Tax (GST) Compliance" },
        { label: "Content Creator Tax & TDS Refund (Sec 44ADA)", value: "Content Creator Tax & TDS Refund (Sec 44ADA)" },
        { label: "New Business & Startup Setup (Deeds/MSME)", value: "New Business & Startup Setup" },
        { label: "Co-operative Housing Society (CHS) Services", value: "Co-operative Housing Society (CHS) Services" },
        { label: "Bank Loan Financial Statements & CMA Data", value: "Bank Loan Financial Statements & CMA Data" }
    ]
};
