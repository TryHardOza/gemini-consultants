/**
 * Gemini Consultants - Enterprise Practice Data & Content Model
 * Value-First "What, Why & How" Advisory Framework
 * Core Verticals (Ordered 1 to 5):
 * 1. Business Setup
 * 2. Goods & Services Tax (GST)
 * 3. Income Tax (ITR)
 * 4. Society Accounting
 * 5. Bank Loan Documentation
 * Zero location references.
 */

const FIRM_CONFIG = window.FIRM_CONFIG = {
    brand: {
        name: "GEMINI CONSULTANTS",
        tagline: "Tax • GST • Accounts",
        leadConsultant: "Jeet Oza",
        role: "Tax and Accounts Consultant",
        experienceBadge: "2+ years in CA firms",
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
            badge: "Business Setup",
            tabLabel: "Business Setup",
            shortTitle: "Business Setup",
            title: "Entity Registration, Legal Deeds & Commercial Licensing",
            tagline: "Establish your commercial foundation without operational or legal roadblocks.",
            icon: "briefcase",
            tags: ["Partnership Deeds", "MSME (Udyam)", "Shop & Establishment License", "Documents for opening a business bank account"],
            whatItIs: "Choosing and registering how your business is legally set up (sole proprietorship, partnership or company), plus the licences you need to run it.",
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
                "MSME (Udyam) registration (free on government portal; fee for drafting & filing) and shop licence (Gumasta in Maharashtra)",
                "Bank current account documentation packages",
                "Entity restructuring advisory as your turnover scales"
            ]
        },
        {
            id: "gst-compliance",
            number: "02",
            bentoSpan: "lg:col-span-5",
            featured: true,
            badge: "GST",
            tabLabel: "GST",
            shortTitle: "GST",
            title: "GST Compliance, Filing & Input Credit Optimization",
            tagline: "Protect your cash flow and keep your business invoicing legitimate.",
            icon: "receipt",
            tags: ["GST Registration", "GSTR-1 & GSTR-3B", "GSTR-2B ITC Matching", "Notice & Backlog Desk"],
            whatItIs: "GST is a tax you collect on your sales and pass on to the government. You must register once your yearly sales cross 20 lakh rupees (services) or 40 lakh rupees (goods), or earlier in some cases such as selling through e-commerce platforms or supplying goods across state lines. Lower limits apply in some states.",
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
                "Backlog clearance, notice responses, and portal unblocking"
            ]
        },
        {
            id: "direct-tax",
            number: "03",
            bentoSpan: "lg:col-span-4",
            featured: false,
            badge: "Income Tax & Accounts",
            tabLabel: "Income tax returns",
            shortTitle: "Income tax returns",
            title: "Income Tax Planning, ITR Filing & Year-End Accounts",
            tagline: "Legally minimize payable tax while building an audit-proof financial track record.",
            icon: "scale",
            tags: ["P&L & Balance Sheets", "ITR Filing", "AIS / TIS Reconciliation", "Regime Optimization"],
            whatItIs: "Your income tax return is the yearly report of what you earned and paid. Banks, visa offices and buyers ask for it as proof.",
            whyItMatters: [
                {
                    head: "Lending & Credit Credibility",
                    desc: "Banks, NBFCs, and financial institutions require 2 to 3 years of clean, consistent ITR acknowledgments before approving business credit, overdrafts, or mortgages."
                },
                {
                    head: "Choosing the Right Tax Regime",
                    desc: "With the New Tax Regime now the default standard, choosing between Old and New regimes without proper mathematical assessment leads to unnecessary cash outflow."
                },
                {
                    head: "Avoiding Scrutiny Notices",
                    desc: "Data discrepancies between your filed returns and the portal's automated Annual Information Statement (AIS) / Tax Information Summary (TIS) can trigger automated verification notices."
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
            tagline: "Eliminate member billing disputes and maintain full compliance with co-operative bye-laws.",
            icon: "building-2",
            tags: ["Maintenance Billing", "Member & Share Registers", "Bank Reconciliations", "Statutory Audit Accounts"],
            whatItIs: "Dedicated bookkeeping and statutory compliance built strictly around the state Co-operative Societies Act and housing society bye-laws for residential complexes and commercial associations.",
            whyItMatters: [
                {
                    head: "Transparent, Dispute-Free Billing",
                    desc: "Errors in sinking funds, maintenance rates, or interest on dues trigger member friction and withheld maintenance payments."
                },
                {
                    head: "Compulsory Statutory Registers",
                    desc: "Managing committees are legally required to maintain official registers (such as Form I member register and Form J list of members in Maharashtra, along with share and investment ledgers) for statutory inspections."
                },
                {
                    head: "Hassle-Free Annual Audit",
                    desc: "Empanelled statutory auditors require clean collection ledgers, clear vendor vouchers, and balanced bank reconciliations to pass society accounts without audit objections."
                }
            ],
            howWeHandleIt: [
                "Automated, computerized monthly/quarterly maintenance bill generation",
                "Vendor payment booking, expense ledgers, and bank reconciliations",
                "Up-to-date maintenance of statutory member and share registers (including Form I & Form J in Maharashtra)",
                "Compiling the final Annual Statement of Accounts for Statutory Audit submission"
            ]
        },
        {
            id: "financial-reporting",
            number: "05",
            bentoSpan: "lg:col-span-4",
            featured: false,
            badge: "Bank Loan Documentation",
            tabLabel: "Bank loans",
            shortTitle: "Bank loans",
            title: "Bank Loan Documentation",
            tagline: "We get your accounts bank ready so your loan is not delayed by paperwork.",
            icon: "landmark",
            tags: ["Bank ready financial statements", "ITR & GST Reconciliation", "Credit File Organisation", "CC / OD & Term Loans"],
            whatItIs: "A documentation service that prepares your credit appraisal profile (Balance Sheet, Profit and Loss statements, revenue matching) and guides you on the right type of loan and the right bank for your need. The bank alone decides on approval.",
            whyItMatters: [
                {
                    head: "Reducing Underwriting Rejections",
                    desc: "Most business loan and working capital applications stall because the applicant's P&L and Balance Sheet fail banking credit criteria or conflict with filed GST turnover."
                },
                {
                    head: "Fewer Repeat Document Requests",
                    desc: "Walking into a bank with an incomplete or inconsistent file leads to long processing times and repeated requests for papers. A complete, organised file keeps the process moving."
                },
                {
                    head: "Securing the Right Facility",
                    desc: "Applying for the wrong credit instrument (e.g., an expensive term loan when you need a flexible CC/OD working capital limit) can strain monthly cash flow."
                }
            ],
            howWeHandleIt: [
                "Preparing Balance Sheets, Profit and Loss accounts and net worth statements in the format banks ask for (CA certification arranged where the bank requires it)",
                "Reconciling your books with filed ITR and GST records so the numbers match across documents",
                "Guiding you on which facility fits your need (term loan or CC and OD limit) and which banks to approach, then organising your file and answering the bank's document queries during appraisal",
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
        { label: "Bank Loan Documentation", value: "Bank Loan Documentation" },
        { label: "Not sure yet", value: "Not sure yet" }
    ]
};
