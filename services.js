/**
 * Gemini Consultants - Enterprise Practice Data & Content Model
 * Value-First "What, Why & How" Advisory Framework
 * Core Verticals (Ordered 1 to 5):
 * 1. Business Formation & Structuring (Business Setup)
 * 2. Goods & Services Tax (GST)
 * 3. Income Tax & Annual Accounts (ITR)
 * 4. Co-operative Housing Society (CHS) Accounting
 * 5. Bank Loan Financials & Credit Facilitation
 * Zero location references.
 */

const FIRM_CONFIG = window.FIRM_CONFIG = {
    brand: {
        name: "GEMINI CONSULTANTS",
        tagline: "Tax • GST • Business Solutions",
        leadConsultant: "Jeet Oza",
        role: "Principal Tax & Financial Advisor",
        experienceBadge: "Premier Advisory Practice",
        phone: "8830634354",
        phoneInternational: "+91 88306 34354",
        email: "jeetoza12@protonmail.com"
    },

    // 5 Core Practice Verticals (Value-First "What & Why" Framework)
    practiceAreas: [
        {
            id: "business-setup",
            number: "01",
            bentoSpan: "lg:col-span-7",
            featured: true,
            badge: "Business Formation",
            tabLabel: "Business Setup",
            shortTitle: "Business Setup",
            title: "Entity Registration, Legal Deeds & Commercial Licensing",
            subtitle: "Establish your commercial foundation without operational or legal roadblocks.",
            tagline: "Establish your commercial foundation without operational or legal roadblocks.",
            icon: "briefcase",
            tags: ["Partnership Deeds", "MSME (Udyam)", "Shop & Establishment", "Current Account Dossier"],
            summary: "Setting up the legal structure under which your enterprise contracts, invoices, and operates—such as a Sole Proprietorship, Partnership Firm, or corporate entity—paired with core statutory operating licenses.",
            whatItIs: "Setting up the legal structure under which your enterprise contracts, invoices, and operates—such as a Sole Proprietorship, Partnership Firm, or corporate entity—paired with core statutory operating licenses.",
            whyItMatters: [
                {
                    head: "Frictionless Banking & Onboarding",
                    desc: "You cannot open a commercial Current Account, apply for merchant gateways, or onboard institutional vendors without formal entity credentials."
                },
                {
                    head: "Protection Against Future Disputes",
                    desc: "For multi-partner ventures, handshake agreements without structured partnership deeds leave profit-sharing, capital interest, and exits vulnerable to disputes."
                },
                {
                    head: "Government Protection & Incentives",
                    desc: "MSME (Udyam) registration unlocks statutory protection against delayed payments from buyers along with access to government priority-sector credit schemes."
                }
            ],
            howWeHandleIt: [
                "Custom Partnership Deed drafting and execution",
                "MSME (Udyam) Registration and Shop & Establishment (Gumasta) licensing",
                "Bank current account documentation packages",
                "Entity restructuring advisory as your turnover scales"
            ]
        },
        {
            id: "gst-compliance",
            number: "02",
            bentoSpan: "lg:col-span-5",
            featured: true,
            badge: "Goods & Services Tax (GST)",
            tabLabel: "Goods & Services Tax (GST)",
            shortTitle: "Goods & Services Tax (GST)",
            title: "GST Compliance, Filing & Input Credit Optimization",
            subtitle: "Protect your cash flow and keep your business invoicing legitimate.",
            tagline: "Protect your cash flow and keep your business invoicing legitimate.",
            icon: "receipt",
            tags: ["GST Registration", "GSTR-1 & GSTR-3B", "GSTR-2B ITC Matching", "Notice & Backlog Desk"],
            summary: "GST is India’s indirect tax on the commercial supply of goods and services. Registration is mandatory once aggregate turnover crosses ₹20 Lakhs for service providers or ₹40 Lakhs for traders (₹10L/₹20L in special states), or whenever you sell goods or provide services inter-state or via e-commerce.",
            whatItIs: "GST is India’s indirect tax on the commercial supply of goods and services. Registration is mandatory once aggregate turnover crosses ₹20 Lakhs for service providers or ₹40 Lakhs for traders (₹10L/₹20L in special states), or whenever you sell goods or provide services inter-state or via e-commerce.",
            whyItMatters: [
                {
                    head: "Legitimate Invoicing & B2B Retention",
                    desc: "Registered corporate clients cannot claim tax credits on your invoices unless you hold a valid, active GSTIN."
                },
                {
                    head: "Safeguarding Working Capital (ITC)",
                    desc: "Unmatched or missed purchase bills cost you real cash. Systematic reconciliation ensures every rupee of GST paid on software, inventory, or capital assets offsets what you owe."
                },
                {
                    head: "Portal Lockouts & Penalty Traps",
                    desc: "Leaving GSTR-3B unfiled for two consecutive months blocks your GSTR-1 outward return on the GST portal, while fixed daily late fees and 18% annual simple interest accrue for every day of delay."
                }
            ],
            howWeHandleIt: [
                "Turnkey GST registration and business trade classification",
                "Timely monthly/quarterly return filings (GSTR-1 outward supplies & GSTR-3B tax offset)",
                "Strict GSTR-2B purchase reconciliation to eliminate credit leakage",
                "Fast-track backlog clearance, notice responses, and portal unblocking"
            ]
        },
        {
            id: "direct-tax",
            number: "03",
            bentoSpan: "lg:col-span-4",
            featured: false,
            badge: "Income Tax & Accounts",
            tabLabel: "Income Tax (ITR)",
            shortTitle: "Income Tax (ITR)",
            title: "Income Tax Planning, ITR Filing & Year-End Accounts",
            subtitle: "Legally minimize payable tax while building an audit-proof financial track record.",
            tagline: "Legally minimize payable tax while building an audit-proof financial track record.",
            icon: "scale",
            tags: ["P&L & Balance Sheets", "ITR Filing", "AIS / TIS Reconciliation", "Regime Optimization"],
            summary: "Income Tax is the statutory annual assessment on your net business earnings, professional retainers, and personal capital. Filing your ITR is your official economic identity submitted to the Income Tax Department.",
            whatItIs: "Income Tax is the statutory annual assessment on your net business earnings, professional retainers, and personal capital. Filing your ITR is your official economic identity submitted to the Income Tax Department.",
            whyItMatters: [
                {
                    head: "Lending & Credit Credibility",
                    desc: "Banks, NBFCs, and financial institutions mandate 2 to 3 years of clean, consistent ITR acknowledgments before approving business credit, overdrafts, or mortgages."
                },
                {
                    head: "Choosing the Right Tax Regime",
                    desc: "With the New Tax Regime now the default standard, choosing between Old and New regimes without proper mathematical assessment leads to unnecessary cash outflow."
                },
                {
                    head: "Avoiding Scrutiny Notices",
                    desc: "Data discrepancies between your filed returns and the portal's automated Annual Information Statement (AIS) / Tax Information Summary (TIS) trigger automated verification notices."
                }
            ],
            howWeHandleIt: [
                "Compiling complete Profit & Loss (P&L) statements and Balance Sheets",
                "Comprehensive ITR filing for Proprietors, Partnerships, Freelancers, and Individuals",
                "AIS / TIS / Form 26AS mismatch reconciliation",
                "Advance tax computation and legal year-end tax optimization"
            ]
        },
        {
            id: "co-op-society",
            number: "04",
            bentoSpan: "lg:col-span-4",
            featured: false,
            badge: "Society Accounting",
            tabLabel: "Society Accounting",
            shortTitle: "Society Accounting",
            title: "Society Billing, Statutory Ledgers & Audit Readiness",
            subtitle: "Eliminate member billing disputes and maintain full compliance with co-operative bye-laws.",
            tagline: "Eliminate member billing disputes and maintain full compliance with co-operative bye-laws.",
            icon: "building-2",
            tags: ["Maintenance Billing", "Form I & J Registers", "Bank Reconciliations", "Statutory Audit Accounts"],
            summary: "Dedicated bookkeeping and statutory compliance built strictly around the state Co-operative Societies Act and housing society bye-laws for residential complexes and commercial associations.",
            whatItIs: "Dedicated bookkeeping and statutory compliance built strictly around the state Co-operative Societies Act and housing society bye-laws for residential complexes and commercial associations.",
            whyItMatters: [
                {
                    head: "Transparent, Dispute-Free Billing",
                    desc: "Errors in sinking funds, maintenance rates, or interest on dues trigger member friction and withheld maintenance payments."
                },
                {
                    head: "Compulsory Statutory Registers",
                    desc: "Managing committees are legally mandated to maintain official registers (Form I, Form J, share registers, and investment ledgers) for statutory inspections."
                },
                {
                    head: "Hassle-Free Annual Audit",
                    desc: "Empanelled statutory auditors require clean collection ledgers, clear vendor vouchers, and balanced bank reconciliations to pass society accounts without audit objections."
                }
            ],
            howWeHandleIt: [
                "Automated, computerized monthly/quarterly maintenance bill generation",
                "Vendor payment booking, expense ledgers, and bank reconciliations",
                "Up-to-date maintenance of statutory Form I & Form J member registers",
                "Compiling the final Annual Statement of Accounts for Statutory Audit submission"
            ]
        },
        {
            id: "financial-reporting",
            number: "05",
            bentoSpan: "lg:col-span-4",
            featured: false,
            badge: "Loan & Credit Desk",
            tabLabel: "Loan & Credit Desk",
            shortTitle: "Loan & Credit Desk",
            title: "Bank Loan Documentation & Credit Facilitation",
            subtitle: "Structuring bank-ready financials and facilitating accelerated credit evaluations.",
            tagline: "Structuring bank-ready financials and facilitating accelerated credit evaluations.",
            icon: "landmark",
            tags: ["Lender-Grade Financials", "ITR & GST Reconciliation", "Bank Appraisal Liaison", "CC / OD & MSME Funding"],
            summary: "A specialized facilitation desk that prepares your business's credit appraisal profile (Balance Sheet, Profit & Loss statements, and revenue matching) while coordinating directly with institutional banking desks to fast-track loan review and disbursement.",
            whatItIs: "A specialized facilitation desk that prepares your business's credit appraisal profile (Balance Sheet, Profit & Loss statements, and revenue matching) while coordinating directly with institutional banking desks to fast-track loan review and disbursement.",
            whyItMatters: [
                {
                    head: "Eliminating Underwriting Rejections",
                    desc: "Most business loan and working capital applications stall because the applicant's P&L and Balance Sheet fail banking credit criteria or conflict with filed GST turnover."
                },
                {
                    head: "Bypassing Institutional Bureaucracy",
                    desc: "Walking into a bank branch without a pre-vetted financial dossier leads to prolonged processing times and repeated documentation requests."
                },
                {
                    head: "Securing the Right Facility",
                    desc: "Applying for the wrong credit instrument (e.g., an expensive term loan when you need a flexible CC/OD working capital limit) can strain monthly cash flow."
                }
            ],
            howWeHandleIt: [
                "Preparing lender-grade Balance Sheets, Profit & Loss accounts, and net-worth statements",
                "Reconciling internal books with filed ITR and GST records to ensure smooth credit underwriting",
                "Direct institutional liaison with trusted banking partners to fast-track your file through appraisal",
                "Tailored assistance for Working Capital Limits (CC/OD), Business Expansion Loans, and MSME funding"
            ]
        }
    ],

    // WhatsApp Routing Options for Consultation Desk (Ordered 1 to 5)
    consultationOptions: [
        { label: "Business Setup (Deeds, MSME & Licensing)", value: "Business Setup (Deeds, MSME & Licensing)" },
        { label: "Goods & Services Tax (GST) Compliance", value: "Goods & Services Tax (GST) Compliance" },
        { label: "Income Tax (ITR) & Year-End Accounts", value: "Income Tax (ITR) & Year-End Accounts" },
        { label: "Co-operative Housing Society (CHS) Accounting", value: "Co-operative Housing Society (CHS) Accounting" },
        { label: "Bank Loan Documentation & Credit Facilitation", value: "Bank Loan Documentation & Credit Facilitation" }
    ]
};
