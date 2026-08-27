import { ResourceCategory } from '../types';

export const RESOURCES_DATA: ResourceCategory[] = [
  {
    id: 'colorado-courts',
    title: 'Colorado Judicial Branch & Official Portals',
    description: 'Official government resources, court directories, and state judicial self-help portals.',
    items: [
      {
        name: 'Colorado Judicial Branch Official Website',
        description: 'Primary portal for Colorado State Courts (Supreme Court, Court of Appeals, District Courts, County Courts).',
        url: 'https://www.courts.state.co.us/',
        isOfficial: true,
        tag: 'Official Portal'
      },
      {
        name: 'Colorado Self-Help Centers (Sherlocks)',
        description: 'Court-based resource centers where public navigators assist self-represented litigants with procedural questions.',
        url: 'https://www.courts.state.co.us/Self_Help/Center.cfm',
        isOfficial: true,
        tag: 'Court Self-Help'
      },
      {
        name: 'Colorado Judicial District Locator',
        description: 'Find your county judicial district, courthouse locations, clerk hours, and contact directories across all 22 districts.',
        url: 'https://www.courts.state.co.us/Courts/District/Index.cfm',
        isOfficial: true,
        tag: 'Court Directory'
      },
      {
        name: 'Colorado Legal Services (CLS)',
        description: 'Non-profit legal aid organization providing legal advice and civil representation for qualifying low-income Coloradans.',
        url: 'https://www.coloradolegalservices.org/',
        isOfficial: true,
        tag: 'Legal Aid'
      }
    ]
  },
  {
    id: 'court-forms',
    title: 'Colorado Standardized Court Forms (JDF)',
    description: 'Official Judicial Department Forms (JDF) categorized by subject area for pro se filers and fiduciaries.',
    items: [
      {
        name: 'Official Colorado Court Forms Repository (JDF Master List)',
        description: 'Access the complete library of approved Colorado Supreme Court standardized forms in PDF and Word formats.',
        url: 'https://www.courts.state.co.us/Forms/Index.cfm',
        isOfficial: true,
        tag: 'Official Forms'
      },
      {
        name: 'Fee Waiver Request Forms (JDF 205 / JDF 206)',
        description: 'Forms and instructions to request waiver of court filing fees based on financial indigency or hardship.',
        url: 'https://www.courts.state.co.us/Forms/Forms_List.cfm?Form_Type_ID=176',
        isOfficial: true,
        tag: 'Fee Waiver'
      },
      {
        name: 'Certificate of Service / Proof of Service (JDF 1313)',
        description: 'Standardized document required to certify that copies of court filings have been delivered to opposing parties.',
        url: 'https://www.courts.state.co.us/Forms/Forms_List.cfm?Form_Type_ID=12',
        isOfficial: true,
        tag: 'Service Form'
      }
    ]
  },
  {
    id: 'probate-resources',
    title: 'Probate & Estate Administration Guides',
    description: 'Statutory guides, probate filing manuals, and administrative tools for Colorado personal representatives.',
    items: [
      {
        name: 'Colorado Probate Forms & Instructions (JDF Series 700–999)',
        description: 'Official court instructions and forms for informal and formal probate, intestate and testate estate administration.',
        url: 'https://www.courts.state.co.us/Forms/Forms_List.cfm?Form_Type_ID=7',
        isOfficial: true,
        tag: 'Probate Forms'
      },
      {
        name: 'Colorado Small Estate Affidavit (JDF 999 - C.R.S. § 15-12-1201)',
        description: 'Affidavit for collection of personal property for estates valued under the statutory threshold without opening probate.',
        url: 'https://www.courts.state.co.us/Forms/Forms_List.cfm?Form_Type_ID=7',
        isOfficial: true,
        tag: 'Small Estate'
      },
      {
        name: 'Denver Probate Court Specific Guidelines',
        description: 'Local procedures, standing orders, and judicial guidelines specific to the Denver County Probate Court.',
        url: 'https://www.courts.state.co.us/Courts/County/Index.cfm?County_ID=15',
        isOfficial: true,
        tag: 'Denver Court'
      },
      {
        name: 'IRS Form SS-4: Application for Estate Employer Identification Number (EIN)',
        description: 'Official IRS tool to obtain an Estate EIN required to open estate checking accounts and manage estate assets.',
        url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online',
        isOfficial: true,
        tag: 'Tax / EIN'
      }
    ]
  },
  {
    id: 'guardianship-resources',
    title: 'Guardianship & Conservatorship Resources',
    description: 'Reporting requirements, annual accounting templates, and protective proceeding resources in Colorado.',
    items: [
      {
        name: 'Guardianship and Conservatorship Forms (JDF Series 800)',
        description: 'Mandatory forms for petitioning, emergency appointments, annual guardian reports, and conservator financial plans.',
        url: 'https://www.courts.state.co.us/Forms/Forms_List.cfm?Form_Type_ID=8',
        isOfficial: true,
        tag: 'Fiduciary Forms'
      },
      {
        name: 'Colorado Fiduciary Standards & Benchbook References',
        description: 'Statutory guidelines and fiduciary code of ethics for court-appointed guardians and conservators in Colorado.',
        url: 'https://www.courts.state.co.us/Self_Help/protectiveproceedings/',
        isOfficial: true,
        tag: 'Fiduciary Guide'
      },
      {
        name: 'Social Security Representative Payee Guide',
        description: 'Federal rules and guidelines for fiduciaries managing Social Security and SSI benefits on behalf of beneficiaries.',
        url: 'https://www.ssa.gov/payee/',
        isOfficial: true,
        tag: 'Federal Payee'
      }
    ]
  },
  {
    id: 'family-court-resources',
    title: 'Family Court & Domestic Relations Portals',
    description: 'Mandatory financial disclosures, parenting time guidelines, and domestic relations instructions.',
    items: [
      {
        name: 'Colorado Domestic Relations Forms (JDF Series 1000–1299)',
        description: 'Forms for dissolution of marriage, legal separation, APR (custody), motions to modify, and child support calculations.',
        url: 'https://www.courts.state.co.us/Forms/Forms_List.cfm?Form_Type_ID=6',
        isOfficial: true,
        tag: 'Domestic Forms'
      },
      {
        name: 'Colorado Child Support Guidelines & Calculator',
        description: 'Official state calculator to estimate statutory basic child support obligations based on gross incomes and overnights.',
        url: 'https://www.courts.state.co.us/Forms/SubCategory.cfm?Category=Family',
        isOfficial: true,
        tag: 'Calculator'
      },
      {
        name: 'Colorado Rule 16.2 Mandatory Disclosure Guide',
        description: 'Summary of the required 42-day financial disclosures, including tax returns, bank statements, debts, and insurance.',
        url: 'https://www.courts.state.co.us/Self_Help/family/',
        isOfficial: true,
        tag: 'Disclosure Rules'
      }
    ]
  },
  {
    id: 'checklists-organization',
    title: 'Organization Checklists & File Management Guides',
    description: 'Practical guides prepared by ProSe Partners LLC to assist litigants and legal professionals with file management.',
    items: [
      {
        name: 'Evidence & Exhibit Labeling Standards Guide',
        description: 'Best practices for organizing physical hearing binders and digital PDF files with standardized numbering and redactions.',
        isOfficial: false,
        tag: 'ProSe Guide'
      },
      {
        name: 'Medical Record Set Gap Identification Checklist',
        description: 'Systematic review process for cross-referencing EMS records, emergency department notes, therapy logs, and billing statements.',
        isOfficial: false,
        tag: 'Litigation Tool'
      },
      {
        name: 'Colorado Estate Administration 90-Day Milestone Tracker',
        description: 'A timeline summary detailing essential fiduciary duties within the first 90 days of Personal Representative appointment.',
        isOfficial: false,
        tag: 'Probate Tool'
      },
      {
        name: 'Fiduciary Accounting & Receipt Retention Rules',
        description: 'Standard operating principles to keep personal assets strictly segregated from estate and protected person funds.',
        isOfficial: false,
        tag: 'Fiduciary Tool'
      }
    ]
  }
];

export const COLORADO_LINKS = [
  {
    category: 'Colorado Courts',
    title: 'Colorado Judicial Branch Official Website',
    description: 'Access case information, court directories, local administrative orders, and judicial rules.',
    url: 'https://www.courts.state.co.us/'
  },
  {
    category: 'Self-Help',
    title: 'Colorado Court Self-Help Centers (Sherlock Navigators)',
    description: 'Find court navigators who assist self-represented litigants with procedural questions in county courthouses.',
    url: 'https://www.courts.state.co.us/Self_Help/Center.cfm'
  },
  {
    category: 'Forms Repository',
    title: 'Colorado Official Court Forms Library (JDF)',
    description: 'The master directory of state-approved standardized Judicial Department Forms in PDF and Word.',
    url: 'https://www.courts.state.co.us/Forms/Index.cfm'
  },
  {
    category: 'Probate',
    title: 'Colorado Probate Forms & Instructions (JDF 700-999)',
    description: 'Official court instructions and forms for informal and formal probate and estate administration.',
    url: 'https://www.courts.state.co.us/Forms/Forms_List.cfm?Form_Type_ID=7'
  },
  {
    category: 'Fiduciary',
    title: 'Guardianship & Conservatorship Forms (JDF 800 Series)',
    description: 'Forms for protective proceedings, annual guardian condition reports, and conservator financial plans.',
    url: 'https://www.courts.state.co.us/Forms/Forms_List.cfm?Form_Type_ID=8'
  },
  {
    category: 'Legal Aid',
    title: 'Colorado Legal Services (CLS)',
    description: 'Non-profit legal aid organization providing legal advice and civil representation for eligible low-income Coloradans.',
    url: 'https://www.coloradolegalservices.org/'
  },
  {
    category: 'Business / LLC',
    title: 'Colorado Secretary of State Business Center',
    description: 'Official state portal for filing Colorado LLC Articles of Organization, periodic reports, and business records.',
    url: 'https://www.coloradosos.gov/pubs/business/main.html'
  },
  {
    category: 'Tax / EIN',
    title: 'IRS Estate Employer ID Number (EIN) Application',
    description: 'Official IRS tool to obtain an Estate or Trust EIN required to open bank checking accounts.',
    url: 'https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online'
  },
  {
    category: 'Denver Court',
    title: 'Denver County Probate Court Guidelines',
    description: 'Local procedures, standing orders, and judicial guidelines specific to the Denver County Probate Court.',
    url: 'https://www.courts.state.co.us/Courts/County/Index.cfm?County_ID=15'
  }
];

export const LEGAL_TERMS = [
  {
    term: 'Personal Representative (PR)',
    definition: 'The individual or institution appointed by the probate court to manage and settle a deceased person\'s estate (formerly called an executor or administrator).'
  },
  {
    term: 'Letters of Appointment (Letters Testamentary / Letters of Administration)',
    definition: 'The official court-issued document proving the Personal Representative\'s legal authority to act on behalf of the estate, access bank accounts, and transfer property.'
  },
  {
    term: 'Intestate vs. Testate',
    definition: '"Testate" means the decedent passed away leaving a valid Last Will and Testament. "Intestate" means the decedent died without a valid will, and estate distribution follows Colorado statutory heirship rules.'
  },
  {
    term: 'Fiduciary',
    definition: 'A person holding a legal relationship of trust and responsibility (such as a Personal Representative, Guardian, or Conservator) who must act solely in the best interests of the estate or protected person.'
  },
  {
    term: 'Pro Se / Self-Represented Litigant',
    definition: 'A party who represents themselves in a court proceeding without an attorney of record appearing on their behalf.'
  },
  {
    term: 'JDF Forms (Judicial Department Forms)',
    definition: 'The standardized legal forms approved by the Colorado Supreme Court for use across all Colorado state trial courts.'
  },
  {
    term: 'Guardian vs. Conservator',
    definition: 'In Colorado, a "Guardian" makes personal, healthcare, and residential decisions for an incapacitated adult or minor, while a "Conservator" is appointed by the court to manage financial affairs and estate property.'
  },
  {
    term: 'Estate Inventory',
    definition: 'A detailed accounting of all real estate, bank accounts, vehicles, and tangible personal property owned by the decedent at date of death, required within 90 days of PR appointment.'
  },
  {
    term: 'Notice to Creditors',
    definition: 'A published statutory notice in a county newspaper and direct mailings to known creditors giving notice of the deadline to submit claims against an estate (typically 4 months).'
  },
  {
    term: 'Colorado Rule 16.2 Disclosures',
    definition: 'Mandatory financial disclosures required in Colorado domestic relations cases within 42 days of petition service, including 3 years of tax returns, paystubs, bank statements, and debt documentation.'
  }
];
