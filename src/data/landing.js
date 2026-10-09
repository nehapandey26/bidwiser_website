/**
 * Copy for the landing page sections.
 * Text transcribed from the Figma screenshots. Where a screenshot truncates
 * the body copy ("…"), the sentence is completed with a plausible line and
 * marked `assumed: true` so it's easy to correct against the real Figma.
 */

/* ── "Four ways a good bid still loses." ── (✓ copy from Figma Inspect) ── */
export const problems = [
  {
    title: 'Hours lost sorting the wrong tenders.',
    body: 'Every clause gets checked against your company profile, so you know on day one if you qualify.',
  },
  {
    title: 'The same documents rebuilt every time.',
    body: 'Forms, credentials and annexures get filled from your previous bids, cutting bidding time by 85%.',
  },
  {
    title: 'A hundred tenders you qualify for. Twenty you bid.',
    body: 'Every requirement gets checked before you submit, and teams see 25% more of their bids succeed.',
  },
  {
    title: 'One missed clause ends a strong bid.',
    body: 'When preparation stops being the bottleneck, the same team submits 3X the bids.',
  },
]

/* ── Pull quote ── (✓ text + colours from Figma Inspect) ───────────────
   plain = #727272 · emphasis = #20429B italic · ink = #1E1E1E            */
export const pullQuote = [
  { text: '“Your team spends weeks preparing a bid. ' },
  { text: 'Bidwiser reads the whole tender, fills every form, writes the technical content,', emphasis: true },
  { text: ' and flags what could get you disqualified in days.”', ink: true },
]

/* ── "From tender documents to a ready bid." (How it works) ─────────── */
export const steps = [
  // ✓ all four steps — title + body copy + tone read from the Figma frames
  {
    id: 'find',
    index: '01',
    tab: 'Find it',
    title: 'Finds the right tenders',
    body: 'Only tenders that fit your company come through. Save one and it stays watched, so corrigendum changes reach you within hours.',
    mock: 'tenderSearch',
    tone: 'peach',
  },
  {
    id: 'read',
    index: '02',
    tab: 'Read it',
    title: 'Read every page for you',
    body: 'Every clause is pulled out with its source, and checked against your profile. Within minutes you know if you qualify.',
    mock: 'readPage',
    tone: 'sky',
  },
  {
    id: 'prepare',
    index: '03',
    tab: 'Prepare the bid',
    title: 'Prepare the full bid',
    body: "Forms, annexures, methodology and CVs filled from your past bids, in the tender's format, ordered and sized for the portal.",
    mock: 'prepareBid',
    tone: 'peach',
  },
  {
    id: 'win',
    index: '04',
    tab: 'Win it',
    title: 'Submit without gaps',
    body: 'Conflicts between the NIT and GCC surface before submission, not after you win. You read every page, then send it.',
    mock: 'submit',
    tone: 'sky',
  },
]

/* ── Comparison ────────────────────────────────────────────────────── */
export const comparison = {
  llm: {
    title: 'Tenders need more than LLMs',
    body: "Generic AI can answer, but it can't truly understand your tender.",
    chips: ['No Tender Context', 'No Corrigendum', 'No Verification', 'Context Limits'],
    chat: [
      { from: 'user', text: 'Am I eligible for this tender?' },
      { from: 'ai', text: 'You seem eligible.' },
      { from: 'user', text: 'Which clause confirms?' },
      { from: 'ai', text: "I can't reliably verify tender clauses, cross-references." },
    ],
  },
  bidwiser: {
    title: 'Tenders need Bidwiser',
    body: 'Built to understand, verify, and navigate every tender detail.',
    chips: ['Tender Trained', 'Conflict Detection', 'Company Context', 'Source Verified'],
  },
}

/* ── Customer story ───────────────────────────────────────────────── */
export const customerStory = {
  eyebrow: 'Customer Story',
  heading: 'Trusted by people in Procurement',
  quotePlain: 'Corrigendum 3 changed the turnover limit and we would have found out at technical evaluation.',
  quoteEmphasis: 'It flagged the change the same afternoon.',
  author: 'Rakesh Patel',
  role: 'Co-founder, Patel Group of Industries',
  company: 'Patel',
}

/* ── FAQ ──────────────────────────────────────────────────────────── */
export const faqs = [
  {
    q: 'Is Bidwiser just another tender search platform?',
    a: 'No. Search is the first step. Bidwiser reads the full tender, checks eligibility clause by clause, extracts and pre-fills every form, and drafts the technical content — the work that happens after you find a tender.',
    assumed: true,
  },
  {
    q: 'Is the bid it prepares actually ready to submit?',
    a: 'It produces a complete draft — filled forms, annexures and technical methodology — with every point linked back to its source in the tender. Your team reviews and signs off before submission.',
    assumed: true,
  },
  {
    q: 'Are our tender documents used to train the AI?',
    a: 'No. Your tender documents and bids are never used to train shared models. They stay within your workspace under your access controls.',
    assumed: true,
  },
  {
    q: 'Our past bids have our pricing in them. Are they safe?',
    a: 'Yes. Documents are encrypted in transit and at rest, access is role-based, and every action is recorded in an audit trail.',
    assumed: true,
  },
  {
    q: 'Will this replace our bid team?',
    a: 'No. It removes the repetitive document work so your team can focus on strategy, pricing and the technical approach that actually wins bids.',
    assumed: true,
  },
]

/* ── Security ─────────────────────────────────────────────────────── */
export const security = {
  heading: 'Your tender data stays private',
  body: 'Bidwiser is built for sensitive tenders and bids, with access controls, encryption, and audit trails so your team can work faster and securely.',
  // ✓ Figma: the blue glow is a hover state, not a fixed highlight
  certifications: [
    { name: 'ISO 42001' },
    { name: 'ISO 27001', sub: '2022' },
    { name: 'ISO 9001', sub: '2015' },
  ],
}

/* ── Logo walls ───────────────────────────────────────────────────── */
export const logoWalls = {
  // ✓ Figma order: Convolution · OM Infra · meil · DIMTS · Amberg · E-script
  backed: {
    title: 'Backed and Trusted by',
    logos: [
      { name: 'Convolution', src: '/logos/convolution.jpg' },
      { name: 'OM Infra Ltd', src: '/logos/om-infra.jpg' },
      { name: 'MEIL', src: '/logos/meil.jpg' },
      { name: 'DIMTS', src: '/logos/dimts.jpg' },
      { name: 'Amberg Engineering', src: '/logos/amberg.jpg' },
      { name: 'E', src: '/logos/e-script.jpg' },
    ],
  },
  // logos for these two not shared yet — empty slots
  supported: {
    title: 'Supported by',
    gapBelow: 112, // ✓ Figma: blank band before the dark section
    logos: [
      { name: 'NVIDIA Inception Program', src: '/logos/nvidia-inception.jpg' },
      { name: 'AWS Activate', src: '/logos/aws-activate.jpg' },
      { name: 'Microsoft for Startups', src: '/logos/microsoft-for-startups.jpg' },
      { name: 'Google for Startups', src: '/logos/google-for-startups.jpg' },
    ],
  },
  // ✓ Figma: blank band + hatch after the FAQ, blank band before the security section
  featured: {
    title: 'Featured On',
    gapAbove: 96,
    hatchAbove: true,
    gapBelow: 112,
    // ✓ Figma order: dailyhunt · mintmoney · Loktej · pnn
    logos: [
      { name: 'Dailyhunt', src: '/logos/dailyhunt.jpg' },
      { name: 'Mint Money', src: '/logos/mintmoney.jpg' },
      { name: 'English Loktej', src: '/logos/loktej.jpg' },
      { name: 'PNN — A Positive News Network', src: '/logos/pnn.png' },
    ],
  },
}

/* ── Floating pills around the hero product screenshot ───────────── */
export const heroPills = ['Fill forms', 'Check eligibility', 'Analyse RFPs', 'Draft Proposals']

/* ── Case Studies page ── (✓ Figma "Case Studies" frame) ─────────────── */
export const caseStudiesPage = {
  eyebrow: 'Customer Stories',
  heading: 'See how companies use Bidwiser to bid on more tenders in less time.',
  // 2-col grid, ✓ Figma order: meil · OM Infra / DIMTS · Amberg / Convolution · E
  studies: [
    { slug: 'meil', tag: 'Civil Works', logo: '/logos/meil.jpg', name: 'MEIL', blurb: 'Cutting bid preparation from 11 days to 2 while submitting 3× more tenders.' },
    { slug: 'om-infra', tag: 'Civil Works', logo: '/logos/om-infra.jpg', name: 'OM Infra Ltd', blurb: 'Cutting bid preparation from 11 days to 2 while submitting 3× more tenders.' },
    { slug: 'dimts', tag: 'Civil Works', logo: '/logos/dimts.jpg', name: 'DIMTS', blurb: 'Cutting bid preparation from 11 days to 2 while submitting 3× more tenders.' },
    { slug: 'amberg', tag: 'Civil Works', logo: '/logos/amberg.jpg', name: 'Amberg Engineering', blurb: 'Cutting bid preparation from 11 days to 2 while submitting 3× more tenders.' },
    { slug: 'convolution', tag: 'Civil Works', logo: '/logos/convolution.jpg', name: 'Convolution', blurb: 'Cutting bid preparation from 11 days to 2 while submitting 3× more tenders.' },
    { slug: 'e-script', tag: 'Civil Works', logo: '/logos/e-script.jpg', name: 'E', blurb: 'Cutting bid preparation from 11 days to 2 while submitting 3× more tenders.' },
  ],
}

/* ── Case-study detail page ── (✓ Figma "Introducing the Bid Generator") ──
   Shared defaults; any study can override a field via `caseStudyDetails`.   */
export const caseStudyDefaults = {
  title: 'Introducing the Bid Generator',
  category: 'Product',
  date: 'Aug 12, 2026',
  impactTitle: 'Impact',
  // ✓ Figma: 2 × 2 ruled grid of audience segments
  impact: [
    'Engineering, Construction & Contracting',
    'Joint / Boint / Hotel & SPVs',
    'SMEs & Large Enterprises (OEMs, hi-tech/startups)',
    'Private Project Owners & Developers',
  ],
}

/** Per-study overrides, keyed by slug. Anything missing falls back above. */
export const caseStudyDetails = {}

/* ── Careers page ── (✓ Figma "Careers" frame) ─────────────────────── */
export const careersPage = {
  eyebrow: 'Careers',
  heading: "Let's make bidding simpler, together.",
  cta: 'See Open Roles',
  photo: { src: '/careers/carrier-photo.png', alt: 'The Bidwiser team' },
  valuesHeading: 'Bidwiser Values',
  // ✓ Figma: 3 × 2 ruled grid, title + one-line description each
  values: [
    { title: 'Customer First', body: "We listen closely, understand the real problem, and build with our customers' success in mind." },
    { title: 'Think Smarter', body: 'We challenge conventional approaches and look for better, simpler ways to solve complex problems.' },
    { title: 'Win Together', body: 'We believe our best work happens when people collaborate, share ideas, and help each other succeed.' },
    { title: 'Own Your Impact', body: 'We take responsibility for our work, follow through on our commitments, and care about the results we create.' },
    { title: 'Keep Learning', body: 'We stay curious, embrace new ideas, and continuously improve ourselves, our products, and the way we work.' },
    { title: 'Build With Integrity', body: 'We value honesty, transparency, and trust in every decision we make.' },
  ],
}

/* ── Pricing page ── (✓ Figma "Pricing" frame) ─────────────────────── */
export const pricingPage = {
  eyebrow: 'Pricing Plans',
  heading: 'Choose the plan that fits your team',
  cta: 'Contact Sales',
  plans: [
    {
      name: 'Silver',
      tagline: 'Tender Discovery + Requirement Analysis',
      cta: 'Contact Sales',
      ctaTone: 'grey',
      features: [
        ['Tender Discovery', 'Unlimited'],
        ['Requirement Analysis', '10/mo'],
        ['BidBuddy Chatbot', '10/mo'],
        ['AI Tender Summary', '5/mo'],
        ['Custom Email Sentouts', 'Up to 5'],
        ['Additional Websites', 'Up to 3'],
        ['AI Clause Extraction', '1 free'],
        ['Tender Translation', '2 free'],
        ['Smart Tender Summary (Custom Format)', '1 iteration'],
      ],
    },
    {
      name: 'Gold',
      tagline: '+ Bid / No-Bid Engine',
      cta: 'Contact Sales',
      ctaTone: 'brand',
      highlight: true, // ✓ Figma: gradient header
      features: [
        ['Tender Discovery', 'Unlimited'],
        ['Requirement Analysis', '10/mo'],
        ['BidBuddy Chatbot', '10/mo'],
        ['AI Tender Summary', '5/mo'],
        ['Custom Email Sentouts', 'Up to 5'],
        ['Additional Websites', 'Up to 3'],
        ['Tender Translation', '2 free'],
        ['Bid / No-Bid Engine', '3/mo'],
        ['Automatic Forms Extraction', '2/mo (taste)'],
        ['Assisted Bid Compilation', '1/mo (taste)'],
      ],
    },
    {
      name: 'Platinum',
      tagline: '+ Platform, Security & AI Bid Generator',
      cta: 'Request a Demo',
      ctaTone: 'grey',
      features: [
        ['Tender Discovery', 'Unlimited'],
        ['Requirement Analysis', '10/mo'],
        ['BidBuddy Chatbot', '10/mo'],
        ['AI Tender Summary', '5/mo'],
        ['Custom Email Sentouts', 'Up to 5'],
        ['Additional Websites', 'Up to 3'],
        ['Tender Translation', '2 free'],
        ['Bid / No-Bid Engine', '3/mo'],
        ['Bid Generator', '5/mo'],
        ['Dedicated Instance / VPC', 'Included'],
        ['API Access', 'Included'],
        ['Credit Carry-Over', 'Included'],
      ],
    },
  ],
  enterprise: {
    name: 'Enterprise',
    tagline: 'Custom Quote',
    cta: 'Contact Sales',
    listTitle: 'Everything in Platinum, fully custom',
    list: [
      'In-house build, tailored to your workflow',
      'On-premise or dedicated third-party cloud hosting',
      'Data stays fully on your premises',
      'White-labelling for your brand',
      'Unlimited credits, no monthly caps',
      'System integrations (CRM/DMS/e-Procurement), SSO & audit trails',
      'Premium SLA + dedicated Success Manager',
      'Custom onboarding & AMC',
    ],
  },
}

/* ── Blog page ── (✓ Figma "Bidwiser Blogs" frame) ─────────────────── */
export const blogPage = {
  heading: 'Bidwiser Blogs',
  // featured row: 1207×596, 1px #D5D5D5 top/bottom rules
  featured: {
    slug: 'from-civil-works-to-building-bidwiser',
    titleLead: 'From civil works to ',
    titleEm: 'building Bidwiser',
    author: 'By Rishi Dadhich, Founder & CTO of Bidwiser',
    photo: '/team/rishi.jpg',
    category: 'Product',
    date: 'Aug 12, 2026',
  },
  // 2-column grid of gradient cards
  posts: [
    {
      slug: 'introducing-the-bid-generator',
      title: 'Introducing the Bid Generator',
      category: 'Product',
      date: 'Aug 12, 2026',
      gradient: 'linear-gradient(105deg, #6b6fc0 0%, #8a6fae 42%, #e8763c 100%)',
    },
    {
      slug: 'government-tendering',
      title: 'Government Tendering',
      category: 'Product',
      date: 'Aug 12, 2026',
      gradient: 'linear-gradient(160deg, #4a6fd0 0%, #2c3f9e 68%, #5b3f8e 100%)',
    },
    {
      slug: 'bid-generator-walkthrough',
      title: 'Introducing the Bid Generator',
      category: 'Product',
      date: 'Aug 12, 2026',
      gradient: 'linear-gradient(110deg, #e8763c 0%, #d4634f 42%, #8a5fae 100%)',
    },
    {
      slug: 'bid-generator-whats-new',
      title: 'Introducing the Bid Generator',
      category: 'Product',
      date: 'Aug 12, 2026',
      gradient: 'linear-gradient(120deg, #7b5fb8 0%, #5b6fd0 46%, #c06f9e 100%)',
    },
  ],
}

/* ── About Us page ── (✓ Figma "About Us" frame) ───────────────────── */
export const aboutPage = {
  eyebrow: 'About the team',
  heading: 'The people behind Bidwiser.',
  // dark band: 1440×834, bg #1E1E1E, ticker strip top + bottom
  founder: {
    role: 'Founder, CEO & CTO',
    name: 'Rishi Dadhich',
    bio: 'AI/ML Research Engineer with hands-on experience in the design, training, and deployment of AI/ML applications. Holds a Masters in AI/ML from Arizona State University.',
    photo: '/team/rishi.jpg',
    // PLACEHOLDER chips — swap for real logo files when available
    logos: [
      { name: 'SABIN', tone: 'orange' },
      { name: 'Arizona State University', tone: 'light' },
      { name: 'GAMMA TECHNOLOGIES', tone: 'light' },
    ],
  },
  quote: {
    lead: 'We watched good companies ',
    em: 'lose tenders on paperwork',
    tail: ', and decided that was a problem worth solving.',
  },
}

/* ── Who We Serve page ── (✓ Figma "Who we serve" frame) ───────────── */
export const whoWeServePage = {
  eyebrow: 'Who we serve',
  heading: 'Industries we serve',
  body: 'Bidwiser works on government and private tenders, across every sector that bids.',
  // 2 × 2 ruled grid — same segments as the case-study "Impact" grid
  industries: [
    'Engineering, Construction & Contracting',
    'Joint / Boint / Hotel & SPVs',
    'SMEs & Large Enterprises (OEMs, hi-tech/startups)',
    'Private Project Owners & Developers',
  ],
}

/* ── Tender Discovery page ── (✓ Figma "Tender Discovery" frames) ──── */
export const tenderDiscoveryPage = {
  eyebrow: 'Tender Discovery',
  heading: 'See how companies use Bidwiser to bid on more tenders in less time.',
  // each row: heading top-left, body bottom-left, mock on a sky-gradient panel
  features: [
    {
      id: 'find',
      title: 'Find the tender',
      body: "Search in plain language, just like you'd tell a colleague, without learning a single portal filter code. Our AI reads what you mean rather than matching keywords, so tenders described differently still reach you.",
      mock: 'search',
    },
    {
      id: 'rank',
      title: 'Get the tenders that fit your company',
      body: 'Over 100,000 tenders are refreshed daily from eProc, state portals and private platforms. They are ranked against your company profile rather than just your search terms, and anything worth pursuing gets shortlisted into one pipeline the whole team works from.',
      mock: 'ranked',
    },
    {
      id: 'download',
      title: 'Download the full tender file',
      body: 'Every document is already attached, including the RFP, the NIT and every corrigendum. Save a tender and it stays watched, with new corrigendums appearing within two hours, so nobody goes back to the portal or works off superseded terms.',
      mock: 'file',
    },
  ],
  rankedTenders: [
    { name: 'Construction of New Admin Block', place: 'Mumbai, Maharashtra', value: '52 Lacs', expires: 'Expiring Sep 16' },
    { name: 'Road Widening & Strengthening Works', place: 'New Delhi, Delhi', value: '1 cr', expires: 'Expiring Sep 16' },
    { name: 'Construction of Boundary Wall', place: 'Gurgaon, Haryana', value: '80 lacs', expires: 'Expiring Sep 16' },
    { name: 'Construction of CC Road & Drain', place: 'Hisar, Haryana', value: '80 lacs', expires: 'Expiring Sep 16' },
  ],
  tenderFile: {
    title: 'Construction of New Admin Block',
    place: 'New Delhi, Delhi',
    fields: [
      ['Company Name', 'HARYANA MUNICIPAL'],
      ['Estimated Value', '\u20b91,45,373'],
      ['EMD Amount', '\u20b92,927'],
      ['Issued Date', '22-Sep-2025'],
      ['Deadline', '15-Oct-2025'],
      ['Contact Person', 'B.G ROADS'],
    ],
    cta: 'Download zip',
  },
}

/* ── Requirement Analysis page ── (✓ Figma frames) ─────────────────── */
export const requirementAnalysisPage = {
  eyebrow: 'Requirement Analysis',
  heading: 'See how companies use Bidwiser to bid on more tenders in less time.',
  features: [
    {
      id: 'reads',
      title: 'It reads every page of the RFP',
      body: 'The whole document set is read together, annexures and volumes included, with no limit on file size or complexity. Scanned pages are handled through OCR, so nothing in the pack gets skipped.',
      mock: 'summary',
    },
    {
      id: 'summary',
      title: 'You get a summary you can work from',
      body: 'Technical eligibility, financial eligibility, payment terms, deliverables and scope, in your own template, with every required form pulled out and regional-language tenders translated across more than 100 languages. Each detail cites the clause it came from, and BidBuddy answers any question about that tender from its own documents.',
      mock: 'extracted',
    },
  ],
  // ✓ Figma: chips in the Summary card
  summaryChips: [
    'Type of service',
    'Employer',
    'Period of extraction',
    'Work description',
    'Location of project',
    'Pre bid meeting information',
    'Evaluation Criteria',
    'Joint Venture',
    'Process of bid submission',
  ],
  submissionChips: ['EMD / Bid security', 'Eligibility Criteria', 'Date of tender published'],
  // ✓ Figma: Extracted Data accordion — first two expanded, rest collapsed
  extracted: [
    {
      label: 'Employer',
      body: 'Name: \u0928\u0917\u0930 \u0906\u092f\u0941\u0915\u094d\u0924, \u0928\u0917\u0930 \u0928\u093f\u0917\u092e, \u092a\u0942\u0930\u094d\u0923\u093f\u092f\u093e\u0901; Address: \u0915\u093e\u0930\u094d\u092f\u093e\u0932\u092f \u0928\u0917\u0930 \u0928\u093f\u0917\u092e, \u092a\u0942\u0930\u094d\u0923\u093f\u092f\u093e\u0901; No contact number provided.',
    },
    {
      label: 'Location of project',
      body: 'Project Location: Purnia, Bihar; Executing Authority: Nagar Nigam, Purnia.',
    },
    { label: 'Pre bid meeting information' },
    { label: 'Evaluation Criteria' },
  ],
}

/* ── Bid / No-Bid Engine page ── (✓ Figma frame) ───────────────────────
   NOTE: the shared screenshot was low-resolution — the heading is exact, but
   the body copy and the four criteria tiles below are a best reading and need
   confirming against a clearer crop.                                      */
export const bidNoBidPage = {
  eyebrow: 'Bid / No-Bid Engine',
  heading: 'See how companies use Bidwiser to bid on more tenders in less time.',
  features: [
    {
      id: 'qualified',
      title: 'Three weeks in, you find out you never qualified.',
      body: 'Every clause that decides the bid — financial, technical, risk and delivery terms — checked against your own company documents in minutes. Conflicts between the tender\u2019s own volumes are surfaced before you commit, not after you win.',
      mock: 'eligibility',
    },
  ],
  // ~ placeholder labels — confirm against a higher-res Figma crop
  criteria: [
    { label: 'Eligibility (Turnover)', status: 'Qualified', tone: 'pass' },
    { label: 'Company Experience', status: 'Qualified', tone: 'pass' },
    { label: 'Technical Capacity', status: 'Review', tone: 'warn' },
    { label: 'Delivery Obligation', status: 'Not met', tone: 'fail' },
  ],
}

/* ── Bid Generator page ── (✓ Figma frames) ────────────────────────── */
export const bidGeneratorPage = {
  eyebrow: 'Bid Generator',
  heading: 'See how companies use Bidwiser to bid on more tenders in less time.',
  features: [
    {
      id: 'forms',
      title: 'Every form and annexure, filled',
      body: 'Each form, format and annexure the tender requires is pulled out and filled from your past bids, work orders and compliance records. The submission checklist is populated at the same time, so nothing required gets left out.',
      mock: 'prepare', // reuses the Extracted Forms panel + falling-bead branch
    },
    {
      id: 'technical',
      title: 'The technical content, written',
      body: 'The approach methodology, work plan and manpower schedule are drafted in the form the tender prescribes. Key personnel CVs are picked from your own pool and rewritten into its format, usually the most tedious hour in any technical bid.',
      mock: 'methodology',
    },
    {
      id: 'compiled',
      title: 'Compiled, signed and ready to upload',
      body: "The whole set is ordered and indexed as the tender prescribes, edited in place with your stamps, page numbering and templates. It exports as a signature-ready PDF, compressed to fit the portal's upload limit.",
      mock: 'sequencing',
    },
  ],
  notes: [
    'Text Inputs for Design System',
    'Text Inputs for Design System',
    'Text Inputs for Design System',
  ],
  // ✓ Figma: ungrouped rows first, then the two labelled groups
  sequencing: [
    {
      files: [
        { name: 'MSME_Certificate.pdf' },
        { name: 'MSME_Certificate.pdf' },
      ],
    },
    {
      label: 'Company Documents',
      files: [
        { name: 'MSME_Certificate.pdf', signed: true },
        { name: 'MSME_Certificate.pdf' },
        { name: 'MSME_Certificate.pdf' },
        { name: 'MSME_Certificate.pdf' },
      ],
    },
    {
      label: 'Forms',
      files: [
        { name: 'MSME_Certificate.pdf' },
        { name: 'MSME_Certificate.pdf' },
        { name: 'MSME_Certificate.pdf' },
        { name: 'MSME_Certificate.pdf' },
      ],
    },
  ],
}

/* ── "Read every page for you" mock ── (✓ Figma Frame 315) ────────────
   NOTE: the "Work" line was small in the shared frame — confirm it against a
   clearer crop if the wording matters.                                     */
export const readEveryPage = {
  file: 'NIT_NH44_NH27_Bypass',
  pages: '82/202 pages',
  mapping: 'Mapping RFP',
  extracted: [
    { label: 'Work', body: '4-lane bypass, 18.4 km / 4-ln e-way, 16.4 km' },
    {
      label: 'Location of project',
      body: 'Project Location: Purnia, Bihar; Executing Authority: Nagar Nigam, Purnia.',
    },
    { label: 'Pre bid meeting information' },
    { label: 'Evaluation Criteria' },
  ],
}
