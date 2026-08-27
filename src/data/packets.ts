import { PacketItem } from '../types';

export const PACKET_CATEGORIES = [
  { id: 'all', label: 'All Resources & Packets' },
  { id: 'probate', label: 'Probate & Estate Administration' },
  { id: 'family', label: 'Family Court & Domestic' },
  { id: 'guardianship', label: 'Guardianship & Conservatorship' },
  { id: 'general', label: 'General Court & Case Organization' },
] as const;

export const PACKETS_DATA: PacketItem[] = [
  // PROBATE PACKETS
  {
    id: 'probate-starting-case',
    category: 'probate',
    title: 'Starting a Probate Case: Step-by-Step Guide & Forms',
    shortDescription: 'A structured organizational guide to understanding Colorado probate filing procedures, required initial documents, and petition workflows.',
    designedFor: 'Individuals appointed or seeking appointment as Personal Representative, surviving family members, and pro se estate administrators.',
    includes: [
      'Overview of formal vs. informal probate filing paths in Colorado',
      'Step-by-step checklist of opening documents and required filings',
      'Initial Petition preparation worksheet and information collector',
      'Sample information tracker for heirs, devisees, and interested parties',
      'Court filing fee and jurisdiction reference notes',
      'Glossary of standard Colorado probate terms and fiduciary duties'
    ],
    price: 45,
    format: 'Fillable PDF & Word Document Templates (.docx)',
    badge: 'Popular Guide',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_starting_probate'
  },
  {
    id: 'probate-pr-appointment',
    category: 'probate',
    title: 'Personal Representative Appointment Packet',
    shortDescription: 'Comprehensive document preparation and organizational toolkit for obtaining Letters of Appointment and qualifying as Personal Representative.',
    designedFor: 'Nominated executors, prospective Personal Representatives, and estate fiduciaries in Colorado.',
    includes: [
      'Personal Representative Acceptance of Appointment workflow guide',
      'Renunciation and nomination form guides for non-priority applicants',
      'Proposed order assembly checklist and court filing formatting tips',
      'Notice of Application / Petition packet with certificate of service templates',
      'Letters Testamentary / Letters of Administration verification guide',
      'Initial fiduciary action checklist for the first 30 days after appointment'
    ],
    price: 55,
    format: 'Fillable PDF, Word (.docx) & Excel Checklist (.xlsx)',
    badge: 'Core Toolkit',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_pr_appointment'
  },
  {
    id: 'probate-administration-checklist',
    category: 'probate',
    title: 'Probate Administration Master Checklist & Timeline',
    shortDescription: 'A complete milestone-by-milestone administrative tracker guiding estate fiduciaries through statutory deadlines, filings, and asset tasks.',
    designedFor: 'Personal Representatives, estate assistants, and self-represented fiduciaries managing ongoing Colorado estate administration.',
    includes: [
      'Comprehensive statutory deadline calendar (30-day, 60-day, 9-month milestones)',
      'Bank account setup and EIN application step-by-step instructions',
      'Estate asset identification and documentation worksheet',
      'Creditor notice deadline calculator and log sheet',
      'Administrative task tracking spreadsheet with progress statuses',
      'Fiduciary communications log for beneficiaries and vendors'
    ],
    price: 35,
    format: 'Printable PDF & Interactive Excel Spreadsheet (.xlsx)',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_probate_checklist'
  },
  {
    id: 'probate-creditor-guide',
    category: 'probate',
    title: 'Notice to Creditors & Debt Resolution Guide',
    shortDescription: 'Procedural guide and tracking system for publishing creditor notices, logging incoming claims, and documenting statutory debt priority.',
    designedFor: 'Personal Representatives and estate administrators handling estate debts, creditor correspondence, and statutory claim periods.',
    includes: [
      'Colorado newspaper publication notice guide and sample text',
      'Direct notice to known creditors template and mailing certificate',
      'Statutory 4-month claim period tracking ledger and deadline calculator',
      'Notice of disallowance and allowance templates with statutory language',
      'Priority classification worksheet under Colorado probate law',
      'Debt satisfaction and receipt release documentation templates'
    ],
    price: 40,
    format: 'PDF Guide, Word Templates & Excel Claim Tracker',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_creditor_guide'
  },
  {
    id: 'probate-estate-inventory',
    category: 'probate',
    title: 'Estate Inventory & Asset Valuation Packet',
    shortDescription: 'Organizational worksheets and spreadsheet systems for preparing a complete Colorado Estate Inventory within statutory deadlines.',
    designedFor: 'Personal Representatives preparing the mandatory 90-day inventory of real property, financial accounts, vehicles, and personal property.',
    includes: [
      'Structured Estate Inventory template formatted to Colorado court standards',
      'Real estate valuation and encumbrance tracking schedule',
      'Bank, brokerage, and investment account log with valuation date rules',
      'Vehicle, titled property, and tangible personal property index sheets',
      'Non-probate asset reconciliation sheet (beneficiary designations, POD/TOD)',
      'Certificate of Service and beneficiary distribution summary sheets'
    ],
    price: 50,
    format: 'Fillable PDF, Word (.docx) & Automated Excel Workbook (.xlsx)',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_estate_inventory'
  },
  {
    id: 'probate-closing-checklist',
    category: 'probate',
    title: 'Probate Closing & Final Distribution Packet',
    shortDescription: 'Detailed checklists and document preparation forms for completing final estate accounting, distributions, and filing closing statements.',
    designedFor: 'Personal Representatives ready to conclude estate administration and close the probate case informally or formally.',
    includes: [
      'Final estate accounting summary worksheet and ledger template',
      'Beneficiary receipt and release agreement templates',
      'Schedule of final proposed distributions and tracking log',
      'Informal closing statement preparation guide and checklist',
      'Certificate of service and final notice requirements breakdown',
      'Post-closing records retention guide for fiduciaries'
    ],
    price: 50,
    format: 'Fillable PDF, Word (.docx) & Excel Accounting Ledger',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_probate_closing'
  },

  // FAMILY COURT PACKETS
  {
    id: 'family-prose-organization',
    category: 'family',
    title: 'Family Court Pro Se Case Organization System',
    shortDescription: 'A practical organizational framework for self-represented litigants managing domestic relations pleadings, exhibits, and court filings.',
    designedFor: 'Pro se litigants involved in divorce, legal separation, or allocation of parental responsibilities (APR) in Colorado courts.',
    includes: [
      'Master case binder index and electronic folder organizational template',
      'Domestic relations case milestone map and statutory timeline tracker',
      'Court filing log and pleading index spreadsheet',
      'Exhibit labeling and evidentiary documentation tracking matrix',
      'Communications and incident log for co-parenting records',
      'Hearing day preparation checklist and document binder tabs'
    ],
    price: 45,
    format: 'Printable PDF Binder System & Digital Organization Folder (.zip)',
    badge: 'Client Favorite',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_family_prose'
  },
  {
    id: 'family-parenting-plan',
    category: 'family',
    title: 'Parenting Plan Preparation Guide & Worksheet',
    shortDescription: 'Structured worksheet and clause organizer for drafting a clear, comprehensive, and child-focused proposed parenting plan.',
    designedFor: 'Parents preparing for mediation or court submission in self-represented parenting time and decision-making matters.',
    includes: [
      'Comprehensive regular parenting schedule drafting worksheet',
      'Holiday, vacation, and school break allocation schedule matrix',
      'Major decision-making framework (education, medical, religion, extracurriculars)',
      'Transportation, exchange protocol, and communication guidelines organizer',
      'Dispute resolution and relocation protocol sample provisions',
      'Court filing ready format check and review guide'
    ],
    price: 40,
    format: 'Fillable PDF & Customizable Word Document (.docx)',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_parenting_plan'
  },
  {
    id: 'family-financial-disclosure',
    category: 'family',
    title: 'Financial Disclosure & Sworn Statement Organization Packet',
    shortDescription: 'Step-by-step organization system for assembling mandatory financial disclosures, tax returns, bank statements, and sworn statements.',
    designedFor: 'Pro se parties navigating Colorado Rule 16.2 mandatory disclosure requirements in domestic matters.',
    includes: [
      'Colorado Rule 16.2 mandatory disclosures master document checklist',
      'Sworn Financial Statement prep worksheet with automatic calculation notes',
      'Income calculation organizer for W-2, 1099, overtime, and self-employed income',
      'Monthly expenses catalog with housing, medical, child-related categorization',
      'Assets and liabilities ledger with required account document tracking',
      'Certificate of Compliance preparation worksheet and exhibit tabs'
    ],
    price: 45,
    format: 'Fillable PDF, Word & Comprehensive Excel Calculator (.xlsx)',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_financial_disclosure'
  },
  {
    id: 'family-court-filing-checklist',
    category: 'family',
    title: 'Colorado Court Filing & Procedure Checklist',
    shortDescription: 'Essential procedural checklist covering formatting, filing methods, service of process, and proof of service verification.',
    designedFor: 'Anyone filing initial or responsive pleadings in Colorado District or County courts without an attorney.',
    includes: [
      'Colorado court pleading caption and formatting standard guide',
      'Personal service vs. waiver vs. mail service requirements checklist',
      'Return of service and Affidavit of Service assembly templates',
      'E-filing vs. in-person filing procedural notes for pro se filers',
      'Fee waiver (JDF 205) eligibility criteria and filing guide',
      'Response deadline calculation chart for in-state and out-of-state service'
    ],
    price: 30,
    format: 'Printable & Fillable PDF Guide',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_court_filing'
  },

  // GUARDIANSHIP & CONSERVATORSHIP PACKETS
  {
    id: 'guardianship-annual-report',
    category: 'guardianship',
    title: 'Guardian Annual Report Preparation Checklist & Toolkit',
    shortDescription: 'Complete organizational framework for assembling the mandatory annual Guardian’s Report on Condition of Protected Person.',
    designedFor: 'Court-appointed guardians of minors or protected adults fulfilling statutory annual reporting requirements.',
    includes: [
      'Annual report questionnaire and data collection worksheet',
      'Medical, dental, and psychological care documentation organizer',
      'Residential status, educational progress, and daily living activity logger',
      'Supporting medical report exhibit preparation guide',
      'Filing timeline and certificate of service template for interested parties',
      'Annual guardian recordkeeping binder tab set'
    ],
    price: 45,
    format: 'Fillable PDF & Word Document Templates (.docx)',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_guardian_report'
  },
  {
    id: 'conservatorship-report-guide',
    category: 'guardianship',
    title: 'Conservator Report & Financial Plan Preparation Guide',
    shortDescription: 'In-depth reporting guide, financial plan template, and recordkeeping tools for court-appointed conservators.',
    designedFor: 'Conservators managing estates of protected persons required to file initial financial plans, inventories, and annual accountings.',
    includes: [
      'Conservator Financial Plan (CFP) drafting template and budget worksheet',
      'Initial Conservator Inventory preparation schedule and asset tracker',
      'Annual Conservator Report (ACR) income and expenditure ledger',
      'Bank statement reconciliation and supporting receipt organization sheet',
      'Bond requirement verification and reporting checklist',
      'Court filing and statutory notice instruction guide'
    ],
    price: 60,
    format: 'Fillable PDF, Word (.docx) & Automated Excel Accounting Ledger (.xlsx)',
    badge: 'Comprehensive',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_conservator_report'
  },
  {
    id: 'fiduciary-recordkeeping-packet',
    category: 'guardianship',
    title: 'Fiduciary Recordkeeping & Transaction Ledger System',
    shortDescription: 'A turnkey digital and physical recordkeeping system specifically tailored to meet fiduciary accounting scrutiny.',
    designedFor: 'Guardians, conservators, trustees, and Personal Representatives needing rigorous, audit-ready financial tracking.',
    includes: [
      'Master transaction journal categorizing every deposit, disbursement, and fee',
      'Digital receipt scanner naming convention and storage structure guide',
      'Care provider and medical reimbursement tracking log',
      'Property maintenance and vendor expense binder templates',
      'Fiduciary mileage and out-of-pocket expense reimbursement form',
      'Monthly account balance verification worksheet'
    ],
    price: 45,
    format: 'Interactive Excel Workbook (.xlsx) & PDF Standard Operating Procedure',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_fiduciary_records'
  },

  // GENERAL COURT & CASE ORGANIZATION PACKETS
  {
    id: 'general-hearing-prep',
    category: 'general',
    title: 'Court Hearing & Trial Preparation Checklist',
    shortDescription: 'An exhaustive preparation manual for self-represented litigants getting ready for evidentiary hearings, status conferences, or bench trials.',
    designedFor: 'Pro se litigants, witnesses, and legal support staff preparing for in-person or Webex court appearances.',
    includes: [
      '14-day, 7-day, and day-before hearing preparation checklist',
      'Courtroom decorum, virtual hearing (Webex) etiquette, and attire guidelines',
      'Witness examination outline worksheet (direct & cross questions)',
      'Opening statement and closing argument structural outline templates',
      'Judge / Hearing officer bench binder assembly instructions',
      'Motion and objections quick reference sheet for non-lawyers'
    ],
    price: 35,
    format: 'Printable PDF & Editable Word Worksheet (.docx)',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_hearing_prep'
  },
  {
    id: 'general-exhibit-packet',
    category: 'general',
    title: 'Exhibit Organization & Evidence Index Packet',
    shortDescription: 'Professional exhibit preparation system to format, number, index, and redact evidence to Colorado court standards.',
    designedFor: 'Pro se parties and legal assistants assembling trial binders, hearing exhibits, or motion attachments.',
    includes: [
      'Standardized Exhibit List and Evidence Index template',
      'Numbered and lettered exhibit cover tab templates (Petitioner/Respondent/Plaintiff)',
      'PII (Personally Identifiable Information) redaction rules and checklist',
      'Foundation question worksheet for authenticating documents in court',
      'Joint exhibit exchange protocol and stipulation log',
      'Bates-stamping best practices and digital PDF pagination instructions'
    ],
    price: 35,
    format: 'Word (.docx), Excel Index (.xlsx) & Printable PDF Exhibit Tabs',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_exhibit_packet'
  },
  {
    id: 'general-timeline-template',
    category: 'general',
    title: 'Master Case Timeline & Chronology System',
    shortDescription: 'A dynamic chronological case mapping system to track facts, communication dates, medical events, and court deadlines.',
    designedFor: 'Attorneys, paralegals, and self-represented litigants managing complex fact histories.',
    includes: [
      'Multi-track chronology spreadsheet (Date, Time, Event, Source, Bates Reference, Significance)',
      'Visual timeline summary chart builder for quick judicial review',
      'Key actors and witness reference index',
      'Document cross-referencing system to verify source evidence',
      'Color-coded dispute category tagging system',
      'Exportable summary formatting for settlement briefs or opening statements'
    ],
    price: 40,
    format: 'Automated Excel Chronology (.xlsx) & Word Summary Template (.docx)',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_timeline_template'
  },
  {
    id: 'general-doc-organization-system',
    category: 'general',
    title: 'Legal Document Organization & File Retention System',
    shortDescription: 'A complete standard operating procedure for creating structured, searchable digital and physical legal case files.',
    designedFor: 'Law firm overflow staff, solo practitioners, fiduciaries, and individuals with voluminous paperwork.',
    includes: [
      'Pre-configured legal directory folder structure (ZIP archive ready to extract)',
      'Standardized file naming protocol (ISO dates, document types, versioning)',
      'Document retention and destruction schedule guidelines',
      'Secure electronic backup and confidentiality protocols',
      'Case transition and closing archive checklist',
      'Quick-lookup master case inventory sheet'
    ],
    price: 35,
    format: 'Pre-built Folder Hierarchy (.zip) & PDF Implementation Guide',
    checkoutUrlPlaceholder: 'https://buy.stripe.com/placeholder_doc_org_system'
  }
];

export const DOCUMENT_PACKETS = PACKETS_DATA;
