const STORAGE_KEY_ACTIVE_PROFILE = 'ZUBAIR_FREELANCE_ACTIVE_PROFILE';
const STORAGE_KEY_THEME = 'ZUBAIR_FREELANCE_THEME_MODE';
const STORAGE_KEY_AUTH_META = 'ZUBAIR_FREELANCE_AUTH_META_V2';
const STORAGE_KEY_AUTH_GUARD = 'ZUBAIR_FREELANCE_AUTH_GUARD_V1';
const STORAGE_KEY_SEC_PREFS = 'ZUBAIR_FREELANCE_SEC_PREFS_V1';

const STUDIO_CURRENCIES = {
  USD: { code: 'USD', symbol: '$', pdfPrefix: '$', label: 'USD ($)' },
  AED: { code: 'AED', symbol: 'AED ', pdfPrefix: 'AED ', label: 'AED (Dirham)' },
  EUR: { code: 'EUR', symbol: '€', pdfPrefix: 'EUR ', label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', pdfPrefix: 'GBP ', label: 'GBP (£)' },
  BDT: { code: 'BDT', symbol: '৳', pdfPrefix: 'BDT ', label: 'BDT (৳)' }
};

const EVENT_STUDIO_LABELS = {
  projectsSection: 'Events',
  pendingCard: 'Pending Events',
  confirmedCard: 'Confirmed Events',
  bookedLegend: 'Booked Event',
  addProjectBtn: '+ Add Event / Project',
  projNameField: 'Event / Project Name *',
  projNamePlaceholder: 'e.g., Global FinTech Summit',
  projDateField: 'Event Start Day *',
  projEndDateField: 'Event End Day *',
  clientTypeField: 'Event Type',
  clientTypePlaceholder: 'Corporate Gala / Summit',
  calendarBookedHeading: 'Booked Event Projects',
  defaultServiceDesc: 'Event Management Services'
};

const STUDIO_PROFILES = {
  mza: {
    id: 'mza',
    name: 'Mohammed Zubair Alam',
    subtitle: 'Event Management Studio',
    initials: 'MZA',
    authSalt: '43a1698fff0e11dfac1aaf64250ad448',
    dataSalt: 'b281f5a381cb7bc75fcd1458f5e5770f',
    verifier: 'e706b27761560df6a7bd45948c32f8e3984bb7fd497f6e4f60b72071535480da',
    iterations: 120000,
    storageKey: 'EVENT_STUDIO_PROFILE_MZA_V1',
    labels: EVENT_STUDIO_LABELS
  },
  banzir: {
    id: 'banzir',
    name: 'Banzir Hazra',
    subtitle: 'Business Management System',
    initials: 'BH',
    authSalt: 'f19d1e9b5c36f196983642652f8aaf46',
    dataSalt: '1058fe45f83252477bedbaddf498d5d3',
    verifier: 'f2cbf6ff2bd3185f92102a88f262fd30477264c9264974fb781e31c7d0d4f35b',
    iterations: 120000,
    storageKey: 'ZUBAIR_FREELANCE_STUDIO_PROFILE_BANZIR_V1',
    labels: {
      projectsSection: 'Operations',
      pendingCard: 'Pending Projects',
      confirmedCard: 'Confirmed Projects',
      bookedLegend: 'Scheduled Project',
      addProjectBtn: '+ Add Business Project',
      projNameField: 'Project Name *',
      projNamePlaceholder: 'e.g., Q4 Operations Expansion',
      projDateField: 'Start Date *',
      projEndDateField: 'End Date *',
      clientTypeField: 'Industry / Sector',
      clientTypePlaceholder: 'Consulting / Retail / Operations',
      calendarBookedHeading: 'Active Business Projects',
      defaultServiceDesc: 'Business Management Services'
    }
  }
};

[
  { num: 1, authSalt: '69a4e7ccff0b61a82a28b50f32a888d3', dataSalt: '5bf3515393b988c6e22369e2c1bb4e66', verifier: 'a1f9db58125fd61d032ccc8fff752075ef36ead257dc3b320bd7da181041ec61' },
  { num: 2, authSalt: '4098a87944f207c8b7ea22dc0f66e3de', dataSalt: '0cf5d9f2deb664687c24234715952799', verifier: '1792f5134a07f25f4c3b78e05cb7724587247dac939b4b914e5b39f8d5954ae6' },
  { num: 3, authSalt: '16a7b8ec87b91ee743b71ecced3b4a94', dataSalt: 'df0beb1492a468acfbf03589c0952817', verifier: '521b08f455da874c9774d8dca7ff2eaa6bbfa437ef2dab7f6c381dc249d1b9ab' },
  { num: 4, authSalt: '90cb4be8876872e430873bad2f8f75c0', dataSalt: '5a150145f69d9ef7538d357c0fa130ba', verifier: '29353c584b33fe2ca780ff704c3e688e6063261f7a709425a87568ae1eeaedfb' },
  { num: 5, authSalt: '12b2c1976bb52c5bf3ca55d55fc21180', dataSalt: '8673b66fe8ccec50eaf179da9cc14a62', verifier: '138e2883985aeabccbcb315e70f93411cfd1d28c988eb368e3736dae1a01c645' },
  { num: 6, authSalt: 'f4b6fbc1bcf838ea027707a152615ab0', dataSalt: '8f3f225809c9b7a9b8fea3c6438395e8', verifier: '6f501cae71f79f50c3ea1aa7f937716a2291ab436b917d2c6e35c607cf267939' },
  { num: 7, authSalt: 'b9f7f71339750b20f14bf0325ed71fc3', dataSalt: '4e03e2d4c494eab885d31283f4d26348', verifier: '25c1517d0ddd43affe7b5eb4f049a213c808dbb95f25c12865981b5b4cf6aced' },
  { num: 8, authSalt: '1fe00fa81f66aad00a30aeb894914d19', dataSalt: 'b4b46e469aa5f884ed35c459ec6785ab', verifier: '9b867468d931a06875721094cf07f7b49b78f9aa22d1caa87235db71fdb42688' },
  { num: 9, authSalt: '985efab76a582d7423d3bc12ee479947', dataSalt: '13293b248a5e565f2029165ebf8f132b', verifier: 'bcf7da263e7c796afaf3674ceaf82b65a926e69c60575bb433a63068cf891e09' },
  { num: 10, authSalt: 'd511a5f84a3a0f33a66d54299fe8a9a6', dataSalt: 'b436b2c3a93bf5f5e01009d03f586bc3', verifier: '3aea7b7851469cc321bc38ab2a00d91985afd644d5f8a65830e520cfff2ce12a' }
].forEach(t => {
  const id = `tester${t.num}`;
  STUDIO_PROFILES[id] = {
    id,
    name: `Tester ${t.num}`,
    subtitle: 'Event Management Studio',
    initials: `T${t.num}`,
    authSalt: t.authSalt,
    dataSalt: t.dataSalt,
    verifier: t.verifier,
    iterations: 120000,
    storageKey: `ZUBAIR_FREELANCE_STUDIO_PROFILE_TESTER_${t.num}_V1`,
    labels: EVENT_STUDIO_LABELS
  };
});

let activeProfileId = 'tester1';

function getActiveProfile() {
  return STUDIO_PROFILES[activeProfileId] || STUDIO_PROFILES.tester1;
}

const IDB_NAME = 'EventStudioLocalVaultDB';
const IDB_VERSION = 1;
const IDB_STORE = 'vault_files';

let dbInstance = null;
let currentSelectedCalendarDate = null;
let currentCalendarYear = 2026;
let currentCalendarMonth = 10;
let converterPendingFile = null;
let converterPendingDataUrl = null;
let converterPendingText = null;
let currentProjectLineItems = [];

const defaultEventWorkspaceState = {
  profileId: 'tester1',
  googleAccount: { connected: false, email: 'studio@eventstudio.local' },
  clients: [
    {
      id: 'cli-101',
      company: 'Aurora Media Group',
      contactPerson: 'Nadia Al-Mansoor',
      email: 'nadia@auroramedia.com',
      phone: '+1 (212) 555-0194',
      eventType: 'Executive Keynote & Summit',
      address: '450 Lexington Ave, Suite 1200, New York, NY 10017'
    },
    {
      id: 'cli-102',
      company: 'Vanguard Biotech Corp',
      contactPerson: 'Dr. Julian Vance',
      email: 'j.vance@vanguardbio.io',
      phone: '+1 (415) 555-0148',
      eventType: 'Annual Product Launch Gala',
      address: '880 Mission St, Floor 9, San Francisco, CA 94103'
    },
    {
      id: 'cli-103',
      company: 'Solstice Luxury Hospitality',
      contactPerson: 'Elena Rostova',
      email: 'elena@solsticehotels.com',
      phone: '+1 (305) 555-0182',
      eventType: 'VIP Brand Experience',
      address: '1200 Brickell Bay Dr, Miami, FL 33131'
    }
  ],
  suppliers: [
    {
      id: 'sup-201',
      name: 'Lumina Stage & Sound Systems',
      category: 'AV & Lighting',
      contactPerson: 'Marcus Thorne',
      email: 'production@luminastage.com',
      phone: '+1 (212) 555-0821'
    },
    {
      id: 'sup-202',
      name: 'Saffron & Salt Bespoke Culinary',
      category: 'Catering',
      contactPerson: 'Chef Tariq Haddad',
      email: 'events@saffronculinary.com',
      phone: '+1 (212) 555-0633'
    },
    {
      id: 'sup-203',
      name: 'The Glasshouse Pavilion',
      category: 'Venue',
      contactPerson: 'Claire Bennett',
      email: 'bookings@glasshouse.nyc',
      phone: '+1 (212) 555-0911'
    }
  ],
  projects: [
    {
      id: 'prj-301',
      name: 'Global FinTech Leadership Summit 2026',
      clientId: 'cli-101',
      dateCreated: '2026-11-18',
      endDate: '2026-11-20',
      status: 'Confirmed',
      role: 'Lead Technical Producer',
      scope: 'Mainstage AV production, LED wall setup, and live show calling.',
      supplierCosts: 14500,
      internalNotes: 'Lumina Stage confirmed for 6:00 AM load-in.',
      quotationNumber: 'QTN-840112',
      invoiceNumber: 'INV-849201',
      lineItems: [
        { description: 'Technical Event Direction & Production', qty: 1, price: 8500 },
        { description: 'Mainstage LED Wall & Audio Package', qty: 1, price: 14200 }
      ]
    },
    {
      id: 'prj-302',
      name: 'Vanguard Genomics Innovation Gala',
      clientId: 'cli-102',
      dateCreated: '2026-11-24',
      endDate: '2026-11-24',
      status: 'Quoted',
      role: 'Senior Event Director',
      scope: 'Evening gala production for 350 guests and projection mapping.',
      supplierCosts: 9800,
      internalNotes: 'Awaiting final floral sign-off.',
      quotationNumber: 'QTN-739204',
      invoiceNumber: 'INV-739204',
      lineItems: [
        { description: 'Gala Creative Direction & Venue Setup', qty: 1, price: 7200 },
        { description: 'Architectural Lighting Package', qty: 1, price: 9600 }
      ]
    },
    {
      id: 'prj-303',
      name: 'Solstice Winter VIP Showcase',
      clientId: 'cli-103',
      dateCreated: '2026-11-28',
      endDate: '2026-11-29',
      status: 'Planning',
      role: 'Production Consultant',
      scope: 'Private pavilion showcase and VIP guest logistics.',
      supplierCosts: 5200,
      internalNotes: 'Initial site inspection scheduled.',
      quotationNumber: 'QTN-612098',
      invoiceNumber: 'INV-612098',
      lineItems: [
        { description: 'Production Consulting & Logistics', qty: 1, price: 4800 }
      ]
    }
  ],
  orgProfiles: [
    {
      id: 'org-1',
      name: 'Event Management Studio',
      taxId: 'EIN-00-0000000',
      email: 'studio@eventstudio.local',
      address: '100 Studio Plaza, Suite 200',
      bankName: 'Sample Business Bank',
      accountHolder: 'Event Management Studio',
      accountNumber: '0000000000',
      iban: 'AE000000000000000000000',
      swift: 'SAMPLEXX'
    }
  ],
  selectedOrgProfileId: 'org-1',
  usedDocNumbers: [],
  billingDraft: {
    docType: 'Invoice',
    docNumber: 'INV-849201',
    nextInvoiceNumber: 'INV-849201',
    nextQuotationNumber: 'QTN-510201',
    issueDate: '2026-11-14',
    selectedClientId: 'cli-101',
    clientCompany: 'Aurora Media Group',
    clientContact: 'Nadia Al-Mansoor',
    clientEmail: 'nadia@auroramedia.com',
    clientAddress: '450 Lexington Ave, Suite 1200, New York, NY 10017',
    paymentTerms: 'Payment is due within 14 days of invoice date via bank transfer. Please quote the document reference number on your remittance. Late payments may incur a 2% monthly administrative fee.',
    lineItems: [
      { description: 'Technical Event Direction & Production', qty: 1, price: 8500 },
      { description: 'Mainstage LED Wall & Audio Package', qty: 1, price: 14200 }
    ]
  },
  meetings: [
    {
      id: 'mtg-401',
      title: 'Mainstage Rigging & Runthrough',
      date: '2026-11-16',
      projectId: 'prj-301',
      startTime: '10:00',
      endTime: '11:30',
      attendeeEmail: 'nadia@auroramedia.com',
      location: 'https://meet.google.com/zf-summit-av',
      notes: 'Confirm LED wall pixel pitch and speaker monitors.'
    },
    {
      id: 'mtg-402',
      title: 'Vanguard Gala Lighting Review',
      date: '2026-11-21',
      projectId: 'prj-302',
      startTime: '14:00',
      endTime: '15:00',
      attendeeEmail: 'j.vance@vanguardbio.io',
      location: 'https://meet.google.com/zf-gala-sync',
      notes: 'Finalize dining table pin-spots.'
    }
  ]
};

const defaultBanzirWorkspaceState = {
  profileId: 'banzir',
  googleAccount: { connected: false, email: 'banzir.hazra@gmail.com' },
  clients: [
    {
      id: 'cli-b101',
      company: 'Crescent Royal Exhibitions',
      contactPerson: 'Farhan Siddiqui',
      email: 'f.siddiqui@crescentroyal.ae',
      phone: '+971 50 492 8170',
      eventType: 'Luxury Exhibition & Brand Activation',
      address: 'DIFC Gate Village, Building 4, Dubai, UAE'
    },
    {
      id: 'cli-b102',
      company: 'Meridian Lifestyle & Media',
      contactPerson: 'Hannah Sterling',
      email: 'hannah@meridianmedia.co',
      phone: '+971 52 819 3044',
      eventType: 'Fashion Runway & Press Gala',
      address: 'Dubai Design District (d3), Building 7, Dubai, UAE'
    }
  ],
  suppliers: [
    {
      id: 'sup-b201',
      name: 'Apex Staging & Rigging Solutions',
      category: 'Staging & Truss',
      contactPerson: 'Rashed Al-Nuaimi',
      email: 'ops@apexstaging.ae',
      phone: '+971 4 388 9200'
    },
    {
      id: 'sup-b202',
      name: 'Velvet Floral & Event Decor',
      category: 'Floral & Styling',
      contactPerson: 'Maya Khoury',
      email: 'studio@velvetdecor.ae',
      phone: '+971 4 512 7490'
    }
  ],
  projects: [
    {
      id: 'prj-b301',
      name: 'Crescent Luxury Watch Expo 2026',
      clientId: 'cli-b101',
      dateCreated: '2026-11-20',
      endDate: '2026-11-22',
      status: 'Confirmed',
      role: 'Executive Event Producer',
      scope: 'Bespoke exhibition booths, VIP lounge hospitality, and stage lighting.',
      supplierCosts: 11200,
      internalNotes: 'VIP security and valet confirmed with venue.',
      quotationNumber: 'QTN-610401',
      invoiceNumber: 'INV-910401',
      lineItems: [
        { description: 'Exhibition Production & Creative Direction', qty: 1, price: 9500 },
        { description: 'Bespoke Pavilion & Lighting Setup', qty: 1, price: 12400 }
      ]
    },
    {
      id: 'prj-b302',
      name: 'Meridian Autumn Runway Showcase',
      clientId: 'cli-b102',
      dateCreated: '2026-11-26',
      endDate: '2026-11-26',
      status: 'Planning',
      role: 'Event Operations Lead',
      scope: 'Runway lighting choreography, backstage logistics, and press seating.',
      supplierCosts: 6400,
      internalNotes: 'Soundcheck scheduled for 2:00 PM.',
      quotationNumber: 'QTN-610402',
      invoiceNumber: 'INV-910402',
      lineItems: [
        { description: 'Runway Show Production & Logistics', qty: 1, price: 7800 }
      ]
    }
  ],
  orgProfiles: [
    {
      id: 'org-b1',
      name: 'Banzir Hazra — Business Management System',
      taxId: 'TRN-100492817400003',
      email: 'banzir.hazra@gmail.com',
      address: 'Dubai Design District (d3), Building 7, Dubai, UAE',
      bankName: 'First Abu Dhabi Bank (FAB)',
      accountHolder: 'Banzir Hazra',
      accountNumber: '011002948172001',
      iban: 'AE45 0351 0110 0294 8172 001',
      swift: 'NBADAEAA'
    }
  ],
  selectedOrgProfileId: 'org-b1',
  usedDocNumbers: [],
  billingDraft: {
    docType: 'Invoice',
    docNumber: 'INV-910401',
    nextInvoiceNumber: 'INV-910401',
    nextQuotationNumber: 'QTN-610401',
    issueDate: '2026-11-14',
    selectedClientId: 'cli-b101',
    clientCompany: 'Crescent Royal Exhibitions',
    clientContact: 'Farhan Siddiqui',
    clientEmail: 'f.siddiqui@crescentroyal.ae',
    clientAddress: 'DIFC Gate Village, Building 4, Dubai, UAE',
    paymentTerms: 'Payment is due within 14 days of invoice date via bank transfer. Please quote the document reference number on your remittance. Late payments may incur a 2% monthly administrative fee.',
    lineItems: [
      { description: 'Exhibition Production & Creative Direction', qty: 1, price: 9500 },
      { description: 'Bespoke Pavilion & Lighting Setup', qty: 1, price: 12400 }
    ]
  },
  meetings: [
    {
      id: 'mtg-b401',
      title: 'Crescent Expo Floorplan Sign-off',
      date: '2026-11-19',
      projectId: 'prj-b301',
      startTime: '11:00',
      endTime: '12:00',
      attendeeEmail: 'f.siddiqui@crescentroyal.ae',
      location: 'Google Meet',
      notes: 'Review VIP lounge entrance layout and lighting rig.'
    }
  ]
};

function createEmptyLockedState(profileId = 'tester1') {
  return {
    profileId,
    currency: 'USD',
    googleAccount: { connected: false, email: '' },
    clients: [],
    suppliers: [],
    projects: [],
    orgProfiles: [],
    selectedOrgProfileId: '',
    usedDocNumbers: [],
    billingDraft: {
      docType: 'Invoice',
      docNumber: '',
      nextInvoiceNumber: '',
      nextQuotationNumber: '',
      issueDate: '',
      selectedClientId: '',
      clientCompany: '',
      clientContact: '',
      clientEmail: '',
      clientAddress: '',
      paymentTerms: '',
      lineItems: []
    },
    meetings: []
  };
}

/* ====================================================================== */
/* CLIENT-SIDE CRYPTO ENGINE: PBKDF2-HMAC-SHA256 + AES-256-GCM / CTR-EtM  */
/* ====================================================================== */
const StudioCrypto = (() => {
  const SHA256_K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ]);
  const SHA256_W = new Uint32Array(64);
  const rotr = (n, x) => (x >>> n) | (x << (32 - n));

  function sha256(msg) {
    const bitLen = msg.length * 8;
    const padLen = ((msg.length + 9 + 63) & ~63);
    const buf = new Uint8Array(padLen);
    buf.set(msg, 0);
    buf[msg.length] = 0x80;
    const view = new DataView(buf.buffer);
    view.setUint32(padLen - 8, Math.floor(bitLen / 0x100000000), false);
    view.setUint32(padLen - 4, bitLen >>> 0, false);

    let h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
    let h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;

    for (let off = 0; off < padLen; off += 64) {
      for (let i = 0; i < 16; i++) SHA256_W[i] = view.getUint32(off + i * 4, false);
      for (let i = 16; i < 64; i++) {
        const s0 = rotr(7, SHA256_W[i - 15]) ^ rotr(18, SHA256_W[i - 15]) ^ (SHA256_W[i - 15] >>> 3);
        const s1 = rotr(17, SHA256_W[i - 2]) ^ rotr(19, SHA256_W[i - 2]) ^ (SHA256_W[i - 2] >>> 10);
        SHA256_W[i] = (SHA256_W[i - 16] + s0 + SHA256_W[i - 7] + s1) >>> 0;
      }
      let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
      for (let i = 0; i < 64; i++) {
        const S1 = rotr(6, e) ^ rotr(11, e) ^ rotr(25, e);
        const ch = (e & f) ^ ((~e) & g);
        const temp1 = (h + S1 + ch + SHA256_K[i] + SHA256_W[i]) >>> 0;
        const S0 = rotr(2, a) ^ rotr(13, a) ^ rotr(22, a);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const temp2 = (S0 + maj) >>> 0;
        h = g; g = f; f = e; e = (d + temp1) >>> 0;
        d = c; c = b; b = a; a = (temp1 + temp2) >>> 0;
      }
      h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0;
      h4 = (h4 + e) >>> 0; h5 = (h5 + f) >>> 0; h6 = (h6 + g) >>> 0; h7 = (h7 + h) >>> 0;
    }

    const out = new Uint8Array(32);
    const outView = new DataView(out.buffer);
    [h0, h1, h2, h3, h4, h5, h6, h7].forEach((val, idx) => outView.setUint32(idx * 4, val, false));
    return out;
  }

  function makeHmacPads(keyBytes) {
    const key = keyBytes.length > 64 ? sha256(keyBytes) : keyBytes;
    const ipad = new Uint8Array(64);
    const opad = new Uint8Array(64);
    for (let i = 0; i < 64; i++) {
      const k = i < key.length ? key[i] : 0;
      ipad[i] = k ^ 0x36;
      opad[i] = k ^ 0x5c;
    }
    return { ipad, opad };
  }

  function hmacWithPads(pads, data) {
    const inner = new Uint8Array(64 + data.length);
    inner.set(pads.ipad, 0);
    inner.set(data, 64);
    const innerHash = sha256(inner);
    const outer = new Uint8Array(64 + 32);
    outer.set(pads.opad, 0);
    outer.set(innerHash, 64);
    return sha256(outer);
  }

  function hmacSha256(keyBytes, data) {
    return hmacWithPads(makeHmacPads(keyBytes), data);
  }

  function pbkdf2Sha256Fallback(passBytes, saltBytes, iterations, dkLen = 32) {
    const pads = makeHmacPads(passBytes);
    const blocks = Math.ceil(dkLen / 32);
    const out = new Uint8Array(blocks * 32);
    for (let b = 1; b <= blocks; b++) {
      const seed = new Uint8Array(saltBytes.length + 4);
      seed.set(saltBytes, 0);
      seed[saltBytes.length] = (b >>> 24) & 0xff;
      seed[saltBytes.length + 1] = (b >>> 16) & 0xff;
      seed[saltBytes.length + 2] = (b >>> 8) & 0xff;
      seed[saltBytes.length + 3] = b & 0xff;
      let u = hmacWithPads(pads, seed);
      const t = new Uint8Array(u);
      for (let i = 1; i < iterations; i++) {
        u = hmacWithPads(pads, u);
        for (let k = 0; k < 32; k++) t[k] ^= u[k];
      }
      out.set(t, (b - 1) * 32);
    }
    return out.slice(0, dkLen);
  }

  const encoder = typeof TextEncoder !== 'undefined' ? new TextEncoder() : null;
  const decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder() : null;

  function utf8ToBytes(str) {
    if (encoder) return encoder.encode(str);
    const utf8 = unescape(encodeURIComponent(str));
    const arr = new Uint8Array(utf8.length);
    for (let i = 0; i < utf8.length; i++) arr[i] = utf8.charCodeAt(i);
    return arr;
  }

  function bytesToUtf8(bytes) {
    if (decoder) return decoder.decode(bytes);
    let bin = '';
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return decodeURIComponent(escape(bin));
  }

  function bytesToHex(bytes) {
    let hex = '';
    for (let i = 0; i < bytes.length; i++) hex += bytes[i].toString(16).padStart(2, '0');
    return hex;
  }

  function hexToBytes(hex) {
    const clean = String(hex || '').trim();
    const out = new Uint8Array(clean.length / 2);
    for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
    return out;
  }

  function bytesToBase64(bytes) {
    let binary = '';
    const chunkSize = 0x4000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
    }
    return btoa(binary);
  }

  function base64ToBytes(b64) {
    const binary = atob(b64);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
    return out;
  }

  function randomBytes(len) {
    const out = new Uint8Array(len);
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
      crypto.getRandomValues(out);
      return out;
    }
    throw new Error('Cryptographically secure random generator unavailable.');
  }

  function constantTimeEqualHex(a, b) {
    const sa = String(a || '');
    const sb = String(b || '');
    if (sa.length !== sb.length || sa.length === 0) return false;
    let diff = 0;
    for (let i = 0; i < sa.length; i++) diff |= sa.charCodeAt(i) ^ sb.charCodeAt(i);
    return diff === 0;
  }

  function constantTimeEqualBytes(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
    return diff === 0;
  }

  function hasWebCrypto() {
    return typeof crypto !== 'undefined' && !!crypto.subtle && typeof crypto.subtle.importKey === 'function';
  }

  async function derivePbkdf2Bytes(passcode, domainTag, saltHex, iterations = 120000) {
    const passBytes = utf8ToBytes(String(passcode || '') + domainTag);
    const saltBytes = hexToBytes(saltHex);
    if (hasWebCrypto()) {
      const baseKey = await crypto.subtle.importKey('raw', passBytes, 'PBKDF2', false, ['deriveBits']);
      const bits = await crypto.subtle.deriveBits(
        { name: 'PBKDF2', salt: saltBytes, iterations, hash: 'SHA-256' },
        baseKey,
        256
      );
      return new Uint8Array(bits);
    }
    return pbkdf2Sha256Fallback(passBytes, saltBytes, iterations, 32);
  }

  async function computeAuthVerifierHex(passcode, authSaltHex, iterations = 120000) {
    const digest = await derivePbkdf2Bytes(passcode, '\0auth', authSaltHex, iterations);
    return bytesToHex(digest);
  }

  async function deriveDataKey(passcode, dataSaltHex, iterations = 120000) {
    const keyBytes = await derivePbkdf2Bytes(passcode, '\0vault', dataSaltHex, iterations);
    if (hasWebCrypto()) {
      const aesKey = await crypto.subtle.importKey('raw', keyBytes, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
      keyBytes.fill(0);
      return { engine: 'webcrypto', alg: 'AES-256-GCM', aesKey };
    }
    return { engine: 'fallback', alg: 'SHA256-CTR-EtM', keyBytes };
  }

  function fallbackCtrEtMEncrypt(plainBytes, keyBytes, iv, aadBytes) {
    const encSeed = new Uint8Array(7 + iv.length);
    encSeed.set(utf8ToBytes('ZFS-ENC'), 0);
    encSeed.set(iv, 7);
    const macSeed = new Uint8Array(7 + iv.length);
    macSeed.set(utf8ToBytes('ZFS-MAC'), 0);
    macSeed.set(iv, 7);

    const kEnc = hmacSha256(keyBytes, encSeed);
    const kMac = hmacSha256(keyBytes, macSeed);
    const encPads = makeHmacPads(kEnc);

    const ctOnly = new Uint8Array(plainBytes.length);
    const ctrBuf = new Uint8Array(4);
    let blockIdx = 0;
    for (let pos = 0; pos < plainBytes.length; pos += 32) {
      ctrBuf[0] = (blockIdx >>> 24) & 0xff;
      ctrBuf[1] = (blockIdx >>> 16) & 0xff;
      ctrBuf[2] = (blockIdx >>> 8) & 0xff;
      ctrBuf[3] = blockIdx & 0xff;
      const ks = hmacWithPads(encPads, ctrBuf);
      const end = Math.min(32, plainBytes.length - pos);
      for (let j = 0; j < end; j++) ctOnly[pos + j] = plainBytes[pos + j] ^ ks[j];
      blockIdx++;
    }

    const macInput = new Uint8Array(aadBytes.length + iv.length + ctOnly.length);
    macInput.set(aadBytes, 0);
    macInput.set(iv, aadBytes.length);
    macInput.set(ctOnly, aadBytes.length + iv.length);
    const tag = hmacSha256(kMac, macInput);

    const combined = new Uint8Array(ctOnly.length + 32);
    combined.set(ctOnly, 0);
    combined.set(tag, ctOnly.length);
    return combined;
  }

  function fallbackCtrEtMDecrypt(combinedBytes, keyBytes, iv, aadBytes) {
    if (!combinedBytes || combinedBytes.length < 32) throw new Error('Corrupt encrypted payload.');
    const ctLen = combinedBytes.length - 32;
    const ctOnly = combinedBytes.subarray(0, ctLen);
    const tag = combinedBytes.subarray(ctLen);

    const macSeed = new Uint8Array(7 + iv.length);
    macSeed.set(utf8ToBytes('ZFS-MAC'), 0);
    macSeed.set(iv, 7);
    const kMac = hmacSha256(keyBytes, macSeed);

    const macInput = new Uint8Array(aadBytes.length + iv.length + ctLen);
    macInput.set(aadBytes, 0);
    macInput.set(iv, aadBytes.length);
    macInput.set(ctOnly, aadBytes.length + iv.length);
    const expectedTag = hmacSha256(kMac, macInput);
    if (!constantTimeEqualBytes(tag, expectedTag)) {
      throw new Error('Authentication tag mismatch or invalid passcode.');
    }

    const encSeed = new Uint8Array(7 + iv.length);
    encSeed.set(utf8ToBytes('ZFS-ENC'), 0);
    encSeed.set(iv, 7);
    const kEnc = hmacSha256(keyBytes, encSeed);
    const encPads = makeHmacPads(kEnc);

    const plain = new Uint8Array(ctLen);
    const ctrBuf = new Uint8Array(4);
    let blockIdx = 0;
    for (let pos = 0; pos < ctLen; pos += 32) {
      ctrBuf[0] = (blockIdx >>> 24) & 0xff;
      ctrBuf[1] = (blockIdx >>> 16) & 0xff;
      ctrBuf[2] = (blockIdx >>> 8) & 0xff;
      ctrBuf[3] = blockIdx & 0xff;
      const ks = hmacWithPads(encPads, ctrBuf);
      const end = Math.min(32, ctLen - pos);
      for (let j = 0; j < end; j++) plain[pos + j] = ctOnly[pos + j] ^ ks[j];
      blockIdx++;
    }
    return plain;
  }

  async function encryptBytes(plainU8, keyObj, aadTag = 'default') {
    if (!keyObj) throw new Error('No active session encryption key.');
    const aadBytes = utf8ToBytes('ZFS-V2:' + aadTag);
    if (keyObj.engine === 'webcrypto' && hasWebCrypto()) {
      const iv = randomBytes(12);
      const ctBuf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: aadBytes }, keyObj.aesKey, plainU8);
      return { alg: 'AES-256-GCM', iv, ct: new Uint8Array(ctBuf), aad: aadTag };
    }
    if (keyObj.keyBytes) {
      const iv = randomBytes(16);
      const ct = fallbackCtrEtMEncrypt(plainU8, keyObj.keyBytes, iv, aadBytes);
      return { alg: 'SHA256-CTR-EtM', iv, ct, aad: aadTag };
    }
    throw new Error('Incompatible cipher engine.');
  }

  async function decryptBytes(alg, ivU8, ctU8, keyObj, aadTag = 'default') {
    if (!keyObj) throw new Error('No active session encryption key.');
    const aadBytes = utf8ToBytes('ZFS-V2:' + aadTag);
    if (alg === 'AES-256-GCM') {
      if (!hasWebCrypto() || !keyObj.aesKey) throw new Error('Web Crypto AES-256-GCM is unavailable in this browser context.');
      const ptBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ivU8, additionalData: aadBytes }, keyObj.aesKey, ctU8);
      return new Uint8Array(ptBuf);
    }
    if (alg === 'SHA256-CTR-EtM') {
      if (!keyObj.keyBytes) throw new Error('Fallback key bytes unavailable for SHA256-CTR-EtM payload.');
      return fallbackCtrEtMDecrypt(ctU8, keyObj.keyBytes, ivU8, aadBytes);
    }
    throw new Error('Unsupported encryption algorithm: ' + alg);
  }

  async function encryptJsonEnvelope(obj, keyObj, aadTag = 'default', extraMeta = {}) {
    const plainBytes = utf8ToBytes(JSON.stringify(obj));
    const { alg, iv, ct, aad } = await encryptBytes(plainBytes, keyObj, aadTag);
    return Object.assign({
      encV: 2,
      alg,
      kdf: 'PBKDF2-SHA256',
      iv: bytesToBase64(iv),
      ct: bytesToBase64(ct),
      aad
    }, extraMeta);
  }

  async function decryptJsonEnvelope(env, keyObj, expectedAad = null) {
    const aad = expectedAad || env.aad || 'default';
    const plainBytes = await decryptBytes(env.alg, base64ToBytes(env.iv), base64ToBytes(env.ct), keyObj, aad);
    return JSON.parse(bytesToUtf8(plainBytes));
  }

  function getActiveEngineLabel() {
    return hasWebCrypto() ? 'AES-256-GCM (Web Crypto)' : 'SHA256-CTR-EtM (Portable)';
  }

  function getActiveShortCipher() {
    return hasWebCrypto() ? 'AES-256-GCM' : 'SHA256-CTR-EtM';
  }

  return {
    randomBytes,
    bytesToHex,
    hexToBytes,
    bytesToBase64,
    base64ToBytes,
    constantTimeEqualHex,
    hasWebCrypto,
    computeAuthVerifierHex,
    deriveDataKey,
    encryptBytes,
    decryptBytes,
    encryptJsonEnvelope,
    decryptJsonEnvelope,
    getActiveEngineLabel,
    getActiveShortCipher
  };
})();

const sessionCryptoState = {
  unlocked: false,
  profileId: null,
  keyObj: null,
  idleTimerId: null,
  lastStorageEncrypted: false
};
let saveWriteQueue = Promise.resolve();

function getAuthMetaOverrides() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_AUTH_META);
    return raw ? JSON.parse(raw) : {};
  } catch (_) {
    return {};
  }
}

function getEffectiveProfileAuth(profileId) {
  const profile = STUDIO_PROFILES[profileId] || STUDIO_PROFILES.tester1;
  const overrides = getAuthMetaOverrides();
  const custom = overrides && overrides[profile.id];
  if (custom && custom.authSalt && custom.dataSalt && custom.verifier && custom.builtinVerifier === profile.verifier) {
    return {
      authSalt: custom.authSalt,
      dataSalt: custom.dataSalt,
      verifier: custom.verifier,
      iterations: custom.iterations || 120000,
      isCustom: true
    };
  }
  return {
    authSalt: profile.authSalt,
    dataSalt: profile.dataSalt,
    verifier: profile.verifier,
    iterations: profile.iterations || 120000,
    isCustom: false
  };
}

function getAuthGuardState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_AUTH_GUARD);
    const parsed = raw ? JSON.parse(raw) : {};
    return { fails: Number(parsed.fails) || 0, lockUntil: Number(parsed.lockUntil) || 0 };
  } catch (_) {
    return { fails: 0, lockUntil: 0 };
  }
}

function setAuthGuardState(fails, lockUntil) {
  try {
    localStorage.setItem(STORAGE_KEY_AUTH_GUARD, JSON.stringify({ fails, lockUntil }));
  } catch (_) {}
}

function getSecurityPrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SEC_PREFS);
    const parsed = raw ? JSON.parse(raw) : {};
    const mins = parsed.autoLockMinutes !== undefined ? Number(parsed.autoLockMinutes) : 15;
    return { autoLockMinutes: Number.isFinite(mins) && mins >= 0 ? mins : 15 };
  } catch (_) {
    return { autoLockMinutes: 15 };
  }
}

function saveSecurityPrefs(prefs) {
  try {
    localStorage.setItem(STORAGE_KEY_SEC_PREFS, JSON.stringify(prefs));
  } catch (_) {}
}

function getDefaultStateForProfile(profileId) {
  if (profileId === 'banzir') return defaultBanzirWorkspaceState;
  const p = STUDIO_PROFILES[profileId] || { name: 'Event Studio' };
  const clone = JSON.parse(JSON.stringify(defaultEventWorkspaceState));
  clone.profileId = profileId;
  clone.googleAccount = { connected: false, email: `${profileId}@eventstudio.local` };
  clone.orgProfiles = [{
    id: 'org-1',
    name: `${p.name} — Event Management Studio`,
    taxId: 'EIN-00-0000000',
    email: `${profileId}@eventstudio.local`,
    address: '100 Studio Plaza, Suite 200',
    bankName: 'Sample Business Bank',
    accountHolder: p.name,
    accountNumber: '0000000000',
    iban: 'AE000000000000000000000',
    swift: 'SAMPLEXX'
  }];
  return clone;
}

function normalizeStudioState(parsed, profile) {
  const baseDefault = getDefaultStateForProfile(profile.id);
  const merged = Object.assign({}, JSON.parse(JSON.stringify(baseDefault)), parsed || {});
  merged.billingDraft = Object.assign({}, JSON.parse(JSON.stringify(baseDefault.billingDraft)), (parsed && parsed.billingDraft) || {});
  if (!Array.isArray(merged.orgProfiles) || merged.orgProfiles.length === 0) {
    merged.orgProfiles = JSON.parse(JSON.stringify(baseDefault.orgProfiles));
  }
  if (profile.id === 'banzir') {
    merged.orgProfiles.forEach(org => {
      if (org.name === 'Banzir Hazra — Event Management Studio') {
        org.name = 'Banzir Hazra — Business Management System';
      }
    });
  }
  return merged;
}

let studioState = createEmptyLockedState('tester1');

async function persistEncryptedProfileState(profileId, stateObj, keyObj) {
  const profile = STUDIO_PROFILES[profileId] || STUDIO_PROFILES.tester1;
  const envelope = await StudioCrypto.encryptJsonEnvelope(stateObj, keyObj, profile.id, { profileId: profile.id });
  localStorage.setItem(profile.storageKey, JSON.stringify(envelope));
  sessionCryptoState.lastStorageEncrypted = true;
}

async function loadEncryptedStudioState(profileId = activeProfileId, keyObj = sessionCryptoState.keyObj) {
  const profile = STUDIO_PROFILES[profileId] || STUDIO_PROFILES.tester1;
  const baseDefault = getDefaultStateForProfile(profile.id);
  if (!keyObj) return JSON.parse(JSON.stringify(baseDefault));

  const raw = localStorage.getItem(profile.storageKey);

  if (!raw) {
    const fresh = JSON.parse(JSON.stringify(baseDefault));
    await persistEncryptedProfileState(profile.id, fresh, keyObj);
    return fresh;
  }

  let parsed = null;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    throw new Error('Stored workspace data is corrupted.');
  }

  if (parsed && parsed.encV === 2 && parsed.ct && parsed.iv) {
    const decrypted = await StudioCrypto.decryptJsonEnvelope(parsed, keyObj, profile.id);
    sessionCryptoState.lastStorageEncrypted = true;
    return normalizeStudioState(decrypted, profile);
  }

  // Upgrade plaintext pre-encryption state automatically without losing data
  const normalized = normalizeStudioState(parsed, profile);
  await persistEncryptedProfileState(profile.id, normalized, keyObj);
  return normalized;
}

let currentActiveView = 'dashboard';
const dirtyViews = {
  dashboard: true, projects: true, stats: true, clients: true, suppliers: true,
  billing: true, converter: true, calendar: true, archive: true
};
let uiRenderRafId = null;

function markAllViewsDirty() {
  Object.keys(dirtyViews).forEach(k => { dirtyViews[k] = true; });
}

function renderViewIfNeeded(viewKey, force) {
  if (!force && !dirtyViews[viewKey]) return;
  dirtyViews[viewKey] = false;
  if (viewKey === 'dashboard') renderDashboard();
  else if (viewKey === 'projects') renderProjectsModule();
  else if (viewKey === 'stats') renderEventStatsView();
  else if (viewKey === 'clients') renderClientsDirectory();
  else if (viewKey === 'suppliers') renderSuppliersDirectory();
  else if (viewKey === 'billing') initBillingModuleUI();
  else if (viewKey === 'calendar') renderGoogleAndCalendarModule();
  else if (viewKey === 'archive' || viewKey === 'converter') refreshVaultTableUI();
}

function saveStudioState() {
  try {
    if (sessionCryptoState.unlocked && sessionCryptoState.keyObj && sessionCryptoState.profileId) {
      const targetProfileId = sessionCryptoState.profileId;
      const activeKey = sessionCryptoState.keyObj;
      const snapshot = JSON.parse(JSON.stringify(studioState));
      saveWriteQueue = saveWriteQueue
        .then(() => persistEncryptedProfileState(targetProfileId, snapshot, activeKey))
        .catch(err => console.error('Encrypted save error:', err));
    }
    markAllViewsDirty();
    if (uiRenderRafId) cancelAnimationFrame(uiRenderRafId);
    uiRenderRafId = requestAnimationFrame(() => {
      uiRenderRafId = null;
      if (!sessionCryptoState.unlocked) return;
      renderViewIfNeeded(currentActiveView, true);
      if (currentActiveView !== 'dashboard') {
        renderGoogleAndCalendarModule();
      }
      refreshSecurityStatusUI();
    });
  } catch (e) {
    console.error(e);
  }
}

function showToast(message) {
  const toast = document.getElementById('studioToast');
  const text = document.getElementById('studioToastText');
  if (!toast || !text) return;
  text.textContent = message;
  toast.classList.add('toast-visible');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove('toast-visible'), 2800);
}

/* THEME */
function initAppearanceTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 'light';
  applyThemeMode(savedTheme);
}

function applyThemeMode(mode) {
  const htmlEl = document.documentElement;
  const lockLabel = document.getElementById('lockThemeLabel');
  const sidebarLabel = document.getElementById('sidebarThemeBtnText');
  if (mode === 'light') {
    htmlEl.classList.remove('dark');
    if (lockLabel) lockLabel.textContent = 'Dark Mode';
    if (sidebarLabel) sidebarLabel.textContent = 'Dark Mode';
  } else {
    htmlEl.classList.add('dark');
    if (lockLabel) lockLabel.textContent = 'Light Mode';
    if (sidebarLabel) sidebarLabel.textContent = 'Light Mode';
  }
  localStorage.setItem(STORAGE_KEY_THEME, mode);
}

function toggleAppearanceTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyThemeMode(isDark ? 'light' : 'dark');
}

function applyProfileBranding(profile) {
  if (!profile) return;
  const labels = profile.labels || EVENT_STUDIO_LABELS;
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.textContent = val;
  };
  const setPlaceholder = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.placeholder = val;
  };

  setText('sidebarStudioTitle', profile.name);
  setText('sidebarStudioSubtitle', profile.subtitle);
  document.title = `${profile.name} — ${profile.subtitle}`;

  setText('sidebarProjectsSectionLabel', labels.projectsSection);
  setText('metricPendingLabel', labels.pendingCard);
  setText('metricConfirmedLabel', labels.confirmedCard);
  setText('calendarBookedLegendLabel', labels.bookedLegend);
  setText('addProjectBtnLabel', labels.addProjectBtn);
  setText('projNameFieldLabel', labels.projNameField);
  setPlaceholder('projNameInput', labels.projNamePlaceholder);
  setText('projDateFieldLabel', labels.projDateField);
  setText('projEndDateFieldLabel', labels.projEndDateField || 'Event End Day *');
  setText('clientTypeFieldLabel', labels.clientTypeField);
  setText('clientsTableTypeHeader', labels.clientTypeField);
  setPlaceholder('clientEventTypeInput', labels.clientTypePlaceholder);
  setText('calendarBookedHeading', labels.calendarBookedHeading);
  syncMobileViewportOrientation();
}

async function verifyPasscodeForProfile(entered, profileId) {
  const auth = getEffectiveProfileAuth(profileId);
  const derivedHex = await StudioCrypto.computeAuthVerifierHex(entered, auth.authSalt, auth.iterations);
  return StudioCrypto.constantTimeEqualHex(derivedHex, auth.verifier) ? auth : null;
}

function stopIdleAutoLockMonitor() {
  if (sessionCryptoState.idleTimerId) {
    clearTimeout(sessionCryptoState.idleTimerId);
    sessionCryptoState.idleTimerId = null;
  }
}

function resetIdleAutoLockTimer() {
  stopIdleAutoLockMonitor();
  if (!sessionCryptoState.unlocked) return;
  const prefs = getSecurityPrefs();
  if (!prefs.autoLockMinutes || prefs.autoLockMinutes <= 0) return;
  sessionCryptoState.idleTimerId = setTimeout(() => {
    if (sessionCryptoState.unlocked) {
      lockWorkspace('Workspace auto-locked after inactivity.');
    }
  }, prefs.autoLockMinutes * 60 * 1000);
}

let idleListenersBound = false;
function bindIdleAutoLockListeners() {
  if (idleListenersBound) return;
  idleListenersBound = true;
  let lastTouch = 0;
  const bump = () => {
    if (!sessionCryptoState.unlocked) return;
    const now = Date.now();
    if (now - lastTouch < 5000) return;
    lastTouch = now;
    resetIdleAutoLockTimer();
  };
  document.addEventListener('pointerdown', bump, { passive: true });
  document.addEventListener('keydown', bump, { passive: true });
}

let pendingAuthRecovery = null;

async function finalizeProfileUnlock(matchedProfile, dataKey, decryptedState) {
  pendingAuthRecovery = null;
  const recoveryPanel = document.getElementById('authRekeyRecoveryPanel');
  const legacyInput = document.getElementById('authLegacyPassInput');
  if (recoveryPanel) recoveryPanel.classList.add('hidden');
  if (legacyInput) legacyInput.value = '';

  sessionCryptoState.unlocked = true;
  sessionCryptoState.profileId = matchedProfile.id;
  sessionCryptoState.keyObj = dataKey;

  activeProfileId = matchedProfile.id;
  localStorage.setItem(STORAGE_KEY_ACTIVE_PROFILE, activeProfileId);
  studioState = decryptedState;

  await ensureStudioInitialized();
  await migrateLegacyVaultFilesForActiveProfile();
  applyProfileBranding(matchedProfile);

  if (typeof closeProjectWorkspace === 'function') closeProjectWorkspace();
  if (typeof clearOcrScanner === 'function') clearOcrScanner();
  refreshAllUI();
  initBillingModuleUI();
  await refreshVaultTableUI();
  await refreshSecurityStatusUI();
  bindIdleAutoLockListeners();
  resetIdleAutoLockTimer();

  const lockScreen = document.getElementById('authLockScreen');
  const mainShell = document.getElementById('mainStudioShell');
  if (mainShell) {
    mainShell.classList.remove('hidden', 'shell-entering');
    mainShell.classList.add('shell-pre-enter');
  }
  const startRevealTransition = () => {
    if (typeof triggerLockIntroWave === 'function') triggerLockIntroWave(1.25);
    if (lockScreen) {
      lockScreen.classList.remove('lock-enter-anim', 'lock-pre-enter');
      lockScreen.classList.add('is-unlocking', 'pointer-events-none');
    }
    if (mainShell) {
      mainShell.classList.remove('shell-pre-enter');
      mainShell.classList.add('shell-entering');
      setTimeout(() => {
        mainShell.classList.remove('shell-entering');
      }, 1050);
    }
    setTimeout(() => {
      if (lockScreen) {
        lockScreen.classList.add('hidden');
        lockScreen.classList.remove('is-unlocking');
      }
      if (typeof stopLockBgAnimation === 'function') stopLockBgAnimation();
    }, 460);
  };
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(() => requestAnimationFrame(startRevealTransition));
  } else {
    startRevealTransition();
  }
  showToast(`Unlocked & decrypted ${matchedProfile.name} workspace.`);
}

async function recoverAndMigrateLegacyEncryptedData() {
  if (!pendingAuthRecovery) return;
  const legacyEl = document.getElementById('authLegacyPassInput');
  const errorBanner = document.getElementById('authErrorBanner');
  const oldCode = ((legacyEl && legacyEl.value) || '').trim();
  if (!oldCode) {
    if (errorBanner) {
      errorBanner.textContent = 'Enter your previous access code to decrypt and migrate saved records.';
      errorBanner.classList.remove('hidden');
    }
    return;
  }

  const { profile, newKeyObj } = pendingAuthRecovery;
  const candidateSalts = [...new Set([...(profile.legacyDataSalts || []), profile.dataSalt])];
  let recoveredState = null;
  let oldKeyUsed = null;

  for (const salt of candidateSalts) {
    try {
      const candidateKey = await StudioCrypto.deriveDataKey(oldCode, salt, profile.iterations || 120000);
      recoveredState = await loadEncryptedStudioState(profile.id, candidateKey);
      oldKeyUsed = candidateKey;
      break;
    } catch (_) {
      // Try next historical salt
    }
  }

  if (!recoveredState || !oldKeyUsed) {
    if (errorBanner) {
      errorBanner.textContent = 'Previous code could not decrypt saved browser data.';
      errorBanner.classList.remove('hidden');
    }
    return;
  }

  await ensureStudioInitialized();
  if (dbInstance) {
    activeProfileId = profile.id;
    const rawList = await getRawVaultRecordsForActiveProfile();
    const plainItems = [];
    for (const rec of rawList) {
      try {
        const res = await getDecryptedVaultBlobByRecord(rec, oldKeyUsed);
        if (res && res.blob) plainItems.push({ id: rec.id, res });
      } catch (_) {}
    }
    sessionCryptoState.unlocked = true;
    sessionCryptoState.profileId = profile.id;
    sessionCryptoState.keyObj = newKeyObj;
    for (const item of plainItems) {
      await saveFileToIndexedDBVault(
        item.res.meta.filename,
        item.res.meta.folder,
        item.res.meta.mimeType,
        item.res.blob,
        { id: item.id, projectId: item.res.meta.projectId || '' }
      );
    }
  }

  await persistEncryptedProfileState(profile.id, recoveredState, newKeyObj);
  if (errorBanner) errorBanner.classList.add('hidden');
  await finalizeProfileUnlock(profile, newKeyObj, recoveredState);
}

async function resetStaleProfileStorageAndOpen() {
  if (!pendingAuthRecovery) return;
  const { profile, newKeyObj } = pendingAuthRecovery;
  const errorBanner = document.getElementById('authErrorBanner');
  localStorage.removeItem(profile.storageKey);
  const freshState = await loadEncryptedStudioState(profile.id, newKeyObj);
  if (errorBanner) errorBanner.classList.add('hidden');
  await finalizeProfileUnlock(profile, newKeyObj, freshState);
}

async function handlePasscodeSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('passcodeInput');
  const card = document.getElementById('authLockCard');
  const errorBanner = document.getElementById('authErrorBanner');
  const recoveryPanel = document.getElementById('authRekeyRecoveryPanel');
  const submitBtn = document.getElementById('authUnlockSubmitBtn');
  const entered = (input.value || '').trim();
  if (recoveryPanel) recoveryPanel.classList.add('hidden');
  pendingAuthRecovery = null;

  const guard = getAuthGuardState();
  const nowMs = Date.now();
  if (guard.lockUntil && nowMs < guard.lockUntil) {
    const secs = Math.max(1, Math.ceil((guard.lockUntil - nowMs) / 1000));
    errorBanner.textContent = `Too many failed attempts. Wait ${secs}s before retrying.`;
    errorBanner.classList.remove('hidden');
    card.classList.remove('shake-anim');
    void card.offsetWidth;
    card.classList.add('shake-anim');
    input.value = '';
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Verifying & Decrypting...';
  }

  try {
    let matchedProfile = null;
    let matchedAuth = null;
    const allProfiles = Object.values(STUDIO_PROFILES);
    if (StudioCrypto.hasWebCrypto()) {
      const results = await Promise.all(
        allProfiles.map(p => verifyPasscodeForProfile(entered, p.id).then(auth => (auth ? { profile: p, auth } : null)))
      );
      const hit = results.find(Boolean);
      if (hit) {
        matchedProfile = hit.profile;
        matchedAuth = hit.auth;
      }
    } else {
      for (const profile of allProfiles) {
        const auth = await verifyPasscodeForProfile(entered, profile.id);
        if (auth) {
          matchedProfile = profile;
          matchedAuth = auth;
          break;
        }
        await new Promise(r => setTimeout(r, 0));
      }
    }

    if (matchedProfile && matchedAuth) {
      setAuthGuardState(0, 0);
      errorBanner.textContent = 'Invalid access code.';
      errorBanner.classList.add('hidden');

      const dataKey = await StudioCrypto.deriveDataKey(entered, matchedAuth.dataSalt, matchedAuth.iterations);
      input.value = '';

      await saveWriteQueue.catch(() => {});
      let decryptedState = null;
      try {
        decryptedState = await loadEncryptedStudioState(matchedProfile.id, dataKey);
      } catch (decryptErr) {
        pendingAuthRecovery = { profile: matchedProfile, newKeyObj: dataKey };
        if (recoveryPanel) recoveryPanel.classList.remove('hidden');
        errorBanner.textContent = decryptErr && decryptErr.message ? decryptErr.message : 'Unable to decrypt saved workspace data.';
        errorBanner.classList.remove('hidden');
        return;
      }

      await finalizeProfileUnlock(matchedProfile, dataKey, decryptedState);
    } else {
      const nextFails = (guard.fails || 0) + 1;
      let nextLockUntil = 0;
      if (nextFails >= 5) {
        const tier = Math.min(4, Math.floor((nextFails - 5) / 2));
        const cooldownMs = 30000 * Math.pow(2, tier);
        nextLockUntil = Date.now() + cooldownMs;
        errorBanner.textContent = `Too many failed attempts. Locked for ${Math.round(cooldownMs / 1000)}s.`;
      } else {
        errorBanner.textContent = `Invalid access code (${5 - nextFails} attempts before cooldown).`;
      }
      setAuthGuardState(nextFails, nextLockUntil);
      errorBanner.classList.remove('hidden');
      card.classList.remove('shake-anim');
      void card.offsetWidth;
      card.classList.add('shake-anim');
      input.value = '';
    }
  } catch (err) {
    console.error('Authentication / Decryption error:', err);
    errorBanner.textContent = err && err.message ? err.message : 'Unable to decrypt workspace data.';
    errorBanner.classList.remove('hidden');
    input.value = '';
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Unlock Studio';
    }
  }
}

function scrubDomSensitiveFields() {
  const clearIds = [
    'dashboardRecentProjectsBody', 'dashboardQuickClientsList', 'projectsTableBody',
    'clientsTableBody', 'suppliersTableBody', 'localVaultTableBody', 'invoicePreviewPrintArea'
  ];
  clearIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });
  const textareas = ['ocrResultTextarea', 'secCurrentPassInput', 'secNewPassInput', 'secConfirmPassInput', 'secBackupPassphraseInput'];
  textareas.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function playLockScreenEntrance() {
  const lockScreen = document.getElementById('authLockScreen');
  if (!lockScreen) return;
  lockScreen.classList.remove('hidden', 'is-unlocking', 'opacity-0', 'pointer-events-none', 'lock-enter-anim');
  lockScreen.classList.add('lock-pre-enter');
  const startEntrance = () => {
    if (lockScreen.classList.contains('hidden') || lockScreen.classList.contains('is-unlocking')) return;
    lockScreen.classList.remove('lock-pre-enter');
    lockScreen.classList.add('lock-enter-anim');
    setTimeout(() => { lockScreen.classList.remove('lock-enter-anim'); }, 1200);
  };
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(() => requestAnimationFrame(startEntrance));
  } else {
    startEntrance();
  }
}

function lockWorkspace(reasonMessage = '') {
  stopIdleAutoLockMonitor();
  pendingAuthRecovery = null;
  const recoveryPanel = document.getElementById('authRekeyRecoveryPanel');
  const legacyInput = document.getElementById('authLegacyPassInput');
  if (recoveryPanel) recoveryPanel.classList.add('hidden');
  if (legacyInput) legacyInput.value = '';
  sessionCryptoState.unlocked = false;
  sessionCryptoState.profileId = null;
  if (sessionCryptoState.keyObj && sessionCryptoState.keyObj.keyBytes) {
    sessionCryptoState.keyObj.keyBytes.fill(0);
  }
  sessionCryptoState.keyObj = null;
  studioState = createEmptyLockedState(activeProfileId || 'tester1');
  scrubDomSensitiveFields();
  closeSecurityCenterModal();
  if (typeof closeWhatsappDispatchModal === 'function') closeWhatsappDispatchModal();
  if (typeof selectedVaultFileIds !== 'undefined' && selectedVaultFileIds) selectedVaultFileIds.clear();

  const mainShell = document.getElementById('mainStudioShell');
  const input = document.getElementById('passcodeInput');
  const errorBanner = document.getElementById('authErrorBanner');
  if (errorBanner) errorBanner.classList.add('hidden');
  if (input) input.value = '';
  if (mainShell) mainShell.classList.add('hidden');
  if (mainShell) mainShell.classList.remove('shell-entering', 'shell-pre-enter');
  syncMobileViewportOrientation();
  if (typeof startLockBgAnimation === 'function') startLockBgAnimation();
  playLockScreenEntrance();
  if (input) input.focus();
  if (reasonMessage) showToast(reasonMessage);
}

function toggleMaximizeWindowShell() {
  document.getElementById('mainStudioShell').classList.toggle('window-maximized');
}

function minimizeWindowShell() {
  document.getElementById('mainStudioShell').classList.remove('window-maximized');
}

/* NAVIGATION */
const VIEW_TITLES = {
  dashboard: 'Dashboard',
  projects: 'Projects',
  stats: 'Event Stats',
  clients: 'Clients',
  suppliers: 'Suppliers',
  billing: 'Billing & Invoices',
  converter: 'File Converter',
  ocr: 'Image to Text',
  calendar: 'Calendar',
  archive: 'Local Archive'
};

let isMobileSidebarOpen = false;

function toggleMobileSidebar(forceState) {
  const sidebar = document.getElementById('studioSidebar');
  const backdrop = document.getElementById('mobileSidebarBackdrop');
  if (!sidebar || !backdrop) return;
  isMobileSidebarOpen = typeof forceState === 'boolean' ? forceState : !isMobileSidebarOpen;
  if (isMobileSidebarOpen) {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('vertical-drawer-open');
    backdrop.classList.remove('hidden');
    backdrop.classList.add('vertical-backdrop-open');
  } else {
    sidebar.classList.add('-translate-x-full');
    sidebar.classList.remove('vertical-drawer-open');
    backdrop.classList.add('hidden');
    backdrop.classList.remove('vertical-backdrop-open');
  }
}

function closeAllSidebarDropdowns() {
  document.querySelectorAll('#studioSidebar .sb-group.sb-has-submenu.is-open').forEach(group => {
    group.classList.remove('is-open');
    const trigger = group.querySelector('.sidebar-nav-btn');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

function toggleStudioSidebarCollapse(forceCollapsed) {
  const sidebar = document.getElementById('studioSidebar');
  const btn = document.getElementById('sidebarCollapseBtn');
  if (!sidebar) return;
  const willCollapse = typeof forceCollapsed === 'boolean'
    ? forceCollapsed
    : !sidebar.classList.contains('is-collapsed');
  sidebar.classList.toggle('is-collapsed', willCollapse);
  if (btn) {
    btn.setAttribute('aria-expanded', String(!willCollapse));
    btn.setAttribute('aria-label', willCollapse ? 'Expand sidebar' : 'Collapse sidebar');
    btn.setAttribute('title', willCollapse ? 'Expand sidebar' : 'Collapse sidebar');
  }
  if (willCollapse) {
    closeAllSidebarDropdowns();
  }
}

function toggleSidebarGroup(triggerBtn) {
  const sidebar = document.getElementById('studioSidebar');
  const group = triggerBtn && triggerBtn.closest('.sb-group.sb-has-submenu');
  if (!group) return;
  if (sidebar && sidebar.classList.contains('is-collapsed')) {
    toggleStudioSidebarCollapse(false);
    group.classList.add('is-open');
    triggerBtn.setAttribute('aria-expanded', 'true');
    return;
  }
  const willOpen = !group.classList.contains('is-open');
  group.classList.toggle('is-open', willOpen);
  triggerBtn.setAttribute('aria-expanded', String(willOpen));
}

function syncMobileViewportOrientation() {
  const width = window.innerWidth || document.documentElement.clientWidth || 1024;
  const height = window.innerHeight || document.documentElement.clientHeight || 768;
  const isCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const isMobileUA = /Android|iPhone|iPad|iPod|Mobile/i.test((navigator && navigator.userAgent) || '');
  const isPortrait = height >= width;
  const isMobile = width < 1024 || isMobileUA || (isCoarsePointer && height <= 560);

  const isVerticalActive = (isMobile && isPortrait) || width < 680;
  const deviceAttr = (isMobile || isVerticalActive) ? 'mobile' : 'desktop';
  const orientationAttr = (isPortrait || isVerticalActive) ? 'portrait' : 'landscape';

  document.documentElement.setAttribute('data-device', deviceAttr);
  document.documentElement.setAttribute('data-orientation', orientationAttr);
  document.documentElement.setAttribute('data-vertical-mobile', isVerticalActive ? 'true' : 'false');

  if (!isVerticalActive && deviceAttr === 'desktop' && isMobileSidebarOpen) {
    toggleMobileSidebar(false);
  }
}

function switchView(viewKey) {
  currentActiveView = viewKey;
  renderViewIfNeeded(viewKey, false);

  document.querySelectorAll('.tab-view').forEach(s => s.classList.remove('active-view'));
  const target = document.getElementById(`view-${viewKey}`);
  if (target) target.classList.add('active-view');

  document.querySelectorAll('[data-sidebar-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-sidebar-nav') === viewKey);
  });

  document.querySelectorAll('[data-top-segment]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-top-segment') === viewKey);
  });

  document.querySelectorAll('[data-mobile-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mobile-nav') === viewKey);
  });

  document.getElementById('currentViewTitle').textContent = VIEW_TITLES[viewKey] || 'Dashboard';

  if (isMobileSidebarOpen) {
    toggleMobileSidebar(false);
  }

  const viewport = document.getElementById('studioMainViewport');
  if (viewport) viewport.scrollTop = 0;
}

/* INDEXEDDB */
function initIndexedDBVault() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, IDB_VERSION);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE, { keyPath: 'id' });
      }
    };
    req.onsuccess = e => {
      dbInstance = e.target.result;
      refreshVaultTableUI();
      resolve(dbInstance);
    };
    req.onerror = e => reject(e.target.error);
  });
}

async function saveFileToIndexedDBVault(filename, folder, mimeType, blob, extraMeta = {}) {
  if (!dbInstance || !sessionCryptoState.unlocked || !sessionCryptoState.keyObj) return null;
  const createdAt = new Date().toISOString();
  const id = extraMeta.id || ('vault-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6));
  const metaObj = {
    filename,
    folder,
    mimeType: mimeType || (blob && blob.type) || 'application/octet-stream',
    size: (blob && blob.size) || 0,
    createdAt,
    projectId: extraMeta.projectId || ''
  };
  const buf = await blob.arrayBuffer();
  const plainFileBytes = new Uint8Array(buf);
  const encMeta = await StudioCrypto.encryptJsonEnvelope(metaObj, sessionCryptoState.keyObj, activeProfileId + ':' + id);
  const encFile = await StudioCrypto.encryptBytes(plainFileBytes, sessionCryptoState.keyObj, activeProfileId + ':' + id + ':file');

  const record = {
    id,
    profileId: activeProfileId,
    encV: 2,
    alg: encFile.alg,
    metaIv: encMeta.iv,
    metaCt: encMeta.ct,
    metaAlg: encMeta.alg,
    fileIv: StudioCrypto.bytesToBase64(encFile.iv),
    fileCt: encFile.ct.buffer.slice(encFile.ct.byteOffset, encFile.ct.byteOffset + encFile.ct.byteLength),
    size: metaObj.size,
    createdAt
  };

  return new Promise((resolve, reject) => {
    const tx = dbInstance.transaction([IDB_STORE], 'readwrite');
    const req = tx.objectStore(IDB_STORE).put(record);
    req.onsuccess = () => {
      refreshVaultTableUI();
      resolve(Object.assign({ id, profileId: activeProfileId, encrypted: true }, metaObj));
    };
    req.onerror = err => reject(err);
  });
}

function getRawVaultRecordsForActiveProfile() {
  return new Promise(resolve => {
    if (!dbInstance || !sessionCryptoState.unlocked) return resolve([]);
    const req = dbInstance.transaction([IDB_STORE], 'readonly').objectStore(IDB_STORE).getAll();
    req.onsuccess = () => {
      const allRecords = req.result || [];
      resolve(allRecords.filter(r => (r.profileId || 'tester1') === activeProfileId));
    };
    req.onerror = () => resolve([]);
  });
}

async function getAllVaultFiles() {
  if (!dbInstance || !sessionCryptoState.unlocked || !sessionCryptoState.keyObj) return [];
  const rawList = await getRawVaultRecordsForActiveProfile();
  const out = [];
  for (const r of rawList) {
    if (r.encV === 2 && r.metaCt && r.metaIv) {
      try {
        const meta = await StudioCrypto.decryptJsonEnvelope(
          { alg: r.metaAlg || r.alg, iv: r.metaIv, ct: r.metaCt },
          sessionCryptoState.keyObj,
          activeProfileId + ':' + r.id
        );
        out.push({
          id: r.id,
          profileId: r.profileId || activeProfileId,
          filename: meta.filename || 'Encrypted File',
          folder: meta.folder || '/04_Converted_Files/',
          mimeType: meta.mimeType || 'application/octet-stream',
          size: meta.size || r.size || 0,
          createdAt: meta.createdAt || r.createdAt || '',
          projectId: meta.projectId || '',
          encrypted: true
        });
      } catch (e) {
        out.push({
          id: r.id,
          profileId: r.profileId || activeProfileId,
          filename: '[Locked / Invalid Key]',
          folder: '/',
          mimeType: 'application/octet-stream',
          size: r.size || 0,
          createdAt: r.createdAt || '',
          projectId: '',
          encrypted: true,
          corrupt: true
        });
      }
    } else {
      out.push({
        id: r.id,
        profileId: r.profileId || activeProfileId,
        filename: r.filename || 'Legacy File',
        folder: r.folder || '/04_Converted_Files/',
        mimeType: r.mimeType || (r.blob && r.blob.type) || 'application/octet-stream',
        size: r.size || (r.blob && r.blob.size) || 0,
        createdAt: r.createdAt || '',
        projectId: r.projectId || '',
        encrypted: false,
        blob: r.blob || null
      });
    }
  }
  return out;
}

async function getDecryptedVaultBlobByRecord(rec, keyObj = sessionCryptoState.keyObj) {
  if (!rec) return null;
  if (rec.encV === 2 && rec.fileCt && rec.fileIv) {
    if (!keyObj) throw new Error('Workspace is locked.');
    const meta = await StudioCrypto.decryptJsonEnvelope(
      { alg: rec.metaAlg || rec.alg, iv: rec.metaIv, ct: rec.metaCt },
      keyObj,
      activeProfileId + ':' + rec.id
    );
    const ctBytes = rec.fileCt instanceof ArrayBuffer ? new Uint8Array(rec.fileCt) : new Uint8Array(rec.fileCt);
    const plainBytes = await StudioCrypto.decryptBytes(
      rec.alg,
      StudioCrypto.base64ToBytes(rec.fileIv),
      ctBytes,
      keyObj,
      activeProfileId + ':' + rec.id + ':file'
    );
    return {
      blob: new Blob([plainBytes], { type: meta.mimeType || 'application/octet-stream' }),
      meta
    };
  }
  return {
    blob: rec.blob || null,
    meta: {
      filename: rec.filename || 'file',
      folder: rec.folder || '/04_Converted_Files/',
      mimeType: rec.mimeType || (rec.blob && rec.blob.type) || 'application/octet-stream',
      createdAt: rec.createdAt || new Date().toISOString(),
      projectId: rec.projectId || ''
    }
  };
}

function getRawVaultRecordById(id) {
  return new Promise((resolve) => {
    if (!dbInstance) return resolve(null);
    const req = dbInstance.transaction([IDB_STORE], 'readonly').objectStore(IDB_STORE).get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => resolve(null);
  });
}

async function getDecryptedVaultBlobById(id) {
  if (!sessionCryptoState.unlocked || !sessionCryptoState.keyObj) return null;
  const rec = await getRawVaultRecordById(id);
  if (!rec || (rec.profileId || 'tester1') !== activeProfileId) return null;
  const res = await getDecryptedVaultBlobByRecord(rec, sessionCryptoState.keyObj);
  return res ? res.blob : null;
}

async function migrateLegacyVaultFilesForActiveProfile() {
  if (!dbInstance || !sessionCryptoState.unlocked || !sessionCryptoState.keyObj) return 0;
  const rawList = await getRawVaultRecordsForActiveProfile();
  let migrated = 0;
  for (const rec of rawList) {
    if (rec.encV === 2 || !rec.blob) continue;
    try {
      await saveFileToIndexedDBVault(
        rec.filename || 'Legacy-File',
        rec.folder || '/04_Converted_Files/',
        rec.mimeType || (rec.blob && rec.blob.type) || 'application/octet-stream',
        rec.blob,
        { id: rec.id, projectId: rec.projectId || '' }
      );
      migrated++;
    } catch (e) {
      console.warn('Legacy file migration skipped for', rec.id, e);
    }
  }
  return migrated;
}

async function downloadVaultFileById(id) {
  if (!dbInstance || !sessionCryptoState.unlocked) return;
  try {
    const rec = await getRawVaultRecordById(id);
    if (!rec || (rec.profileId || 'tester1') !== activeProfileId) return;
    const res = await getDecryptedVaultBlobByRecord(rec, sessionCryptoState.keyObj);
    if (res && res.blob) {
      triggerBrowserBlobDownload(res.blob, res.meta.filename);
      showToast(`Decrypted & downloaded ${res.meta.filename}`);
    }
  } catch (err) {
    console.error('Vault decryption error:', err);
    showToast('Unable to decrypt file (invalid key or corrupted data).');
  }
}

function deleteVaultFileById(id) {
  if (!dbInstance) return;
  const req = dbInstance.transaction([IDB_STORE], 'readwrite').objectStore(IDB_STORE).delete(id);
  req.onsuccess = () => {
    refreshVaultTableUI();
    refreshSecurityStatusUI();
    showToast('File deleted.');
  };
}

function triggerBrowserBlobDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 250);
}

/* DASHBOARD */
function getStatusPillHTML(status) {
  const styles = {
    'Planning': 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    'Quoted': 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    'Confirmed': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    'Invoiced': 'bg-blue-500/10 text-[#007AFF] dark:text-[#0A84FF]',
    'Completed': 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    'Cancelled': 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
  };
  const cls = styles[status] || styles['Planning'];
  return `<span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${cls}">${escapeHtml(status)}</span>`;
}

function renderDashboard() {
  const projects = studioState.projects || [];
  const clients = studioState.clients || [];
  const suppliers = studioState.suppliers || [];

  const pendingCount = projects.filter(p => p.status === 'Planning' || p.status === 'Quoted').length;
  const confirmedCount = projects.filter(p => p.status === 'Confirmed' || p.status === 'Invoiced' || p.status === 'Completed').length;

  document.getElementById('metricPendingEvents').textContent = pendingCount;
  document.getElementById('metricConfirmedEvents').textContent = confirmedCount;
  document.getElementById('metricTotalClients').textContent = clients.length;
  document.getElementById('metricSupplierBadge').textContent = `${suppliers.length} Verified Suppliers`;

  const recentTbody = document.getElementById('dashboardRecentProjectsBody');
  if (projects.length === 0) {
    recentTbody.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-400">No projects yet.</td></tr>`;
  } else {
    const sorted = [...projects].sort((a, b) => (b.dateCreated || '').localeCompare(a.dateCreated || '')).slice(0, 5);
    recentTbody.innerHTML = sorted.map(proj => {
      const isCancelled = (proj.status || '') === 'Cancelled';
      const roleMeta = proj.role || (proj.entryType === 'solo' ? (proj.soloThrough ? `Solo • ${proj.soloThrough}` : 'Solo Direct') : '');
      return `
      <tr onclick="openProjectFromDashboard('${proj.id}')" class="hover:bg-slate-500/5 cursor-pointer transition-colors">
        <td class="py-3 pr-3 font-medium ${isCancelled ? 'line-through text-slate-400 dark:text-slate-500' : ''}">${escapeHtml(proj.name)}</td>
        <td class="py-3 px-3 font-mono text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">${escapeHtml(formatProjectDateRange(proj))}</td>
        <td class="py-3 px-3 text-xs text-slate-500 dark:text-slate-400">${escapeHtml(roleMeta)}</td>
        <td class="py-3 pl-3 text-right">${getStatusPillHTML(proj.status)}</td>
      </tr>
    `;
    }).join('');
  }

  const quickClientsEl = document.getElementById('dashboardQuickClientsList');
  if (clients.length === 0) {
    quickClientsEl.innerHTML = `<div class="text-xs text-slate-400 py-4 text-center">No clients saved.</div>`;
  } else {
    quickClientsEl.innerHTML = clients.map(c => `
      <div class="py-2 flex items-center justify-between gap-3 border-b border-slate-100 dark:border-white/5 last:border-0">
        <div class="min-w-0">
          <div class="font-medium text-sm truncate">${escapeHtml(c.company)}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400 truncate">${escapeHtml(c.contactPerson)} &bull; ${escapeHtml(c.email)}</div>
        </div>
        <div class="text-xs font-mono text-slate-400 shrink-0">${escapeHtml(c.phone)}</div>
      </div>
    `).join('');
  }

  renderDashboardCalendarWidget();
  renderDashboardSchedulePanel();
}

function changeCalendarMonth(delta) {
  currentCalendarMonth += delta;
  if (currentCalendarMonth < 0) { currentCalendarMonth = 11; currentCalendarYear--; }
  else if (currentCalendarMonth > 11) { currentCalendarMonth = 0; currentCalendarYear++; }
  renderDashboardCalendarWidget();
}

function toggleCalendarDateFilter(dateStr) {
  currentSelectedCalendarDate = currentSelectedCalendarDate === dateStr ? null : dateStr;
  renderDashboardCalendarWidget();
  renderDashboardSchedulePanel();
}

function clearCalendarDateFilter() {
  currentSelectedCalendarDate = null;
  renderDashboardCalendarWidget();
  renderDashboardSchedulePanel();
}

function renderDashboardCalendarWidget() {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  document.getElementById('calendarMonthLabel').textContent = `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;

  const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();
  const daysInMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
  const allProjects = (studioState.projects || []).filter(p => (p.status || '') !== 'Cancelled');
  const meetingDates = new Set((studioState.meetings || []).map(m => m.date));

  let html = '';
  for (let i = 0; i < firstDay; i++) html += `<div class="h-9"></div>`;

  for (let day = 1; day <= daysInMonth; day++) {
    const mm = String(currentCalendarMonth + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    const dateStr = `${currentCalendarYear}-${mm}-${dd}`;
    const hasEvent = allProjects.some(p => doesProjectCoverWorkingDate(p, dateStr));
    const hasOffDay = !hasEvent && allProjects.some(p => doesProjectHaveOffDate(p, dateStr));
    const hasMeeting = meetingDates.has(dateStr);
    const isSelected = currentSelectedCalendarDate === dateStr;

    let cls = 'h-9 rounded-lg flex flex-col items-center justify-center cursor-pointer text-xs transition-colors ';
    if (isSelected) cls += 'ring-2 ring-[#007AFF] dark:ring-[#0A84FF] font-semibold ';
    if (hasEvent) cls += 'bg-indigo-500/12 text-indigo-600 dark:text-indigo-300 font-medium ';
    else if (hasOffDay) cls += 'bg-amber-500/12 text-amber-700 dark:text-amber-300 font-medium ';
    else if (hasMeeting) cls += 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-300 font-medium ';
    else cls += 'hover:bg-slate-500/10 text-slate-600 dark:text-slate-300 ';

    const cellTitle = hasOffDay ? 'Marked as Did Not Work (Day Off)' : '';
    html += `
      <button type="button" onclick="toggleCalendarDateFilter('${dateStr}')" title="${cellTitle}" class="${cls}">
        <span>${day}</span>
        <span class="flex gap-0.5 mt-0.5">
          ${hasEvent ? '<span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>' : ''}
          ${hasOffDay ? '<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>' : ''}
          ${hasMeeting ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>' : ''}
        </span>
      </button>
    `;
  }
  document.getElementById('dashboardCalendarGrid').innerHTML = html;
}

function renderDashboardSchedulePanel() {
  const badge = document.getElementById('scheduleActiveDateBadge');
  const clearBtn = document.getElementById('clearScheduleFilterBtn');
  const countLabel = document.getElementById('dashboardScheduleCountLabel');
  const listEl = document.getElementById('dashboardScheduleList');

  const items = [];
  (studioState.meetings || []).forEach(m => {
    items.push({
      type: 'Meeting',
      date: m.date,
      endDate: m.date,
      dateLabel: m.date,
      title: m.title,
      subtitle: `${m.startTime} - ${m.endTime} • ${m.attendeeEmail}`,
      dotColor: 'bg-emerald-500',
      matchesDate: d => d === m.date
    });
  });
  (studioState.projects || []).filter(p => (p.status || '') !== 'Cancelled').forEach(p => {
    const ws = getProjectWorkingSummary(p);
    const dayInfo = ws.offDates.length > 0 ? ` • ${ws.workingDays} work / ${ws.offDates.length} off` : '';
    const soloMeta = p.entryType === 'solo' ? (p.soloThrough ? `Solo • ${p.soloThrough}` : 'Solo Direct') : '';
    items.push({
      type: 'Event',
      date: ws.start,
      endDate: ws.end,
      dateLabel: formatProjectDateRange(p),
      title: p.name,
      subtitle: `${p.role || soloMeta} • ${p.status}${dayInfo}`,
      dotColor: 'bg-indigo-500',
      matchesDate: d => doesProjectCoverWorkingDate(p, d)
    });
  });
  items.sort((a, b) => (a.date || '').localeCompare(b.date || ''));

  const filtered = currentSelectedCalendarDate
    ? items.filter(i => i.matchesDate(currentSelectedCalendarDate))
    : items;

  if (currentSelectedCalendarDate) {
    badge.textContent = currentSelectedCalendarDate;
    badge.classList.remove('hidden');
    clearBtn.classList.remove('hidden');
    countLabel.textContent = `${filtered.length} item(s) on ${currentSelectedCalendarDate}`;
  } else {
    badge.classList.add('hidden');
    clearBtn.classList.add('hidden');
    countLabel.textContent = `${filtered.length} upcoming items`;
  }

  if (filtered.length === 0) {
    const offProjects = currentSelectedCalendarDate
      ? (studioState.projects || []).filter(p => (p.status || '') !== 'Cancelled' && doesProjectHaveOffDate(p, currentSelectedCalendarDate)).map(p => p.name)
      : [];
    const emptyMsg = offProjects.length > 0
      ? `Day off — marked as not worked in ${escapeHtml(offProjects.join(', '))}.`
      : 'No events or meetings on this date.';
    listEl.innerHTML = `<div class="py-8 text-center text-xs text-slate-400">${emptyMsg}</div>`;
  } else {
    listEl.innerHTML = filtered.map(item => `
      <div class="p-3 rounded-xl bg-slate-500/5 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span class="w-2 h-2 rounded-full ${item.dotColor}"></span>
            <span>${item.type}</span>
            <span>&bull;</span>
            <span class="font-mono">${escapeHtml(item.dateLabel || item.date)}</span>
          </div>
          <div class="text-sm font-medium mt-0.5 truncate">${escapeHtml(item.title)}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400 truncate">${escapeHtml(item.subtitle)}</div>
        </div>
        <button type="button" onclick='openGoogleCalendarTemplate(${JSON.stringify({ title: item.title, date: item.date, endDate: item.endDate, details: item.subtitle }).replace(/'/g, "&#39;")})' class="btn-mac-secondary px-3 py-1.5 text-xs shrink-0">
          Add to Google
        </button>
      </div>
    `).join('');
  }
}

function openProjectFromDashboard(projectId) {
  switchView('projects');
  openProjectWorkspaceForEdit(projectId);
}

function openNewProjectFromDashboard() {
  switchView('projects');
  openProjectWorkspaceForNew();
}

/* PROJECTS */
function generateRandomRef(prefix) {
  return `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
}

function incrementDocReference(currentRef, prefix) {
  const clean = (currentRef || '').trim();
  const match = clean.match(/^(.*?)(\d+)(\D*)$/);
  if (match) {
    const head = match[1] || `${prefix}-`;
    const numStr = match[2];
    const tail = match[3] || '';
    const nextNum = String(parseInt(numStr, 10) + 1).padStart(numStr.length, '0');
    return `${head}${nextNum}${tail}`;
  }
  return generateRandomRef(prefix);
}

function getNextUniqueDocReference(currentRef, prefix) {
  if (!Array.isArray(studioState.usedDocNumbers)) {
    studioState.usedDocNumbers = [];
  }
  const used = new Set(studioState.usedDocNumbers.map(s => String(s).toUpperCase()));
  let candidate = incrementDocReference(currentRef, prefix);
  while (used.has(candidate.toUpperCase())) {
    candidate = incrementDocReference(candidate, prefix);
  }
  return candidate;
}

let currentProjectOffDates = [];

function getProjectDateBounds(proj) {
  const start = (proj && proj.dateCreated) ? String(proj.dateCreated).trim() : '';
  const rawEnd = (proj && proj.endDate) ? String(proj.endDate).trim() : '';
  const end = (rawEnd && (!start || rawEnd >= start)) ? rawEnd : start;
  return { start, end };
}

function normalizeOffDatesForRange(datesList, start, end) {
  if (!Array.isArray(datesList) || !start) return [];
  const effEnd = (end && end >= start) ? end : start;
  const seen = new Set();
  datesList.forEach(d => {
    const s = String(d || '').trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(s) && s >= start && s <= effEnd) {
      seen.add(s);
    }
  });
  return Array.from(seen).sort();
}

function enumerateIsoDatesBetween(start, end, maxDays = 366) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start)) return [];
  const effEnd = /^\d{4}-\d{2}-\d{2}$/.test(end) && end >= start ? end : start;
  const out = [];
  const cur = new Date(start + 'T00:00:00Z');
  const endMs = Date.parse(effEnd + 'T00:00:00Z');
  while (cur.getTime() <= endMs && out.length < maxDays) {
    out.push(cur.toISOString().slice(0, 10));
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return out;
}

function getProjectWorkingSummary(proj) {
  const { start, end } = getProjectDateBounds(proj);
  let totalSpanDays = 0;
  if (/^\d{4}-\d{2}-\d{2}$/.test(start)) {
    if (!end || end === start || !/^\d{4}-\d{2}-\d{2}$/.test(end)) {
      totalSpanDays = 1;
    } else {
      const ms = Date.parse(end + 'T00:00:00Z') - Date.parse(start + 'T00:00:00Z');
      totalSpanDays = Math.max(1, Math.round(ms / 86400000) + 1);
    }
  }
  const offDates = normalizeOffDatesForRange(proj && proj.nonWorkingDates, start, end);
  const offDatesSet = new Set(offDates);
  const workingDays = Math.max(0, totalSpanDays - offDates.length);
  return { start, end, totalSpanDays, offDates, offDatesSet, workingDays };
}

function formatProjectDateRange(proj) {
  const { start, end } = getProjectDateBounds(proj);
  if (!start && !end) return '—';
  if (!end || end === start) return start;
  return `${start} → ${end}`;
}

function getProjectDurationDays(proj) {
  return getProjectWorkingSummary(proj).workingDays;
}

function getProjectWorkingDateList(proj) {
  const ws = getProjectWorkingSummary(proj);
  if (!ws.start) return [];
  return enumerateIsoDatesBetween(ws.start, ws.end, 366).filter(d => !ws.offDatesSet.has(d));
}

function getProjectWorkingDateSpans(proj) {
  const ws = getProjectWorkingSummary(proj);
  if (!ws.start) return [];
  if (ws.offDates.length === 0) return [{ start: ws.start, end: ws.end || ws.start }];
  const workingDates = getProjectWorkingDateList(proj);
  const spans = [];
  let spanStart = null;
  let prevDate = null;
  workingDates.forEach(d => {
    if (!spanStart) {
      spanStart = d;
      prevDate = d;
    } else {
      const nextExpected = new Date(prevDate + 'T00:00:00Z');
      nextExpected.setUTCDate(nextExpected.getUTCDate() + 1);
      if (nextExpected.toISOString().slice(0, 10) === d) {
        prevDate = d;
      } else {
        spans.push({ start: spanStart, end: prevDate });
        spanStart = d;
        prevDate = d;
      }
    }
  });
  if (spanStart) spans.push({ start: spanStart, end: prevDate });
  return spans;
}

function doesProjectCoverWorkingDate(proj, dateStr) {
  const ws = getProjectWorkingSummary(proj);
  return !!(ws.start && dateStr >= ws.start && dateStr <= (ws.end || ws.start) && !ws.offDatesSet.has(dateStr));
}

function doesProjectHaveOffDate(proj, dateStr) {
  const ws = getProjectWorkingSummary(proj);
  return !!(ws.start && dateStr >= ws.start && dateStr <= (ws.end || ws.start) && ws.offDatesSet.has(dateStr));
}

function syncProjectEndDateMin() {
  const startEl = document.getElementById('projDateInput');
  const endEl = document.getElementById('projEndDateInput');
  if (!startEl || !endEl) return;
  const startVal = startEl.value || '';
  endEl.min = startVal;
  if (startVal && (!endEl.value || endEl.value < startVal)) {
    endEl.value = startVal;
  }
  const effEnd = (endEl.value && endEl.value >= startVal) ? endEl.value : startVal;
  currentProjectOffDates = normalizeOffDatesForRange(currentProjectOffDates, startVal, effEnd);

  const customOffEl = document.getElementById('projCustomOffDateInput');
  if (customOffEl) {
    customOffEl.min = startVal;
    customOffEl.max = effEnd;
    if (customOffEl.value && (customOffEl.value < startVal || customOffEl.value > effEnd)) {
      customOffEl.value = '';
    }
  }
  renderProjectOffDatesUI();
}

function renderProjectOffDatesUI() {
  const badgeEl = document.getElementById('projWorkingDaysBadge');
  const chipsEl = document.getElementById('projOffDatesChips');
  const clearBtn = document.getElementById('projClearOffDatesBtn');
  const hintEl = document.getElementById('projOffDatesHint');
  const startVal = (document.getElementById('projDateInput') || {}).value || '';
  const rawEndVal = (document.getElementById('projEndDateInput') || {}).value || '';
  const endVal = (rawEndVal && rawEndVal >= startVal) ? rawEndVal : startVal;

  const ws = getProjectWorkingSummary({ dateCreated: startVal, endDate: endVal, nonWorkingDates: currentProjectOffDates });
  currentProjectOffDates = [...ws.offDates];

  if (badgeEl) {
    badgeEl.textContent = ws.offDates.length > 0
      ? `${ws.workingDays} work day${ws.workingDays === 1 ? '' : 's'} • ${ws.offDates.length} off`
      : `${ws.workingDays} working day${ws.workingDays === 1 ? '' : 's'}`;
    badgeEl.classList.toggle('text-amber-600', ws.offDates.length > 0);
    badgeEl.classList.toggle('dark:text-amber-400', ws.offDates.length > 0);
  }
  if (clearBtn) {
    clearBtn.classList.toggle('hidden', ws.offDates.length === 0);
  }
  if (hintEl) {
    hintEl.textContent = ws.totalSpanDays > 1
      ? 'Click any day below or pick a date to mark it as non-working (did not work).'
      : 'For multi-day events, click days inside the range or use the picker to mark dates you did not work.';
  }
  if (!chipsEl) return;

  if (!ws.start) {
    chipsEl.innerHTML = '';
    return;
  }

  const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const formatChipDate = (iso) => {
    const dt = new Date(iso + 'T00:00:00Z');
    if (Number.isNaN(dt.getTime())) return iso;
    return `${monthNamesShort[dt.getUTCMonth()]} ${dt.getUTCDate()} (${dayNamesShort[dt.getUTCDay()]})`;
  };

  if (ws.totalSpanDays >= 2 && ws.totalSpanDays <= 62) {
    const allDays = enumerateIsoDatesBetween(ws.start, ws.end, 62);
    chipsEl.innerHTML = allDays.map(d => {
      const isOff = ws.offDatesSet.has(d);
      const chipCls = isOff
        ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40 line-through'
        : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25 hover:bg-emerald-500/20';
      return `
        <button type="button" onclick="toggleProjectOffDate('${d}')" aria-pressed="${isOff ? 'true' : 'false'}"
          title="${isOff ? 'Marked as Did Not Work — click to restore as working day' : 'Working day — click to mark as Did Not Work'}"
          class="px-2.5 py-1 rounded-lg border text-[11px] font-mono transition-colors ${chipCls}">
          ${escapeHtml(formatChipDate(d))} ${isOff ? '• Off' : '• Work'}
        </button>
      `;
    }).join('');
  } else if (ws.offDates.length > 0) {
    chipsEl.innerHTML = ws.offDates.map(d => `
      <button type="button" onclick="toggleProjectOffDate('${d}')"
        class="px-2.5 py-1 rounded-lg border bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40 text-[11px] font-mono">
        Off: ${escapeHtml(formatChipDate(d))} &times;
      </button>
    `).join('');
  } else {
    chipsEl.innerHTML = '';
  }
}

function toggleProjectOffDate(dateStr) {
  const startVal = (document.getElementById('projDateInput') || {}).value || '';
  const rawEndVal = (document.getElementById('projEndDateInput') || {}).value || '';
  const endVal = (rawEndVal && rawEndVal >= startVal) ? rawEndVal : startVal;
  if (!dateStr || dateStr < startVal || dateStr > endVal) return;
  const set = new Set(normalizeOffDatesForRange(currentProjectOffDates, startVal, endVal));
  if (set.has(dateStr)) set.delete(dateStr);
  else set.add(dateStr);
  currentProjectOffDates = Array.from(set).sort();
  renderProjectOffDatesUI();
}

function addCustomProjectOffDate() {
  const input = document.getElementById('projCustomOffDateInput');
  const val = input ? (input.value || '').trim() : '';
  const startVal = (document.getElementById('projDateInput') || {}).value || '';
  const rawEndVal = (document.getElementById('projEndDateInput') || {}).value || '';
  const endVal = (rawEndVal && rawEndVal >= startVal) ? rawEndVal : startVal;
  if (!val) { showToast('Select a date first.'); return; }
  if (!startVal || val < startVal || val > endVal) {
    showToast('Off date must fall between Event Start Day and End Day.');
    return;
  }
  const set = new Set(currentProjectOffDates);
  set.add(val);
  currentProjectOffDates = normalizeOffDatesForRange(Array.from(set), startVal, endVal);
  if (input) input.value = '';
  renderProjectOffDatesUI();
}

function clearProjectOffDates() {
  currentProjectOffDates = [];
  renderProjectOffDatesUI();
}

function getProjectRevenue(proj) {
  if (!proj) return 0;
  if (proj.entryType === 'solo' && proj.directPayment !== undefined && proj.directPayment !== null && !Number.isNaN(Number(proj.directPayment))) {
    return Math.max(0, Number(proj.directPayment) || 0);
  }
  return (proj.lineItems || []).reduce((sum, item) => sum + ((Number(item.qty) || 0) * (Number(item.price) || 0)), 0);
}

function setProjectEntryMode(mode) {
  const isSolo = mode === 'solo';
  const entryInput = document.getElementById('projEntryTypeInput');
  if (entryInput) entryInput.value = isSolo ? 'solo' : 'client';

  const btnClient = document.getElementById('projModeBtnClient');
  const btnSolo = document.getElementById('projModeBtnSolo');
  const applySegStyle = (btn, active) => {
    if (!btn) return;
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    if (btn.classList.contains('mac-segment-btn')) {
      btn.classList.toggle('active', active);
    } else {
      ['bg-[#007AFF]', 'dark:bg-[#0A84FF]', 'text-white', 'shadow-sm'].forEach(c => btn.classList.toggle(c, active));
      ['text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-500/10'].forEach(c => btn.classList.toggle(c, !active));
    }
  };
  applySegStyle(btnClient, !isSolo);
  applySegStyle(btnSolo, isSolo);

  const toggleHide = (id, hidden) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', hidden);
  };
  toggleHide('projClientFieldWrap', isSolo);
  toggleHide('projRoleReqMark', isSolo);
  toggleHide('projQuotationColWrap', isSolo);
  toggleHide('projInvoiceColWrap', isSolo);
  toggleHide('projLineItemsSection', isSolo);
  toggleHide('projSoloPaymentSection', !isSolo);
  toggleHide('projDirectPdfActions', isSolo);
  toggleHide('projectRefHeaderBadges', isSolo);

  const nameCol = document.getElementById('projNameColWrap');
  if (nameCol) {
    nameCol.classList.toggle('md:col-span-2', isSolo);
    nameCol.classList.toggle('lg:col-span-2', isSolo);
  }

  const clientSelect = document.getElementById('projClientSelect');
  const roleInput = document.getElementById('projRoleInput');
  const directInput = document.getElementById('projDirectAmountInput');
  if (clientSelect) clientSelect.required = !isSolo;
  if (roleInput) roleInput.required = !isSolo;
  if (directInput) directInput.required = isSolo;

  const isEdit = !!(document.getElementById('projIdInput') || {}).value;
  const heading = document.getElementById('projectWorkspaceHeading');
  if (heading && !isEdit) {
    heading.textContent = isSolo ? 'New Solo Event (Direct Pay)' : 'New Project';
  }
  const saveBtn = document.getElementById('projSaveSubmitBtn');
  if (saveBtn) {
    saveBtn.textContent = isSolo
      ? (isEdit ? 'Update Solo Event' : 'Save Solo Event')
      : (isEdit ? 'Update Project' : 'Save Project');
  }
}

function renderProjectsModule() {
  const clientSelect = document.getElementById('projClientSelect');
  clientSelect.innerHTML = (studioState.clients || []).map(c =>
    `<option value="${c.id}">${escapeHtml(c.company)}</option>`
  ).join('');

  const clientNameMap = new Map((studioState.clients || []).map(c => [c.id, c.company || '']));
  const query = ((document.getElementById('projectSearchInput') || {}).value || '').trim().toLowerCase();
  const tbody = document.getElementById('projectsStreamlinedTableBody');
  const allProjects = studioState.projects || [];
  const projects = query
    ? allProjects.filter(p => {
        const isSolo = p.entryType === 'solo';
        const clientName = isSolo ? 'solo direct payment' : (clientNameMap.get(p.clientId) || '');
        return (p.name || '').toLowerCase().includes(query) ||
          (p.status || '').toLowerCase().includes(query) ||
          (p.dateCreated || '').includes(query) ||
          (p.endDate || '').includes(query) ||
          (p.paymentMethod || '').toLowerCase().includes(query) ||
          (p.soloThrough || '').toLowerCase().includes(query) ||
          clientName.toLowerCase().includes(query);
      })
    : allProjects;

  if (projects.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="py-8 text-center text-slate-400">${query ? 'No matching events found.' : 'No events yet.'}</td></tr>`;
    return;
  }

  tbody.innerHTML = projects.map(p => {
    const isSolo = p.entryType === 'solo';
    const isCancelled = (p.status || '') === 'Cancelled';
    const rev = getProjectRevenue(p);
    const curCode = p.currency || getActiveCurrencyCode();
    const clientLabel = clientNameMap.get(p.clientId) || '';
    const soloThroughBadge = isSolo && p.soloThrough
      ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-500/10 text-slate-600 dark:text-slate-300">Through: ${escapeHtml(p.soloThrough)}</span>`
      : '';
    const typeBadge = isSolo
      ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">Solo · Direct Pay</span>${soloThroughBadge}`
      : (clientLabel
          ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-500/10 text-slate-600 dark:text-slate-300">${escapeHtml(clientLabel)}</span>`
          : '');
    const subMeta = `${escapeHtml(formatCurrency(rev, curCode))}${isSolo && p.paymentMethod ? ` • ${escapeHtml(p.paymentMethod)}` : ''}`;
    const ws = getProjectWorkingSummary(p);
    const daysBadge = (ws.totalSpanDays > 1 || ws.offDates.length > 0)
      ? `<span class="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">${ws.workingDays}d work</span>`
      : '';
    const offBadge = ws.offDates.length > 0
      ? `<span class="ml-1 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-amber-500/15 text-amber-700 dark:text-amber-300">${ws.offDates.length} off</span>`
      : '';
    return `
    <tr class="hover:bg-slate-500/5 transition-colors">
      <td class="py-3.5 pr-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-medium ${isCancelled ? 'line-through text-slate-400 dark:text-slate-500' : ''}">${escapeHtml(p.name)}</span>
          ${typeBadge}
        </div>
        <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">${subMeta}</div>
      </td>
      <td class="py-3.5 px-4 font-mono text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
        <span>${escapeHtml(formatProjectDateRange(p))}</span>
        ${daysBadge}${offBadge}
      </td>
      <td class="py-3.5 px-4">${getStatusPillHTML(p.status)}${typeof getPaymentBadgeHTML === 'function' ? getPaymentBadgeHTML(p) : ''}</td>
      <td class="py-3.5 pl-4 text-right space-x-2">
        <button type="button" onclick="openProjectWorkspaceForEdit('${p.id}')" class="btn-mac-secondary px-3 py-1.5 text-xs text-[#007AFF] dark:text-[#0A84FF]">${isSolo ? 'Open Event' : 'Open Project'}</button>
        <button type="button" onclick="removeProjectById('${p.id}')" class="btn-mac-secondary px-3 py-1.5 text-xs text-rose-500">Remove</button>
      </td>
    </tr>`;
  }).join('');
}

function openProjectWorkspaceForNew(mode = 'client') {
  const entryMode = mode === 'solo' ? 'solo' : 'client';
  const container = document.getElementById('projectWorkspaceContainer');
  container.classList.remove('hidden');
  document.getElementById('projectInfoOverviewPanel').classList.add('hidden');
  document.getElementById('projectWorkspaceForm').classList.remove('hidden');
  document.getElementById('btnSwitchToEditProject').classList.add('hidden');
  document.getElementById('btnSwitchToViewProject').classList.add('hidden');

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('projIdInput').value = '';
  document.getElementById('projNameInput').value = '';
  document.getElementById('projDateInput').value = today;
  const endDateEl = document.getElementById('projEndDateInput');
  if (endDateEl) {
    endDateEl.min = today;
    endDateEl.value = today;
  }
  currentProjectOffDates = [];
  syncProjectEndDateMin();
  const statusSel = document.getElementById('projStatusSelect');
  if (statusSel) {
    statusSel.value = entryMode === 'solo' ? 'Completed' : 'Planning';
    if (!statusSel.value) statusSel.value = 'Planning';
  }
  document.getElementById('projRoleInput').value = '';
  document.getElementById('projSupplierCostInput').value = '0';
  document.getElementById('projScopeInput').value = '';
  document.getElementById('projInternalNotesInput').value = '';

  const directAmtInput = document.getElementById('projDirectAmountInput');
  if (directAmtInput) directAmtInput.value = '';
  const soloThroughInput = document.getElementById('projSoloThroughInput');
  if (soloThroughInput) soloThroughInput.value = '';
  const payMethodInput = document.getElementById('projPaymentMethodInput');
  if (payMethodInput) {
    if (payMethodInput.tagName === 'SELECT') payMethodInput.selectedIndex = 0;
    else payMethodInput.value = '';
  }

  const qtn = generateRandomRef('QTN');
  const inv = generateRandomRef('INV');
  document.getElementById('projQuotationNumInput').value = qtn;
  document.getElementById('projInvoiceNumInput').value = inv;
  document.getElementById('badgeQuotationRef').textContent = qtn;
  document.getElementById('badgeInvoiceRef').textContent = inv;

  const projCurSelect = document.getElementById('projCurrencySelect');
  if (projCurSelect) projCurSelect.value = getActiveCurrencyCode();
  syncCurrencyLabelsUI();

  currentProjectLineItems = [{ description: getActiveProfile().labels.defaultServiceDesc, qty: 1, price: 3500 }];
  renderProjectLineItemRows();
  setProjectEntryMode(entryMode);
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function enableProjectEditMode() {
  document.getElementById('projectInfoOverviewPanel').classList.add('hidden');
  document.getElementById('projectWorkspaceForm').classList.remove('hidden');
  document.getElementById('btnSwitchToEditProject').classList.add('hidden');
  if (document.getElementById('projIdInput').value) {
    document.getElementById('btnSwitchToViewProject').classList.remove('hidden');
  }
}

function showProjectOverviewMode() {
  const projId = document.getElementById('projIdInput').value;
  const proj = (studioState.projects || []).find(p => p.id === projId);
  if (proj) {
    renderProjectInfoOverview(proj);
  }
  document.getElementById('projectWorkspaceForm').classList.add('hidden');
  document.getElementById('projectInfoOverviewPanel').classList.remove('hidden');
  document.getElementById('btnSwitchToEditProject').classList.remove('hidden');
  document.getElementById('btnSwitchToViewProject').classList.add('hidden');
}

async function renderProjectInfoOverview(proj) {
  if (!proj) return;
  const isSolo = proj.entryType === 'solo';
  const curCode = proj.currency || getActiveCurrencyCode();
  const client = (studioState.clients || []).find(c => c.id === proj.clientId);

  const toggleHide = (id, hidden) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', hidden);
  };
  toggleHide('projSoloModeBadge', !isSolo);
  toggleHide('projectRefHeaderBadges', isSolo);
  toggleHide('viewProjLineItemsCard', isSolo);
  toggleHide('dlCardQuotationBtn', isSolo);
  toggleHide('dlCardInvoiceBtn', isSolo);

  const clientSectionLbl = document.getElementById('viewProjClientSectionLabel');
  if (clientSectionLbl) {
    clientSectionLbl.textContent = isSolo ? 'Solo Event • Direct Payment' : 'Client Information';
  }

  if (isSolo) {
    document.getElementById('viewProjClientCompany').textContent = proj.soloThrough
      ? `Through: ${proj.soloThrough}`
      : 'Direct Payment Entry (No Client Required)';
    document.getElementById('viewProjClientMeta').textContent = proj.paymentMethod
      ? `Payment Method: ${proj.paymentMethod}`
      : 'Solo direct payout recorded without client billing details';
    document.getElementById('viewProjClientBank').textContent = proj.soloThrough
      ? 'Solo event (Quotation & client invoice skipped)'
      : 'Quotation & client invoice skipped for solo entry';
  } else {
    document.getElementById('viewProjClientCompany').textContent = client ? client.company : 'Unassigned Client';
    document.getElementById('viewProjClientMeta').textContent = client
      ? [client.contactPerson, client.email, client.phone].filter(Boolean).join(' • ')
      : '—';
    const clientBankParts = [];
    if (client && client.bankName) clientBankParts.push(`Bank: ${client.bankName}`);
    if (client && client.accountNumber) clientBankParts.push(`Acct: ${client.accountNumber}`);
    if (client && client.iban) clientBankParts.push(`IBAN: ${client.iban}`);
    document.getElementById('viewProjClientBank').textContent = clientBankParts.join(' • ');
  }

  const ws = getProjectWorkingSummary(proj);
  const dateDisplay = formatProjectDateRange(proj) + (ws.totalSpanDays > 1 || ws.offDates.length > 0 ? ` (${ws.workingDays} work day${ws.workingDays === 1 ? '' : 's'})` : '');
  document.getElementById('viewProjDate').textContent = dateDisplay;
  const offBadgeEl = document.getElementById('viewProjOffDatesBadge');
  if (offBadgeEl) {
    if (ws.offDates.length > 0) {
      offBadgeEl.textContent = `Did not work (${ws.offDates.length}): ${ws.offDates.join(', ')}`;
      offBadgeEl.classList.remove('hidden');
    } else {
      offBadgeEl.textContent = '';
      offBadgeEl.classList.add('hidden');
    }
  }
  document.getElementById('viewProjStatusPill').innerHTML = getStatusPillHTML(proj.status || 'Planning');
  document.getElementById('viewProjRole').textContent = proj.role ? `Role: ${proj.role}` : '—';

  let total = 0;
  const items = proj.lineItems || [];
  const tbody = document.getElementById('viewProjLineItemsTableBody');
  if (items.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="py-4 text-center text-slate-400">No line items.</td></tr>`;
  } else {
    tbody.innerHTML = items.map(item => {
      const qty = Number(item.qty) || 0;
      const price = Number(item.price) || 0;
      const lineTotal = qty * price;
      total += lineTotal;
      return `
        <tr>
          <td class="py-2 pr-3 font-medium">${escapeHtml(item.description || 'Service')}</td>
          <td class="py-2 px-3 text-right font-mono">${qty}</td>
          <td class="py-2 px-3 text-right font-mono">${formatCurrency(price, curCode)}</td>
          <td class="py-2 pl-3 text-right font-mono font-semibold">${formatCurrency(lineTotal, curCode)}</td>
        </tr>
      `;
    }).join('');
  }
  if (isSolo) total = getProjectRevenue(proj);

  const costs = Number(proj.supplierCosts) || 0;
  const net = total - costs;

  const grossLbl = document.getElementById('viewProjGrossLabel');
  if (grossLbl) {
    grossLbl.textContent = isSolo ? 'Direct Payment Received' : 'Line Items Subtotal';
  }

  document.getElementById('viewProjTotalAmount').textContent = formatCurrency(total, curCode);
  document.getElementById('viewProjLineItemsSubtotal').textContent = formatCurrency(total, curCode);
  document.getElementById('viewProjSupplierCost').textContent = formatCurrency(costs, curCode);
  const netEl = document.getElementById('viewProjNetAmount');
  if (netEl) {
    netEl.textContent = formatCurrency(net, curCode);
    netEl.classList.toggle('text-rose-500', net < 0);
    netEl.classList.toggle('text-emerald-600', net >= 0);
    netEl.classList.toggle('dark:text-emerald-400', net >= 0);
  }
  document.getElementById('viewProjCurrencyBadge').textContent = curCode;

  document.getElementById('viewProjScope').textContent = proj.scope || (isSolo ? 'No event notes or scope provided.' : 'No job description or scope provided.');
  document.getElementById('viewProjInternalNotes').textContent = proj.internalNotes || 'No internal notes recorded.';

  const qtn = proj.quotationNumber || 'QTN-000000';
  const inv = proj.invoiceNumber || 'INV-000000';
  document.getElementById('dlCardQuotationRef').textContent = `${qtn}.pdf`;
  document.getElementById('dlCardInvoiceRef').textContent = `${inv}.pdf`;

  if (typeof renderProductionToolkit === 'function') renderProductionToolkit(proj);
  await refreshProjectLinkedFilesList(proj);
}

async function refreshProjectLinkedFilesList(proj) {
  const listEl = document.getElementById('viewProjLinkedFilesList');
  if (!listEl || !proj) return;
  const allFiles = await getAllVaultFiles();
  const qtn = (proj.quotationNumber || '').toLowerCase();
  const inv = (proj.invoiceNumber || '').toLowerCase();
  const pName = (proj.name || '').toLowerCase();
  const matched = allFiles.filter(f => {
    if (f.projectId && f.projectId === proj.id) return true;
    const fn = (f.filename || '').toLowerCase();
    return (qtn && fn.includes(qtn)) || (inv && fn.includes(inv)) || (pName && pName.length > 3 && fn.includes(pName));
  });

  if (matched.length === 0) {
    listEl.innerHTML = `<div class="py-2 text-slate-400">No archived or attached files for this project yet. Use the download buttons above or click "+ Attach Project File".</div>`;
    return;
  }

  listEl.innerHTML = matched.map(f => `
    <div class="flex items-center justify-between gap-3 py-1.5 px-3 rounded-lg bg-slate-500/5 border border-slate-200/50 dark:border-white/5">
      <div class="min-w-0">
        <div class="font-medium truncate">${escapeHtml(f.filename)}</div>
        <div class="text-[11px] font-mono text-slate-400">${escapeHtml(f.folder || '/01_Event_Projects/')} • ${formatBytes(f.size)}</div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button type="button" onclick="openWhatsappModalWithVaultIds(['${f.id}'], '${proj.clientId || ''}')" class="btn-mac-secondary px-2.5 py-1 text-xs text-emerald-600 dark:text-emerald-400">WhatsApp</button>
        <button type="button" onclick="downloadVaultFileById('${f.id}')" class="btn-mac-secondary px-2.5 py-1 text-xs text-[#007AFF] dark:text-[#0A84FF]">Download</button>
      </div>
    </div>
  `).join('');
}

async function handleAttachFileToCurrentProject(event) {
  const files = Array.from((event.target && event.target.files) || []);
  if (files.length === 0) return;
  const projId = document.getElementById('projIdInput').value;
  const proj = (studioState.projects || []).find(p => p.id === projId);
  if (!proj) return;

  const existingVaultFiles = await getAllVaultFiles();
  const usedNames = new Set(existingVaultFiles.map(f => (f.filename || '').toLowerCase()));

  for (const file of files) {
    let safeFilename = file.name;
    if (usedNames.has(safeFilename.toLowerCase())) {
      const dotIdx = safeFilename.lastIndexOf('.');
      const base = dotIdx > 0 ? safeFilename.slice(0, dotIdx) : safeFilename;
      const ext = dotIdx > 0 ? safeFilename.slice(dotIdx) : '';
      let counter = 2;
      while (usedNames.has(`${base}-${counter}${ext}`.toLowerCase())) counter++;
      safeFilename = `${base}-${counter}${ext}`;
    }
    usedNames.add(safeFilename.toLowerCase());

    await saveFileToIndexedDBVault(safeFilename, '/01_Event_Projects/', file.type || 'application/octet-stream', file, { projectId: proj.id });
  }

  event.target.value = '';
  await refreshProjectLinkedFilesList(proj);
  showToast(`Attached ${files.length} file${files.length > 1 ? 's' : ''} to ${proj.name}`);
}

async function downloadProjectSpecificFile(kind) {
  const projId = document.getElementById('projIdInput').value;
  const proj = (studioState.projects || []).find(p => p.id === projId);
  if (!proj) return;
  const isSolo = proj.entryType === 'solo';
  const curCode = proj.currency || getActiveCurrencyCode();
  const curMeta = getActiveCurrencyMeta(curCode);
  const client = (studioState.clients || []).find(c => c.id === proj.clientId) || {};
  const org = getSelectedOrgProfile();
  const safeSlug = (proj.name || 'Project').replace(/[^a-zA-Z0-9_-]+/g, '-');

  if (kind === 'QuotationPDF') {
    if (isSolo) { showToast('Solo direct-payment events do not generate client quotations.'); return; }
    await generateProjectDirectPDF('Quotation');
    await renderProjectInfoOverview(proj);
  } else if (kind === 'InvoicePDF') {
    if (isSolo) { showToast('Solo direct-payment events do not generate client invoices.'); return; }
    await generateProjectDirectPDF('Invoice');
    await renderProjectInfoOverview(proj);
  } else if (kind === 'BriefPDF') {
    const tplEl = document.getElementById('projBriefTemplateSelect');
    const tpl = (tplEl && tplEl.value) || 'executive';
    await buildAndDownloadProjectBriefPDF(proj, client, org, tpl);
  } else if (kind === 'CostBreakdownXLSX') {
    const xlsxBlob = await buildCostBreakdownXlsxBlob(proj, client, curMeta, org);
    if (xlsxBlob) {
      const filename = `${safeSlug}-Cost-Breakdown.xlsx`;
      triggerBrowserBlobDownload(xlsxBlob, filename);
      await saveFileToIndexedDBVault(
        filename,
        '/01_Event_Projects/',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        xlsxBlob
      );
      await refreshProjectLinkedFilesList(proj);
      showToast(`Downloaded "${filename}" (Excel & Google Sheets)`);
      return;
    }
    kind = 'LineItemsCSV';
  }

  if (kind === 'BriefTXT') {
    const total = getProjectRevenue(proj);
    const costs = Number(proj.supplierCosts) || 0;
    const net = total - costs;
    const itemLines = (proj.lineItems || []).map((it, i) => {
      const lt = (Number(it.qty) || 0) * (Number(it.price) || 0);
      return `${i + 1}. ${it.description || 'Service'} — Qty: ${it.qty} × ${formatCurrency(it.price, curCode)} = ${formatCurrency(lt, curCode)}`;
    });
    const { start: briefStart, end: briefEnd } = getProjectDateBounds(proj);
    const briefDays = getProjectDurationDays(proj);
    const headerLines = [
      `${isSolo ? 'SOLO EVENT BRIEF (DIRECT PAY)' : 'PROJECT BRIEF'} — ${proj.name}`,
      `====================================================`,
      `Entry Type: ${isSolo ? 'Solo Event (Direct Payment — No Client)' : 'Client Project'}`,
      `Start Day: ${briefStart || '—'}`,
      `End Day: ${briefEnd || '—'}${briefDays > 1 ? ` (${briefDays} days)` : ''}`,
      `Status: ${proj.status || '—'}`,
      `Role: ${proj.role || '—'}`,
      `Currency: ${curCode}`
    ];
    if (isSolo) {
      if (proj.soloThrough) headerLines.push(`Event Project Through: ${proj.soloThrough}`);
      headerLines.push(`Direct Payment Received: ${formatCurrency(total, curCode)}`);
      headerLines.push(`Payment Method: ${proj.paymentMethod || '—'}`);
    } else {
      headerLines.push(`Quotation Ref: ${proj.quotationNumber || '—'}`);
      headerLines.push(`Invoice Ref: ${proj.invoiceNumber || '—'}`);
    }
    const clientLines = isSolo ? [] : [
      ``,
      `CLIENT INFORMATION`,
      `----------------------------------------------------`,
      `Company: ${client.company || '—'}`,
      `Contact: ${client.contactPerson || '—'}`,
      `Email: ${client.email || '—'}`,
      `Phone: ${client.phone || '—'}`,
      `Address: ${client.address || '—'}`,
      client.bankName ? `Bank Name: ${client.bankName}` : '',
      client.accountNumber ? `Account No: ${client.accountNumber}` : ''
    ];
    const itemsSection = isSolo ? [] : [
      ``,
      `LINE ITEMS`,
      `----------------------------------------------------`,
      ...itemLines
    ];
    const content = [
      ...headerLines,
      ...clientLines,
      ``,
      `JOB DESCRIPTION & SCOPE OF WORK`,
      `----------------------------------------------------`,
      proj.scope || '—',
      ``,
      `INTERNAL NOTES & SUPPLIER COSTS`,
      `----------------------------------------------------`,
      `Supplier & Operational Costs: ${formatCurrency(costs, curCode)}`,
      `Net Earnings After Costs: ${formatCurrency(net, curCode)}`,
      `Notes: ${proj.internalNotes || '—'}`,
      ...itemsSection,
      ``,
      `TOTAL: ${formatCurrency(total, curCode)}`
    ].filter(l => l !== null).join('\n');
    const filename = `${safeSlug}-Brief.txt`;
    const blob = new Blob([content], { type: 'text/plain' });
    triggerBrowserBlobDownload(blob, filename);
    await saveFileToIndexedDBVault(filename, '/01_Event_Projects/', 'text/plain', blob);
    await refreshProjectLinkedFilesList(proj);
    showToast(`Downloaded "${filename}"`);
  } else if (kind === 'LineItemsCSV') {
    const csvEsc = v => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`;
    const gross = getProjectRevenue(proj);
    const costs = Math.max(0, Number(proj.supplierCosts) || 0);
    const net = gross - costs;
    const { start: csvStart, end: csvEnd } = getProjectDateBounds(proj);
    const rows = [
      ['EVENT & PROJECT COST BREAKDOWN', csvEsc(proj.name)],
      ['Start Day', csvStart || '—', 'End Day', csvEnd || '—', 'Currency', curCode],
      [],
      ['#', 'Item / Cost Description', 'Category', 'Qty', `Unit Rate (${curCode})`, `Line Total (${curCode})`]
    ];
    const items = isSolo
      ? [{ description: `${proj.name || 'Solo Event'} (${proj.paymentMethod || 'Direct Payment'})`, qty: 1, price: gross }]
      : (proj.lineItems || []);
    items.forEach((it, idx) => {
      const qty = Number(it.qty) || 0;
      const price = Number(it.price) || 0;
      rows.push([idx + 1, csvEsc(it.description || ''), csvEsc(isSolo ? 'Direct Payout' : 'Deliverable'), qty, price.toFixed(2), (qty * price).toFixed(2)]);
    });
    rows.push([]);
    rows.push(['', 'Gross Revenue', '', '', '', gross.toFixed(2)]);
    rows.push(['', 'Supplier & Operational Costs', '', '', '', costs.toFixed(2)]);
    rows.push(['', 'Net Profit / Made After Costs', '', '', '', net.toFixed(2)]);
    const csv = rows.map(r => r.join(',')).join('\n');
    const filename = `${safeSlug}-Cost-Breakdown.csv`;
    const blob = new Blob([csv], { type: 'text/csv' });
    triggerBrowserBlobDownload(blob, filename);
    await saveFileToIndexedDBVault(filename, '/01_Event_Projects/', 'text/csv', blob);
    await refreshProjectLinkedFilesList(proj);
    showToast(`Downloaded "${filename}"`);
  }
}

function openProjectWorkspaceForEdit(projectId) {
  const proj = (studioState.projects || []).find(p => p.id === projectId);
  if (!proj) return;
  const isSolo = proj.entryType === 'solo';
  const container = document.getElementById('projectWorkspaceContainer');
  container.classList.remove('hidden');

  if (proj.currency && STUDIO_CURRENCIES[proj.currency]) {
    studioState.currency = proj.currency;
    if (studioState.billingDraft) studioState.billingDraft.currency = proj.currency;
  }
  const projCurSelect = document.getElementById('projCurrencySelect');
  if (projCurSelect) projCurSelect.value = getActiveCurrencyCode();
  syncCurrencyLabelsUI();

  document.getElementById('projectWorkspaceHeading').textContent = proj.name;
  document.getElementById('projIdInput').value = proj.id;
  document.getElementById('projNameInput').value = proj.name;
  document.getElementById('projClientSelect').value = proj.clientId || '';
  const { start: evStart, end: evEnd, offDates: evOff } = getProjectWorkingSummary(proj);
  document.getElementById('projDateInput').value = evStart;
  const endDateEl = document.getElementById('projEndDateInput');
  if (endDateEl) {
    endDateEl.min = evStart;
    endDateEl.value = evEnd;
  }
  currentProjectOffDates = [...evOff];
  syncProjectEndDateMin();
  document.getElementById('projStatusSelect').value = proj.status || 'Planning';
  document.getElementById('projRoleInput').value = proj.role || '';
  document.getElementById('projSupplierCostInput').value = proj.supplierCosts || 0;
  document.getElementById('projScopeInput').value = proj.scope || '';
  document.getElementById('projInternalNotesInput').value = proj.internalNotes || '';

  const directAmtInput = document.getElementById('projDirectAmountInput');
  if (directAmtInput) directAmtInput.value = isSolo ? getProjectRevenue(proj) : '';
  const soloThroughInput = document.getElementById('projSoloThroughInput');
  if (soloThroughInput) soloThroughInput.value = proj.soloThrough || '';
  const payMethodEl = document.getElementById('projPaymentMethodInput');
  if (payMethodEl) {
    if (payMethodEl.tagName === 'SELECT') {
      if (proj.paymentMethod) payMethodEl.value = proj.paymentMethod;
      else payMethodEl.selectedIndex = 0;
    } else {
      payMethodEl.value = proj.paymentMethod || '';
    }
  }

  if (isSolo) {
    document.getElementById('projQuotationNumInput').value = '';
    document.getElementById('projInvoiceNumInput').value = '';
    document.getElementById('badgeQuotationRef').textContent = 'QTN';
    document.getElementById('badgeInvoiceRef').textContent = 'INV';
  } else {
    const qtn = proj.quotationNumber || generateRandomRef('QTN');
    const inv = proj.invoiceNumber || generateRandomRef('INV');
    proj.quotationNumber = qtn;
    proj.invoiceNumber = inv;
    document.getElementById('projQuotationNumInput').value = qtn;
    document.getElementById('projInvoiceNumInput').value = inv;
    document.getElementById('badgeQuotationRef').textContent = qtn;
    document.getElementById('badgeInvoiceRef').textContent = inv;
  }

  currentProjectLineItems = JSON.parse(JSON.stringify(proj.lineItems || []));
  if (currentProjectLineItems.length === 0) currentProjectLineItems.push({ description: getActiveProfile().labels.defaultServiceDesc, qty: 1, price: 2500 });
  renderProjectLineItemRows();

  setProjectEntryMode(isSolo ? 'solo' : 'client');
  // Show Read-Only Project Information View first when opening a project
  showProjectOverviewMode();
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeProjectWorkspace() {
  document.getElementById('projectWorkspaceContainer').classList.add('hidden');
}

function buildLineItemRowHtml(item, idx, updateFn, removeFn) {
  return `
    <div class="studio-line-item-row grid grid-cols-12 gap-2 items-center">
      <div class="col-span-6 line-desc"><input type="text" value="${escapeHtml(item.description)}" placeholder="Description" oninput="${updateFn}(${idx}, 'description', this.value)" class="helios-input w-full px-2.5 sm:px-3 py-1.5 text-sm" /></div>
      <div class="col-span-2 line-qty"><input type="number" min="1" aria-label="Quantity" placeholder="Qty" value="${Number(item.qty) || 1}" oninput="${updateFn}(${idx}, 'qty', this.value)" class="helios-input w-full px-2.5 sm:px-3 py-1.5 text-sm font-mono" /></div>
      <div class="col-span-3 line-price"><input type="number" min="0" step="0.01" aria-label="Unit price" placeholder="Price" value="${Number(item.price) || 0}" oninput="${updateFn}(${idx}, 'price', this.value)" class="helios-input w-full px-2.5 sm:px-3 py-1.5 text-sm font-mono" /></div>
      <div class="col-span-1 line-del text-right"><button type="button" onclick="${removeFn}(${idx})" aria-label="Remove item" class="btn-mac-secondary w-full sm:w-auto px-2.5 py-1.5 text-xs text-rose-500">&times;</button></div>
    </div>
  `;
}

function renderProjectLineItemRows() {
  const container = document.getElementById('projectLineItemsRows');
  let total = 0;
  container.innerHTML = currentProjectLineItems.map((item, idx) => {
    total += (Number(item.qty) || 0) * (Number(item.price) || 0);
    return buildLineItemRowHtml(item, idx, 'updateProjectLineItem', 'removeProjectLineItemRow');
  }).join('');
  document.getElementById('projectLineItemsTotalDisplay').textContent = formatCurrency(total);
}

function updateProjectLineItem(idx, field, value) {
  if (!currentProjectLineItems[idx]) return;
  if (field === 'qty' || field === 'price') {
    currentProjectLineItems[idx][field] = parseFloat(value) || 0;
    let total = 0;
    currentProjectLineItems.forEach(i => total += (Number(i.qty) || 0) * (Number(i.price) || 0));
    document.getElementById('projectLineItemsTotalDisplay').textContent = formatCurrency(total);
  } else {
    currentProjectLineItems[idx][field] = value;
  }
}

function addProjectLineItemRow() {
  currentProjectLineItems.push({ description: '', qty: 1, price: 0 });
  renderProjectLineItemRows();
}

function removeProjectLineItemRow(idx) {
  if (currentProjectLineItems.length <= 1) currentProjectLineItems[0] = { description: '', qty: 1, price: 0 };
  else currentProjectLineItems.splice(idx, 1);
  renderProjectLineItemRows();
}

function saveProjectFromWorkspace(event) {
  if (event) event.preventDefault();
  const existingId = document.getElementById('projIdInput').value;
  const entryType = (document.getElementById('projEntryTypeInput') || {}).value === 'solo' ? 'solo' : 'client';
  const isSolo = entryType === 'solo';
  const name = document.getElementById('projNameInput').value.trim();
  if (!name) { showToast(isSolo ? 'Enter an event name.' : 'Enter a project name.'); return null; }

  const currency = (document.getElementById('projCurrencySelect') || {}).value || getActiveCurrencyCode();
  const supplierCosts = parseFloat(document.getElementById('projSupplierCostInput').value) || 0;
  const soloThroughEl = document.getElementById('projSoloThroughInput');
  const soloThrough = soloThroughEl ? (soloThroughEl.value || '').trim() : '';
  const paymentMethodEl = document.getElementById('projPaymentMethodInput');
  const paymentMethod = paymentMethodEl ? (paymentMethodEl.value || '').trim() : '';

  let directPayment = 0;
  let lineItems = [];
  let clientId = '';
  let qtn = '';
  let inv = '';

  if (isSolo) {
    const rawDirect = ((document.getElementById('projDirectAmountInput') || {}).value || '').trim();
    directPayment = parseFloat(rawDirect);
    if (rawDirect === '' || !Number.isFinite(directPayment) || directPayment < 0) {
      showToast('Enter a valid direct payment amount.');
      return null;
    }
    lineItems = [{
      description: `${name} (Direct Payment${soloThrough ? ' via ' + soloThrough : ''}${paymentMethod ? ' • ' + paymentMethod : ''})`,
      qty: 1,
      price: directPayment
    }];
  } else {
    qtn = (document.getElementById('projQuotationNumInput').value || '').trim() || generateRandomRef('QTN');
    inv = (document.getElementById('projInvoiceNumInput').value || '').trim() || generateRandomRef('INV');
    clientId = document.getElementById('projClientSelect').value;
    lineItems = JSON.parse(JSON.stringify(currentProjectLineItems));
  }

  const startDay = document.getElementById('projDateInput').value;
  const rawEndDay = (document.getElementById('projEndDateInput') || {}).value;
  const endDay = rawEndDay || startDay;
  if (startDay && endDay && endDay < startDay) {
    showToast('Event end day cannot be before start day.');
    return null;
  }
  currentProjectOffDates = normalizeOffDatesForRange(currentProjectOffDates, startDay, endDay);

  const record = {
    id: existingId || ('prj-' + Date.now()),
    entryType,
    name,
    clientId,
    dateCreated: startDay,
    endDate: endDay,
    nonWorkingDates: [...currentProjectOffDates],
    status: document.getElementById('projStatusSelect').value,
    role: document.getElementById('projRoleInput').value.trim(),
    directPayment: isSolo ? directPayment : undefined,
    soloThrough: isSolo ? soloThrough : '',
    paymentMethod: isSolo ? paymentMethod : '',
    supplierCosts,
    scope: document.getElementById('projScopeInput').value.trim(),
    internalNotes: document.getElementById('projInternalNotesInput').value.trim(),
    quotationNumber: qtn,
    invoiceNumber: inv,
    currency,
    lineItems
  };

  const idx = (studioState.projects || []).findIndex(p => p.id === record.id);
  if (idx >= 0 && studioState.projects[idx].production) {
    // Preserve Production Toolkit data (run of show, crew, payments, gear, sign-off)
    record.production = studioState.projects[idx].production;
  }
  if (idx >= 0) studioState.projects[idx] = record;
  else studioState.projects.unshift(record);

  document.getElementById('projIdInput').value = record.id;
  document.getElementById('projectWorkspaceHeading').textContent = record.name;
  document.getElementById('badgeQuotationRef').textContent = record.quotationNumber || 'QTN';
  document.getElementById('badgeInvoiceRef').textContent = record.invoiceNumber || 'INV';
  setProjectEntryMode(entryType);

  saveStudioState();
  if (event) {
    showProjectOverviewMode();
  }
  showToast(`Saved "${record.name}"`);
  return record;
}

function removeProjectById(projectId) {
  studioState.projects = (studioState.projects || []).filter(p => p.id !== projectId);
  if (document.getElementById('projIdInput').value === projectId) closeProjectWorkspace();
  saveStudioState();
  showToast('Project removed.');
}

async function generateProjectDirectPDF(docType) {
  const project = saveProjectFromWorkspace(null);
  if (!project || project.entryType === 'solo') return;
  const client = (studioState.clients || []).find(c => c.id === project.clientId) || {
    company: 'Client', contactPerson: '', email: '', address: ''
  };
  const org = getSelectedOrgProfile();
  const currentRef = docType === 'Quotation' ? project.quotationNumber : project.invoiceNumber;
  await buildAndDownloadStyledPDF({
    docType,
    docNumber: currentRef,
    issueDate: project.dateCreated || new Date().toISOString().split('T')[0],
    orgName: org.name, orgAddress: org.address, orgTaxId: org.taxId, orgEmail: org.email,
    orgBankName: org.bankName || 'Emirates NBD / Chase Business',
    orgAccountHolder: org.accountHolder || org.name || 'Event Management Studio',
    orgAccountNumber: org.accountNumber || '',
    orgIban: org.iban || 'AE07 0260 0010 1528 4920 101',
    orgSwift: org.swift || 'EBILAEAD',
    paymentTerms: (studioState.billingDraft && studioState.billingDraft.paymentTerms) || 'Payment is due within 14 days of invoice date via bank transfer. Please quote the document reference number on your remittance.',
    clientCompany: client.company, clientContact: client.contactPerson, clientAddress: client.address, clientEmail: client.email,
    clientBankName: client.bankName || '', clientAccountNumber: client.accountNumber || '', clientIban: client.iban || '',
    projectName: project.name, projectRole: project.role, projectScope: project.scope,
    currency: project.currency || getActiveCurrencyCode(),
    lineItems: project.lineItems,
    clientSignature: getProjectSignatureForPdf(project)
  });

  if (!Array.isArray(studioState.usedDocNumbers)) studioState.usedDocNumbers = [];
  if (!studioState.usedDocNumbers.includes(currentRef)) {
    studioState.usedDocNumbers.push(currentRef);
  }

  if (docType === 'Quotation') {
    const nextQtn = getNextUniqueDocReference(currentRef, 'QTN');
    project.quotationNumber = nextQtn;
    document.getElementById('projQuotationNumInput').value = nextQtn;
    document.getElementById('badgeQuotationRef').textContent = nextQtn;
  } else {
    const nextInv = getNextUniqueDocReference(currentRef, 'INV');
    project.invoiceNumber = nextInv;
    document.getElementById('projInvoiceNumInput').value = nextInv;
    document.getElementById('badgeInvoiceRef').textContent = nextInv;
  }
  saveStudioState();
}

/* EVENT EARNINGS & PERFORMANCE STATS */
const statsFilterState = { scope: 'earned', type: 'all', pnlHorizon: 3 };

function setStatsFilter(kind, val) {
  if (kind === 'scope' && (val === 'earned' || val === 'completed' || val === 'cancelled' || val === 'all')) {
    statsFilterState.scope = val;
  } else if (kind === 'type' && (val === 'all' || val === 'solo' || val === 'client')) {
    statsFilterState.type = val;
  }
  renderEventStatsView();
}

function setStatsPnlHorizon(months) {
  statsFilterState.pnlHorizon = months === 6 ? 6 : 3;
  renderEventStatsView();
}

function openSoloEventCreatorFromStats() {
  switchView('projects');
  openProjectWorkspaceForNew('solo');
}

function matchesStatsFilter(proj) {
  const status = String((proj && proj.status) || 'Planning').trim().toLowerCase();
  if (statsFilterState.scope === 'completed') {
    if (status !== 'completed' && status !== 'paid') return false;
  } else if (statsFilterState.scope === 'earned') {
    if (status === 'cancelled' || status === 'planning') return false;
  } else if (statsFilterState.scope === 'cancelled') {
    if (status !== 'cancelled') return false;
  }
  const isSolo = !!(proj && proj.entryType === 'solo');
  if (statsFilterState.type === 'solo' && !isSolo) return false;
  if (statsFilterState.type === 'client' && isSolo) return false;
  return true;
}

function renderEventStatsView() {
  const toggleActive = (id, cond) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', !!cond);
  };
  toggleActive('statsScopeBtnEarned', statsFilterState.scope === 'earned');
  toggleActive('statsScopeBtnCompleted', statsFilterState.scope === 'completed');
  toggleActive('statsScopeBtnCancelled', statsFilterState.scope === 'cancelled');
  toggleActive('statsScopeBtnAll', statsFilterState.scope === 'all');
  toggleActive('statsTypeBtnAll', statsFilterState.type === 'all');
  toggleActive('statsTypeBtnSolo', statsFilterState.type === 'solo');
  toggleActive('statsTypeBtnClient', statsFilterState.type === 'client');

  const activeCur = getActiveCurrencyCode();
  const allProjects = studioState.projects || [];
  const matching = allProjects.filter(matchesStatsFilter);

  const sameCur = matching.filter(p => (p.currency || activeCur) === activeCur);
  const otherCur = matching.filter(p => (p.currency || activeCur) !== activeCur);

  let totalEarned = 0;
  let totalCosts = 0;
  let soloEarned = 0;
  let soloCount = 0;
  let clientEarned = 0;
  let clientCount = 0;
  let topProj = null;
  let topProjRev = -1;

  const statusBuckets = new Map();
  const monthlyBuckets = new Map();
  const workedDatesSet = new Set();
  const offDatesSet = new Set();
  let summedWorkDays = 0;

  sameCur.forEach(p => {
    const rev = getProjectRevenue(p);
    const costs = Math.max(0, Number(p.supplierCosts) || 0);
    const isSolo = p.entryType === 'solo';
    const ws = getProjectWorkingSummary(p);

    summedWorkDays += ws.workingDays;
    getProjectWorkingDateList(p).forEach(d => workedDatesSet.add(d));
    ws.offDates.forEach(d => offDatesSet.add(d));

    totalEarned += rev;
    totalCosts += costs;
    if (isSolo) {
      soloEarned += rev;
      soloCount++;
    } else {
      clientEarned += rev;
      clientCount++;
    }

    if (rev > topProjRev) {
      topProjRev = rev;
      topProj = p;
    }

    const st = p.status || 'Planning';
    if (!statusBuckets.has(st)) statusBuckets.set(st, { count: 0, rev: 0 });
    const sb = statusBuckets.get(st);
    sb.count += 1;
    sb.rev += rev;

    const rawDate = String(p.dateCreated || '');
    const monthKey = /^\d{4}-\d{2}/.test(rawDate) ? rawDate.slice(0, 7) : 'Undated';
    if (!monthlyBuckets.has(monthKey)) monthlyBuckets.set(monthKey, { client: 0, solo: 0, costs: 0, count: 0 });
    const mb = monthlyBuckets.get(monthKey);
    if (isSolo) mb.solo += rev;
    else mb.client += rev;
    mb.costs += costs;
    mb.count += 1;
  });

  const uniqueWorkedDays = workedDatesSet.size || summedWorkDays;
  const pureOffDaysCount = Array.from(offDatesSet).filter(d => !workedDatesSet.has(d)).length;
  const netEarned = totalEarned - totalCosts;
  const marginPct = totalEarned > 0 ? Math.round((netEarned / totalEarned) * 100) : 0;
  const avgClient = clientCount > 0 ? (clientEarned / clientCount) : 0;
  const avgPerWorkDay = uniqueWorkedDays > 0 ? (netEarned / uniqueWorkedDays) : 0;

  const setText = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };

  setText('statsTotalEarned', formatCurrency(totalEarned, activeCur));
  const scopeLabel = statsFilterState.scope === 'earned'
    ? 'earned events'
    : (statsFilterState.scope === 'completed'
        ? 'completed events'
        : (statsFilterState.scope === 'cancelled' ? 'cancelled events' : 'events'));
  const daySummarySuffix = uniqueWorkedDays > 0
    ? ` • ${uniqueWorkedDays} work day${uniqueWorkedDays === 1 ? '' : 's'}${pureOffDaysCount > 0 ? ` (${pureOffDaysCount} off excl.)` : ''}`
    : '';
  setText('statsTotalMeta', `${sameCur.length} ${scopeLabel} in ${activeCur}${daySummarySuffix}`);

  const otherNoteEl = document.getElementById('statsOtherCurrenciesNote');
  if (otherNoteEl) {
    if (otherCur.length > 0) {
      const byCur = new Map();
      otherCur.forEach(p => {
        const c = p.currency || activeCur;
        byCur.set(c, (byCur.get(c) || 0) + getProjectRevenue(p));
      });
      const parts = Array.from(byCur.entries()).map(([c, amt]) => formatCurrency(amt, c));
      otherNoteEl.textContent = `+ ${parts.join(' • ')} in other currencies`;
      otherNoteEl.classList.remove('hidden');
    } else {
      otherNoteEl.textContent = '';
      otherNoteEl.classList.add('hidden');
    }
  }

  setText('statsMarginBadge', `${marginPct}% margin`);
  const netEl = document.getElementById('statsNetEarned');
  if (netEl) {
    netEl.textContent = formatCurrency(netEarned, activeCur);
    netEl.classList.toggle('text-rose-500', netEarned < 0);
    netEl.classList.toggle('text-emerald-600', netEarned >= 0);
    netEl.classList.toggle('dark:text-emerald-400', netEarned >= 0);
  }
  setText('statsCostsMeta', `${formatCurrency(totalCosts, activeCur)} costs • Avg ${formatCurrency(avgPerWorkDay, activeCur)}/work day`);

  setText('statsSoloEarned', formatCurrency(soloEarned, activeCur));
  setText('statsSoloMeta', `${soloCount} solo direct event${soloCount === 1 ? '' : 's'}`);

  setText('statsClientEarned', formatCurrency(clientEarned, activeCur));
  setText('statsClientMeta', `${clientCount} client event${clientCount === 1 ? '' : 's'} • Avg ${formatCurrency(avgClient, activeCur)}`);

  // Potential cashflow lost due to cancellations (always honors active Type filter & currency)
  const typeMatchedAll = allProjects.filter(p => {
    const isSolo = !!(p && p.entryType === 'solo');
    if (statsFilterState.type === 'solo' && !isSolo) return false;
    if (statsFilterState.type === 'client' && isSolo) return false;
    return true;
  });
  const cancelledMatching = typeMatchedAll.filter(p => String((p && p.status) || '').trim().toLowerCase() === 'cancelled');
  const cancelledSameCur = cancelledMatching.filter(p => (p.currency || activeCur) === activeCur);
  const cancelledOtherCur = cancelledMatching.filter(p => (p.currency || activeCur) !== activeCur);
  let lostGross = 0;
  let lostCosts = 0;
  let lostClient = 0;
  let lostSolo = 0;
  cancelledSameCur.forEach(p => {
    const rev = getProjectRevenue(p);
    const costs = Math.max(0, Number(p.supplierCosts) || 0);
    lostGross += rev;
    lostCosts += costs;
    if (p.entryType === 'solo') lostSolo += rev;
    else lostClient += rev;
  });
  const lostNet = lostGross - lostCosts;
  const nonCancelledSameCurGross = typeMatchedAll
    .filter(p => String((p && p.status) || '').trim().toLowerCase() !== 'cancelled' && (p.currency || activeCur) === activeCur)
    .reduce((sum, p) => sum + getProjectRevenue(p), 0);
  const totalPipelineGross = nonCancelledSameCurGross + lostGross;
  const lostPipelinePct = totalPipelineGross > 0 ? Math.round((lostGross / totalPipelineGross) * 100) : 0;

  setText('statsLostCountBadge', `${cancelledSameCur.length} cancelled`);
  setText('statsLostCashflow', formatCurrency(lostGross, activeCur));
  setText('statsLostNetMeta', `Net potential lost: ${formatCurrency(lostNet, activeCur)}${lostCosts > 0 ? ` (${formatCurrency(lostCosts, activeCur)} est. costs)` : ''}`);
  setText('statsLostSplitMeta', `${formatCurrency(lostClient, activeCur)} Client • ${formatCurrency(lostSolo, activeCur)} Solo`);
  setText('statsLostRateMeta', `${lostPipelinePct}% of total event cashflow pipeline`);

  const lostOtherEl = document.getElementById('statsLostOtherCurrenciesNote');
  if (lostOtherEl) {
    if (cancelledOtherCur.length > 0) {
      const byCur = new Map();
      cancelledOtherCur.forEach(p => {
        const c = p.currency || activeCur;
        byCur.set(c, (byCur.get(c) || 0) + getProjectRevenue(p));
      });
      const parts = Array.from(byCur.entries()).map(([c, amt]) => formatCurrency(amt, c));
      lostOtherEl.textContent = `+ ${parts.join(' • ')} lost in other currencies`;
      lostOtherEl.classList.remove('hidden');
    } else {
      lostOtherEl.textContent = '';
      lostOtherEl.classList.add('hidden');
    }
  }
  const viewCancelledBtn = document.getElementById('statsViewCancelledBtn');
  if (viewCancelledBtn) {
    const isInspecting = statsFilterState.scope === 'cancelled';
    viewCancelledBtn.textContent = isInspecting ? 'Back to Earned' : 'Inspect Cancelled';
    viewCancelledBtn.setAttribute('onclick', isInspecting ? "setStatsFilter('scope', 'earned')" : "setStatsFilter('scope', 'cancelled')");
  }

  setText('statsChartSubtitle', statsFilterState.scope === 'cancelled'
    ? `Cancelled cashflow timeline (${activeCur})`
    : `Monthly revenue timeline (${activeCur})`);

  // Monthly bar chart
  const chartEl = document.getElementById('statsMonthlyChart');
  if (chartEl) {
    const sortedKeys = Array.from(monthlyBuckets.keys()).sort((a, b) => {
      if (a === 'Undated') return 1;
      if (b === 'Undated') return -1;
      return a.localeCompare(b);
    }).slice(-12);

    if (sortedKeys.length === 0) {
      chartEl.innerHTML = `<div class="w-full py-12 text-center text-xs text-slate-400">No events match the active filters in ${escapeHtml(activeCur)}.</div>`;
    } else {
      const maxMonthTotal = Math.max(...sortedKeys.map(k => {
        const b = monthlyBuckets.get(k);
        return b.client + b.solo;
      }), 1);
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      chartEl.innerHTML = sortedKeys.map(k => {
        const b = monthlyBuckets.get(k);
        const sum = b.client + b.solo;
        const totalPx = Math.max(sum > 0 ? 8 : 3, Math.round((sum / maxMonthTotal) * 124));
        const clientPx = sum > 0 ? Math.round((b.client / sum) * totalPx) : 0;
        const soloPx = Math.max(0, totalPx - clientPx);
        let shortLabel = k;
        if (/^\d{4}-\d{2}$/.test(k)) {
          const [yr, mo] = k.split('-');
          shortLabel = `${monthNames[Math.max(0, Math.min(11, parseInt(mo, 10) - 1))]} '${yr.slice(2)}`;
        }
        const tooltip = `${shortLabel}: ${formatCurrency(sum, activeCur)} (${b.count} event${b.count === 1 ? '' : 's'} • Client ${formatCurrency(b.client, activeCur)}, Solo ${formatCurrency(b.solo, activeCur)})`;
        return `
          <div class="flex flex-col items-center justify-end gap-1.5 min-w-[54px] flex-1" title="${escapeHtml(tooltip)}">
            <span class="text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">${escapeHtml(formatCurrency(sum, activeCur))}</span>
            <div class="w-8 sm:w-9 rounded-t-md overflow-hidden flex flex-col justify-end bg-slate-500/10" style="height: 124px;">
              ${soloPx > 0 ? `<div class="w-full bg-emerald-500 transition-all duration-300" style="height: ${soloPx}px"></div>` : ''}
              ${clientPx > 0 ? `<div class="w-full bg-[#007AFF] dark:bg-[#0A84FF] transition-all duration-300" style="height: ${clientPx}px"></div>` : ''}
            </div>
            <span class="text-[11px] font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">${escapeHtml(shortLabel)}</span>
          </div>
        `;
      }).join('');
    }
  }

  // Split bar
  const clientPct = totalEarned > 0 ? Math.round((clientEarned / totalEarned) * 100) : 0;
  const soloPct = totalEarned > 0 ? (100 - clientPct) : 0;
  setText('statsSplitPctLabel', `${clientPct}% Client / ${soloPct}% Solo`);
  const clientBar = document.getElementById('statsSplitBarClient');
  const soloBar = document.getElementById('statsSplitBarSolo');
  if (clientBar) clientBar.style.width = `${clientPct}%`;
  if (soloBar) soloBar.style.width = `${soloPct}%`;

  // Status breakdown list
  const statusListEl = document.getElementById('statsStatusBreakdownList');
  if (statusListEl) {
    if (statusBuckets.size === 0) {
      statusListEl.innerHTML = `<div class="text-slate-400 py-1">No status entries to summarize.</div>`;
    } else {
      const orderedStatuses = Array.from(statusBuckets.entries()).sort((a, b) => b[1].rev - a[1].rev);
      statusListEl.innerHTML = orderedStatuses.map(([st, info]) => `
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            ${getStatusPillHTML(st)}
            <span class="text-slate-400 font-mono">×${info.count}</span>
          </div>
          <span class="font-mono font-medium">${escapeHtml(formatCurrency(info.rev, activeCur))}</span>
        </div>
      `).join('');
    }
  }

  // Top earning event
  setText('statsTopEventName', topProj ? topProj.name : '—');
  setText(
    'statsTopEventMeta',
    topProj
      ? `${formatCurrency(topProjRev, activeCur)} • ${topProj.entryType === 'solo' ? 'Solo Direct Pay' : 'Client Event'}`
      : formatCurrency(0, activeCur)
  );

  // Profit & Loss Projection Chart
  renderStatsPnlProjectionChart(monthlyBuckets, cancelledSameCur, activeCur);

  // Event ledger table
  const clientNameMap = new Map((studioState.clients || []).map(c => [c.id, c.company || '']));
  const ledgerSorted = [...matching].sort((a, b) => String(b.dateCreated || '').localeCompare(String(a.dateCreated || '')));
  setText('statsLedgerCountLabel', `${ledgerSorted.length} event${ledgerSorted.length === 1 ? '' : 's'}`);
  const tbody = document.getElementById('statsLedgerTableBody');
  if (tbody) {
    if (ledgerSorted.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-slate-400">No events match the current filter. Try switching to All or adding a Solo Event.</td></tr>`;
    } else {
      tbody.innerHTML = ledgerSorted.map(p => {
        const isSolo = p.entryType === 'solo';
        const cur = p.currency || activeCur;
        const rev = getProjectRevenue(p);
        const costs = Math.max(0, Number(p.supplierCosts) || 0);
        const net = rev - costs;
        const ws = getProjectWorkingSummary(p);
        const subInfo = isSolo
          ? ([p.soloThrough ? `Through: ${p.soloThrough}` : '', p.paymentMethod ? `Direct • ${p.paymentMethod}` : 'Direct Payment'].filter(Boolean).join(' • '))
          : (clientNameMap.get(p.clientId) || 'Client');
        const badge = isSolo
          ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">Solo</span>`
          : `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#007AFF]/10 text-[#007AFF] dark:text-[#0A84FF]">Client</span>`;
        const dayNote = ws.totalSpanDays > 1 || ws.offDates.length > 0
          ? `<div class="text-[10px] font-mono text-slate-400">${ws.workingDays} work day${ws.workingDays === 1 ? '' : 's'}${ws.offDates.length > 0 ? ` &bull; <span class="text-amber-600 dark:text-amber-400">${ws.offDates.length} off</span>` : ''}</div>`
          : '';
        return `
          <tr class="hover:bg-slate-500/5 transition-colors">
            <td class="py-3 pr-3">
              <button type="button" onclick="openProjectFromDashboard('${p.id}')" class="text-left font-medium hover:text-[#007AFF] dark:hover:text-[#0A84FF] transition-colors">${escapeHtml(p.name)}</button>
              <div class="text-[11px] text-slate-400 truncate max-w-[220px]">${escapeHtml(subInfo)}</div>
            </td>
            <td class="py-3 px-3">${badge}</td>
            <td class="py-3 px-3 font-mono text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
              <div>${escapeHtml(formatProjectDateRange(p))}</div>
              ${dayNote}
            </td>
            <td class="py-3 px-3">${getStatusPillHTML(p.status || 'Planning')}</td>
            <td class="py-3 px-3 text-right font-mono font-medium whitespace-nowrap">${escapeHtml(formatCurrency(rev, cur))}</td>
            <td class="py-3 px-3 text-right font-mono text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">${escapeHtml(formatCurrency(costs, cur))}</td>
            <td class="py-3 pl-3 text-right font-mono font-semibold whitespace-nowrap ${net < 0 ? 'text-rose-500' : 'text-emerald-600 dark:text-emerald-400'}">${escapeHtml(formatCurrency(net, cur))}</td>
          </tr>
        `;
      }).join('');
    }
  }
}

let statsPnlSeriesCache = [];

function showStatsPnlTooltip(evt, idx) {
  const tip = document.getElementById('statsPnlTooltip');
  const item = statsPnlSeriesCache[idx];
  if (!tip || !item) return;

  const isLoss = item.net < 0;
  const netCls = isLoss ? 'text-rose-400' : (item.isProjected ? 'text-indigo-300' : 'text-emerald-400');
  const rows = [
    `<div class="font-semibold text-white">${escapeHtml(item.label)}${item.isProjected ? ' <span class="text-indigo-300 font-normal">(Projected)</span>' : ''}</div>`,
    `<div class="font-mono font-semibold ${netCls}">Net P&amp;L: ${escapeHtml(item.formattedNet)}</div>`
  ];
  if (item.isProjected) {
    rows.push(`<div class="font-mono text-[11px] text-slate-300">Range: ${escapeHtml(item.formattedLow)} to ${escapeHtml(item.formattedHigh)}</div>`);
  } else {
    rows.push(`<div class="font-mono text-[11px] text-slate-300">Rev: ${escapeHtml(item.formattedRev)} • Costs: ${escapeHtml(item.formattedCosts)}</div>`);
  }
  if (item.cancelledLost > 0) {
    rows.push(`<div class="font-mono text-[11px] text-rose-300">Lost (Cancelled): -${escapeHtml(item.formattedCancelled)}</div>`);
  }
  tip.innerHTML = rows.join('');
  tip.classList.remove('hidden');

  const x = Math.min((window.innerWidth || 1280) - 230, Math.max(12, (evt && evt.clientX ? evt.clientX + 14 : 200)));
  const y = Math.max(12, (evt && evt.clientY ? evt.clientY - 76 : 120));
  tip.style.left = `${x}px`;
  tip.style.top = `${y}px`;
}

function hideStatsPnlTooltip() {
  const tip = document.getElementById('statsPnlTooltip');
  if (tip) tip.classList.add('hidden');
}

function renderStatsPnlProjectionChart(monthlyBuckets, cancelledSameCur, activeCur) {
  const horizon = statsFilterState.pnlHorizon === 6 ? 6 : 3;
  const btn3 = document.getElementById('statsPnlBtn3M');
  const btn6 = document.getElementById('statsPnlBtn6M');
  if (btn3) btn3.classList.toggle('active', horizon === 3);
  if (btn6) btn6.classList.toggle('active', horizon === 6);

  const container = document.getElementById('statsPnlChartContainer');
  const setText = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };
  const signedFmt = (v) => {
    const sign = v < 0 ? '-' : (v > 0 ? '+' : '');
    return `${sign}${formatCurrency(Math.abs(v), activeCur)}`;
  };
  const curSym = (getActiveCurrencyMeta(activeCur) || {}).symbol || '$';
  const compactAxisFmt = (v) => {
    const abs = Math.abs(v);
    const sign = v < 0 ? '-' : (v > 0 ? '+' : '');
    if (abs >= 1000) return `${sign}${curSym}${(abs / 1000).toFixed(abs >= 10000 ? 0 : 1)}k`;
    return `${sign}${curSym}${Math.round(abs)}`;
  };
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fmtMonthKey = (k) => {
    if (!/^\d{4}-\d{2}$/.test(k)) return k;
    const [yr, mo] = k.split('-');
    return `${monthNames[Math.max(0, Math.min(11, parseInt(mo, 10) - 1))]} '${yr.slice(2)}`;
  };
  const addMonthsKey = (k, offset) => {
    const [yrStr, moStr] = k.split('-');
    const totalMo = (parseInt(yrStr, 10) * 12 + (parseInt(moStr, 10) - 1)) + offset;
    const ny = Math.floor(totalMo / 12);
    const nm = ((totalMo % 12) + 12) % 12 + 1;
    return `${ny}-${String(nm).padStart(2, '0')}`;
  };

  const cancelledByMonth = new Map();
  (cancelledSameCur || []).forEach(p => {
    const rawDate = String(p.dateCreated || '');
    if (/^\d{4}-\d{2}/.test(rawDate)) {
      const mk = rawDate.slice(0, 7);
      cancelledByMonth.set(mk, (cancelledByMonth.get(mk) || 0) + getProjectRevenue(p));
    }
  });

  const datedKeys = Array.from(monthlyBuckets.keys())
    .filter(k => /^\d{4}-\d{2}$/.test(k))
    .sort((a, b) => a.localeCompare(b))
    .slice(-6);

  if (datedKeys.length === 0) {
    statsPnlSeriesCache = [];
    setText('statsPnlAvgMonthly', formatCurrency(0, activeCur));
    setText('statsPnlHorizonLabel', `Projected ${horizon}M Net Profit`);
    setText('statsPnlProjectedTotal', formatCurrency(0, activeCur));
    setText('statsPnlTrendBadge', 'No dated events');
    if (container) {
      container.innerHTML = `<div class="py-12 text-center text-xs text-slate-400">Add dated events in ${escapeHtml(activeCur)} to visualize historical &amp; projected Profit &amp; Loss.</div>`;
    }
    return;
  }

  const isCancelledMode = statsFilterState.scope === 'cancelled';
  const actualSeries = datedKeys.map(k => {
    const b = monthlyBuckets.get(k);
    const rev = b.client + b.solo;
    const rawNet = rev - b.costs;
    const net = isCancelledMode ? -Math.abs(rawNet) : rawNet;
    const cancelledLost = cancelledByMonth.get(k) || 0;
    return {
      key: k,
      label: fmtMonthKey(k),
      rev,
      costs: b.costs,
      net,
      low: net,
      high: net,
      cancelledLost,
      isProjected: false
    };
  });

  const n = actualSeries.length;
  const nets = actualSeries.map(d => d.net);
  const avgNet = nets.reduce((s, v) => s + v, 0) / n;
  const avgRev = actualSeries.reduce((s, d) => s + d.rev, 0) / n;
  const avgCosts = actualSeries.reduce((s, d) => s + d.costs, 0) / n;

  // Damped least-squares trend slope across realized months
  let rawSlope = 0;
  if (n >= 2) {
    const xMean = (n - 1) / 2;
    let num = 0;
    let den = 0;
    for (let i = 0; i < n; i++) {
      num += (i - xMean) * (nets[i] - avgNet);
      den += (i - xMean) * (i - xMean);
    }
    rawSlope = den > 0 ? (num / den) : 0;
  }
  const slopeCap = Math.max(500, Math.abs(avgNet) * 0.35);
  const slope = Math.max(-slopeCap, Math.min(slopeCap, rawSlope * 0.55));

  const variance = nets.reduce((s, v) => s + Math.pow(v - avgNet, 2), 0) / n;
  const stdDev = n >= 2 ? Math.sqrt(variance) : Math.max(250, Math.abs(avgNet) * 0.18);

  const lastKey = actualSeries[n - 1].key;
  const baseProjAnchor = n >= 2 ? nets[n - 1] * 0.45 + avgNet * 0.55 : avgNet;
  const projectedSeries = [];
  let projectedCumNet = 0;

  for (let step = 1; step <= horizon; step++) {
    const mk = addMonthsKey(lastKey, step);
    const projNet = baseProjAnchor + slope * step;
    const band = Math.max(150, stdDev * 0.45 * Math.sqrt(step));
    projectedCumNet += projNet;
    projectedSeries.push({
      key: mk,
      label: fmtMonthKey(mk),
      rev: Math.max(0, avgRev),
      costs: Math.max(0, avgCosts),
      net: projNet,
      low: projNet - band,
      high: projNet + band,
      cancelledLost: 0,
      isProjected: true
    });
  }

  const allSeries = [...actualSeries, ...projectedSeries];
  statsPnlSeriesCache = allSeries.map(d => ({
    ...d,
    formattedNet: signedFmt(d.net),
    formattedLow: signedFmt(d.low),
    formattedHigh: signedFmt(d.high),
    formattedRev: formatCurrency(d.rev, activeCur),
    formattedCosts: formatCurrency(d.costs, activeCur),
    formattedCancelled: formatCurrency(d.cancelledLost, activeCur)
  }));

  // Update summary KPIs inside P&L card
  const avgEl = document.getElementById('statsPnlAvgMonthly');
  if (avgEl) {
    avgEl.textContent = signedFmt(avgNet);
    avgEl.classList.toggle('text-rose-500', avgNet < 0);
    avgEl.classList.toggle('text-emerald-600', avgNet >= 0);
    avgEl.classList.toggle('dark:text-emerald-400', avgNet >= 0);
  }
  setText('statsPnlHorizonLabel', `Projected ${horizon}M Net ${projectedCumNet >= 0 ? 'Profit' : 'Loss'}`);
  const projTotEl = document.getElementById('statsPnlProjectedTotal');
  if (projTotEl) {
    projTotEl.textContent = signedFmt(projectedCumNet);
    projTotEl.classList.toggle('text-rose-500', projectedCumNet < 0);
    projTotEl.classList.toggle('text-indigo-600', projectedCumNet >= 0);
    projTotEl.classList.toggle('dark:text-indigo-400', projectedCumNet >= 0);
  }
  const trendEl = document.getElementById('statsPnlTrendBadge');
  if (trendEl) {
    if (slope > 50) {
      trendEl.textContent = `↗ Growing (+${formatCurrency(slope, activeCur)}/mo)`;
      trendEl.className = 'text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1 font-mono';
    } else if (slope < -50) {
      trendEl.textContent = `↘ Declining (-${formatCurrency(Math.abs(slope), activeCur)}/mo)`;
      trendEl.className = 'text-sm font-semibold text-rose-500 mt-1 font-mono';
    } else {
      trendEl.textContent = avgNet >= 0 ? '→ Steady Profitable Run Rate' : '→ Loss Watch (Costs Exceed Rev)';
      trendEl.className = `text-sm font-semibold mt-1 ${avgNet >= 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-rose-500'}`;
    }
  }
  setText('statsPnlSubtitle', `Realized monthly net P&L vs ${horizon}-month projected trajectory (${activeCur})`);

  if (!container) return;

  // Build crisp responsive SVG chart
  const W = 760;
  const H = 250;
  const padL = 66;
  const padR = 22;
  const padT = 24;
  const padB = 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  let minV = 0;
  let maxV = 0;
  allSeries.forEach(d => {
    minV = Math.min(minV, d.net, d.low);
    maxV = Math.max(maxV, d.net, d.high);
  });
  if (maxV === minV) { maxV = 1000; minV = -1000; }
  const span = maxV - minV;
  const yMax = maxV + span * 0.14;
  const yMin = minV - span * 0.14;
  const toY = (v) => padT + ((yMax - v) / (yMax - yMin)) * plotH;
  const zeroY = toY(0);

  const count = allSeries.length;
  const slotW = plotW / count;
  const barW = Math.min(34, Math.max(14, slotW * 0.44));
  const xAt = (i) => padL + slotW * (i + 0.5);

  const gridTicks = [yMax, yMax * 0.5, 0, yMin * 0.5, yMin]
    .filter((v, idx, arr) => idx === 0 || Math.abs(v - arr[idx - 1]) > span * 0.12);
  const gridSvg = gridTicks.map(v => {
    const yy = toY(v).toFixed(1);
    const isZero = Math.abs(v) < 1e-6;
    return `
      <line x1="${padL}" y1="${yy}" x2="${W - padR}" y2="${yy}"
        stroke="${isZero ? 'rgba(148,163,184,0.65)' : 'rgba(148,163,184,0.22)'}"
        stroke-width="${isZero ? '1.4' : '1'}" ${isZero ? '' : 'stroke-dasharray="3 3"'} />
      <text x="${padL - 8}" y="${(parseFloat(yy) + 3.5).toFixed(1)}" text-anchor="end"
        fill="currentColor" opacity="${isZero ? '0.9' : '0.55'}" font-size="10" font-family="ui-monospace, monospace">${escapeHtml(compactAxisFmt(v))}</text>
    `;
  }).join('');

  // Divider between actual and projected
  const splitX = padL + slotW * n;
  const dividerSvg = `
    <line x1="${splitX.toFixed(1)}" y1="${padT}" x2="${splitX.toFixed(1)}" y2="${H - padB}" stroke="rgba(99,102,241,0.45)" stroke-width="1.2" stroke-dasharray="4 4" />
    <text x="${(splitX + 6).toFixed(1)}" y="${padT + 10}" fill="#6366f1" font-size="9.5" font-weight="600">Projected &rarr;</text>
  `;

  // Confidence band polygon across projected months anchored at last actual point
  const coneTopPts = [`${xAt(n - 1).toFixed(1)},${toY(actualSeries[n - 1].net).toFixed(1)}`];
  const coneBotPts = [];
  for (let i = n; i < count; i++) {
    const cx = xAt(i).toFixed(1);
    coneTopPts.push(`${cx},${toY(allSeries[i].high).toFixed(1)}`);
    coneBotPts.unshift(`${cx},${toY(allSeries[i].low).toFixed(1)}`);
  }
  const coneSvg = `<polygon points="${coneTopPts.concat(coneBotPts).join(' ')}" fill="rgba(99, 102, 241, 0.11)" />`;

  // Bars & interactive hit columns
  const barsSvg = allSeries.map((d, i) => {
    const cx = xAt(i);
    const bx = cx - barW / 2;
    const vy = toY(d.net);
    const topY = Math.min(zeroY, vy);
    const barH = Math.max(3, Math.abs(zeroY - vy));
    const isLoss = d.net < 0;
    let fill = isLoss ? '#f43f5e' : '#10b981';
    let strokeAttr = '';
    if (d.isProjected) {
      fill = isLoss ? 'rgba(244, 63, 94, 0.22)' : 'rgba(99, 102, 241, 0.22)';
      strokeAttr = `stroke="${isLoss ? '#f43f5e' : '#6366f1'}" stroke-width="1.2" stroke-dasharray="3 2"`;
    }
    const labelColor = d.isProjected ? '#6366f1' : 'currentColor';
    const slotX = padL + slotW * i;
    return `
      <rect x="${bx.toFixed(1)}" y="${topY.toFixed(1)}" width="${barW.toFixed(1)}" height="${barH.toFixed(1)}" rx="4" fill="${fill}" ${strokeAttr} />
      ${d.cancelledLost > 0 ? `<circle cx="${cx.toFixed(1)}" cy="${(padT + 4).toFixed(1)}" r="3.2" fill="#f43f5e" />` : ''}
      <text x="${cx.toFixed(1)}" y="${H - 12}" text-anchor="middle" fill="${labelColor}" opacity="${d.isProjected ? '0.95' : '0.7'}" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">${escapeHtml(d.label)}</text>
      <rect x="${slotX.toFixed(1)}" y="${padT}" width="${slotW.toFixed(1)}" height="${plotH}" fill="transparent" class="cursor-pointer"
        onmouseenter="showStatsPnlTooltip(event, ${i})" onmousemove="showStatsPnlTooltip(event, ${i})" onmouseleave="hideStatsPnlTooltip()" />
    `;
  }).join('');

  // Solid path over actuals + dashed trajectory line over projected points
  const actualPts = actualSeries.map((d, i) => `${xAt(i).toFixed(1)},${toY(d.net).toFixed(1)}`);
  const projPts = [`${xAt(n - 1).toFixed(1)},${toY(actualSeries[n - 1].net).toFixed(1)}`];
  for (let i = n; i < count; i++) projPts.push(`${xAt(i).toFixed(1)},${toY(allSeries[i].net).toFixed(1)}`);

  const actualLineSvg = actualPts.length > 1
    ? `<polyline fill="none" stroke="#007AFF" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" points="${actualPts.join(' ')}" />`
    : '';
  const projLineSvg = `<polyline fill="none" stroke="#6366f1" stroke-width="2.2" stroke-dasharray="5 4" stroke-linejoin="round" stroke-linecap="round" points="${projPts.join(' ')}" />`;

  const dotsSvg = allSeries.map((d, i) => {
    const cx = xAt(i).toFixed(1);
    const cy = toY(d.net).toFixed(1);
    const col = d.net < 0 ? '#f43f5e' : (d.isProjected ? '#6366f1' : '#007AFF');
    return `<circle cx="${cx}" cy="${cy}" r="${d.isProjected ? '3.5' : '3.8'}" fill="#ffffff" stroke="${col}" stroke-width="2" pointer-events="none" />`;
  }).join('');

  container.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" class="w-full h-auto max-h-[265px] text-slate-600 dark:text-slate-300 select-none" role="img" aria-label="Profit and Loss Projection Chart">
      ${gridSvg}
      ${coneSvg}
      ${dividerSvg}
      ${barsSvg}
      ${actualLineSvg}
      ${projLineSvg}
      ${dotsSvg}
    </svg>
  `;
}

/* CLIENTS & SUPPLIERS */
function handleSaveClient(event) {
  event.preventDefault();
  studioState.clients.unshift({
    id: 'cli-' + Date.now(),
    company: document.getElementById('clientCompanyInput').value.trim(),
    contactPerson: document.getElementById('clientPersonInput').value.trim(),
    email: document.getElementById('clientEmailInput').value.trim(),
    phone: document.getElementById('clientPhoneInput').value.trim(),
    eventType: document.getElementById('clientEventTypeInput').value.trim() || 'Corporate Event',
    address: document.getElementById('clientAddressInput').value.trim(),
    bankName: (document.getElementById('clientBankNameInput') || {}).value ? document.getElementById('clientBankNameInput').value.trim() : '',
    accountNumber: (document.getElementById('clientAccountNumberInput') || {}).value ? document.getElementById('clientAccountNumberInput').value.trim() : ''
  });
  document.getElementById('clientDirectoryForm').reset();
  saveStudioState();
  showToast('Client saved.');
}

function removeClientById(id) {
  studioState.clients = (studioState.clients || []).filter(c => c.id !== id);
  saveStudioState();
  showToast('Client removed.');
}

function renderClientsDirectory() {
  const allClients = studioState.clients || [];
  const query = ((document.getElementById('clientSearchInput') || {}).value || '').trim().toLowerCase();
  const clients = query
    ? allClients.filter(c =>
        (c.company || '').toLowerCase().includes(query) ||
        (c.contactPerson || '').toLowerCase().includes(query) ||
        (c.email || '').toLowerCase().includes(query) ||
        (c.eventType || '').toLowerCase().includes(query) ||
        (c.accountNumber || '').toLowerCase().includes(query)
      )
    : allClients;

  document.getElementById('clientsDirectoryCountBadge').textContent = `${allClients.length} Clients`;
  const tbody = document.getElementById('clientsDirectoryTableBody');
  if (clients.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="py-8 text-center text-slate-400">${query ? 'No matching clients.' : 'No clients saved.'}</td></tr>`;
    return;
  }
  tbody.innerHTML = clients.map(c => `
    <tr class="hover:bg-slate-500/5 transition-colors">
      <td class="py-3 pr-3"><div class="font-medium">${escapeHtml(c.company)}</div><div class="text-xs text-slate-500 dark:text-slate-400">${escapeHtml(c.contactPerson)}</div></td>
      <td class="py-3 px-3 text-xs"><div class="font-mono">${escapeHtml(c.email)}</div><div class="font-mono text-slate-500 dark:text-slate-400">${escapeHtml(c.phone)}</div></td>
      <td class="py-3 px-3 text-xs">${escapeHtml(c.eventType || '')}</td>
      <td class="py-3 px-3 text-xs text-slate-500 dark:text-slate-400 max-w-xs">
        <div class="truncate">${escapeHtml(c.address)}</div>
        ${(c.bankName || c.accountNumber) ? `<div class="font-mono text-[11px] text-slate-400 mt-0.5 truncate">${escapeHtml([c.bankName, c.accountNumber ? 'Acct: ' + c.accountNumber : ''].filter(Boolean).join(' • '))}</div>` : ''}
      </td>
      <td class="py-3 pl-3 text-right"><button type="button" onclick="removeClientById('${c.id}')" class="btn-mac-secondary px-2.5 py-1 text-xs text-rose-500">Remove</button></td>
    </tr>
  `).join('');
}

function handleSaveSupplier(event) {
  event.preventDefault();
  studioState.suppliers.unshift({
    id: 'sup-' + Date.now(),
    name: document.getElementById('supplierNameInput').value.trim(),
    category: document.getElementById('supplierCategorySelect').value,
    contactPerson: document.getElementById('supplierPersonInput').value.trim(),
    email: document.getElementById('supplierEmailInput').value.trim(),
    phone: document.getElementById('supplierPhoneInput').value.trim()
  });
  document.getElementById('supplierDirectoryForm').reset();
  saveStudioState();
  showToast('Supplier added.');
}

function removeSupplierById(id) {
  studioState.suppliers = (studioState.suppliers || []).filter(s => s.id !== id);
  saveStudioState();
  showToast('Supplier removed.');
}

function renderSuppliersDirectory() {
  const allSuppliers = studioState.suppliers || [];
  const query = ((document.getElementById('supplierSearchInput') || {}).value || '').trim().toLowerCase();
  const suppliers = query
    ? allSuppliers.filter(s =>
        (s.name || '').toLowerCase().includes(query) ||
        (s.category || '').toLowerCase().includes(query) ||
        (s.contactPerson || '').toLowerCase().includes(query)
      )
    : allSuppliers;

  document.getElementById('suppliersDirectoryCountBadge').textContent = `${allSuppliers.length} Suppliers`;
  const tbody = document.getElementById('suppliersDirectoryTableBody');
  if (suppliers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="py-8 text-center text-slate-400">${query ? 'No matching suppliers.' : 'No suppliers saved.'}</td></tr>`;
    return;
  }
  tbody.innerHTML = suppliers.map(s => `
    <tr class="hover:bg-slate-500/5 transition-colors">
      <td class="py-3 pr-3 font-medium">${escapeHtml(s.name)}</td>
      <td class="py-3 px-3"><span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">${escapeHtml(s.category)}</span></td>
      <td class="py-3 px-3 text-xs">${escapeHtml(s.contactPerson)}</td>
      <td class="py-3 px-3 font-mono text-xs"><div>${escapeHtml(s.email)}</div><div class="text-slate-500 dark:text-slate-400">${escapeHtml(s.phone)}</div></td>
      <td class="py-3 pl-3 text-right"><button type="button" onclick="removeSupplierById('${s.id}')" class="btn-mac-secondary px-2.5 py-1 text-xs text-rose-500">Remove</button></td>
    </tr>
  `).join('');
}

/* BILLING & PDF */
function getSelectedOrgProfile() {
  const profiles = studioState.orgProfiles || [];
  return profiles.find(o => o.id === studioState.selectedOrgProfileId) || profiles[0] || {
    id: 'org-1', name: 'Event Management Studio', taxId: '', email: '', address: ''
  };
}

function initBillingModuleUI() {
  const orgSelect = document.getElementById('billingOrgProfileSelect');
  orgSelect.innerHTML = (studioState.orgProfiles || []).map(o =>
    `<option value="${o.id}" ${o.id === studioState.selectedOrgProfileId ? 'selected' : ''}>${escapeHtml(o.name)}</option>`
  ).join('');

  const activeOrg = getSelectedOrgProfile();
  document.getElementById('billingOrgName').value = activeOrg.name || '';
  document.getElementById('billingOrgTaxId').value = activeOrg.taxId || '';
  document.getElementById('billingOrgEmail').value = activeOrg.email || '';
  document.getElementById('billingOrgAddress').value = activeOrg.address || '';
  document.getElementById('billingOrgBankName').value = activeOrg.bankName || 'Emirates NBD / Chase Business';
  document.getElementById('billingOrgAccountHolder').value = activeOrg.accountHolder || activeOrg.name || 'Event Management Studio';
  document.getElementById('billingOrgAccountNumber').value = activeOrg.accountNumber || '';
  document.getElementById('billingOrgIban').value = activeOrg.iban || 'AE07 0260 0010 1528 4920 101';
  document.getElementById('billingOrgSwift').value = activeOrg.swift || 'EBILAEAD';

  const clientSelect = document.getElementById('billingClientProfileSelect');
  clientSelect.innerHTML = `<option value="">-- Select Saved Client --</option>` +
    (studioState.clients || []).map(c => `<option value="${c.id}" ${c.id === studioState.billingDraft.selectedClientId ? 'selected' : ''}>${escapeHtml(c.company)}</option>`).join('');

  const projSelect = document.getElementById('billingLoadProjectSelect');
  projSelect.innerHTML = `<option value="">Standalone</option>` +
    (studioState.projects || []).map(p => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join('');

  const draft = studioState.billingDraft;
  if (!draft.nextInvoiceNumber) {
    draft.nextInvoiceNumber = (draft.docNumber && draft.docNumber.startsWith('INV-')) ? draft.docNumber : 'INV-849201';
  }
  if (!draft.nextQuotationNumber) {
    draft.nextQuotationNumber = (draft.docNumber && draft.docNumber.startsWith('QTN-')) ? draft.docNumber : 'QTN-510201';
  }
  if (!draft.paymentTerms) {
    draft.paymentTerms = 'Payment is due within 14 days of invoice date via bank transfer. Please quote the document reference number on your remittance. Late payments may incur a 2% monthly administrative fee.';
  }
  const activeDocType = draft.docType || 'Invoice';
  const activeNumber = activeDocType === 'Quotation' ? draft.nextQuotationNumber : draft.nextInvoiceNumber;
  draft.docNumber = activeNumber;
  document.getElementById('billingDocNumberInput').value = activeNumber;
  document.getElementById('billingIssueDateInput').value = draft.issueDate || new Date().toISOString().split('T')[0];
  document.getElementById('billingClientCompany').value = draft.clientCompany || '';
  document.getElementById('billingClientContact').value = draft.clientContact || '';
  document.getElementById('billingClientEmail').value = draft.clientEmail || '';
  document.getElementById('billingClientAddress').value = draft.clientAddress || '';
  document.getElementById('billingClientBankName').value = draft.clientBankName || '';
  document.getElementById('billingClientAccountNumber').value = draft.clientAccountNumber || '';
  document.getElementById('billingClientIban').value = draft.clientIban || '';
  document.getElementById('billingPaymentTermsInput').value = draft.paymentTerms || '';

  syncCurrencyLabelsUI();
  updateDocTypeToggleUI(draft.docType || 'Invoice');
  renderBillingLineItemsRows();
  renderLiveBillingPreview();
}

function handleSelectOrgProfile() {
  studioState.selectedOrgProfileId = document.getElementById('billingOrgProfileSelect').value;
  const org = getSelectedOrgProfile();
  document.getElementById('billingOrgName').value = org.name || '';
  document.getElementById('billingOrgTaxId').value = org.taxId || '';
  document.getElementById('billingOrgEmail').value = org.email || '';
  document.getElementById('billingOrgAddress').value = org.address || '';
  document.getElementById('billingOrgBankName').value = org.bankName || '';
  document.getElementById('billingOrgAccountHolder').value = org.accountHolder || '';
  document.getElementById('billingOrgAccountNumber').value = org.accountNumber || '';
  document.getElementById('billingOrgIban').value = org.iban || '';
  document.getElementById('billingOrgSwift').value = org.swift || '';
  saveStudioState();
}

function saveCurrentOrgBillingProfile() {
  const name = document.getElementById('billingOrgName').value.trim();
  const taxId = document.getElementById('billingOrgTaxId').value.trim();
  const email = document.getElementById('billingOrgEmail').value.trim();
  const address = document.getElementById('billingOrgAddress').value.trim();
  const bankName = document.getElementById('billingOrgBankName').value.trim();
  const accountHolder = document.getElementById('billingOrgAccountHolder').value.trim();
  const accountNumber = document.getElementById('billingOrgAccountNumber').value.trim();
  const iban = document.getElementById('billingOrgIban').value.trim();
  const swift = document.getElementById('billingOrgSwift').value.trim();
  if (!name) return;

  const existing = (studioState.orgProfiles || []).find(o => o.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    existing.taxId = taxId; existing.email = email; existing.address = address;
    existing.bankName = bankName; existing.accountHolder = accountHolder; existing.accountNumber = accountNumber; existing.iban = iban; existing.swift = swift;
    studioState.selectedOrgProfileId = existing.id;
  } else {
    const newOrg = { id: 'org-' + Date.now(), name, taxId, email, address, bankName, accountHolder, accountNumber, iban, swift };
    studioState.orgProfiles.push(newOrg);
    studioState.selectedOrgProfileId = newOrg.id;
  }
  saveStudioState();
  showToast('Organization profile saved.');
}

function deleteCurrentOrgBillingProfile() {
  if ((studioState.orgProfiles || []).length <= 1) {
    showToast('At least one profile is required.');
    return;
  }
  studioState.orgProfiles = studioState.orgProfiles.filter(o => o.id !== studioState.selectedOrgProfileId);
  studioState.selectedOrgProfileId = studioState.orgProfiles[0].id;
  saveStudioState();
  showToast('Profile removed.');
}

function handleSelectBillingClientProfile() {
  const clientId = document.getElementById('billingClientProfileSelect').value;
  studioState.billingDraft.selectedClientId = clientId;
  const client = (studioState.clients || []).find(c => c.id === clientId);
  if (client) {
    document.getElementById('billingClientCompany').value = client.company;
    document.getElementById('billingClientContact').value = client.contactPerson;
    document.getElementById('billingClientEmail').value = client.email;
    document.getElementById('billingClientAddress').value = client.address;
    document.getElementById('billingClientBankName').value = client.bankName || '';
    document.getElementById('billingClientAccountNumber').value = client.accountNumber || '';
    document.getElementById('billingClientIban').value = client.iban || '';
  }
  renderLiveBillingPreview();
}

function saveClientBillingProfileFromBilling() {
  const company = document.getElementById('billingClientCompany').value.trim();
  if (!company) return;
  const contactPerson = document.getElementById('billingClientContact').value.trim();
  const email = document.getElementById('billingClientEmail').value.trim();
  const address = document.getElementById('billingClientAddress').value.trim();
  const bankName = document.getElementById('billingClientBankName').value.trim();
  const accountNumber = document.getElementById('billingClientAccountNumber').value.trim();
  const iban = document.getElementById('billingClientIban').value.trim();

  const existing = (studioState.clients || []).find(c => c.id === studioState.billingDraft.selectedClientId || c.company.toLowerCase() === company.toLowerCase());
  if (existing) {
    existing.company = company; existing.contactPerson = contactPerson; existing.email = email; existing.address = address;
    existing.bankName = bankName; existing.accountNumber = accountNumber; existing.iban = iban;
    studioState.billingDraft.selectedClientId = existing.id;
  } else {
    const newClient = { id: 'cli-' + Date.now(), company, contactPerson, email, phone: '', eventType: 'Event', address, bankName, accountNumber, iban };
    studioState.clients.unshift(newClient);
    studioState.billingDraft.selectedClientId = newClient.id;
  }
  saveStudioState();
  showToast('Client profile saved.');
}

function setBillingDocType(type) {
  const draft = studioState.billingDraft;
  const prevType = draft.docType || 'Invoice';
  const numInput = document.getElementById('billingDocNumberInput');
  const cur = (numInput.value || '').trim();
  if (cur) {
    if (prevType === 'Quotation') draft.nextQuotationNumber = cur;
    else draft.nextInvoiceNumber = cur;
  }
  if (!draft.nextInvoiceNumber) draft.nextInvoiceNumber = 'INV-849201';
  if (!draft.nextQuotationNumber) draft.nextQuotationNumber = 'QTN-510201';

  draft.docType = type;
  const nextVal = type === 'Quotation' ? draft.nextQuotationNumber : draft.nextInvoiceNumber;
  numInput.value = nextVal;
  draft.docNumber = nextVal;
  updateDocTypeToggleUI(type);
  renderLiveBillingPreview();
}

function updateDocTypeToggleUI(type) {
  document.getElementById('docTypeBtnQuotation').classList.toggle('active', type === 'Quotation');
  document.getElementById('docTypeBtnInvoice').classList.toggle('active', type !== 'Quotation');
}

function loadProjectIntoBillingGenerator() {
  const projId = document.getElementById('billingLoadProjectSelect').value;
  if (!projId) return;
  const proj = (studioState.projects || []).find(p => p.id === projId);
  if (!proj) return;

  const docType = studioState.billingDraft.docType || 'Invoice';
  const fallbackRef = generateRandomRef(docType === 'Quotation' ? 'QTN' : 'INV');
  document.getElementById('billingDocNumberInput').value = (docType === 'Quotation' ? proj.quotationNumber : proj.invoiceNumber) || fallbackRef;
  document.getElementById('billingIssueDateInput').value = proj.dateCreated || new Date().toISOString().split('T')[0];

  const client = (studioState.clients || []).find(c => c.id === proj.clientId);
  if (client) {
    studioState.billingDraft.selectedClientId = client.id;
    document.getElementById('billingClientProfileSelect').value = client.id;
    document.getElementById('billingClientCompany').value = client.company;
    document.getElementById('billingClientContact').value = client.contactPerson;
    document.getElementById('billingClientEmail').value = client.email;
    document.getElementById('billingClientAddress').value = client.address;
    document.getElementById('billingClientBankName').value = client.bankName || '';
    document.getElementById('billingClientAccountNumber').value = client.accountNumber || '';
    document.getElementById('billingClientIban').value = client.iban || '';
  }
  if (proj.currency && STUDIO_CURRENCIES[proj.currency]) {
    studioState.currency = proj.currency;
    studioState.billingDraft.currency = proj.currency;
    syncCurrencyLabelsUI();
  }
  studioState.billingDraft.lineItems = JSON.parse(JSON.stringify(proj.lineItems || []));
  renderBillingLineItemsRows();
  renderLiveBillingPreview();
}

function renderBillingLineItemsRows() {
  const container = document.getElementById('billingLineItemsContainer');
  container.innerHTML = (studioState.billingDraft.lineItems || [])
    .map((item, idx) => buildLineItemRowHtml(item, idx, 'updateBillingLineItem', 'removeBillingLineItemRow'))
    .join('');
}

function updateBillingLineItem(idx, field, value) {
  const items = studioState.billingDraft.lineItems;
  if (!items[idx]) return;
  items[idx][field] = (field === 'qty' || field === 'price') ? (parseFloat(value) || 0) : value;
  renderLiveBillingPreview();
}

function addBillingLineItemRow() {
  studioState.billingDraft.lineItems.push({ description: '', qty: 1, price: 0 });
  renderBillingLineItemsRows();
  renderLiveBillingPreview();
}

function removeBillingLineItemRow(idx) {
  if (studioState.billingDraft.lineItems.length <= 1) studioState.billingDraft.lineItems[0] = { description: '', qty: 1, price: 0 };
  else studioState.billingDraft.lineItems.splice(idx, 1);
  renderBillingLineItemsRows();
  renderLiveBillingPreview();
}

function setBillingTemplate(tpl) {
  studioState.billingDraft.template = tpl;
  updateTemplateSelectorUI(tpl);
  renderLiveBillingPreview();
  saveStudioState();
}

function updateTemplateSelectorUI(activeTpl) {
  const tpl = activeTpl || 'minimal';
  document.querySelectorAll('[data-tpl-btn]').forEach(btn => {
    const isSel = btn.getAttribute('data-tpl-btn') === tpl;
    btn.classList.toggle('border-[#007AFF]', isSel);
    btn.classList.toggle('ring-1', isSel);
    btn.classList.toggle('ring-[#007AFF]', isSel);
  });
}

function applyPreviewTemplateStyling(tpl) {
  const sheet = document.getElementById('invoicePreviewPrintArea');
  const topBar = document.getElementById('previewTopAccentBar');
  const headerBlock = document.getElementById('previewHeaderBlock');
  const senderTitle = document.getElementById('previewSenderTitle');
  const senderAddr = document.getElementById('previewSenderAddress');
  const senderMeta = document.getElementById('previewSenderMeta');
  const docHeading = document.getElementById('previewDocTypeHeading');
  const docNum = document.getElementById('previewDocNumberText');
  const docDate = document.getElementById('previewDocDateText');
  const tableHeadRow = document.getElementById('previewTableHeadRow');
  const summaryBox = document.getElementById('previewSummaryBox');
  const totalDueText = document.getElementById('previewTotalDueText');

  // Reset base classes
  sheet.className = 'rounded-xl overflow-hidden border transition-all';
  sheet.style.fontFamily = '';
  topBar.className = 'h-2';
  headerBlock.className = 'flex flex-wrap items-start justify-between gap-3 pb-5 sm:pb-6';
  senderTitle.className = 'text-lg font-bold';
  senderAddr.className = 'text-xs mt-1';
  senderMeta.className = 'text-xs font-mono mt-0.5';
  docHeading.className = 'text-xl font-bold uppercase';
  docNum.className = 'text-xs font-mono mt-1';
  docDate.className = 'text-xs font-mono mt-0.5';
  tableHeadRow.className = 'border-b';
  summaryBox.className = 'w-full sm:w-60 space-y-2 text-xs p-3 rounded-lg shrink-0 self-end sm:self-auto';
  totalDueText.className = 'font-mono';

  if (tpl === 'executive') {
    sheet.classList.add('bg-white', 'text-slate-900', 'border-slate-300');
    topBar.classList.add('bg-amber-500');
    headerBlock.classList.add('bg-slate-900', 'text-white', '-mx-4', '-mt-4', 'p-4', 'sm:-mx-8', 'sm:-mt-8', 'sm:p-8', 'mb-2');
    senderTitle.classList.add('text-white');
    senderAddr.classList.add('text-slate-300');
    senderMeta.classList.add('text-slate-400');
    docHeading.classList.add('text-amber-400');
    docNum.classList.add('text-white');
    docDate.classList.add('text-slate-300');
    tableHeadRow.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
    summaryBox.classList.add('bg-slate-100');
    totalDueText.classList.add('text-slate-900');
  } else if (tpl === 'editorial') {
    sheet.classList.add('bg-[#FAF8F5]', 'text-stone-900', 'border-stone-300');
    sheet.style.fontFamily = 'Georgia, Cambria, "Times New Roman", serif';
    topBar.classList.add('bg-stone-800');
    headerBlock.classList.add('border-b-2', 'border-double', 'border-stone-400');
    senderTitle.classList.add('text-stone-900', 'tracking-wide');
    senderAddr.classList.add('text-stone-600');
    senderMeta.classList.add('text-stone-500');
    docHeading.classList.add('text-stone-800', 'tracking-widest');
    docNum.classList.add('text-stone-800');
    docDate.classList.add('text-stone-500');
    tableHeadRow.classList.add('border-stone-400', 'text-stone-600');
    summaryBox.classList.add('border', 'border-stone-300', 'bg-white/60');
    totalDueText.classList.add('text-stone-900');
  } else if (tpl === 'studio') {
    sheet.classList.add('bg-white', 'text-slate-900', 'border-indigo-200', 'border-l-8', 'border-l-indigo-600');
    topBar.classList.add('bg-indigo-600', 'hidden');
    headerBlock.classList.add('border-b', 'border-indigo-100');
    senderTitle.classList.add('text-indigo-950');
    senderAddr.classList.add('text-slate-600');
    senderMeta.classList.add('text-indigo-500');
    docHeading.classList.add('text-indigo-600');
    docNum.classList.add('text-indigo-950');
    docDate.classList.add('text-slate-500');
    tableHeadRow.classList.add('bg-indigo-50', 'text-indigo-900', 'border-indigo-200');
    summaryBox.classList.add('bg-indigo-50/70');
    totalDueText.classList.add('text-indigo-600');
  } else {
    // minimal (default)
    sheet.classList.add('bg-white', 'text-slate-900', 'border-slate-200');
    topBar.classList.add('bg-[#007AFF]');
    headerBlock.classList.add('border-b', 'border-slate-200');
    senderTitle.classList.add('text-slate-900');
    senderAddr.classList.add('text-slate-600');
    senderMeta.classList.add('text-slate-500');
    docHeading.classList.add('text-[#007AFF]');
    docNum.classList.add('text-slate-700');
    docDate.classList.add('text-slate-500');
    tableHeadRow.classList.add('border-slate-200', 'text-slate-500');
    totalDueText.classList.add('text-[#007AFF]');
  }
}

function renderLiveBillingPreview() {
  const tpl = studioState.billingDraft.template || 'minimal';
  updateTemplateSelectorUI(tpl);
  applyPreviewTemplateStyling(tpl);

  const docType = studioState.billingDraft.docType || 'Invoice';
  const defaultNum = docType === 'Quotation'
    ? (studioState.billingDraft.nextQuotationNumber || 'QTN-510201')
    : (studioState.billingDraft.nextInvoiceNumber || 'INV-849201');
  const docNumber = (document.getElementById('billingDocNumberInput').value || defaultNum).trim();
  if (docType === 'Quotation') studioState.billingDraft.nextQuotationNumber = docNumber;
  else studioState.billingDraft.nextInvoiceNumber = docNumber;
  const issueDate = document.getElementById('billingIssueDateInput').value || '2026-11-14';
  const orgName = document.getElementById('billingOrgName').value || 'Event Studio';
  const orgTaxId = document.getElementById('billingOrgTaxId').value || '';
  const orgEmail = document.getElementById('billingOrgEmail').value || '';
  const orgAddress = document.getElementById('billingOrgAddress').value || '';
  const orgBankName = document.getElementById('billingOrgBankName').value || '';
  const orgAccountHolder = document.getElementById('billingOrgAccountHolder').value || '';
  const orgAccountNumber = document.getElementById('billingOrgAccountNumber').value || '';
  const orgIban = document.getElementById('billingOrgIban').value || '';
  const orgSwift = document.getElementById('billingOrgSwift').value || '';
  const paymentTerms = document.getElementById('billingPaymentTermsInput').value || '';

  const clientCompany = document.getElementById('billingClientCompany').value || 'Client';
  const clientContact = document.getElementById('billingClientContact').value || '';
  const clientEmail = document.getElementById('billingClientEmail').value || '';
  const clientAddress = document.getElementById('billingClientAddress').value || '';
  const clientBankName = document.getElementById('billingClientBankName').value || '';
  const clientAccountNumber = document.getElementById('billingClientAccountNumber').value || '';
  const clientIban = document.getElementById('billingClientIban').value || '';

  Object.assign(studioState.billingDraft, { docNumber, issueDate, clientCompany, clientContact, clientEmail, clientAddress, clientBankName, clientAccountNumber, clientIban, paymentTerms });

  const activeOrg = getSelectedOrgProfile();
  if (activeOrg) {
    activeOrg.bankName = orgBankName;
    activeOrg.accountHolder = orgAccountHolder;
    activeOrg.accountNumber = orgAccountNumber;
    activeOrg.iban = orgIban;
    activeOrg.swift = orgSwift;
  }

  document.getElementById('pdfFilenamePreviewLabel').textContent = `Event Studio - ${docNumber}.pdf`;
  document.getElementById('previewDocTypeHeading').textContent = docType.toUpperCase();
  document.getElementById('previewDocNumberText').textContent = docNumber;
  document.getElementById('previewDocDateText').textContent = issueDate;

  document.getElementById('previewSenderTitle').textContent = orgName;
  document.getElementById('previewSenderAddress').textContent = orgAddress;
  document.getElementById('previewSenderMeta').textContent = `${orgTaxId ? 'Tax ID: ' + orgTaxId + ' • ' : ''}${orgEmail}`;

  document.getElementById('previewClientCompanyText').textContent = clientCompany;
  document.getElementById('previewClientContactText').textContent = clientContact ? `Attn: ${clientContact}` : '';
  document.getElementById('previewClientAddressText').textContent = clientAddress;
  document.getElementById('previewClientEmailText').textContent = clientEmail;

  const hasClientBank = Boolean(clientBankName || clientAccountNumber || clientIban);
  const clientBankBlockEl = document.getElementById('previewClientBankBlock');
  if (clientBankBlockEl) {
    clientBankBlockEl.classList.toggle('hidden', !hasClientBank);
    document.getElementById('previewClientBankNameText').textContent = clientBankName ? `Bank: ${clientBankName}` : '';
    document.getElementById('previewClientAccountNumText').textContent = clientAccountNumber ? `Account No: ${clientAccountNumber}` : '';
    document.getElementById('previewClientIbanText').textContent = clientIban ? `IBAN: ${clientIban}` : '';
  }

  const hasBank = Boolean(orgBankName || orgAccountHolder || orgAccountNumber || orgIban || orgSwift);
  document.getElementById('previewBankDetailsBlock').classList.toggle('hidden', !hasBank);
  document.getElementById('previewBankNameText').textContent = orgBankName ? `Bank: ${orgBankName}` : '';
  document.getElementById('previewBankHolderText').textContent = orgAccountHolder ? `Account Holder: ${orgAccountHolder}` : '';
  document.getElementById('previewBankAccountNumText').textContent = orgAccountNumber ? `Account No: ${orgAccountNumber}` : '';
  document.getElementById('previewBankIbanText').textContent = orgIban ? `IBAN: ${orgIban}` : '';
  document.getElementById('previewBankSwiftText').textContent = orgSwift ? `SWIFT / BIC: ${orgSwift}` : '';

  document.getElementById('previewPaymentTermsSection').classList.toggle('hidden', !paymentTerms.trim());
  document.getElementById('previewPaymentTermsText').textContent = paymentTerms;

  let subtotal = 0;
  document.getElementById('previewLineItemsBody').innerHTML = (studioState.billingDraft.lineItems || []).map(item => {
    const qty = Number(item.qty) || 0;
    const price = Number(item.price) || 0;
    const lineTotal = qty * price;
    subtotal += lineTotal;
    return `
      <tr>
        <td class="py-2.5 pr-3">${escapeHtml(item.description || 'Service Item')}</td>
        <td class="py-2.5 px-3 text-right font-mono">${qty}</td>
        <td class="py-2.5 px-3 text-right font-mono">${formatCurrency(price)}</td>
        <td class="py-2.5 pl-3 text-right font-mono font-medium">${formatCurrency(lineTotal)}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('previewSubtotalText').textContent = formatCurrency(subtotal);
  document.getElementById('previewTotalDueText').textContent = formatCurrency(subtotal);
}

async function downloadAndArchiveBillingPDF() {
  renderLiveBillingPreview();
  const d = studioState.billingDraft;
  const docType = d.docType || 'Invoice';
  const currentDocNumber = (d.docNumber || (docType === 'Quotation' ? 'QTN-510201' : 'INV-849201')).trim();

  await buildAndDownloadStyledPDF({
    template: d.template || 'minimal',
    docType,
    docNumber: currentDocNumber,
    issueDate: d.issueDate,
    orgName: document.getElementById('billingOrgName').value,
    orgAddress: document.getElementById('billingOrgAddress').value,
    orgTaxId: document.getElementById('billingOrgTaxId').value,
    orgEmail: document.getElementById('billingOrgEmail').value,
    orgBankName: document.getElementById('billingOrgBankName').value,
    orgAccountHolder: document.getElementById('billingOrgAccountHolder').value,
    orgAccountNumber: document.getElementById('billingOrgAccountNumber').value,
    orgIban: document.getElementById('billingOrgIban').value,
    orgSwift: document.getElementById('billingOrgSwift').value,
    paymentTerms: document.getElementById('billingPaymentTermsInput').value,
    clientCompany: d.clientCompany,
    clientContact: d.clientContact,
    clientAddress: d.clientAddress,
    clientEmail: d.clientEmail,
    clientBankName: d.clientBankName || document.getElementById('billingClientBankName').value,
    clientAccountNumber: d.clientAccountNumber || document.getElementById('billingClientAccountNumber').value,
    clientIban: d.clientIban || document.getElementById('billingClientIban').value,
    currency: d.currency || getActiveCurrencyCode(),
    lineItems: d.lineItems
  });

  if (!Array.isArray(studioState.usedDocNumbers)) studioState.usedDocNumbers = [];
  if (!studioState.usedDocNumbers.includes(currentDocNumber)) {
    studioState.usedDocNumbers.push(currentDocNumber);
  }

  if (docType === 'Quotation') {
    const nextQtn = getNextUniqueDocReference(currentDocNumber, 'QTN');
    d.nextQuotationNumber = nextQtn;
    d.docNumber = nextQtn;
    document.getElementById('billingDocNumberInput').value = nextQtn;
  } else {
    const nextInv = getNextUniqueDocReference(currentDocNumber, 'INV');
    d.nextInvoiceNumber = nextInv;
    d.docNumber = nextInv;
    document.getElementById('billingDocNumberInput').value = nextInv;
  }

  renderLiveBillingPreview();
  saveStudioState();
}

function getStudioDocumentTheme(tpl) {
  const themes = {
    minimal:   { font: 'helvetica', bg: [255, 255, 255], accent: [0, 122, 255],   headerBg: null,         headerText: [15, 23, 42],  tableHeadBg: [248, 250, 252], tableHeadText: [51, 65, 85],   tableHeadBorder: [226, 232, 240], summaryBg: [248, 250, 252], summaryBorder: [226, 232, 240], totalColor: [0, 122, 255] },
    executive: { font: 'helvetica', bg: [255, 255, 255], accent: [245, 158, 11],  headerBg: [15, 23, 42], headerText: [255, 255, 255], tableHeadBg: [15, 23, 42],   tableHeadText: [255, 255, 255], tableHeadBorder: [15, 23, 42],   summaryBg: [241, 245, 249], summaryBorder: [226, 232, 240], totalColor: [15, 23, 42] },
    editorial: { font: 'times',     bg: [250, 248, 245], accent: [68, 64, 60],   headerBg: null,         headerText: [28, 25, 23],  tableHeadBg: [250, 248, 245], tableHeadText: [87, 83, 78],   tableHeadBorder: [168, 162, 158], summaryBg: [255, 255, 255], summaryBorder: [214, 211, 209], totalColor: [28, 25, 23] },
    studio:    { font: 'helvetica', bg: [255, 255, 255], accent: [79, 70, 229],   headerBg: null,         headerText: [30, 27, 75],  tableHeadBg: [238, 242, 255], tableHeadText: [49, 46, 129],  tableHeadBorder: [199, 210, 254], summaryBg: [238, 242, 255], summaryBorder: [224, 231, 255], totalColor: [79, 70, 229] }
  };
  return { name: themes[tpl] ? tpl : 'minimal', ...(themes[tpl] || themes.minimal) };
}

async function buildAndDownloadStyledPDF(payload) {
  const cleanRef = (payload.docNumber || 'INV-849201').trim();
  const strictFileName = `Event Studio - ${cleanRef}.pdf`;
  if (!window.jspdf || !window.jspdf.jsPDF) {
    const fallbackLines = [
      `${(payload.docType || 'INVOICE').toUpperCase()} ${cleanRef}`,
      `From: ${payload.orgName || 'Event Studio'}`,
      `To: ${payload.clientCompany || 'Client'}`,
      `Date: ${payload.issueDate || ''}`
    ];
    const fbBlob = new Blob([fallbackLines.join('\n')], { type: 'application/pdf' });
    if (!payload.skipBrowserDownload) triggerBrowserBlobDownload(fbBlob, strictFileName);
    const rec = await saveFileToIndexedDBVault(strictFileName, '/03_Invoices_And_Quotations/', 'application/pdf', fbBlob);
    return { blob: fbBlob, filename: strictFileName, record: rec };
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const t = getStudioDocumentTheme(payload.template || (studioState.billingDraft && studioState.billingDraft.template) || 'minimal');
  const tpl = t.name;

  // Page background
  doc.setFillColor(...t.bg);
  doc.rect(0, 0, 595, 842, 'F');

  // Accent bar or dark executive header
  if (t.headerBg) {
    doc.setFillColor(...t.headerBg);
    doc.rect(0, 0, 595, 108, 'F');
    doc.setFillColor(...t.accent);
    doc.rect(0, 0, 595, 6, 'F');
  } else if (tpl === 'studio') {
    doc.setFillColor(...t.accent);
    doc.rect(0, 0, 10, 842, 'F');
  } else {
    doc.setFillColor(...t.accent);
    doc.rect(0, 0, 595, 8, 'F');
  }

  doc.setFont(t.font, 'bold');
  doc.setFontSize(15);
  doc.setTextColor(...t.headerText);
  doc.text(payload.orgName || 'Event Studio', 40, 48);

  doc.setFont(t.font, 'normal');
  doc.setFontSize(9);
  doc.setTextColor(t.headerBg ? 203 : 51, t.headerBg ? 213 : 65, t.headerBg ? 225 : 85);
  doc.text(payload.orgAddress || '', 40, 64);
  if (tpl === 'studio') doc.setTextColor(99, 102, 241);
  doc.text(`${payload.orgTaxId ? 'Tax ID: ' + payload.orgTaxId + '  •  ' : ''}${payload.orgEmail || ''}`, 40, 77);

  doc.setFont(t.font, 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...t.accent);
  doc.text((payload.docType || 'INVOICE').toUpperCase(), 555, 48, { align: 'right' });

  doc.setFont(t.font, 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...t.headerText);
  doc.text(cleanRef, 555, 65, { align: 'right' });
  doc.setTextColor(t.headerBg ? 203 : 51, t.headerBg ? 213 : 65, t.headerBg ? 225 : 85);
  doc.text(payload.issueDate || '', 555, 79, { align: 'right' });

  if (!t.headerBg) {
    if (tpl === 'editorial') {
      doc.setDrawColor(168, 162, 158);
      doc.line(40, 95, 555, 95);
      doc.line(40, 98, 555, 98);
    } else {
      doc.setDrawColor(tpl === 'studio' ? 224 : 226, tpl === 'studio' ? 231 : 232, tpl === 'studio' ? 255 : 240);
      doc.line(40, 96, 555, 96);
    }
  }

  doc.setFont(t.font, 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('BILLED TO', 40, 126);

  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(payload.clientCompany || '', 40, 142);

  doc.setFont(t.font, 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  let y = 156;
  if (payload.clientContact) { doc.text(`Attn: ${payload.clientContact}`, 40, y); y += 13; }
  if (payload.clientAddress) { doc.text(payload.clientAddress, 40, y); y += 13; }
  if (payload.clientEmail) { doc.text(payload.clientEmail, 40, y); y += 15; }
  if (payload.clientBankName || payload.clientAccountNumber || payload.clientIban) {
    doc.setFont(t.font, 'bold');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text('BILLED TO BANK DETAILS', 40, y);
    y += 11;
    doc.setFont(t.font, 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    if (payload.clientBankName) { doc.text(`Bank: ${payload.clientBankName}`, 40, y); y += 11; }
    if (payload.clientAccountNumber) { doc.text(`Account No: ${payload.clientAccountNumber}`, 40, y); y += 11; }
    if (payload.clientIban) { doc.text(`IBAN: ${payload.clientIban}`, 40, y); y += 11; }
    y += 7;
  }

  if (payload.projectName) {
    doc.setFont(t.font, 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`Project: ${payload.projectName} (${payload.projectRole || ''})`, 40, y);
    y += 18;
  }

  const curMeta = getActiveCurrencyMeta(payload.currency);
  doc.setFillColor(...t.tableHeadBg);
  doc.rect(40, y, 515, 24, 'F');
  doc.setDrawColor(...t.tableHeadBorder);
  doc.line(40, y + 24, 555, y + 24);
  doc.setFont(t.font, 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...t.tableHeadText);
  doc.text('Description', 48, y + 15);
  doc.text('Qty', 370, y + 15, { align: 'right' });
  doc.text(`Unit Price (${curMeta.code})`, 455, y + 15, { align: 'right' });
  doc.text(`Total (${curMeta.code})`, 547, y + 15, { align: 'right' });
  y += 24;

  let subtotal = 0;
  doc.setFont(t.font, 'normal');
  doc.setTextColor(15, 23, 42);
  const lineItems = payload.lineItems || [];
  lineItems.forEach((item, idx) => {
    const qty = Number(item.qty) || 0;
    const price = Number(item.price) || 0;
    const lineTotal = qty * price;
    subtotal += lineTotal;
    doc.text(String(item.description || 'Service').substring(0, 62), 48, y + 16);
    doc.text(String(qty), 370, y + 16, { align: 'right' });
    doc.text(formatCurrency(price, curMeta.code, true), 455, y + 16, { align: 'right' });
    doc.text(formatCurrency(lineTotal, curMeta.code, true), 547, y + 16, { align: 'right' });
    y += 25;
    if (idx < lineItems.length - 1) {
      doc.setDrawColor(241, 245, 249);
      doc.line(40, y, 555, y);
    }
  });

  y += 16;
  const summaryTopY = y;
  doc.setDrawColor(203, 213, 225);
  doc.line(40, summaryTopY, 555, summaryTopY);

  // Sender Bank Details on the left of the summary row
  let bankY = summaryTopY + 18;
  if (payload.orgBankName || payload.orgAccountHolder || payload.orgAccountNumber || payload.orgIban || payload.orgSwift) {
    doc.setFont(t.font, 'bold');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text('SENDER BANK DETAILS', 40, bankY);
    bankY += 12;

    doc.setFont(t.font, 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);
    if (payload.orgBankName) { doc.text(`Bank: ${payload.orgBankName}`, 40, bankY); bankY += 11; }
    if (payload.orgAccountHolder) { doc.text(`Account Holder: ${payload.orgAccountHolder}`, 40, bankY); bankY += 11; }
    if (payload.orgAccountNumber) { doc.text(`Account No: ${payload.orgAccountNumber}`, 40, bankY); bankY += 11; }
    if (payload.orgIban) { doc.text(`IBAN: ${payload.orgIban}`, 40, bankY); bankY += 11; }
    if (payload.orgSwift) { doc.text(`SWIFT / BIC: ${payload.orgSwift}`, 40, bankY); bankY += 11; }
  }

  // Shaded summary box matching the webapp preview (Subtotal + Divider + Total Due)
  const boxX = 345;
  const boxY = summaryTopY + 12;
  const boxW = 210;
  const boxH = 62;
  doc.setFillColor(...t.summaryBg);
  doc.setDrawColor(...t.summaryBorder);
  if (typeof doc.roundedRect === 'function') {
    doc.roundedRect(boxX, boxY, boxW, boxH, 6, 6, 'FD');
  } else {
    doc.rect(boxX, boxY, boxW, boxH, 'FD');
  }

  doc.setFont(t.font, 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Subtotal', boxX + 12, boxY + 20);
  doc.text(formatCurrency(subtotal, curMeta.code, true), boxX + boxW - 12, boxY + 20, { align: 'right' });

  doc.setDrawColor(...t.summaryBorder);
  doc.line(boxX + 12, boxY + 31, boxX + boxW - 12, boxY + 31);

  doc.setFont(t.font, 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Total Due', boxX + 12, boxY + 49);
  doc.setTextColor(...t.totalColor);
  doc.text(formatCurrency(subtotal, curMeta.code, true), boxX + boxW - 12, boxY + 49, { align: 'right' });

  const totalY = boxY + boxH;

  // Optional client approval signature (captured via Production Toolkit sign-off pad)
  let sigBottomY = totalY;
  const sig = payload.clientSignature;
  if (sig && sig.dataUrl && typeof doc.addImage === 'function') {
    try {
      const sigTop = totalY + 14;
      doc.setFont(t.font, 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(71, 85, 105);
      doc.text('CLIENT APPROVAL', boxX, sigTop + 8);
      doc.addImage(sig.dataUrl, 'PNG', boxX, sigTop + 12, 150, 46);
      doc.setDrawColor(148, 163, 184);
      doc.line(boxX, sigTop + 60, boxX + boxW, sigTop + 60);
      doc.setFont(t.font, 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(51, 65, 85);
      const sigLabel = [sig.name, sig.signedAt ? new Date(sig.signedAt).toLocaleString() : ''].filter(Boolean).join(' • ');
      doc.text(String(sigLabel).substring(0, 60), boxX, sigTop + 70);
      sigBottomY = sigTop + 74;
    } catch (sigErr) {
      console.warn('Signature embed skipped:', sigErr);
    }
  }

  // Small Terms of Payment at the bottom
  const termsText = (payload.paymentTerms || '').trim();
  if (termsText) {
    const termsStartY = Math.max(bankY + 18, totalY + 24, sigBottomY + 18, 745);
    doc.setDrawColor(226, 232, 240);
    doc.line(40, termsStartY - 10, 555, termsStartY - 10);
    doc.setFont(t.font, 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text('TERMS OF PAYMENT', 40, termsStartY);
    doc.setFont(t.font, 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(51, 65, 85);
    const wrappedTerms = doc.splitTextToSize(termsText, 515).slice(0, 5);
    doc.text(wrappedTerms, 40, termsStartY + 10);
  }

  const pdfBlob = doc.output('blob');
  if (!payload.skipBrowserDownload) {
    triggerBrowserBlobDownload(pdfBlob, strictFileName);
  }
  const savedRec = await saveFileToIndexedDBVault(strictFileName, '/03_Invoices_And_Quotations/', 'application/pdf', pdfBlob);
  if (!payload.skipBrowserDownload) {
    showToast(`Saved "${strictFileName}"`);
  }
  return { blob: pdfBlob, filename: strictFileName, record: savedRec };
}

async function buildAndDownloadProjectBriefPDF(proj, client, org, templateName) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    showToast('PDF engine is still loading. Please try again in a moment.');
    return null;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const tplKey = templateName || 'executive';
  const t = getStudioDocumentTheme(tplKey);
  const isSolo = proj.entryType === 'solo';
  const curMeta = getActiveCurrencyMeta(proj.currency);
  const ws = getProjectWorkingSummary(proj);
  const startDay = ws.start;
  const endDay = ws.end;
  const daysCount = ws.workingDays;
  const dateSpanPdf = !startDay ? 'TBD' : (endDay && endDay !== startDay ? `${startDay} to ${endDay}` : startDay);
  const grossRev = getProjectRevenue(proj);
  const costs = Math.max(0, Number(proj.supplierCosts) || 0);
  const netProfit = grossRev - costs;
  const marginPct = grossRev > 0 ? Math.round((netProfit / grossRev) * 100) : 0;
  const todayIso = new Date().toISOString().split('T')[0];

  const drawBox = (x, yPos, w, h, r, style) => {
    if (typeof doc.roundedRect === 'function') doc.roundedRect(x, yPos, w, h, r, r, style);
    else doc.rect(x, yPos, w, h, style);
  };

  const paintPageChrome = (isContinuation) => {
    doc.setFillColor(...t.bg);
    doc.rect(0, 0, 595, 842, 'F');
    if (t.headerBg) {
      doc.setFillColor(...t.headerBg);
      doc.rect(0, 0, 595, isContinuation ? 56 : 104, 'F');
      doc.setFillColor(...t.accent);
      doc.rect(0, 0, 595, 5, 'F');
    } else if (t.name === 'studio') {
      doc.setFillColor(...t.accent);
      doc.rect(0, 0, 10, 842, 'F');
    } else {
      doc.setFillColor(...t.accent);
      doc.rect(0, 0, 595, 7, 'F');
    }

    if (!isContinuation) {
      doc.setFont(t.font, 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...t.headerText);
      doc.text(org.name || 'Event Management Studio', 40, 42);

      doc.setFont(t.font, 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(t.headerBg ? 203 : 51, t.headerBg ? 213 : 65, t.headerBg ? 225 : 85);
      if (org.address) doc.text(String(org.address).slice(0, 72), 40, 58);
      doc.text(`${org.taxId ? 'Tax ID: ' + org.taxId + '  •  ' : ''}${org.email || ''}`, 40, 71);

      doc.setFont(t.font, 'bold');
      doc.setFontSize(16);
      doc.setTextColor(...t.accent);
      doc.text(isSolo ? 'SOLO EVENT BRIEF' : 'PROJECT BRIEF', 555, 42, { align: 'right' });

      doc.setFont(t.font, 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...t.headerText);
      const refText = isSolo ? 'Direct Pay Event' : (proj.quotationNumber || proj.invoiceNumber || String(proj.id || '').toUpperCase());
      doc.text(refText, 555, 58, { align: 'right' });
      doc.setTextColor(t.headerBg ? 203 : 51, t.headerBg ? 213 : 65, t.headerBg ? 225 : 85);
      doc.text(`Prepared ${todayIso}`, 555, 71, { align: 'right' });

      if (!t.headerBg) {
        doc.setDrawColor(...t.summaryBorder);
        doc.line(40, 92, 555, 92);
      }
      return 114;
    } else {
      doc.setFont(t.font, 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...t.headerText);
      doc.text(`${isSolo ? 'SOLO EVENT BRIEF' : 'PROJECT BRIEF'} — ${proj.name}`, 40, 34);
      doc.setFont(t.font, 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(t.headerBg ? 203 : 100, t.headerBg ? 213 : 116, t.headerBg ? 225 : 139);
      doc.text('Continued', 555, 34, { align: 'right' });
      if (!t.headerBg) {
        doc.setDrawColor(...t.summaryBorder);
        doc.line(40, 48, 555, 48);
      }
      return 68;
    }
  };

  let y = paintPageChrome(false);
  const ensureSpace = (neededPt) => {
    if (y + neededPt > 784) {
      doc.addPage();
      y = paintPageChrome(true);
    }
  };

  // Hero Summary Card
  doc.setFillColor(...t.summaryBg);
  doc.setDrawColor(...t.summaryBorder);
  drawBox(40, y, 515, 62, 6, 'FD');

  doc.setFont(t.font, 'bold');
  doc.setFontSize(13.5);
  doc.setTextColor(15, 23, 42);
  const titleLines = doc.splitTextToSize(proj.name || 'Untitled Event', 385);
  doc.text(titleLines[0], 54, y + 23);

  // Status Pill Badge top-right
  const statusText = String(proj.status || 'Planning').toUpperCase();
  doc.setFont(t.font, 'bold');
  doc.setFontSize(7.5);
  const pillW = Math.max(62, doc.getTextWidth(statusText) + 18);
  doc.setFillColor(...t.accent);
  drawBox(541 - pillW, y + 12, pillW, 17, 4, 'F');
  doc.setTextColor(t.name === 'executive' ? 15 : 255, t.name === 'executive' ? 23 : 255, t.name === 'executive' ? 42 : 255);
  doc.text(statusText, 541 - pillW / 2, y + 23, { align: 'center' });

  doc.setFont(t.font, 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(51, 65, 85);
  const daysText = ws.offDates.length > 0
    ? ` (${daysCount} working day${daysCount === 1 ? '' : 's'}, ${ws.offDates.length} off)`
    : (daysCount > 1 ? ` (${daysCount} days)` : '');
  const metaSub = [
    `Schedule: ${dateSpanPdf}${daysText}`,
    proj.role ? `Role: ${proj.role}` : '',
    isSolo ? 'Mode: Solo Direct Payment' : 'Mode: Client Project'
  ].filter(Boolean).join('   •   ');
  doc.text(doc.splitTextToSize(metaSub, 485)[0], 54, y + 44);
  y += 76;

  // Two-Column Metadata Grid (Client/Solo Info + Financial Snapshot)
  const colW = 250;
  const cardH = 104;
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(...t.summaryBorder);
  drawBox(40, y, colW, cardH, 5, 'FD');
  drawBox(305, y, colW, cardH, 5, 'FD');

  // Left Card Content
  doc.setFont(t.font, 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(isSolo ? 'DIRECT PAYMENT DETAILS' : 'CLIENT DETAILS', 52, y + 18);

  let ly = y + 34;
  if (isSolo) {
    doc.setFont(t.font, 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.soloThrough ? doc.splitTextToSize(`Through: ${proj.soloThrough}`, colW - 24)[0] : 'Solo Event (No Client Required)', 52, ly);
    ly += 15;
    doc.setFont(t.font, 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    if (proj.soloThrough) {
      doc.text('Solo Event (No Client Required)', 52, ly); ly += 13;
    }
    doc.text(`Payment Method: ${proj.paymentMethod || 'Direct Payout'}`, 52, ly); ly += 13;
    doc.text(`Direct Amount: ${formatCurrency(grossRev, curMeta.code, true)}`, 52, ly); ly += 13;
    if (!proj.soloThrough) {
      doc.text(`Billing Docs: Skipped (Solo Entry)`, 52, ly);
    }
  } else {
    doc.setFont(t.font, 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(doc.splitTextToSize((client && client.company) || 'Unassigned Client', colW - 24)[0], 52, ly);
    ly += 15;
    doc.setFont(t.font, 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    if (client && client.contactPerson) { doc.text(`Contact: ${client.contactPerson}`.slice(0, 44), 52, ly); ly += 12.5; }
    if (client && client.email) { doc.text(String(client.email).slice(0, 44), 52, ly); ly += 12.5; }
    if (client && client.phone) { doc.text(String(client.phone).slice(0, 44), 52, ly); ly += 12.5; }
    if (proj.quotationNumber) { doc.text(`Refs: ${proj.quotationNumber} / ${proj.invoiceNumber || ''}`.slice(0, 44), 52, ly); }
  }

  // Right Card Content (Financial Summary)
  doc.setFont(t.font, 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`FINANCIAL SNAPSHOT (${curMeta.code})`, 317, y + 18);

  const drawFinRow = (label, valStr, rowY, isBold, accentRgb) => {
    doc.setFont(t.font, isBold ? 'bold' : 'normal');
    doc.setFontSize(isBold ? 9.5 : 8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(label, 317, rowY);
    doc.setTextColor(...(accentRgb || [15, 23, 42]));
    doc.text(valStr, 543, rowY, { align: 'right' });
  };
  drawFinRow(isSolo ? 'Direct Payment Received' : 'Gross Project Value', formatCurrency(grossRev, curMeta.code, true), y + 38, false, t.totalColor);
  drawFinRow('Supplier & Operational Costs', formatCurrency(costs, curMeta.code, true), y + 54, false, [180, 83, 9]);
  doc.setDrawColor(...t.summaryBorder);
  doc.line(317, y + 63, 543, y + 63);
  drawFinRow('Net Earnings After Costs', formatCurrency(netProfit, curMeta.code, true), y + 78, true, netProfit < 0 ? [225, 29, 72] : [5, 150, 105]);
  drawFinRow('Profit Margin', `${marginPct}%`, y + 93, false, [71, 85, 105]);

  y += cardH + 18;

  const drawSectionHeading = (numLabel, titleLabel) => {
    ensureSpace(34);
    doc.setFillColor(...t.accent);
    doc.rect(40, y, 3, 13, 'F');
    doc.setFont(t.font, 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${numLabel}   ${titleLabel}`, 49, y + 10);
    doc.setDrawColor(...t.summaryBorder);
    doc.line(40, y + 17, 555, y + 17);
    y += 26;
  };

  const drawWrappedParagraphSection = (numLabel, titleLabel, bodyText) => {
    drawSectionHeading(numLabel, titleLabel);
    const cleanText = String(bodyText || '—').trim() || '—';
    doc.setFont(t.font, 'normal');
    doc.setFontSize(9.2);
    const lines = doc.splitTextToSize(cleanText, 495);
    lines.forEach(line => {
      ensureSpace(14);
      doc.setTextColor(30, 41, 59);
      doc.text(line, 46, y);
      y += 13.5;
    });
    y += 10;
  };

  // Section 01: Scope of Work
  const offNote = ws.offDates.length > 0
    ? `Days Not Worked (Excluded - ${ws.offDates.length}): ${ws.offDates.join(', ')}\n\n`
    : '';
  drawWrappedParagraphSection('01', 'SCOPE OF WORK & DELIVERABLES', offNote + (proj.scope || 'No job description or deliverables recorded.'));

  // Section 02: Budget & Line Items Breakdown
  drawSectionHeading('02', isSolo ? 'PAYMENT & COST ALLOCATION' : 'BUDGET & LINE ITEMS BREAKDOWN');
  const items = isSolo
    ? [{ description: `${proj.name || 'Solo Event'} (${proj.paymentMethod || 'Direct Payment'})`, qty: 1, price: grossRev }]
    : (proj.lineItems || []);

  const drawTableHeader = () => {
    ensureSpace(28);
    doc.setFillColor(...t.tableHeadBg);
    doc.rect(40, y, 515, 22, 'F');
    doc.setDrawColor(...t.tableHeadBorder);
    doc.line(40, y + 22, 555, y + 22);
    doc.setFont(t.font, 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...t.tableHeadText);
    doc.text('#', 48, y + 14);
    doc.text('Description', 68, y + 14);
    doc.text('Qty', 370, y + 14, { align: 'right' });
    doc.text(`Unit Rate (${curMeta.code})`, 456, y + 14, { align: 'right' });
    doc.text(`Total (${curMeta.code})`, 547, y + 14, { align: 'right' });
    y += 22;
  };

  drawTableHeader();
  if (items.length === 0) {
    ensureSpace(24);
    doc.setFont(t.font, 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text('No line items added.', 48, y + 15);
    y += 24;
  } else {
    items.forEach((item, idx) => {
      const qty = Number(item.qty) || 0;
      const price = Number(item.price) || 0;
      const lineTotal = qty * price;
      doc.setFont(t.font, 'normal');
      doc.setFontSize(8.8);
      const descLines = doc.splitTextToSize(String(item.description || 'Deliverable'), 270);
      const rowH = Math.max(22, descLines.length * 12 + 10);
      if (y + rowH > 784) {
        doc.addPage();
        y = paintPageChrome(true);
        drawTableHeader();
      }
      if (idx % 2 === 1) {
        doc.setFillColor(248, 250, 252);
        doc.rect(40, y, 515, rowH, 'F');
      }
      doc.setTextColor(100, 116, 139);
      doc.text(String(idx + 1), 48, y + 14);
      doc.setTextColor(15, 23, 42);
      doc.text(descLines, 68, y + 14);
      doc.text(String(qty), 370, y + 14, { align: 'right' });
      doc.text(formatCurrency(price, curMeta.code, true), 456, y + 14, { align: 'right' });
      doc.setFont(t.font, 'bold');
      doc.text(formatCurrency(lineTotal, curMeta.code, true), 547, y + 14, { align: 'right' });
      y += rowH;
      doc.setDrawColor(241, 245, 249);
      doc.line(40, y, 555, y);
    });
  }

  // Totals Strip under Line Items
  ensureSpace(64);
  y += 8;
  doc.setFillColor(...t.summaryBg);
  doc.setDrawColor(...t.summaryBorder);
  drawBox(325, y, 230, 54, 5, 'FD');
  doc.setFont(t.font, 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Gross Total', 337, y + 16);
  doc.text(formatCurrency(grossRev, curMeta.code, true), 543, y + 16, { align: 'right' });
  doc.text('Supplier Costs', 337, y + 30);
  doc.text(`-${formatCurrency(costs, curMeta.code, true)}`, 543, y + 30, { align: 'right' });
  doc.setDrawColor(...t.summaryBorder);
  doc.line(337, y + 36, 543, y + 36);
  doc.setFont(t.font, 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...(netProfit < 0 ? [225, 29, 72] : [5, 150, 105]));
  doc.text('Net After Costs', 337, y + 48);
  doc.text(formatCurrency(netProfit, curMeta.code, true), 543, y + 48, { align: 'right' });
  y += 72;

  // Section 03: Internal Logistics & Operational Notes
  drawWrappedParagraphSection('03', 'INTERNAL COST & SUPPLIER NOTES', proj.internalNotes || 'No internal notes recorded.');

  // Footer across all pages
  const pageCount = doc.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p);
    doc.setDrawColor(...t.summaryBorder);
    doc.line(40, 804, 555, 804);
    doc.setFont(t.font, 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`${org.name || 'Event Management Studio'}  •  ${proj.name || 'Project Brief'}`, 40, 818);
    doc.text(`Page ${p} of ${pageCount}`, 555, 818, { align: 'right' });
  }

  const safeSlug = (proj.name || 'Project').replace(/[^a-zA-Z0-9_-]+/g, '-');
  const filename = `${safeSlug}-Project-Brief.pdf`;
  const pdfBlob = doc.output('blob');
  triggerBrowserBlobDownload(pdfBlob, filename);
  await saveFileToIndexedDBVault(filename, '/01_Event_Projects/', 'application/pdf', pdfBlob);
  await refreshProjectLinkedFilesList(proj);
  showToast(`Downloaded "${filename}"`);
  return filename;
}

function escapeXlsxXml(val) {
  return String(val == null ? '' : val)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function buildCostBreakdownXlsxBlob(proj, client, curMeta, org) {
  if (!window.JSZip) return null;
  const isSolo = proj.entryType === 'solo';
  const ws = getProjectWorkingSummary(proj);
  const startDay = ws.start;
  const endDay = ws.end;
  const workingDays = ws.workingDays;
  const grossRev = getProjectRevenue(proj);
  const costs = Math.max(0, Number(proj.supplierCosts) || 0);
  const netProfit = grossRev - costs;
  const marginDec = grossRev > 0 ? (netProfit / grossRev) : 0;
  const todayIso = new Date().toISOString().split('T')[0];

  const colLetter = (idx) => {
    let s = '', n = idx;
    while (n > 0) { const r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = Math.floor((n - 1) / 26); }
    return s;
  };

  const numFmts = [
    `<numFmt numFmtId="164" formatCode="&quot;${escapeXlsxXml(curMeta.symbol)}&quot;#,##0.00"/>`
  ];
  const fonts = [
    `<font><sz val="10"/><color rgb="FF0F172A"/><name val="Calibri"/></font>`,
    `<font><b/><sz val="15"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>`,
    `<font><sz val="9.5"/><color rgb="FF334155"/><name val="Calibri"/></font>`,
    `<font><b/><sz val="10"/><color rgb="FF1E1B4B"/><name val="Calibri"/></font>`,
    `<font><b/><sz val="10"/><color rgb="FF475569"/><name val="Calibri"/></font>`,
    `<font><b/><sz val="10"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>`,
    `<font><b/><sz val="10"/><color rgb="FF0F172A"/><name val="Calibri"/></font>`,
    `<font><b/><sz val="10"/><color rgb="FF065F46"/><name val="Calibri"/></font>`,
    `<font><b/><sz val="10"/><color rgb="FF92400E"/><name val="Calibri"/></font>`
  ];
  const fills = [
    `<fill><patternFill patternType="none"/></fill>`,
    `<fill><patternFill patternType="gray125"/></fill>`,
    `<fill><patternFill patternType="solid"><fgColor rgb="FF0F172A"/></patternFill></fill>`,
    `<fill><patternFill patternType="solid"><fgColor rgb="FFE2E8F0"/></patternFill></fill>`,
    `<fill><patternFill patternType="solid"><fgColor rgb="FFEEF2FF"/></patternFill></fill>`,
    `<fill><patternFill patternType="solid"><fgColor rgb="FFF8FAFC"/></patternFill></fill>`,
    `<fill><patternFill patternType="solid"><fgColor rgb="FFFFFFFF"/></patternFill></fill>`,
    `<fill><patternFill patternType="solid"><fgColor rgb="FFECFDF5"/></patternFill></fill>`,
    `<fill><patternFill patternType="solid"><fgColor rgb="FFFFFBEB"/></patternFill></fill>`,
    `<fill><patternFill patternType="solid"><fgColor rgb="FFF1F5F9"/></patternFill></fill>`
  ];
  const borders = [
    `<border><left/><right/><top/><bottom/><diagonal/></border>`,
    `<border><left style="thin"><color rgb="FFCBD5E1"/></left><right style="thin"><color rgb="FFCBD5E1"/></right><top style="thin"><color rgb="FFCBD5E1"/></top><bottom style="thin"><color rgb="FFCBD5E1"/></bottom><diagonal/></border>`,
    `<border><left style="thin"><color rgb="FFCBD5E1"/></left><right style="thin"><color rgb="FFCBD5E1"/></right><top style="thin"><color rgb="FF0F172A"/></top><bottom style="medium"><color rgb="FF0F172A"/></bottom><diagonal/></border>`
  ];
  const cellXfs = [
    `<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>`,
    `<xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>`,
    `<xf numFmtId="0" fontId="2" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="4" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>`,
    `<xf numFmtId="0" fontId="5" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="5" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>`,
    `<xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>`,
    `<xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="164" fontId="0" fillId="6" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="164" fontId="0" fillId="5" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="6" fillId="9" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="164" fontId="6" fillId="9" borderId="2" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="8" fillId="8" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="164" fontId="8" fillId="8" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="7" fillId="7" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="164" fontId="7" fillId="7" borderId="2" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="4" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="10" fontId="7" fillId="5" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>`,
    `<xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="top" wrapText="1"/></xf>`
  ];

  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="${numFmts.length}">${numFmts.join('')}</numFmts>
  <fonts count="${fonts.length}">${fonts.join('')}</fonts>
  <fills count="${fills.length}">${fills.join('')}</fills>
  <borders count="${borders.length}">${borders.join('')}</borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="${cellXfs.length}">${cellXfs.join('')}</cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;

  const rowsXml = [];
  const merges = [];
  let r = 1;

  const strCell = (c, rowIdx, val, s) => `<c r="${colLetter(c)}${rowIdx}" t="inlineStr" s="${s}"><is><t>${escapeXlsxXml(val)}</t></is></c>`;
  const numCell = (c, rowIdx, val, s) => `<c r="${colLetter(c)}${rowIdx}" t="n" s="${s}"><v>${Number(val) || 0}</v></c>`;
  const fmlCell = (c, rowIdx, formula, cachedVal, s) => `<c r="${colLetter(c)}${rowIdx}" t="n" s="${s}"><f>${escapeXlsxXml(formula)}</f><v>${Number(cachedVal) || 0}</v></c>`;

  const addMergedRow = (c1, c2, text, s, ht = 22) => {
    const cells = [strCell(c1, r, text, s)];
    for (let c = c1 + 1; c <= c2; c++) cells.push(`<c r="${colLetter(c)}${r}" s="${s}"/>`);
    rowsXml.push(`<row r="${r}" ht="${ht}" customHeight="1">${cells.join('')}</row>`);
    if (c2 > c1) merges.push(`${colLetter(c1)}${r}:${colLetter(c2)}${r}`);
    r++;
  };

  // Title & Subtitle
  addMergedRow(1, 6, `${proj.name || 'Event'} — Cost & Revenue Breakdown`, 1, 32);
  addMergedRow(1, 6, `Prepared by ${org.name || 'Event Management Studio'}  •  Currency: ${curMeta.code}  •  Exported: ${todayIso}`, 2, 20);
  rowsXml.push(`<row r="${r}" ht="10" customHeight="1"/>`);
  r++;

  // Metadata Section
  addMergedRow(1, 6, 'EVENT & PROJECT SUMMARY', 3, 22);
  const metaPairs = [
    ['Event Name', proj.name || '—', 'Start Day', startDay || '—'],
    ['Entry Type', isSolo ? 'Solo Event (Direct Pay)' : 'Client Project', 'End Day', `${endDay || '—'}${ws.totalSpanDays > 1 ? ` (${ws.totalSpanDays}d span)` : ''}`],
    ['Client / Source', isSolo ? ([proj.soloThrough ? `Through: ${proj.soloThrough}` : '', proj.paymentMethod || 'Direct Payment'].filter(Boolean).join(' • ')) : ((client && client.company) || 'Unassigned'), 'Status', proj.status || 'Planning'],
    ['Your Role', proj.role || '—', 'Reference', isSolo ? 'Solo Direct Entry' : (proj.invoiceNumber || proj.quotationNumber || '—')]
  ];
  metaPairs.forEach(([k1, v1, k2, v2]) => {
    const rowCells = [
      strCell(1, r, k1, 4), `<c r="${colLetter(2)}${r}" s="4"/>`,
      strCell(3, r, v1, 5), `<c r="${colLetter(4)}${r}" s="5"/>`,
      strCell(5, r, k2, 4),
      strCell(6, r, v2, 5)
    ];
    merges.push(`A${r}:B${r}`, `C${r}:D${r}`);
    rowsXml.push(`<row r="${r}" ht="20" customHeight="1">${rowCells.join('')}</row>`);
    r++;
  });

  const workingDaysRow = r;
  const offDatesText = ws.offDates.length > 0 ? `${ws.offDates.length} (${ws.offDates.join(', ')})` : '0 (all dates worked)';
  rowsXml.push(`<row r="${r}" ht="21" customHeight="1">${[
    strCell(1, r, 'Working Days', 4), `<c r="B${r}" s="4"/>`,
    numCell(3, r, workingDays, 5), `<c r="D${r}" s="5"/>`,
    strCell(5, r, 'Days Not Worked', 4),
    strCell(6, r, offDatesText, 5)
  ].join('')}</row>`);
  merges.push(`A${r}:B${r}`, `C${r}:D${r}`);
  r++;

  rowsXml.push(`<row r="${r}" ht="12" customHeight="1"/>`);
  r++;

  // Line Items Table
  addMergedRow(1, 6, 'REVENUE & DELIVERABLES BREAKDOWN', 3, 22);
  rowsXml.push(`<row r="${r}" ht="24" customHeight="1">${[
    strCell(1, r, '#', 6),
    strCell(2, r, 'Item / Deliverable Description', 6),
    strCell(3, r, 'Category', 6),
    strCell(4, r, 'Qty', 7),
    strCell(5, r, `Unit Rate (${curMeta.code})`, 7),
    strCell(6, r, `Line Total (${curMeta.code})`, 7)
  ].join('')}</row>`);
  r++;

  const items = isSolo
    ? [{ description: `${proj.name || 'Solo Event'} (${proj.paymentMethod || 'Direct Payment'})`, qty: 1, price: grossRev }]
    : ((proj.lineItems && proj.lineItems.length > 0) ? proj.lineItems : [{ description: 'No line items recorded', qty: 0, price: 0 }]);

  const firstItemRow = r;
  items.forEach((it, idx) => {
    const isOdd = idx % 2 === 1;
    const qty = Number(it.qty) || 0;
    const price = Number(it.price) || 0;
    const lineTotal = qty * price;
    rowsXml.push(`<row r="${r}" ht="21" customHeight="1">${[
      numCell(1, r, idx + 1, isOdd ? 11 : 10),
      strCell(2, r, it.description || 'Service / Deliverable', isOdd ? 9 : 8),
      strCell(3, r, isSolo ? 'Direct Payout' : 'Line Item / Service', isOdd ? 9 : 8),
      numCell(4, r, qty, isOdd ? 13 : 12),
      numCell(5, r, price, isOdd ? 15 : 14),
      fmlCell(6, r, `D${r}*E${r}`, lineTotal, isOdd ? 15 : 14)
    ].join('')}</row>`);
    r++;
  });
  const lastItemRow = r - 1;

  const subRow = r;
  rowsXml.push(`<row r="${r}" ht="24" customHeight="1">${[
    strCell(1, r, 'Gross Project Revenue Subtotal', 16),
    `<c r="B${r}" s="16"/>`, `<c r="C${r}" s="16"/>`, `<c r="D${r}" s="16"/>`, `<c r="E${r}" s="16"/>`,
    fmlCell(6, r, `SUM(F${firstItemRow}:F${lastItemRow})`, grossRev, 17)
  ].join('')}</row>`);
  merges.push(`A${r}:E${r}`);
  r++;

  rowsXml.push(`<row r="${r}" ht="12" customHeight="1"/>`);
  r++;

  // Cost & Profit P&L Summary
  addMergedRow(1, 6, 'COST & PROFIT SUMMARY (AUTO-CALCULATED)', 3, 22);

  const grossSummaryRow = r;
  rowsXml.push(`<row r="${r}" ht="21" customHeight="1">${[
    strCell(1, r, 'Gross Revenue', 4),
    `<c r="B${r}" s="4"/>`, `<c r="C${r}" s="4"/>`, `<c r="D${r}" s="4"/>`, `<c r="E${r}" s="4"/>`,
    fmlCell(6, r, `F${subRow}`, grossRev, 14)
  ].join('')}</row>`);
  merges.push(`A${r}:E${r}`);
  r++;

  const costSummaryRow = r;
  rowsXml.push(`<row r="${r}" ht="21" customHeight="1">${[
    strCell(1, r, 'Less: Supplier & Operational Costs', 18),
    `<c r="B${r}" s="18"/>`, `<c r="C${r}" s="18"/>`, `<c r="D${r}" s="18"/>`, `<c r="E${r}" s="18"/>`,
    numCell(6, r, costs, 19)
  ].join('')}</row>`);
  merges.push(`A${r}:E${r}`);
  r++;

  const netSummaryRow = r;
  rowsXml.push(`<row r="${r}" ht="25" customHeight="1">${[
    strCell(1, r, 'Net Profit / Total Made After Costs', 20),
    `<c r="B${r}" s="20"/>`, `<c r="C${r}" s="20"/>`, `<c r="D${r}" s="20"/>`, `<c r="E${r}" s="20"/>`,
    fmlCell(6, r, `F${grossSummaryRow}-F${costSummaryRow}`, netProfit, 21)
  ].join('')}</row>`);
  merges.push(`A${r}:E${r}`);
  r++;

  rowsXml.push(`<row r="${r}" ht="21" customHeight="1">${[
    strCell(1, r, 'Net Profit Margin (%)', 22),
    `<c r="B${r}" s="22"/>`, `<c r="C${r}" s="22"/>`, `<c r="D${r}" s="22"/>`, `<c r="E${r}" s="22"/>`,
    fmlCell(6, r, `IF(F${grossSummaryRow}>0,F${netSummaryRow}/F${grossSummaryRow},0)`, marginDec, 23)
  ].join('')}</row>`);
  merges.push(`A${r}:E${r}`);
  r++;

  const perDayNet = workingDays > 0 ? (netProfit / workingDays) : 0;
  rowsXml.push(`<row r="${r}" ht="21" customHeight="1">${[
    strCell(1, r, 'Effective Net Earnings / Working Day', 4),
    `<c r="B${r}" s="4"/>`, `<c r="C${r}" s="4"/>`, `<c r="D${r}" s="4"/>`, `<c r="E${r}" s="4"/>`,
    fmlCell(6, r, `IF(C${workingDaysRow}>0,F${netSummaryRow}/C${workingDaysRow},0)`, perDayNet, 15)
  ].join('')}</row>`);
  merges.push(`A${r}:E${r}`);
  r++;

  // Scope & Cost Notes
  if ((proj.scope && proj.scope.trim()) || (proj.internalNotes && proj.internalNotes.trim())) {
    rowsXml.push(`<row r="${r}" ht="12" customHeight="1"/>`);
    r++;
    addMergedRow(1, 6, 'SCOPE & SUPPLIER NOTES', 3, 22);
    if (proj.scope && proj.scope.trim()) {
      rowsXml.push(`<row r="${r}" ht="38" customHeight="1">${[
        strCell(1, r, 'Scope', 4), `<c r="B${r}" s="4"/>`,
        strCell(3, r, proj.scope.trim(), 24), `<c r="D${r}" s="24"/>`, `<c r="E${r}" s="24"/>`, `<c r="F${r}" s="24"/>`
      ].join('')}</row>`);
      merges.push(`A${r}:B${r}`, `C${r}:F${r}`);
      r++;
    }
    if (proj.internalNotes && proj.internalNotes.trim()) {
      rowsXml.push(`<row r="${r}" ht="38" customHeight="1">${[
        strCell(1, r, 'Cost Notes', 4), `<c r="B${r}" s="4"/>`,
        strCell(3, r, proj.internalNotes.trim(), 24), `<c r="D${r}" s="24"/>`, `<c r="E${r}" s="24"/>`, `<c r="F${r}" s="24"/>`
      ].join('')}</row>`);
      merges.push(`A${r}:B${r}`, `C${r}:F${r}`);
      r++;
    }
  }

  const mergeBlock = merges.length ? `<mergeCells count="${merges.length}">${merges.map(m => `<mergeCell ref="${m}"/>`).join('')}</mergeCells>` : '';
  const sheetXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="20"/>
  <cols>
<col min="1" max="1" width="9" customWidth="1"/>
<col min="2" max="2" width="44" customWidth="1"/>
<col min="3" max="3" width="22" customWidth="1"/>
<col min="4" max="4" width="11" customWidth="1"/>
<col min="5" max="5" width="19" customWidth="1"/>
<col min="6" max="6" width="22" customWidth="1"/>
  </cols>
  <sheetData>${rowsXml.join('')}</sheetData>
  ${mergeBlock}
  <pageMargins left="0.5" right="0.5" top="0.6" bottom="0.6" header="0.3" footer="0.3"/>
  <pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0"/>
</worksheet>`;

  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>`;

  const rootRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`;

  const workbookRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;

  const workbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="Cost Breakdown" sheetId="1" r:id="rId1"/></sheets>
</workbook>`;

  const zip = new window.JSZip();
  zip.file('[Content_Types].xml', contentTypesXml);
  zip.folder('_rels').file('.rels', rootRelsXml);
  const xl = zip.folder('xl');
  xl.file('workbook.xml', workbookXml);
  xl.file('styles.xml', stylesXml);
  xl.folder('_rels').file('workbook.xml.rels', workbookRelsXml);
  xl.folder('worksheets').file('sheet1.xml', sheetXml);

  return await zip.generateAsync({
    type: 'blob',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  });
}

/* FILE CONVERTER */
function handleConverterDragOver(e) { e.preventDefault(); e.stopPropagation(); }
function handleConverterDragLeave(e) { e.preventDefault(); e.stopPropagation(); }
function handleConverterDrop(e) {
  e.preventDefault(); e.stopPropagation();
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) loadConverterFile(e.dataTransfer.files[0]);
}
function handleConverterFileSelect(e) {
  if (e.target.files && e.target.files.length > 0) loadConverterFile(e.target.files[0]);
}

function loadConverterFile(file) {
  converterPendingFile = file;
  converterPendingDataUrl = null;
  converterPendingText = null;
  document.getElementById('converterSelectedFileName').textContent = file.name;
  document.getElementById('converterSelectedFileMeta').textContent = formatBytes(file.size);
  document.getElementById('converterInspectorBadge').textContent = file.name;
  document.getElementById('converterCustomName').value = file.name.replace(/\.[^/.]+$/, '') + '-converted';

  const previewEl = document.getElementById('converterSourcePreview');
  const isImage = /\.(png|jpg|jpeg)$/i.test(file.name) || (file.type && file.type.startsWith('image/'));
  const reader = new FileReader();
  if (isImage) {
    reader.onload = e => {
      converterPendingDataUrl = e.target.result;
      previewEl.innerHTML = `<img src="${converterPendingDataUrl}" class="max-h-44 rounded-lg mx-auto object-contain" />`;
    };
    reader.readAsDataURL(file);
  } else {
    reader.onload = e => {
      converterPendingText = e.target.result;
      previewEl.textContent = String(converterPendingText).slice(0, 4000);
    };
    reader.readAsText(file);
  }
}

async function executeRealFileConversion() {
  const statusBanner = document.getElementById('converterStatusBanner');
  if (!converterPendingFile) {
    statusBanner.className = 'rounded-xl p-3 text-xs font-medium border bg-rose-500/10 border-rose-500/25 text-rose-500';
    statusBanner.textContent = 'Please select a file first.';
    statusBanner.classList.remove('hidden');
    return;
  }

  const targetFormat = document.getElementById('converterTargetFormat').value;
  const customBase = (document.getElementById('converterCustomName').value || 'converted').trim().replace(/\.[^/.]+$/, '');
  const outFilename = `${customBase}.${targetFormat}`;
  const rawText = converterPendingText || `Image: ${converterPendingFile.name}`;
  let outBlob = null;
  let outMime = 'text/plain';

  if (targetFormat === 'pdf') {
    const { jsPDF } = window.jspdf;
    if (converterPendingDataUrl) {
      const dims = await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth || img.width || 800, h: img.naturalHeight || img.height || 600 });
        img.onerror = () => resolve({ w: 800, h: 600 });
        img.src = converterPendingDataUrl;
      });
      const orientation = dims.w >= dims.h ? 'landscape' : 'portrait';
      const doc = new jsPDF({ orientation, unit: 'pt', format: [dims.w, dims.h] });
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const imgFormat = /\.png$/i.test(converterPendingFile.name) || /^data:image\/png/i.test(converterPendingDataUrl)
        ? 'PNG'
        : (/\.webp$/i.test(converterPendingFile.name) || /^data:image\/webp/i.test(converterPendingDataUrl) ? 'WEBP' : 'JPEG');
      doc.addImage(converterPendingDataUrl, imgFormat, 0, 0, pageW, pageH);
      outBlob = doc.output('blob');
    } else {
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      doc.setFont('courier', 'normal');
      doc.setFontSize(10);
      doc.text(doc.splitTextToSize(rawText, 515).slice(0, 66), 40, 45);
      outBlob = doc.output('blob');
    }
    outMime = 'application/pdf';
  } else if (targetFormat === 'json') {
    let obj;
    try { obj = JSON.parse(rawText); }
    catch (_) { obj = { source: converterPendingFile.name, lines: rawText.split(/\r?\n/).filter(Boolean) }; }
    outMime = 'application/json';
    outBlob = new Blob([JSON.stringify(obj, null, 2)], { type: outMime });
  } else if (targetFormat === 'csv') {
    const csv = ['"Line","Content"', ...rawText.split(/\r?\n/).map((l, i) => `"${i + 1}","${String(l).replace(/"/g, '""')}"`)].join('\n');
    outMime = 'text/csv';
    outBlob = new Blob([csv], { type: outMime });
  } else if (targetFormat === 'html') {
    const html = `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:24px;"><pre>${escapeHtml(rawText)}</pre></body></html>`;
    outMime = 'text/html';
    outBlob = new Blob([html], { type: outMime });
  } else {
    outBlob = new Blob([rawText], { type: 'text/plain' });
  }

  triggerBrowserBlobDownload(outBlob, outFilename);
  await saveFileToIndexedDBVault(outFilename, '/04_Converted_Files/', outMime, outBlob);

  statusBanner.className = 'rounded-xl p-3 text-xs font-medium border bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400';
  statusBanner.textContent = `Converted & archived "${outFilename}".`;
  statusBanner.classList.remove('hidden');
  showToast(`Converted "${outFilename}"`);
}

/* GOOGLE CALENDAR & MEETINGS */
function renderGoogleAndCalendarModule() {
  const g = studioState.googleAccount || { connected: false, email: '' };
  const sideDot = document.getElementById('sidebarGoogleStatusDot');
  const sideText = document.getElementById('sidebarGoogleStatusText');
  const sidePill = document.getElementById('sidebarGoogleStatusPill');
  const calBadge = document.getElementById('calendarViewGoogleBadge');
  const emailInput = document.getElementById('googleAccountEmailInput');

  if (emailInput) emailInput.value = g.email || '';

  if (g.connected && g.email) {
    sideDot.className = 'w-1.5 h-1.5 rounded-full bg-emerald-500';
    sideText.textContent = 'Linked';
    sidePill.className = 'inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400';
    if (calBadge) {
      calBadge.textContent = g.email;
      calBadge.className = 'text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
    }
  } else {
    sideDot.className = 'w-1.5 h-1.5 rounded-full bg-amber-500';
    sideText.textContent = 'Offline';
    sidePill.className = 'inline-flex items-center gap-1.5 font-medium text-amber-600 dark:text-amber-400';
    if (calBadge) {
      calBadge.textContent = 'Disconnected';
      calBadge.className = 'text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400';
    }
  }

  const projects = (studioState.projects || []).filter(p => (p.status || '') !== 'Cancelled');
  document.getElementById('meetingProjectSelect').innerHTML = `<option value="">General</option>` +
    projects.map(p => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join('');

  const meetings = studioState.meetings || [];
  const meetingsEl = document.getElementById('calendarMeetingsList');
  if (meetings.length === 0) {
    meetingsEl.innerHTML = `<div class="py-4 text-xs text-slate-400">No meetings scheduled.</div>`;
  } else {
    meetingsEl.innerHTML = meetings.map(m => `
      <div class="p-3.5 rounded-xl bg-slate-500/5 flex flex-wrap items-center justify-between gap-3">
        <div class="min-w-0">
          <div class="text-xs font-mono text-emerald-600 dark:text-emerald-400">${escapeHtml(m.date)} &bull; ${escapeHtml(m.startTime)} - ${escapeHtml(m.endTime)}</div>
          <div class="text-sm font-medium mt-0.5">${escapeHtml(m.title)}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">${escapeHtml(m.attendeeEmail)}</div>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick='openGoogleCalendarTemplate(${JSON.stringify({ title: m.title, date: m.date, startTime: m.startTime, endTime: m.endTime, location: m.location || "", details: m.notes || "", add: m.attendeeEmail }).replace(/'/g, "&#39;")})' class="btn-mac-secondary px-3 py-1.5 text-xs">
            Open Google Calendar
          </button>
          <button type="button" onclick="removeMeetingById('${m.id}')" class="btn-mac-secondary px-2.5 py-1.5 text-xs text-rose-500">Remove</button>
        </div>
      </div>
    `).join('');
  }

  const eventsEl = document.getElementById('calendarBookedEventsList');
  eventsEl.innerHTML = projects.map(p => {
    const ws = getProjectWorkingSummary(p);
    const dayMeta = ws.offDates.length > 0
      ? `${ws.workingDays} work day${ws.workingDays === 1 ? '' : 's'} (${ws.offDates.length} off)`
      : (ws.workingDays > 1 ? `${ws.workingDays} days` : '');
    return `
    <div class="p-3.5 rounded-xl bg-slate-500/5 flex flex-wrap items-center justify-between gap-3">
      <div class="min-w-0">
        <div class="text-xs font-mono text-indigo-500">${escapeHtml(formatProjectDateRange(p))}${dayMeta ? ` &bull; ${escapeHtml(dayMeta)}` : ''} &bull; ${escapeHtml(p.status)}</div>
        <div class="text-sm font-medium mt-0.5">${escapeHtml(p.name)}</div>
        ${ws.offDates.length > 0 ? `<div class="text-[11px] font-mono text-amber-600 dark:text-amber-400 mt-0.5">Did not work: ${escapeHtml(ws.offDates.join(', '))}</div>` : ''}
      </div>
      <button type="button" onclick='openGoogleCalendarTemplate(${JSON.stringify({ title: p.name, date: ws.start, endDate: ws.end, details: p.scope || "" }).replace(/'/g, "&#39;")})' class="btn-mac-secondary px-3 py-1.5 text-xs">
        Add to Google
      </button>
    </div>
  `;
  }).join('');
}

function linkGoogleAccount() {
  const emailInputEl = document.getElementById('googleAccountEmailInput');
  if (!emailInputEl) return;
  const email = emailInputEl.value.trim();
  if (!email || !email.includes('@')) { showToast('Enter a valid email address.'); return; }
  studioState.googleAccount = { connected: true, email };
  saveStudioState();
  showToast(`Linked ${email}`);
}

function disconnectGoogleAccount() {
  studioState.googleAccount = { connected: false, email: '' };
  saveStudioState();
  showToast('Google account disconnected.');
}

function handleSaveMeeting(event) {
  event.preventDefault();
  const newMeeting = {
    id: 'mtg-' + Date.now(),
    title: document.getElementById('meetingTitleInput').value.trim(),
    date: document.getElementById('meetingDateInput').value,
    projectId: document.getElementById('meetingProjectSelect').value,
    startTime: document.getElementById('meetingStartTimeInput').value || '10:00',
    endTime: document.getElementById('meetingEndTimeInput').value || '11:00',
    attendeeEmail: document.getElementById('meetingAttendeeInput').value.trim(),
    location: 'Google Meet',
    notes: document.getElementById('meetingNotesInput').value.trim()
  };
  studioState.meetings.unshift(newMeeting);
  document.getElementById('meetingSchedulerForm').reset();
  document.getElementById('meetingDateInput').value = new Date().toISOString().split('T')[0];
  saveStudioState();

  openGoogleCalendarTemplate({
    title: newMeeting.title,
    date: newMeeting.date,
    startTime: newMeeting.startTime,
    endTime: newMeeting.endTime,
    location: '',
    details: newMeeting.notes || 'Scheduled via Event Management Studio',
    add: newMeeting.attendeeEmail
  });
}

function removeMeetingById(id) {
  studioState.meetings = (studioState.meetings || []).filter(m => m.id !== id);
  saveStudioState();
  showToast('Meeting removed.');
}

function openGoogleCalendarTemplate(item) {
  const baseStart = item.date || '2026-11-18';
  const baseEnd = (item.endDate && item.endDate >= baseStart) ? item.endDate : baseStart;
  const cleanDate = baseStart.replace(/-/g, '');
  const cleanEnd = baseEnd.replace(/-/g, '');
  const s = (item.startTime || '09:00').replace(':', '') + '00';
  const e = (item.endTime || (baseEnd > baseStart ? '18:00' : '10:00')).replace(':', '') + '00';
  const profile = getActiveProfile();
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${profile.name}: ${item.title || 'Schedule'}`,
    dates: `${cleanDate}T${s}/${cleanEnd}T${e}`,
    details: item.details || '',
    location: item.location || ''
  });
  if (item.add) params.set('add', item.add);
  const url = `https://calendar.google.com/calendar/render?${params.toString()}`;
  window.open(url, '_blank');
  showToast('Meeting saved. Opened Google Calendar in a new tab.');
}

function exportFullCalendarICS() {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Event Studio//Workspace//EN'];
  (studioState.projects || []).filter(p => (p.status || '') !== 'Cancelled').forEach(p => {
    const spans = getProjectWorkingDateSpans(p);
    spans.forEach((sp, idx) => {
      const startIso = sp.start || '2026-11-18';
      const endIso = sp.end || startIso;
      const dStart = startIso.replace(/-/g, '');
      let dEnd = dStart;
      if (/^\d{4}-\d{2}-\d{2}$/.test(endIso)) {
        const dt = new Date(endIso + 'T00:00:00Z');
        dt.setUTCDate(dt.getUTCDate() + 1);
        dEnd = dt.toISOString().slice(0, 10).replace(/-/g, '');
      }
      const uid = spans.length > 1 ? `${p.id}-${idx + 1}@eventstudio` : `${p.id}@eventstudio`;
      lines.push('BEGIN:VEVENT', `UID:${uid}`, `DTSTART;VALUE=DATE:${dStart}`, `DTEND;VALUE=DATE:${dEnd}`, `SUMMARY:${p.name}`, 'END:VEVENT');
    });
  });
  (studioState.meetings || []).forEach(m => {
    const d = (m.date || '20261118').replace(/-/g, '');
    const s = (m.startTime || '10:00').replace(':', '') + '00';
    const e = (m.endTime || '11:00').replace(':', '') + '00';
    lines.push('BEGIN:VEVENT', `UID:${m.id}@eventstudio`, `DTSTART:${d}T${s}`, `DTEND:${d}T${e}`, `SUMMARY:${m.title}`, 'END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  triggerBrowserBlobDownload(new Blob([lines.join('\r\n')], { type: 'text/calendar' }), 'Event-Studio-Calendar.ics');
  showToast('Exported .ICS file.');
}

/* ARCHIVE & ZIP */
const selectedVaultFileIds = new Set();

function syncVaultSelectionControls(totalFiles = 0) {
  const sendBtn = document.getElementById('vaultSendWhatsappSelectedBtn');
  if (sendBtn) {
    const cnt = selectedVaultFileIds.size;
    sendBtn.textContent = cnt > 0 ? `Send Selected via WhatsApp (${cnt})` : 'Send Selected via WhatsApp';
  }
  const allCb = document.getElementById('vaultSelectAllCheckbox');
  if (allCb) {
    allCb.checked = totalFiles > 0 && selectedVaultFileIds.size >= totalFiles;
  }
}

function toggleVaultFileSelection(id, checked) {
  if (checked) selectedVaultFileIds.add(id);
  else selectedVaultFileIds.delete(id);
  syncVaultSelectionControls();
}

async function toggleSelectAllVaultFiles(checked) {
  const files = await getAllVaultFiles();
  selectedVaultFileIds.clear();
  if (checked) files.forEach(f => selectedVaultFileIds.add(f.id));
  await refreshVaultTableUI();
}

async function refreshVaultTableUI() {
  const files = await getAllVaultFiles();
  files.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));

  const validIds = new Set(files.map(f => f.id));
  Array.from(selectedVaultFileIds).forEach(id => {
    if (!validIds.has(id)) selectedVaultFileIds.delete(id);
  });

  const invoiceFiles = files.filter(f => f.folder === '/03_Invoices_And_Quotations/');
  const convertedFiles = files.filter(f => f.folder === '/04_Converted_Files/');

  document.getElementById('vaultTotalBlobsBadge').textContent = `${files.length} Files`;
  document.getElementById('vaultFolderCount01').textContent = `${(studioState.projects || []).length} records`;
  document.getElementById('vaultFolderCount02').textContent = `${(studioState.clients || []).length + (studioState.suppliers || []).length} records`;
  document.getElementById('vaultFolderCount03').textContent = `${invoiceFiles.length} files`;
  document.getElementById('vaultFolderCount04').textContent = `${convertedFiles.length} files`;

  const tbody = document.getElementById('localVaultTableBody');
  if (files.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="py-8 text-center text-slate-400">No archived files yet.</td></tr>`;
  } else {
    tbody.innerHTML = files.map(f => {
      const isChecked = selectedVaultFileIds.has(f.id);
      return `
      <tr class="hover:bg-slate-500/5">
        <td class="py-3 pr-2 w-8">
          <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleVaultFileSelection('${f.id}', this.checked)" aria-label="Select ${escapeHtml(f.filename)}" class="rounded accent-emerald-600 cursor-pointer" />
        </td>
        <td class="py-3 pr-3 font-mono text-xs font-medium">
          <span>${escapeHtml(f.filename)}</span>
          <span class="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono ${f.encrypted ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'}">${f.encrypted ? 'AES' : 'Legacy'}</span>
        </td>
        <td class="py-3 px-3 font-mono text-xs text-slate-500 dark:text-slate-400">${escapeHtml(f.folder)}</td>
        <td class="py-3 px-3 font-mono text-xs text-slate-500 dark:text-slate-400">${formatBytes(f.size)}</td>
        <td class="py-3 px-3 font-mono text-xs text-slate-500 dark:text-slate-400">${escapeHtml((f.createdAt || '').substring(0, 10))}</td>
        <td class="py-3 pl-3 text-right space-x-1.5 whitespace-nowrap">
          <button type="button" onclick="openWhatsappModalWithVaultIds(['${f.id}'])" class="btn-mac-secondary px-2.5 py-1 text-xs text-emerald-600 dark:text-emerald-400">WhatsApp</button>
          <button type="button" onclick="downloadVaultFileById('${f.id}')" class="btn-mac-secondary px-2.5 py-1 text-xs text-[#007AFF] dark:text-[#0A84FF]">Download</button>
          <button type="button" onclick="deleteVaultFileById('${f.id}')" class="btn-mac-secondary px-2.5 py-1 text-xs text-rose-500">Delete</button>
        </td>
      </tr>
    `;
    }).join('');
  }
  syncVaultSelectionControls(files.length);

  const convEl = document.getElementById('converterRecentVaultList');
  if (convEl) {
    convEl.innerHTML = convertedFiles.length === 0
      ? `<div class="text-xs text-slate-400">No converted files yet.</div>`
      : convertedFiles.slice(0, 4).map(f => `
        <div class="flex items-center justify-between text-xs py-1">
          <span class="font-mono truncate">${escapeHtml(f.filename)}</span>
          <button type="button" onclick="downloadVaultFileById('${f.id}')" class="text-[#007AFF] dark:text-[#0A84FF] hover:underline ml-2">Download</button>
        </div>
      `).join('');
  }
}

/* WHATSAPP INVOICE & FILE DISPATCH */
const whatsappDispatchState = {
  items: [],
  selectedKeys: new Set()
};

function normalizeWhatsappPhone(rawPhone) {
  let digits = String(rawPhone || '').replace(/[^\d]/g, '');
  if (digits.startsWith('00')) digits = digits.slice(2);
  // Automatically expand UAE local mobile format (05XXXXXXXX -> 9715XXXXXXXX)
  if (digits.length === 10 && digits.startsWith('05')) {
    digits = '971' + digits.slice(1);
  }
  return digits;
}

function populateWhatsappRecipientsDropdown(preferredClientId = '', preferredPhone = '') {
  const sel = document.getElementById('waRecipientSelect');
  const phoneInput = document.getElementById('waPhoneNumberInput');
  if (!sel || !phoneInput) return;

  const options = [`<option value="">Custom Number / Manual Entry</option>`];
  let matchedPhone = preferredPhone || '';

  (studioState.clients || []).forEach(c => {
    if (!c.phone) return;
    const isPref = preferredClientId && c.id === preferredClientId;
    if (isPref && !matchedPhone) matchedPhone = c.phone;
    options.push(`<option value="${escapeHtml(c.phone)}" ${isPref ? 'selected' : ''}>Client: ${escapeHtml(c.company)}${c.contactPerson ? ' (' + escapeHtml(c.contactPerson) + ')' : ''} — ${escapeHtml(c.phone)}</option>`);
  });

  (studioState.suppliers || []).forEach(s => {
    if (!s.phone) return;
    options.push(`<option value="${escapeHtml(s.phone)}">Supplier: ${escapeHtml(s.name)} — ${escapeHtml(s.phone)}</option>`);
  });

  sel.innerHTML = options.join('');
  if (matchedPhone) {
    phoneInput.value = matchedPhone;
  } else if (!phoneInput.value && (studioState.clients || [])[0] && studioState.clients[0].phone) {
    phoneInput.value = studioState.clients[0].phone;
    sel.value = studioState.clients[0].phone;
  }
}

function handleWhatsappRecipientPick(phoneVal) {
  const phoneInput = document.getElementById('waPhoneNumberInput');
  if (phoneInput && phoneVal) {
    phoneInput.value = phoneVal;
  }
}

async function buildWhatsappSelectableItemsList() {
  const items = [];
  const d = (studioState && studioState.billingDraft) || {};
  const docType = d.docType || 'Invoice';
  const docNum = (document.getElementById('billingDocNumberInput') && document.getElementById('billingDocNumberInput').value) || d.docNumber || 'INV-849201';
  const curCode = d.currency || getActiveCurrencyCode();
  const lineItems = Array.isArray(d.lineItems) ? d.lineItems : [];
  const billingTotal = lineItems.reduce((s, it) => s + ((Number(it.qty) || 0) * (Number(it.price) || 0)), 0);
  const clientName = (document.getElementById('billingClientCompany') && document.getElementById('billingClientCompany').value) || d.clientCompany || 'Client';

  items.push({
    key: 'live:billing',
    kind: 'live_billing',
    title: `${docType} ${docNum} — ${clientName}`,
    subtitle: `Live Billing Generator (${formatCurrency(billingTotal, curCode)}) • PDF`,
    filename: `Event Studio - ${docNum}.pdf`,
    docType,
    docNumber: docNum,
    clientName,
    amountFormatted: formatCurrency(billingTotal, curCode)
  });

  // Active projects with invoices/quotations
  (studioState.projects || []).forEach(p => {
    if (p.entryType === 'solo') return;
    const rev = getProjectRevenue(p);
    const pCur = p.currency || getActiveCurrencyCode();
    const invRef = p.invoiceNumber || 'INV';
    items.push({
      key: `proj_inv:${p.id}`,
      kind: 'project_invoice',
      projectId: p.id,
      title: `Invoice ${invRef} — ${p.name}`,
      subtitle: `Project Invoice (${formatCurrency(rev, pCur)}) • PDF`,
      filename: `Event Studio - ${invRef}.pdf`,
      docType: 'Invoice',
      docNumber: invRef,
      projectName: p.name,
      amountFormatted: formatCurrency(rev, pCur)
    });
  });

  // Saved IndexedDB Vault files
  const vaultFiles = await getAllVaultFiles();
  vaultFiles.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  vaultFiles.forEach(vf => {
    items.push({
      key: `vault:${vf.id}`,
      kind: 'vault_file',
      vaultId: vf.id,
      title: vf.filename,
      subtitle: `${vf.folder || '/'} • ${formatBytes(vf.size)}`,
      filename: vf.filename
    });
  });

  whatsappDispatchState.items = items;
  return items;
}

function renderWhatsappFilesChecklist() {
  const container = document.getElementById('waFilesChecklistContainer');
  const badge = document.getElementById('waSelectedCountBadge');
  if (badge) badge.textContent = `${whatsappDispatchState.selectedKeys.size} selected`;
  if (!container) return;

  if (whatsappDispatchState.items.length === 0) {
    container.innerHTML = `<div class="py-4 text-center text-slate-400">No invoices or files available.</div>`;
    return;
  }

  container.innerHTML = whatsappDispatchState.items.map((it, idx) => {
    const checked = whatsappDispatchState.selectedKeys.has(it.key);
    const tagBadge = it.kind === 'live_billing'
      ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#007AFF]/15 text-[#007AFF] dark:text-[#0A84FF]">Live Draft</span>`
      : (it.kind === 'project_invoice'
          ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">Invoice PDF</span>`
          : `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-500/10 text-slate-500 dark:text-slate-400">Saved File</span>`);
    return `
      <label class="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/10 cursor-pointer hover:bg-slate-500/5">
        <div class="flex items-center gap-2.5 min-w-0">
          <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleWhatsappModalItem('${it.key}', this.checked)" class="rounded accent-emerald-600 cursor-pointer shrink-0" />
          <div class="min-w-0">
            <div class="font-medium truncate">${escapeHtml(it.title)}</div>
            <div class="text-[11px] font-mono text-slate-400 truncate">${escapeHtml(it.subtitle)}</div>
          </div>
        </div>
        <div class="shrink-0">${tagBadge}</div>
      </label>
    `;
  }).join('');
}

function toggleWhatsappModalItem(key, checked) {
  if (checked) whatsappDispatchState.selectedKeys.add(key);
  else whatsappDispatchState.selectedKeys.delete(key);
  renderWhatsappFilesChecklist();
  rebuildWhatsappMessageFromSelection();
}

function setWhatsappModalSelectionAll(selectAll) {
  whatsappDispatchState.selectedKeys.clear();
  if (selectAll) {
    whatsappDispatchState.items.forEach(it => whatsappDispatchState.selectedKeys.add(it.key));
  }
  renderWhatsappFilesChecklist();
  rebuildWhatsappMessageFromSelection();
}

function rebuildWhatsappMessageFromSelection() {
  const textarea = document.getElementById('waMessageTextarea');
  if (!textarea) return;
  const org = (typeof getSelectedOrgProfile === 'function' ? getSelectedOrgProfile() : null) || { name: 'Event Management Studio' };
  const selectedItems = whatsappDispatchState.items.filter(it => whatsappDispatchState.selectedKeys.has(it.key));

  const lines = [
    `Hello,`,
    `Please find the following document(s) from *${org.name || 'Event Management Studio'}*:`
  ];

  if (selectedItems.length === 0) {
    lines.push(`• (No files selected yet)`);
  } else {
    selectedItems.forEach(it => {
      if (it.kind === 'live_billing' || it.kind === 'project_invoice') {
        lines.push(`• *${it.docType || 'Invoice'} ${it.docNumber}* — Amount: *${it.amountFormatted}* (${it.filename})`);
      } else {
        lines.push(`• *${it.filename}*`);
      }
    });
  }

  if (org.bankName || org.iban) {
    lines.push(
      ``,
      `*Payment / Remittance Details:*`,
      org.bankName ? `Bank: ${org.bankName}` : '',
      org.accountHolder ? `Account Holder: ${org.accountHolder}` : '',
      org.iban ? `IBAN: ${org.iban}` : ''
    );
  }
  lines.push(``, `Thank you!`);
  textarea.value = lines.filter(l => l !== '').join('\n');
}

async function openWhatsappDispatchModal({ preselectKeys = [], preferredClientId = '', preferredPhone = '' } = {}) {
  const modal = document.getElementById('whatsappDispatchModal');
  if (!modal) return;
  await buildWhatsappSelectableItemsList();
  whatsappDispatchState.selectedKeys = new Set(preselectKeys);
  if (whatsappDispatchState.selectedKeys.size === 0 && whatsappDispatchState.items.length > 0) {
    whatsappDispatchState.selectedKeys.add(whatsappDispatchState.items[0].key);
  }
  populateWhatsappRecipientsDropdown(preferredClientId, preferredPhone);
  renderWhatsappFilesChecklist();
  rebuildWhatsappMessageFromSelection();
  modal.classList.remove('hidden');
}

function closeWhatsappDispatchModal() {
  const modal = document.getElementById('whatsappDispatchModal');
  if (modal) modal.classList.add('hidden');
}

async function openWhatsappModalForCurrentBillingDoc() {
  const d = (studioState && studioState.billingDraft) || {};
  await openWhatsappDispatchModal({
    preselectKeys: ['live:billing'],
    preferredClientId: d.selectedClientId || ''
  });
}

async function openWhatsappModalForCurrentProject() {
  const projId = (document.getElementById('projIdInput') || {}).value;
  const proj = (studioState.projects || []).find(p => p.id === projId);
  if (!proj) return;
  const pre = [];
  if (proj.entryType !== 'solo') pre.push(`proj_inv:${proj.id}`);
  const allFiles = await getAllVaultFiles();
  allFiles.forEach(f => {
    if (f.projectId === proj.id) pre.push(`vault:${f.id}`);
  });
  await openWhatsappDispatchModal({
    preselectKeys: pre,
    preferredClientId: proj.clientId || ''
  });
}

async function openWhatsappModalForSelectedVaultFiles() {
  const pre = Array.from(selectedVaultFileIds).map(id => `vault:${id}`);
  await openWhatsappDispatchModal({ preselectKeys: pre });
}

async function openWhatsappModalWithVaultIds(ids = [], preferredClientId = '') {
  const pre = (ids || []).map(id => `vault:${id}`);
  await openWhatsappDispatchModal({ preselectKeys: pre, preferredClientId });
}

async function prepareSelectedWhatsappFileObjects() {
  const selectedItems = whatsappDispatchState.items.filter(it => whatsappDispatchState.selectedKeys.has(it.key));
  const prepared = [];

  for (const it of selectedItems) {
    if (it.kind === 'live_billing') {
      const d = studioState.billingDraft || {};
      const res = await buildAndDownloadStyledPDF({
        skipBrowserDownload: true,
        docType: d.docType || 'Invoice',
        docNumber: (document.getElementById('billingDocNumberInput') && document.getElementById('billingDocNumberInput').value) || d.docNumber || 'INV-849201',
        issueDate: (document.getElementById('billingIssueDateInput') && document.getElementById('billingIssueDateInput').value) || d.issueDate || new Date().toISOString().split('T')[0],
        template: d.template || 'minimal',
        orgName: (document.getElementById('billingOrgName') && document.getElementById('billingOrgName').value) || 'Event Studio',
        orgTaxId: (document.getElementById('billingOrgTaxId') && document.getElementById('billingOrgTaxId').value) || '',
        orgEmail: (document.getElementById('billingOrgEmail') && document.getElementById('billingOrgEmail').value) || '',
        orgAddress: (document.getElementById('billingOrgAddress') && document.getElementById('billingOrgAddress').value) || '',
        orgBankName: (document.getElementById('billingOrgBankName') && document.getElementById('billingOrgBankName').value) || '',
        orgAccountHolder: (document.getElementById('billingOrgAccountHolder') && document.getElementById('billingOrgAccountHolder').value) || '',
        orgAccountNumber: (document.getElementById('billingOrgAccountNumber') && document.getElementById('billingOrgAccountNumber').value) || '',
        orgIban: (document.getElementById('billingOrgIban') && document.getElementById('billingOrgIban').value) || '',
        orgSwift: (document.getElementById('billingOrgSwift') && document.getElementById('billingOrgSwift').value) || '',
        paymentTerms: (document.getElementById('billingPaymentTermsInput') && document.getElementById('billingPaymentTermsInput').value) || d.paymentTerms || '',
        clientCompany: (document.getElementById('billingClientCompany') && document.getElementById('billingClientCompany').value) || d.clientCompany || '',
        clientContact: (document.getElementById('billingClientContact') && document.getElementById('billingClientContact').value) || d.clientContact || '',
        clientAddress: (document.getElementById('billingClientAddress') && document.getElementById('billingClientAddress').value) || d.clientAddress || '',
        clientEmail: (document.getElementById('billingClientEmail') && document.getElementById('billingClientEmail').value) || d.clientEmail || '',
        currency: d.currency || getActiveCurrencyCode(),
        lineItems: d.lineItems || []
      });
      if (res && res.blob) {
        prepared.push({ filename: res.filename, mimeType: 'application/pdf', blob: res.blob });
      }
    } else if (it.kind === 'project_invoice') {
      const proj = (studioState.projects || []).find(p => p.id === it.projectId);
      if (proj) {
        const client = (studioState.clients || []).find(c => c.id === proj.clientId) || {};
        const org = getSelectedOrgProfile();
        const res = await buildAndDownloadStyledPDF({
          skipBrowserDownload: true,
          docType: 'Invoice',
          docNumber: proj.invoiceNumber || 'INV-000000',
          issueDate: proj.dateCreated || new Date().toISOString().split('T')[0],
          orgName: org.name, orgAddress: org.address, orgTaxId: org.taxId, orgEmail: org.email,
          orgBankName: org.bankName || '', orgAccountHolder: org.accountHolder || org.name || '',
          orgAccountNumber: org.accountNumber || '', orgIban: org.iban || '', orgSwift: org.swift || '',
          paymentTerms: (studioState.billingDraft && studioState.billingDraft.paymentTerms) || '',
          clientCompany: client.company || 'Client', clientContact: client.contactPerson || '',
          clientAddress: client.address || '', clientEmail: client.email || '',
          projectName: proj.name, projectRole: proj.role, projectScope: proj.scope,
          currency: proj.currency || getActiveCurrencyCode(),
          lineItems: proj.lineItems || [],
          clientSignature: getProjectSignatureForPdf(proj)
        });
        if (res && res.blob) {
          prepared.push({ filename: res.filename, mimeType: 'application/pdf', blob: res.blob });
        }
      }
    } else if (it.kind === 'vault_file' && it.vaultId) {
      const rec = await getRawVaultRecordById(it.vaultId);
      if (rec) {
        const res = await getDecryptedVaultBlobByRecord(rec, sessionCryptoState.keyObj);
        if (res && res.blob) {
          prepared.push({
            filename: res.meta.filename || it.filename,
            mimeType: res.meta.mimeType || 'application/octet-stream',
            blob: res.blob
          });
        }
      }
    }
  }
  await refreshVaultTableUI();
  return prepared;
}

async function executeWhatsappSendToNumber(downloadFiles = true) {
  const phoneEl = document.getElementById('waPhoneNumberInput');
  const msgEl = document.getElementById('waMessageTextarea');
  const cleanPhone = normalizeWhatsappPhone(phoneEl ? phoneEl.value : '');
  if (!cleanPhone || cleanPhone.length < 7) {
    showToast('Enter a valid WhatsApp phone number with country code.');
    if (phoneEl) phoneEl.focus();
    return null;
  }

  let downloadedCount = 0;
  if (downloadFiles && whatsappDispatchState.selectedKeys.size > 0) {
    const files = await prepareSelectedWhatsappFileObjects();
    files.forEach(f => {
      triggerBrowserBlobDownload(f.blob, f.filename);
      downloadedCount++;
    });
  }

  const message = (msgEl && msgEl.value ? msgEl.value : '').trim();
  const waUrl = `https://wa.me/${cleanPhone}${message ? '?text=' + encodeURIComponent(message) : ''}`;
  if (typeof window.open === 'function') {
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }
  closeWhatsappDispatchModal();
  showToast(
    downloadedCount > 0
      ? `Downloaded ${downloadedCount} file(s) & opened WhatsApp chat (+${cleanPhone}).`
      : `Opened WhatsApp chat (+${cleanPhone}).`
  );
  return { phone: cleanPhone, url: waUrl, downloadedCount };
}

async function executeWhatsappNativeFileShare() {
  const msgEl = document.getElementById('waMessageTextarea');
  const message = (msgEl && msgEl.value ? msgEl.value : '').trim();
  const prepared = await prepareSelectedWhatsappFileObjects();
  if (prepared.length === 0) {
    showToast('Select at least one invoice or file to share.');
    return false;
  }
  if (typeof File === 'function' && navigator && typeof navigator.share === 'function') {
    try {
      const shareFiles = prepared.map(f => new File([f.blob], f.filename, { type: f.mimeType || 'application/pdf' }));
      if (!navigator.canShare || navigator.canShare({ files: shareFiles })) {
        await navigator.share({
          title: 'Invoices & Project Files',
          text: message,
          files: shareFiles
        });
        closeWhatsappDispatchModal();
        showToast(`Shared ${shareFiles.length} file(s) via system share sheet.`);
        return true;
      }
    } catch (err) {
      if (err && err.name === 'AbortError') return false;
    }
  }
  // Fallback: download files + open direct WhatsApp chat to the selected number
  await executeWhatsappSendToNumber(true);
  return true;
}

function exportWorkspaceJsonBackup() {
  const profile = getActiveProfile();
  const slug = profile.name.replace(/\s+/g, '-');
  const blob = new Blob([JSON.stringify({ studio: profile.name, profileId: activeProfileId, state: studioState }, null, 2)], { type: 'application/json' });
  triggerBrowserBlobDownload(blob, `${slug}-Backup-${new Date().toISOString().split('T')[0]}.json`);
  showToast('Exported JSON backup.');
}

function mergeCollectionNonDestructive(existingList, incomingList, keyFields, idPrefix) {
  if (!Array.isArray(incomingList)) return 0;
  let addedCount = 0;
  const existingIds = new Set(existingList.map(item => String(item.id || '')));

  incomingList.forEach(rawItem => {
    if (!rawItem || typeof rawItem !== 'object') return;
    const item = JSON.parse(JSON.stringify(rawItem));

    // Check if an identical record already exists so we never alter or overwrite existing records
    const alreadyExists = existingList.some(ex => {
      if (item.id && ex.id && String(item.id) === String(ex.id)) {
        const samePrimary = keyFields.every(k => {
          if (!item[k] && !ex[k]) return true;
          return String(item[k] || '').trim().toLowerCase() === String(ex[k] || '').trim().toLowerCase();
        });
        if (samePrimary) return true;
      }
      return keyFields.length > 0 && keyFields.every(k => {
        const a = String(item[k] || '').trim().toLowerCase();
        const b = String(ex[k] || '').trim().toLowerCase();
        return a && b && a === b;
      });
    });

    if (alreadyExists) return;

    // Ensure unique ID so existing items with the same ID are never altered
    if (!item.id || existingIds.has(String(item.id))) {
      item.id = `${idPrefix}-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
    }
    existingIds.add(String(item.id));
    existingList.push(item);
    addedCount++;
  });

  return addedCount;
}

function mergeJsonPayloadNonDestructive(parsed) {
  if (!parsed) return { projects: 0, clients: 0, suppliers: 0, meetings: 0, orgProfiles: 0 };
  const counts = { projects: 0, clients: 0, suppliers: 0, meetings: 0, orgProfiles: 0 };

  if (!Array.isArray(studioState.projects)) studioState.projects = [];
  if (!Array.isArray(studioState.clients)) studioState.clients = [];
  if (!Array.isArray(studioState.suppliers)) studioState.suppliers = [];
  if (!Array.isArray(studioState.meetings)) studioState.meetings = [];
  if (!Array.isArray(studioState.orgProfiles)) studioState.orgProfiles = [];
  if (!Array.isArray(studioState.usedDocNumbers)) studioState.usedDocNumbers = [];

  // Case 1: Array of records directly (e.g., projects.json, clients.json, suppliers.json)
  if (Array.isArray(parsed)) {
    const sample = parsed.find(x => x && typeof x === 'object') || {};
    if ('lineItems' in sample || 'quotationNumber' in sample || 'invoiceNumber' in sample || 'scope' in sample) {
      counts.projects += mergeCollectionNonDestructive(studioState.projects, parsed, ['name', 'dateCreated'], 'prj');
    } else if ('company' in sample && ('contactPerson' in sample || 'eventType' in sample)) {
      counts.clients += mergeCollectionNonDestructive(studioState.clients, parsed, ['company', 'email'], 'cli');
    } else if ('serviceCategory' in sample || ('rateCard' in sample)) {
      counts.suppliers += mergeCollectionNonDestructive(studioState.suppliers, parsed, ['name', 'email'], 'sup');
    } else if ('startTime' in sample || 'attendeeEmail' in sample) {
      counts.meetings += mergeCollectionNonDestructive(studioState.meetings, parsed, ['title', 'date', 'startTime'], 'mtg');
    } else if ('taxId' in sample || 'iban' in sample) {
      counts.orgProfiles += mergeCollectionNonDestructive(studioState.orgProfiles, parsed, ['name'], 'org');
    } else if ('name' in sample) {
      counts.projects += mergeCollectionNonDestructive(studioState.projects, parsed, ['name'], 'prj');
    }
    return counts;
  }

  // Case 2: Full backup object or partial workspace JSON ({ state: {...} } or { projects, clients, ... })
  const source = (parsed.state && typeof parsed.state === 'object') ? parsed.state : parsed;
  counts.projects += mergeCollectionNonDestructive(studioState.projects, source.projects, ['name', 'dateCreated'], 'prj');
  counts.clients += mergeCollectionNonDestructive(studioState.clients, source.clients, ['company', 'email'], 'cli');
  counts.suppliers += mergeCollectionNonDestructive(studioState.suppliers, source.suppliers, ['name', 'email'], 'sup');
  counts.meetings += mergeCollectionNonDestructive(studioState.meetings, source.meetings, ['title', 'date', 'startTime'], 'mtg');
  counts.orgProfiles += mergeCollectionNonDestructive(studioState.orgProfiles, source.orgProfiles, ['name'], 'org');

  if (Array.isArray(source.usedDocNumbers)) {
    source.usedDocNumbers.forEach(num => {
      if (num && !studioState.usedDocNumbers.includes(num)) {
        studioState.usedDocNumbers.push(num);
      }
    });
  }

  // Case 3: Single standalone entity object (e.g., a single project or client JSON file)
  const totalFromCollections = counts.projects + counts.clients + counts.suppliers + counts.meetings + counts.orgProfiles;
  if (totalFromCollections === 0 && typeof source === 'object') {
    if ('lineItems' in source || 'quotationNumber' in source || 'scope' in source) {
      counts.projects += mergeCollectionNonDestructive(studioState.projects, [source], ['name', 'dateCreated'], 'prj');
    } else if ('company' in source && ('contactPerson' in source || 'email' in source)) {
      counts.clients += mergeCollectionNonDestructive(studioState.clients, [source], ['company', 'email'], 'cli');
    } else if ('serviceCategory' in source) {
      counts.suppliers += mergeCollectionNonDestructive(studioState.suppliers, [source], ['name', 'email'], 'sup');
    }
  }

  return counts;
}

async function addMultipleJsonFilesNonDestructive(event) {
  const files = Array.from((event.target && event.target.files) || []);
  if (files.length === 0) return;

  const existingVaultFiles = await getAllVaultFiles();
  const usedNames = new Set(existingVaultFiles.map(f => (f.filename || '').toLowerCase()));

  let filesAdded = 0;
  let totalRecordsMerged = 0;

  for (const file of files) {
    try {
      const rawText = await file.text();
      const parsed = JSON.parse(rawText);

      // 1. Non-destructively merge any new workspace records without altering existing records
      const counts = mergeJsonPayloadNonDestructive(parsed);
      totalRecordsMerged += (counts.projects + counts.clients + counts.suppliers + counts.meetings + counts.orgProfiles);

      // 2. Save the JSON file into IndexedDB Vault without overwriting existing files of the same name
      let safeFilename = file.name || `Imported-${Date.now()}.json`;
      if (usedNames.has(safeFilename.toLowerCase())) {
        const dotIdx = safeFilename.lastIndexOf('.');
        const base = dotIdx > 0 ? safeFilename.slice(0, dotIdx) : safeFilename;
        const ext = dotIdx > 0 ? safeFilename.slice(dotIdx) : '.json';
        let counter = 2;
        while (usedNames.has(`${base}-${counter}${ext}`.toLowerCase())) counter++;
        safeFilename = `${base}-${counter}${ext}`;
      }
      usedNames.add(safeFilename.toLowerCase());

      const jsonBlob = new Blob([rawText], { type: 'application/json' });
      await saveFileToIndexedDBVault(safeFilename, '/04_Converted_Files/', 'application/json', jsonBlob);
      filesAdded++;
    } catch (err) {
      console.error('Error importing JSON file:', file.name, err);
    }
  }

  event.target.value = '';
  saveStudioState();
  await refreshVaultTableUI();

  if (filesAdded > 0) {
    showToast(`Added ${filesAdded} JSON file${filesAdded > 1 ? 's' : ''} (${totalRecordsMerged} new record${totalRecordsMerged === 1 ? '' : 's'} merged; existing data untouched).`);
  } else {
    showToast('No valid JSON files could be added.');
  }
}

function restoreWorkspaceJsonBackup(event) {
  const files = Array.from((event.target && event.target.files) || []);
  if (files.length === 0) return;
  // Route through non-destructive multi-file JSON importer so existing files/records are never lost
  addMultipleJsonFilesNonDestructive(event);
}

async function downloadOrganizedZipArchive() {
  const zip = new JSZip();
  const f1 = zip.folder('01_Event_Projects');
  const f2 = zip.folder('02_Clients_And_Suppliers');
  const f3 = zip.folder('03_Invoices_And_Quotations');
  const f4 = zip.folder('04_Converted_Files');

  f1.file('projects.json', JSON.stringify(studioState.projects || [], null, 2));
  f2.file('clients.json', JSON.stringify(studioState.clients || [], null, 2));
  f2.file('suppliers.json', JSON.stringify(studioState.suppliers || [], null, 2));

  const vaultFiles = await getAllVaultFiles();
  for (const item of vaultFiles) {
    try {
      const blob = item.blob || await getDecryptedVaultBlobById(item.id);
      if (!blob) continue;
      if (item.folder === '/03_Invoices_And_Quotations/') f3.file(item.filename, blob);
      else if (item.folder === '/04_Converted_Files/') f4.file(item.filename, blob);
      else f1.file(item.filename, blob);
    } catch (e) {
      console.warn('Skipped corrupt/locked vault item in zip:', item.id, e);
    }
  }

  const blob = await zip.generateAsync({ type: 'blob' });
  triggerBrowserBlobDownload(blob, 'Event_Studio_Archive.zip');
  showToast('Downloaded .ZIP archive.');
}

/* IMAGE TO TEXT SCANNER (OCR) & SMART ORGANIZER */
let ocrPendingImageDataUrl = null;
let ocrPendingFileName = 'scanned-text';
let ocrOutputMode = 'organized';
let lastOcrOrganizedData = null;

function setOcrOutputMode(mode) {
  ocrOutputMode = mode;
  document.getElementById('ocrModeBtnOrganized').classList.toggle('active', mode === 'organized');
  document.getElementById('ocrModeBtnRaw').classList.toggle('active', mode === 'raw');
  document.getElementById('ocrOrganizedPanel').classList.toggle('hidden', mode !== 'organized');
  document.getElementById('ocrResultTextarea').classList.toggle('hidden', mode !== 'raw');
}

function handleOcrRawTextEdit() {
  updateOcrTextStats();
  organizeAndRenderOcrText(document.getElementById('ocrResultTextarea').value || '');
}

const OCR_VALID_2_LETTER = new Set([
  'of','to','in','is','it','on','no','id','or','by','at','as','an','be',
  'we','he','up','do','so','if','my','me','us','am','pm','mr','ms','dr',
  'st','rd','po','co','uk','hr','kg','km','lb','oz','qt','sq','vs'
]);
const OCR_ALWAYS_VALID_2_UPPER = new Set([
  'ID','NO','AM','PM','MR','MS','DR','ST','RD','PO','CO','UK','US','HR','TV','IT','AI','UI','UX','QA','PR','VP'
]);
const OCR_VALID_3_LETTER = new Set([
  'the','and','for','are','but','not','you','all','any','can','had','her','was','one','our','out',
  'day','get','has','him','his','how','man','new','now','old','see','two','way','who','boy','did',
  'its','let','put','say','she','too','use','uae','usa','usd','aed','eur','gbp','tax','vat','inv',
  'qtn','qty','ref','ceo','cfo','cto','coo','vip','llc','ltd','inc','plc','est','ext','jan','feb',
  'mar','apr','may','jun','jul','aug','sep','oct','nov','dec','mon','tue','wed','thu','fri','sat',
  'sun','box','fax','tel','web','app','pro','max','min','net','due','fee','sum','sub','pay','add',
  'set','end','run','top','low','per','yes','yet','job','law','car','air','art','age','act','arm',
  'ask','bad','bag','bar','bed','big','bit','bus','buy','cut','dog','eat','eye','far','few','fit',
  'fly','fun','gas','gun','guy','hat','hit','hot','ice','key','kid','lay','leg','lie','lip','lot',
  'map','met','mix','nor','oil','own','pan','pen','pop','red','rid','row','sad','sea','sex','sir',
  'sit','six','sky','son','tea','ten','tie','tip','try','van','war','wet','win','won','ali','bin',
  'abu','ave','blv','flr','ste','apt','zip','pin','dob','exp','iss','sig','num','doc','org','com',
  'gov','edu'
]);
const OCR_KNOWN_DOC_WORDS = new Set([
  'united','arab','emirates','federal','authority','identity','citizenship','resident','card',
  'number','name','date','birth','nationality','issuing','expiry','signature','holder','sex',
  'bangladesh','invoice','quotation','receipt','subtotal',
  'total','amount','balance','client','supplier','company','address','email','phone','mobile',
  'website','event','meeting','schedule','agenda','venue','location','project','studio','management',
  'description','price','quantity','discount','payment','account','bank','transfer','cash','check',
  'director','manager','founder','producer','coordinator','consultant','service','services','dubai',
  'abudhabi','sharjah','ajman','passport','license','permit'
]);
const OCR_WORD_FIXES = {
  'CTTIZE': 'CITIZENSHIP',
  'CTTIZENSHIP': 'CITIZENSHIP',
  'CITIZE': 'CITIZENSHIP',
  'CITIZENSHP': 'CITIZENSHIP',
  'IDENTTTY': 'IDENTITY',
  'EMIRATE5': 'EMIRATES',
  'RESLDENT': 'Resident',
  'NATLONALITY': 'Nationality'
};

function isOcrStructuredToken(tok) {
  if (!tok) return false;
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(tok)) return true;
  if (/^\d{3}-\d{4}-\d{5,8}-\d$/.test(tok)) return true;
  if (/^\d{1,4}[-/.]\d{1,2}[-/.]\d{1,4}$/.test(tok)) return true;
  if (/^(?:\$|USD|AED|EUR|GBP)\s?\d[\d,]*(?:\.\d{2})?$/i.test(tok)) return true;
  if (/^\d[\d,]*\.\d{2}$/.test(tok)) return true;
  if (/^\d{1,2}:\d{2}(?:AM|PM)?$/i.test(tok)) return true;
  if (/^[A-Z]{2,4}-\d{2,}[A-Z0-9-]*$/.test(tok)) return true;
  if (/^\+?\d{7,15}$/.test(tok)) return true;
  if (/^(?:19|20)\d{2}$/.test(tok)) return true;
  return false;
}

function validateEnglishOcrToken(rawTok, conf = 75, lineIsUpper = false) {
  if (!rawTok) return null;
  // Reject any non-ASCII character
  if (/[^\x20-\x7E]/.test(rawTok)) return null;
  // Reject tokens with unmatched quotes/brackets/equals inside
  if (/[()"'[\]{}<>=~_*^`|\\]/.test(rawTok)) return null;
  const trimmed = rawTok.trim();
  if (trimmed === '&' || trimmed === '-' || trimmed === '/' || trimmed === ':') {
    return conf >= 60 ? trimmed : null;
  }

  const cleaned = trimmed.replace(/^[^A-Za-z0-9$+#@&]+|[^A-Za-z0-9%.,:;&/-]+$/g, '');
  if (!cleaned) return null;
  if (cleaned === '&' || cleaned === '-' || cleaned === '/' || cleaned === ':') {
    return conf >= 60 ? cleaned : null;
  }

  let trailPunct = '';
  const punctMatch = cleaned.match(/([.,:;]+)$/);
  let core = cleaned;
  if (punctMatch) {
    trailPunct = punctMatch[1];
    core = cleaned.slice(0, -trailPunct.length);
  }
  if (!core) return null;

  if (OCR_WORD_FIXES[core.toUpperCase()]) {
    core = OCR_WORD_FIXES[core.toUpperCase()];
  }

  if (isOcrStructuredToken(core)) {
    return core + trailPunct;
  }

  if (/\d/.test(core) && /[A-Za-z]/.test(core)) {
    if (/^\d+(st|nd|rd|th|am|pm|px|kg|mb|gb)$/i.test(core)) {
      return core + trailPunct;
    }
    return null;
  }

  if (/^\d{1,6}$/.test(core)) {
    return conf >= 80 ? (core + trailPunct) : null;
  }

  if (!/^[A-Za-z]+(?:-[A-Za-z]+)?$/.test(core)) {
    return null;
  }

  const parts = core.split('-');
  for (const p of parts) {
    const isAllUpper = p === p.toUpperCase();
    const isAllLower = p === p.toLowerCase();
    const isTitle = p[0] === p[0].toUpperCase() && p.slice(1) === p.slice(1).toLowerCase();
    if (!isAllUpper && !isAllLower && !isTitle) {
      return null;
    }
  }

  const letters = core.replace(/-/g, '');
  const low = letters.toLowerCase();

  if (letters.length === 1) {
    if ((letters === 'A' || letters === 'I' || letters === 'a' || letters === 'M' || letters === 'F') && conf >= 70) {
      return core + trailPunct;
    }
    return null;
  }

  if (letters.length === 2) {
    if (!OCR_VALID_2_LETTER.has(low)) return null;
    if (letters === letters.toUpperCase() && !lineIsUpper && !OCR_ALWAYS_VALID_2_UPPER.has(letters)) {
      return null;
    }
    return conf >= 60 ? (core + trailPunct) : null;
  }

  if (!/[aeiouyAEIOUY]/.test(letters) && !['mr','ms','dr','st','rd','qty','llc','ltd','plc'].includes(low)) {
    return null;
  }

  if (/([a-zA-Z])\1\1/.test(letters)) return null;
  if (/^(vr|vl|vn|vm|sr|sb|sd|sg|sj|zb|zd|zg|zk|zm|zn|zp|zr|zs|zt|zv|xh|xj|xk|xl|xm|xn|xp|xq|xr|xs|xt|xv|xw|xz|qj|qk|ql|qm|qn|qp|qr|qs|qt|qv|qw|qx|qy|qz)/i.test(low)) {
    return null;
  }
  if (/q(?!u)|qu(?![aeiouy])/i.test(low)) return null;
  if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(low)) return null;
  if (letters.length <= 6 && /[bcdfghjklmnpqrstvwxz]{4,}/i.test(low) && !['first','world','right','light','night','sight','might','eight','fifth','sixth','month','birth','worth','south','north','match','watch','catch','patch','batch','witch','pitch','ditch','fetch','latch','stats','http','https'].includes(low)) {
    return null;
  }

  if (letters.length === 3) {
    if (!OCR_VALID_3_LETTER.has(low)) return null;
    const allowedUpper3 = new Set(['uae','usa','usd','aed','eur','gbp','tax','vat','inv','qtn','qty','ref','ceo','cfo','cto','coo','vip','llc','ltd','inc','plc','jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','mon','tue','wed','thu','fri','sat','sun','dob','exp','iss','sig','tel','fax','web','box','app','pro']);
    if (letters === letters.toUpperCase() && !lineIsUpper && !allowedUpper3.has(low)) {
      return null;
    }
    return conf >= 62 ? (core + trailPunct) : null;
  }

  if (conf < 54 && !OCR_KNOWN_DOC_WORDS.has(low)) {
    return null;
  }

  return core + trailPunct;
}

function filterEnglishWordObjectsOnLine(wordObjs) {
  // Step 0: Strip Arabic / non-Latin script tokens first so bilingual lines keep their English half cleanly
  const latinWordObjs = wordObjs.filter(w => {
    const t = (w.text || '').trim();
    return t && !/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u0400-\u04FF\u4E00-\u9FFF]/.test(t);
  });
  if (latinWordObjs.length === 0) return null;

  const longUpperCount = latinWordObjs.filter(w => {
    const alpha = (w.text || '').replace(/[^A-Za-z]/g, '');
    return alpha.length >= 4 && alpha === alpha.toUpperCase();
  }).length;
  const lineIsUpper = longUpperCount >= 2;

  const kept = [];
  let rejectedStreak = 0;

  for (const w of latinWordObjs) {
    const conf = typeof w.confidence === 'number' ? w.confidence : 75;
    const val = validateEnglishOcrToken(w.text, conf, lineIsUpper);
    if (val !== null) {
      const alpha = val.replace(/[^A-Za-z]/g, '');
      if (lineIsUpper && kept.length >= 2 && alpha && alpha !== alpha.toUpperCase()) {
        break;
      }
      if (lineIsUpper && kept.length >= 2 && rejectedStreak >= 1 && !OCR_KNOWN_DOC_WORDS.has(alpha.toLowerCase())) {
        break;
      }
      kept.push(val);
      rejectedStreak = 0;
    } else {
      rejectedStreak++;
    }
  }

  while (kept.length > 0 && ['&', '-', '/', ':'].includes(kept[kept.length - 1])) kept.pop();
  while (kept.length > 0 && ['&', '-', '/', ':'].includes(kept[0])) kept.shift();
  if (kept.length === 0) return null;

  const survival = kept.length / latinWordObjs.length;
  const hasKnown = kept.some(w => {
    const clean = w.replace(/[.,:;]+$/, '');
    return OCR_KNOWN_DOC_WORDS.has(clean.replace(/[^A-Za-z]/g, '').toLowerCase()) || isOcrStructuredToken(clean);
  });
  const hasLongWord = kept.some(w => w.replace(/[^A-Za-z]/g, '').length >= 5);

  if (latinWordObjs.length >= 3 && survival < 0.55 && !(hasKnown && kept.length >= 2)) {
    return null;
  }
  if (kept.length < latinWordObjs.length && !hasKnown && !hasLongWord) {
    return null;
  }
  if (kept.length === 1 && latinWordObjs.length >= 2 && !hasKnown) {
    return null;
  }

  return kept.join(' ');
}

function filterEnglishLinesFromString(rawText) {
  if (!rawText) return '';
  const out = [];
  for (const rawLine of rawText.split(/\r?\n/)) {
    const parts = rawLine.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) continue;
    const cleanedLine = filterEnglishWordObjectsOnLine(parts.map(t => ({ text: t, confidence: 75 })));
    if (cleanedLine) out.push(cleanedLine);
  }
  return out.join('\n');
}

function extractCleanEnglishFromOcrResult(result) {
  if (!result || !result.data) return '';
  if (Array.isArray(result.data.lines) && result.data.lines.length > 0) {
    const outLines = [];
    for (const line of result.data.lines) {
      const words = Array.isArray(line.words) && line.words.length > 0
        ? line.words
        : (line.text || '').trim().split(/\s+/).filter(Boolean).map(t => ({ text: t, confidence: line.confidence || 75 }));
      const cleaned = filterEnglishWordObjectsOnLine(words);
      if (cleaned) outLines.push(cleaned);
    }
    if (outLines.length > 0) return outLines.join('\n');
  }
  return filterEnglishLinesFromString(result.data.text || '');
}

function analyzeAndOrganizeOcrText(rawText) {
  const cleanedEnglish = filterEnglishLinesFromString(rawText || '');
  const text = (cleanedEnglish || rawText || '').trim();
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const lower = text.toLowerCase();

  // Extract universal entities
  const emiratesIds = [...new Set(text.match(/\b784-\d{4}-\d{6,8}-\d\b/g) || [])];
  const emails = [...new Set(text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [])];
  const phones = [...new Set(text.match(/(?:\+?\d{1,3}[\s.-]?)?\(?\d{2,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}/g) || [])]
    .filter(p => p.replace(/\D/g, '').length >= 7 && !p.startsWith('784-'));
  const urls = [...new Set(text.match(/(?:https?:\/\/|www\.)[^\s,;]+/gi) || [])];
  const dates = [...new Set(text.match(/\b(?:\d{4}[-/]\d{1,2}[-/]\d{1,2}|\d{1,2}[-/]\d{1,2}[-/]\d{2,4}|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},?\s+\d{2,4})\b/gi) || [])];
  const times = [...new Set(text.match(/\b\d{1,2}:\d{2}(?:\s?(?:AM|PM))?\b/gi) || [])];
  const moneyMatches = text.match(/(?:\$|USD|EUR|GBP|AED)\s?\d[\d,]*(?:\.\d{2})?|\d[\d,]*\.\d{2}/gi) || [];

  // Heuristic classification
  const idCardScore =
    (/\b(united arab emirates|federal authority|identity|citizenship|resident identity|nationality|date of birth|issuing date|expiry date|passport)\b/i.test(text) ? 4 : 0) +
    (emiratesIds.length > 0 ? 3 : 0);

  const invoiceScore =
    (/\b(invoice|quotation|quote|receipt|subtotal|total due|amount due|tax|bill to|qty|unit price)\b/i.test(text) ? 3 : 0) +
    (moneyMatches.length >= 2 ? 2 : 0) +
    (/\b(inv|qtn)[-\s]?\d+/i.test(text) ? 2 : 0);

  const eventScore =
    (/\b(event|meeting|agenda|schedule|venue|rsvp|keynote|conference|summit|gala|session|location|zoom|meet\.google)\b/i.test(text) ? 3 : 0) +
    (dates.length > 0 && times.length > 0 ? 2 : 0);

  const contactScore =
    (emails.length > 0 || phones.length > 0 ? 2 : 0) +
    (/\b(ceo|director|founder|manager|producer|coordinator|consultant|inc|llc|ltd|group|studio)\b/i.test(text) ? 2 : 0) +
    (lines.length <= 12 && moneyMatches.length === 0 ? 1 : 0);

  let category = 'notes';
  let categoryLabel = 'Structured Notes';
  if (idCardScore >= 3) {
    category = 'id_card';
    categoryLabel = 'Identity Card / Official ID';
  } else if (invoiceScore >= 3 && invoiceScore >= eventScore) {
    category = 'invoice';
    categoryLabel = /\b(quotation|quote)\b/i.test(text) ? 'Quotation Document' : 'Invoice / Receipt';
  } else if (eventScore >= 3 && eventScore >= contactScore) {
    category = 'event';
    categoryLabel = 'Event / Meeting Schedule';
  } else if (contactScore >= 3) {
    category = 'contact';
    categoryLabel = 'Contact / Business Card';
  }

  const fields = [];
  const items = [];
  let structuredPayload = {};

  if (category === 'id_card') {
    const nameMatch = text.match(/\bName\s*[:\-]?\s*([A-Za-z][A-Za-z\s.'-]{2,})/i);
    const natMatch = text.match(/\bNationality\s*[:\-]?\s*([A-Za-z][A-Za-z\s-]{2,})/i);
    const dobMatch = text.match(/\bDate\s+of\s+Birth\s*[:\-]?\s*(\d{1,2}[-/]\d{1,2}[-/]\d{2,4})/i);
    const sexMatch = text.match(/\bSex\s*[:\-]?\s*([MF])\b/i);
    const authorityLine = lines.find(l => /federal authority|identity|citizenship/i.test(l)) || '';
    const countryLine = lines.find(l => /united arab emirates/i.test(l)) || '';

    const holderName = nameMatch ? nameMatch[1].split(/\r?\n/)[0].trim() : '';
    const nationality = natMatch ? natMatch[1].split(/\r?\n/)[0].trim() : '';
    const idNum = emiratesIds[0] || '';

    fields.push({ label: 'Document Type', value: /resident identity/i.test(text) ? 'Resident Identity Card' : 'Official Identity Card' });
    if (countryLine) fields.push({ label: 'Country / Issuer', value: countryLine });
    if (authorityLine) fields.push({ label: 'Issuing Authority', value: authorityLine });
    if (idNum) fields.push({ label: 'ID Number', value: idNum });
    if (holderName) fields.push({ label: 'Cardholder Name', value: holderName });
    if (nationality) fields.push({ label: 'Nationality', value: nationality });
    if (dobMatch && dobMatch[1]) fields.push({ label: 'Date of Birth', value: dobMatch[1] });
    else if (dates[0]) fields.push({ label: 'Dates on Card', value: dates.join(' | ') });
    if (sexMatch && sexMatch[1]) fields.push({ label: 'Sex', value: sexMatch[1].toUpperCase() });

    lines.forEach(l => {
      if (l !== countryLine && l !== authorityLine) items.push(l);
    });

    structuredPayload = {
      name: holderName || countryLine || 'ID Cardholder',
      company: nationality ? `${nationality} (${idNum || 'Verified ID'})` : (idNum || 'Verified ID'),
      role: 'Resident Identity Card',
      email: emails[0] || '',
      phone: phones[0] || '',
      address: countryLine || 'United Arab Emirates'
    };
  } else if (category === 'invoice') {
    const refMatch = text.match(/\b(?:INV|QTN|REF|NO\.?|#)[-\s:]*([A-Z0-9-]{3,})\b/i);
    const totalMatch = text.match(/(?:total\s*(?:due|amount)?|grand\s*total|amount\s*due|balance)\s*[:\-]?\s*([\$A-Z]{0,4}\s?\d[\d,]*(?:\.\d{2})?)/i);
    const vendorLine = lines[0] || 'Vendor / Studio';

    // Parse potential line items (lines containing a trailing amount)
    lines.forEach(line => {
      const m = line.match(/^(.+?)\s+(?:(\d+)\s*[xX×]?\s+)?(?:\$|USD|EUR|GBP|AED)?\s*(\d[\d,]*\.\d{2})\s*$/);
      if (m && !/subtotal|total|tax|balance|discount|amount due/i.test(m[1])) {
        items.push({
          description: m[1].trim(),
          qty: Number(m[2]) || 1,
          price: parseFloat(m[3].replace(/,/g, '')) || 0
        });
      }
    });

    const docNumber = refMatch ? refMatch[1].toUpperCase() : 'INV-SCAN-01';
    const totalVal = totalMatch ? totalMatch[1] : (moneyMatches[moneyMatches.length - 1] || 'N/A');

    fields.push({ label: 'Document Type', value: categoryLabel });
    fields.push({ label: 'Issuer / Title', value: vendorLine });
    fields.push({ label: 'Reference Number', value: docNumber });
    if (dates[0]) fields.push({ label: 'Date', value: dates[0] });
    fields.push({ label: 'Total Amount', value: totalVal });
    if (emails[0]) fields.push({ label: 'Email', value: emails[0] });

    structuredPayload = { docType: categoryLabel.includes('Quotation') ? 'Quotation' : 'Invoice', docNumber, vendorLine, date: dates[0] || '', totalVal, items };
  } else if (category === 'contact') {
    const nameLine = lines.find(l => !l.includes('@') && !/\d{4,}/.test(l) && !/www\./i.test(l)) || lines[0] || 'Contact';
    const companyLine = lines.find(l => l !== nameLine && !l.includes('@') && !/\d{5,}/.test(l) && !/www\./i.test(l)) || '';
    const roleLine = lines.find(l => /\b(ceo|director|founder|manager|lead|producer|head|officer|specialist)\b/i.test(l)) || '';
    const addrLine = lines.find(l => /\b(st|street|ave|avenue|rd|road|suite|floor|blvd|ny|ca|fl|tx|uk|dubai)\b/i.test(l)) || '';

    fields.push({ label: 'Contact Person', value: nameLine });
    if (companyLine) fields.push({ label: 'Company / Organization', value: companyLine });
    if (roleLine) fields.push({ label: 'Role / Title', value: roleLine });
    if (emails[0]) fields.push({ label: 'Email', value: emails[0] });
    if (phones[0]) fields.push({ label: 'Phone', value: phones[0] });
    if (urls[0]) fields.push({ label: 'Website', value: urls[0] });
    if (addrLine) fields.push({ label: 'Address', value: addrLine });

    structuredPayload = {
      name: nameLine,
      company: companyLine || nameLine,
      role: roleLine,
      email: emails[0] || '',
      phone: phones[0] || '',
      address: addrLine || ''
    };
  } else if (category === 'event') {
    const titleLine = lines[0] || 'Scanned Event';
    const venueLine = lines.find(l => /\b(venue|location|room|hall|pavilion|hotel|zoom|meet\.google|address)\b/i.test(l)) || '';
    lines.forEach(l => {
      if (l !== titleLine && l !== venueLine && l.length > 4) {
        items.push(l.replace(/^[-*•\d.)]+\s*/, ''));
      }
    });

    fields.push({ label: 'Event / Meeting Title', value: titleLine });
    if (dates[0]) fields.push({ label: 'Date', value: dates[0] });
    if (times.length > 0) fields.push({ label: 'Time', value: times.join(' - ') });
    if (venueLine) fields.push({ label: 'Location / Venue', value: venueLine });
    if (emails[0]) fields.push({ label: 'Contact / Attendee', value: emails[0] });

    structuredPayload = {
      title: titleLine,
      date: dates[0] || '',
      startTime: times[0] || '10:00',
      endTime: times[1] || '11:00',
      location: venueLine,
      email: emails[0] || '',
      notes: items.slice(0, 6).join('\n')
    };
  } else {
    const heading = lines[0] || 'Scanned Document';
    fields.push({ label: 'Topic / Heading', value: heading });
    if (dates.length) fields.push({ label: 'Dates Mentioned', value: dates.join(', ') });
    if (emails.length) fields.push({ label: 'Emails Found', value: emails.join(', ') });
    if (phones.length) fields.push({ label: 'Phones Found', value: phones.join(', ') });
    if (moneyMatches.length) fields.push({ label: 'Amounts Found', value: moneyMatches.join(', ') });

    lines.slice(1).forEach(l => {
      const clean = l.replace(/^[-*•\d.)]+\s*/, '').trim();
      if (clean) items.push(clean);
    });
    structuredPayload = { heading, bullets: items };
  }

  return { category, categoryLabel, fields, items, structuredPayload, rawText: text };
}

function organizeAndRenderOcrText(rawText) {
  const panel = document.getElementById('ocrOrganizedPanel');
  const badge = document.getElementById('ocrDetectedTypeBadge');
  const actionSlot = document.getElementById('ocrSmartActionSlot');

  if (!rawText || !rawText.trim()) {
    lastOcrOrganizedData = null;
    badge.classList.add('hidden');
    actionSlot.innerHTML = '';
    panel.innerHTML = `<div class="p-6 rounded-xl bg-slate-500/5 text-center text-xs text-slate-400">Scan an image (invoice, receipt, business card, event flyer, or notes) and it will automatically be understood and organized here.</div>`;
    return;
  }

  const data = analyzeAndOrganizeOcrText(rawText);
  lastOcrOrganizedData = data;

  badge.textContent = data.categoryLabel;
  badge.classList.remove('hidden');

  let html = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      ${data.fields.map(f => `
        <div class="p-3 rounded-xl bg-slate-500/5 border border-slate-200/50 dark:border-white/5">
          <div class="text-[11px] font-medium text-slate-400 uppercase tracking-wider">${escapeHtml(f.label)}</div>
          <div class="text-sm font-medium mt-0.5 break-words">${escapeHtml(f.value)}</div>
        </div>
      `).join('')}
    </div>
  `;

  if (data.items.length > 0) {
    if (data.category === 'invoice') {
      html += `
        <div class="p-3.5 rounded-xl bg-slate-500/5 border border-slate-200/50 dark:border-white/5 space-y-2">
          <div class="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Detected Line Items (${data.items.length})</div>
          <div class="divide-y divide-slate-200/50 dark:divide-white/5 text-xs">
            ${data.items.map(it => `
              <div class="py-1.5 flex items-center justify-between gap-2">
                <span class="truncate">${escapeHtml(it.description)} (x${it.qty})</span>
                <span class="font-mono font-medium shrink-0">${formatCurrency(it.price)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="p-3.5 rounded-xl bg-slate-500/5 border border-slate-200/50 dark:border-white/5 space-y-1.5">
          <div class="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Key Points &amp; Details</div>
          <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc pl-4">
            ${data.items.map(pt => `<li>${escapeHtml(pt)}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  }

  panel.innerHTML = html;

  // Contextual smart action button based on document type
  if (data.category === 'invoice') {
    actionSlot.innerHTML = `<button type="button" onclick="applyOcrToBilling()" class="btn-mac-secondary px-3 py-2 text-xs text-[#007AFF] dark:text-[#0A84FF]">Send to Billing</button>`;
  } else if (data.category === 'contact' || data.category === 'id_card') {
    actionSlot.innerHTML = `
      <button type="button" onclick="applyOcrToDirectory('client')" class="btn-mac-secondary px-3 py-2 text-xs text-[#007AFF] dark:text-[#0A84FF]">Save as Client</button>
      <button type="button" onclick="applyOcrToDirectory('supplier')" class="btn-mac-secondary px-3 py-2 text-xs">Save as Supplier</button>
    `;
  } else if (data.category === 'event') {
    actionSlot.innerHTML = `
      <button type="button" onclick="applyOcrToMeeting()" class="btn-mac-secondary px-3 py-2 text-xs text-[#007AFF] dark:text-[#0A84FF]">Schedule Meeting</button>
    `;
  } else {
    actionSlot.innerHTML = '';
  }
}

function applyOcrToBilling() {
  if (!lastOcrOrganizedData) return;
  const p = lastOcrOrganizedData.structuredPayload;
  studioState.billingDraft.docType = p.docType || 'Invoice';
  studioState.billingDraft.docNumber = p.docNumber || 'INV-SCAN-01';
  if (p.vendorLine) studioState.billingDraft.clientCompany = p.vendorLine;
  if (p.items && p.items.length > 0) {
    studioState.billingDraft.lineItems = p.items.map(i => ({ description: i.description, qty: i.qty, price: i.price }));
  }
  saveStudioState();
  switchView('billing');
  showToast('Loaded scanned invoice into Billing.');
}

function applyOcrToDirectory(target) {
  if (!lastOcrOrganizedData) return;
  const p = lastOcrOrganizedData.structuredPayload;
  if (target === 'client') {
    studioState.clients.unshift({
      id: 'cli-' + Date.now(),
      company: p.company || p.name || 'Scanned Client',
      contactPerson: p.name || '',
      email: p.email || '',
      phone: p.phone || '',
      eventType: p.role || 'Event Client',
      address: p.address || ''
    });
    saveStudioState();
    switchView('clients');
    showToast('Saved scanned contact to Clients.');
  } else {
    studioState.suppliers.unshift({
      id: 'sup-' + Date.now(),
      name: p.company || p.name || 'Scanned Supplier',
      category: 'Logistics',
      contactPerson: p.name || '',
      email: p.email || '',
      phone: p.phone || ''
    });
    saveStudioState();
    switchView('suppliers');
    showToast('Saved scanned contact to Suppliers.');
  }
}

function applyOcrToMeeting() {
  if (!lastOcrOrganizedData) return;
  const p = lastOcrOrganizedData.structuredPayload;
  switchView('calendar');
  document.getElementById('meetingTitleInput').value = p.title || '';
  if (p.email) document.getElementById('meetingAttendeeInput').value = p.email;
  if (p.notes) document.getElementById('meetingNotesInput').value = p.notes;
  showToast('Pre-filled Schedule Meeting form from scan.');
}

function handleOcrDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
}

function handleOcrDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    loadOcrImageFile(e.dataTransfer.files[0]);
  }
}

function handleOcrFileSelect(e) {
  if (e.target.files && e.target.files.length > 0) {
    loadOcrImageFile(e.target.files[0]);
  }
}

function loadOcrImageFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    showToast('Please select a valid image file.');
    return;
  }
  ocrPendingFileName = (file.name || 'image').replace(/\.[^/.]+$/, '');
  document.getElementById('ocrFileBadge').textContent = file.name || 'Clipboard Image';

  const reader = new FileReader();
  reader.onload = e => {
    ocrPendingImageDataUrl = e.target.result;
    document.getElementById('ocrImagePreview').src = ocrPendingImageDataUrl;
    document.getElementById('ocrImagePreviewWrapper').classList.remove('hidden');
    document.getElementById('ocrDropPrompt').textContent = 'Click or drop another image to replace';
  };
  reader.readAsDataURL(file);
}

document.addEventListener('paste', (e) => {
  if (currentActiveView !== 'ocr' || !e.clipboardData || !e.clipboardData.items) return;
  for (const item of e.clipboardData.items) {
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile();
      if (file) loadOcrImageFile(file);
      break;
    }
  }
});

function boxMeanFloat32(buf, w, h, radius) {
  const tmp = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const yw = y * w;
    let sum = 0;
    let cnt = 0;
    const initLim = Math.min(w, radius + 1);
    for (let x = 0; x < initLim; x++) {
      sum += buf[yw + x];
      cnt++;
    }
    for (let x = 0; x < w; x++) {
      tmp[yw + x] = sum / cnt;
      const addX = x + radius + 1;
      const remX = x - radius;
      if (addX < w) { sum += buf[yw + addX]; cnt++; }
      if (remX >= 0) { sum -= buf[yw + remX]; cnt--; }
    }
  }
  const out = new Float32Array(w * h);
  for (let x = 0; x < w; x++) {
    let sum = 0;
    let cnt = 0;
    const initLim = Math.min(h, radius + 1);
    for (let y = 0; y < initLim; y++) {
      sum += tmp[y * w + x];
      cnt++;
    }
    for (let y = 0; y < h; y++) {
      out[y * w + x] = sum / cnt;
      const addY = y + radius + 1;
      const remY = y - radius;
      if (addY < h) { sum += tmp[addY * w + x]; cnt++; }
      if (remY >= 0) { sum -= tmp[remY * w + x]; cnt--; }
    }
  }
  return out;
}

function preprocessImageForOcr(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const origW = img.naturalWidth || img.width || 800;
        const origH = img.naturalHeight || img.height || 600;
        const maxDim = Math.max(origW, origH);
        const scale = maxDim < 2000 ? Math.min(3.5, Math.max(1.5, 2000 / maxDim)) : 1;
        const w = Math.round(origW * scale);
        const h = Math.round(origH * scale);

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, w, h);

        const imgData = ctx.getImageData(0, 0, w, h);
        const d = imgData.data;
        const total = w * h;
        const lum = new Float32Array(total);
        let darkCount = 0;

        for (let i = 0; i < total; i++) {
          const idx = i * 4;
          const r = d[idx];
          const g = d[idx + 1];
          const b = d[idx + 2];
          const chroma = Math.max(r, g, b) - Math.min(r, g, b);
          const l = Math.min(255, 0.299 * r + 0.587 * g + 0.114 * b + chroma * 0.4);
          lum[i] = l;
          if (l < 95) darkCount++;
        }

        // Invert if dark-mode image (light text on dark background)
        if (darkCount > total * 0.58) {
          for (let i = 0; i < total; i++) {
            lum[i] = 255 - lum[i];
          }
        }

        // Gentle unsharp mask to crisp up small upscaled letters without fusing gaps
        const blurSmall = boxMeanFloat32(lum, w, h, 2);
        const sharpened = new Float32Array(total);
        for (let i = 0; i < total; i++) {
          const s = lum[i] + (lum[i] - blurSmall[i]) * 0.75;
          sharpened[i] = s < 0 ? 0 : (s > 255 ? 255 : s);
        }

        // Two-pass local upper-envelope paper background estimation
        const rBg = Math.max(14, Math.round(Math.min(w, h) / 48));
        const mean1 = boxMeanFloat32(lum, w, h, rBg);
        const upper = new Float32Array(total);
        for (let i = 0; i < total; i++) {
          upper[i] = lum[i] > mean1[i] ? lum[i] : mean1[i];
        }
        const localBg = boxMeanFloat32(upper, w, h, rBg);

        for (let i = 0; i < total; i++) {
          const bg = localBg[i];
          let v = 255;
          if (bg > 95) {
            const bgWeight = Math.min(1, (bg - 95) / 40);
            const ratio = sharpened[i] / Math.max(115, bg);
            if (ratio < 0.92) {
              const t = ratio / 0.92;
              const mapped = Math.round(255 * Math.pow(t, 1.45));
              v = Math.round(255 - (255 - mapped) * bgWeight);
            }
          }
          const idx = i * 4;
          d[idx] = v;
          d[idx + 1] = v;
          d[idx + 2] = v;
          d[idx + 3] = 255;
        }

        ctx.putImageData(imgData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch (_) {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

async function runOcrScan() {
  if (!ocrPendingImageDataUrl) {
    showToast('Select or paste an image first.');
    return;
  }
  if (typeof Tesseract === 'undefined') {
    showToast('OCR engine is still loading. Try again in a moment.');
    return;
  }

  const scanBtn = document.getElementById('ocrScanBtn');
  const progressBox = document.getElementById('ocrProgressContainer');
  const progressStatus = document.getElementById('ocrProgressStatus');
  const progressPercent = document.getElementById('ocrProgressPercent');
  const progressBar = document.getElementById('ocrProgressBar');

  scanBtn.disabled = true;
  scanBtn.textContent = 'Scanning...';
  progressBox.classList.remove('hidden');
  progressStatus.textContent = 'Enhancing image contrast...';
  progressPercent.textContent = '5%';
  progressBar.style.width = '5%';

  try {
    const processedDataUrl = await preprocessImageForOcr(ocrPendingImageDataUrl);
    const loggerFn = m => {
      if (m.status) {
        progressStatus.textContent = m.status.charAt(0).toUpperCase() + m.status.slice(1);
      }
      if (typeof m.progress === 'number') {
        const pct = Math.max(8, Math.round(m.progress * 100));
        progressPercent.textContent = `${pct}%`;
        progressBar.style.width = `${pct}%`;
      }
    };

    // Use 'eng+ara' under the hood so non-English/Arabic text on bilingual cards is isolated as Arabic Unicode and stripped cleanly rather than hallucinated as random English letters
    let result;
    try {
      result = await Tesseract.recognize(processedDataUrl, 'eng+ara', { logger: loggerFn });
    } catch (_) {
      result = await Tesseract.recognize(processedDataUrl, 'eng', { logger: loggerFn });
    }

    let extracted = extractCleanEnglishFromOcrResult(result).trim();

    // If preprocessed image yielded very little text, also check raw image and merge clean English lines
    if (extracted.split(/\s+/).filter(Boolean).length < 5) {
      try {
        const rawRes = await Tesseract.recognize(ocrPendingImageDataUrl, 'eng+ara');
        const rawExtracted = extractCleanEnglishFromOcrResult(rawRes).trim();
        if (rawExtracted.length > extracted.length) {
          extracted = rawExtracted;
        }
      } catch (_) {}
    }

    document.getElementById('ocrResultTextarea').value = extracted;
    updateOcrTextStats();
    organizeAndRenderOcrText(extracted);
    setOcrOutputMode('organized');
    progressStatus.textContent = 'English scan & organize complete';
    progressPercent.textContent = '100%';
    progressBar.style.width = '100%';
    showToast(extracted ? 'English text extracted and organized.' : 'No clear English text detected.');
  } catch (err) {
    console.error('OCR error:', err);
    progressStatus.textContent = 'Scan failed';
    showToast('Could not scan image. Check internet connection for OCR model.');
  } finally {
    scanBtn.disabled = false;
    scanBtn.textContent = 'Scan Image Text';
  }
}

function updateOcrTextStats() {
  const val = document.getElementById('ocrResultTextarea').value || '';
  const words = val.trim() ? val.trim().split(/\s+/).length : 0;
  document.getElementById('ocrTextStats').textContent = `${words} words • ${val.length} chars`;
}

function formatOrganizedSummaryText() {
  if (!lastOcrOrganizedData) return document.getElementById('ocrResultTextarea').value || '';
  const d = lastOcrOrganizedData;
  const lines = [`[${d.categoryLabel}]`, ...d.fields.map(f => `${f.label}: ${f.value}`)];
  if (d.items.length > 0) {
    lines.push('', 'Details / Items:');
    d.items.forEach(it => {
      if (typeof it === 'object') lines.push(`- ${it.description} (x${it.qty}): ${formatCurrency(it.price)}`);
      else lines.push(`- ${it}`);
    });
  }
  return lines.join('\n');
}

async function copyOcrText() {
  const val = ocrOutputMode === 'organized' ? formatOrganizedSummaryText() : document.getElementById('ocrResultTextarea').value;
  if (!val) { showToast('Nothing to copy.'); return; }
  try {
    await navigator.clipboard.writeText(val);
    showToast('Copied to clipboard.');
  } catch (_) {
    document.getElementById('ocrResultTextarea').select();
    document.execCommand('copy');
    showToast('Copied to clipboard.');
  }
}

async function downloadOcrText() {
  const val = ocrOutputMode === 'organized' ? formatOrganizedSummaryText() : document.getElementById('ocrResultTextarea').value;
  if (!val) { showToast('Scan an image first.'); return; }
  const filename = `${ocrPendingFileName || 'scanned-text'}-organized.txt`;
  const blob = new Blob([val], { type: 'text/plain' });
  triggerBrowserBlobDownload(blob, filename);
  await saveFileToIndexedDBVault(filename, '/04_Converted_Files/', 'text/plain', blob);
  showToast(`Saved "${filename}" to downloads & archive.`);
}

function clearOcrScanner() {
  ocrPendingImageDataUrl = null;
  ocrPendingFileName = 'scanned-text';
  lastOcrOrganizedData = null;
  document.getElementById('ocrFileInput').value = '';
  document.getElementById('ocrImagePreview').src = '';
  document.getElementById('ocrImagePreviewWrapper').classList.add('hidden');
  document.getElementById('ocrDropPrompt').textContent = 'Drop an image, click to browse, or paste (Cmd+V)';
  document.getElementById('ocrFileBadge').textContent = 'PNG, JPG, WEBP';
  document.getElementById('ocrResultTextarea').value = '';
  document.getElementById('ocrProgressContainer').classList.add('hidden');
  updateOcrTextStats();
  organizeAndRenderOcrText('');
}

/* HELPERS */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function getActiveCurrencyCode() {
  const code = (studioState && (studioState.currency || (studioState.billingDraft && studioState.billingDraft.currency))) || 'USD';
  return STUDIO_CURRENCIES[code] ? code : 'USD';
}

function getActiveCurrencyMeta(overrideCode) {
  const code = overrideCode && STUDIO_CURRENCIES[overrideCode] ? overrideCode : getActiveCurrencyCode();
  return STUDIO_CURRENCIES[code] || STUDIO_CURRENCIES.USD;
}

function syncCurrencyLabelsUI() {
  const cur = getActiveCurrencyMeta();
  const setSelect = (id) => {
    const el = document.getElementById(id);
    if (el) el.value = cur.code;
  };
  setSelect('headerCurrencySelect');
  setSelect('billingCurrencySelect');
  setSelect('projCurrencySelect');

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  setText('projDirectAmountLabel', `Direct Payment Received (${cur.code}) *`);
  setText('projSupplierCostLabel', `Supplier & Operational Costs (${cur.code})`);
  setText('projUnitPriceHeader', `Unit Price (${cur.code})`);
  setText('billingUnitPriceHeader', `Unit Price (${cur.code})`);
  setText('previewUnitPriceHeader', `Unit Price (${cur.code})`);
}

function setStudioCurrency(code) {
  if (!STUDIO_CURRENCIES[code]) return;
  studioState.currency = code;
  if (studioState.billingDraft) {
    studioState.billingDraft.currency = code;
  }
  syncCurrencyLabelsUI();
  if (typeof renderProjectLineItemRows === 'function') renderProjectLineItemRows();
  if (typeof renderLiveBillingPreview === 'function') renderLiveBillingPreview();
  if (currentActiveView === 'stats' && typeof renderEventStatsView === 'function') renderEventStatsView();
  if (lastOcrOrganizedData && typeof organizeAndRenderOcrText === 'function') {
    const rawEl = document.getElementById('ocrResultTextarea');
    if (rawEl && rawEl.value) organizeAndRenderOcrText(rawEl.value);
  }
  saveStudioState();
  showToast(`Currency set to ${STUDIO_CURRENCIES[code].label}.`);
}

function formatCurrency(val, overrideCode, forPdf = false) {
  const cur = getActiveCurrencyMeta(overrideCode);
  const prefix = forPdf ? cur.pdfPrefix : cur.symbol;
  return prefix + (Number(val) || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatBytes(bytes) {
  const b = Number(bytes) || 0;
  if (b < 1024) return b + ' B';
  if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
  return (b / 1048576).toFixed(2) + ' MB';
}

function refreshAllUI() {
  syncCurrencyLabelsUI();
  markAllViewsDirty();
  renderViewIfNeeded(currentActiveView, true);
  renderGoogleAndCalendarModule();
}

/* ====================================================================== */
/* SECURITY & ENCRYPTION CENTER MODAL + KEY ROTATION + .ZENC BACKUPS      */
/* ====================================================================== */
async function refreshSecurityStatusUI() {
  const sidebarCipher = document.getElementById('sidebarCipherStatus');
  const lockCryptoLabel = document.getElementById('authLockCryptoLabel');
  const shortCipher = StudioCrypto.getActiveShortCipher();
  const fullEngine = StudioCrypto.getActiveEngineLabel();

  if (sidebarCipher) sidebarCipher.textContent = shortCipher;
  if (lockCryptoLabel) lockCryptoLabel.textContent = `${shortCipher} + PBKDF2-SHA256`;

  const cipherEl = document.getElementById('secModalCipherLabel');
  const kdfEl = document.getElementById('secModalKdfLabel');
  const storageEl = document.getElementById('secModalStorageStatus');
  const vaultEl = document.getElementById('secModalVaultStatus');
  const autoLockEl = document.getElementById('secAutoLockSelect');

  if (cipherEl) cipherEl.textContent = fullEngine;
  if (kdfEl) {
    const auth = getEffectiveProfileAuth(activeProfileId);
    kdfEl.textContent = `PBKDF2-HMAC-SHA256 • ${(auth.iterations / 1000).toFixed(0)}k${auth.isCustom ? ' (Custom)' : ''}`;
  }
  if (storageEl) {
    const profile = getActiveProfile();
    const raw = localStorage.getItem(profile.storageKey);
    let isEnc = false;
    try { isEnc = !!(raw && JSON.parse(raw).encV === 2); } catch (_) {}
    storageEl.textContent = isEnc ? 'Encrypted Envelope v2 (Active)' : 'Pending Encryption';
  }
  if (vaultEl && sessionCryptoState.unlocked) {
    const files = await getAllVaultFiles();
    const encCount = files.filter(f => f.encrypted).length;
    vaultEl.textContent = `${encCount} / ${files.length} files encrypted`;
  }
  if (autoLockEl) {
    autoLockEl.value = String(getSecurityPrefs().autoLockMinutes);
  }
}

async function openSecurityCenterModal() {
  if (!sessionCryptoState.unlocked) return;
  await refreshSecurityStatusUI();
  const modal = document.getElementById('securityCenterModal');
  const fb = document.getElementById('secPasscodeFeedback');
  if (fb) fb.textContent = '';
  if (modal) modal.classList.remove('hidden');
}

function closeSecurityCenterModal() {
  const modal = document.getElementById('securityCenterModal');
  if (modal) modal.classList.add('hidden');
}

function setSecurityAutoLockMinutes(val) {
  const mins = parseInt(val, 10);
  const clean = Number.isFinite(mins) && mins >= 0 ? mins : 15;
  saveSecurityPrefs({ autoLockMinutes: clean });
  resetIdleAutoLockTimer();
  showToast(clean > 0 ? `Auto-lock set to ${clean} minute${clean === 1 ? '' : 's'}.` : 'Idle auto-lock disabled (manual lock only).');
}

async function reencryptAllActiveDataNow() {
  if (!sessionCryptoState.unlocked || !sessionCryptoState.keyObj) return;
  try {
    await saveWriteQueue.catch(() => {});
    await persistEncryptedProfileState(sessionCryptoState.profileId, studioState, sessionCryptoState.keyObj);
    const rawList = await getRawVaultRecordsForActiveProfile();
    let count = 0;
    for (const rec of rawList) {
      const res = await getDecryptedVaultBlobByRecord(rec, sessionCryptoState.keyObj);
      if (res && res.blob) {
        await saveFileToIndexedDBVault(res.meta.filename, res.meta.folder, res.meta.mimeType, res.blob, {
          id: rec.id,
          projectId: res.meta.projectId || ''
        });
        count++;
      }
    }
    await refreshVaultTableUI();
    await refreshSecurityStatusUI();
    showToast(`Re-encrypted workspace & ${count} vault file${count === 1 ? '' : 's'} with fresh IVs.`);
  } catch (err) {
    console.error('Re-encryption error:', err);
    showToast('Error while re-encrypting vault.');
  }
}

async function handleChangeProfilePasscode(event) {
  event.preventDefault();
  if (!sessionCryptoState.unlocked || !sessionCryptoState.keyObj) return;
  const curEl = document.getElementById('secCurrentPassInput');
  const newEl = document.getElementById('secNewPassInput');
  const confirmEl = document.getElementById('secConfirmPassInput');
  const fb = document.getElementById('secPasscodeFeedback');

  const curPass = (curEl.value || '').trim();
  const newPass = (newEl.value || '').trim();
  const confirmPass = (confirmEl.value || '').trim();

  const setFb = (msg, isErr) => {
    if (!fb) return;
    fb.textContent = msg;
    fb.className = isErr ? 'text-[11px] text-rose-500 font-medium' : 'text-[11px] text-emerald-600 dark:text-emerald-400 font-medium';
  };

  if (newPass.length < 4) { setFb('New passcode must be at least 4 characters.', true); return; }
  if (newPass !== confirmPass) { setFb('New passcode and confirmation do not match.', true); return; }

  const verifiedAuth = await verifyPasscodeForProfile(curPass, activeProfileId);
  if (!verifiedAuth) { setFb('Current passcode is incorrect.', true); return; }

  // Prevent passcode collision across profiles
  for (const p of Object.values(STUDIO_PROFILES)) {
    if (p.id !== activeProfileId && await verifyPasscodeForProfile(newPass, p.id)) {
      setFb('That passcode is already assigned to another Studio profile.', true);
      return;
    }
  }

  try {
    setFb('Rotating salts & re-encrypting vault...', false);
    const oldKey = sessionCryptoState.keyObj;
    const iterations = 120000;
    const newAuthSalt = StudioCrypto.bytesToHex(StudioCrypto.randomBytes(16));
    const newDataSalt = StudioCrypto.bytesToHex(StudioCrypto.randomBytes(16));
    const newVerifier = await StudioCrypto.computeAuthVerifierHex(newPass, newAuthSalt, iterations);
    const newDataKey = await StudioCrypto.deriveDataKey(newPass, newDataSalt, iterations);

    // Decrypt all active-profile IndexedDB records with oldKey and re-encrypt under newDataKey
    if (dbInstance) {
      const rawList = await getRawVaultRecordsForActiveProfile();
      const plainItems = [];
      for (const rec of rawList) {
        const res = await getDecryptedVaultBlobByRecord(rec, oldKey);
        if (res && res.blob) plainItems.push({ id: rec.id, res });
      }
      sessionCryptoState.keyObj = newDataKey;
      for (const item of plainItems) {
        await saveFileToIndexedDBVault(
          item.res.meta.filename,
          item.res.meta.folder,
          item.res.meta.mimeType,
          item.res.blob,
          { id: item.id, projectId: item.res.meta.projectId || '' }
        );
      }
    } else {
      sessionCryptoState.keyObj = newDataKey;
    }

    await saveWriteQueue.catch(() => {});
    await persistEncryptedProfileState(activeProfileId, studioState, newDataKey);

    const overrides = getAuthMetaOverrides();
    const activeBuiltIn = STUDIO_PROFILES[activeProfileId] || {};
    overrides[activeProfileId] = {
      authSalt: newAuthSalt,
      dataSalt: newDataSalt,
      verifier: newVerifier,
      builtinVerifier: activeBuiltIn.verifier || '',
      iterations,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY_AUTH_META, JSON.stringify(overrides));

    curEl.value = '';
    newEl.value = '';
    confirmEl.value = '';
    setFb('Passcode rotated & vault re-encrypted.', false);
    await refreshSecurityStatusUI();
    showToast('Passcode updated and all records re-encrypted.');
  } catch (err) {
    console.error('Passcode rotation failed:', err);
    setFb('Rotation failed: ' + (err.message || 'Unknown error'), true);
  }
}

async function exportEncryptedZencBackup() {
  if (!sessionCryptoState.unlocked) return;
  const passEl = document.getElementById('secBackupPassphraseInput');
  const passphrase = (passEl && passEl.value ? passEl.value : '').trim();
  if (passphrase.length < 4) {
    showToast('Enter a backup passphrase (min 4 characters) above.');
    if (passEl) passEl.focus();
    return;
  }
  try {
    const profile = getActiveProfile();
    const saltHex = StudioCrypto.bytesToHex(StudioCrypto.randomBytes(16));
    const iterations = 120000;
    const backupKey = await StudioCrypto.deriveDataKey(passphrase, saltHex, iterations);
    const payload = {
      backupV: 2,
      app: 'EventManagementStudio',
      profileId: activeProfileId,
      studio: profile.name,
      exportedAt: new Date().toISOString(),
      state: studioState
    };
    const env = await StudioCrypto.encryptJsonEnvelope(payload, backupKey, 'zenc-backup', {
      format: 'ZENC-BACKUP-V2',
      salt: saltHex,
      iterations
    });
    if (backupKey.keyBytes) backupKey.keyBytes.fill(0);
    passEl.value = '';
    const slug = profile.name.replace(/\s+/g, '-');
    const blob = new Blob([JSON.stringify(env, null, 2)], { type: 'application/json' });
    triggerBrowserBlobDownload(blob, `${slug}-Encrypted-Backup-${new Date().toISOString().split('T')[0]}.zenc`);
    showToast('Exported AES-256 encrypted .zenc backup.');
  } catch (err) {
    console.error('Export .zenc error:', err);
    showToast('Failed to export encrypted backup.');
  }
}

async function importEncryptedZencBackup(event) {
  const file = event && event.target && event.target.files ? event.target.files[0] : null;
  if (!file || !sessionCryptoState.unlocked) return;
  const passEl = document.getElementById('secBackupPassphraseInput');
  const passphrase = (passEl && passEl.value ? passEl.value : '').trim();
  if (passphrase.length < 4) {
    showToast('Enter the backup passphrase first, then choose the .zenc file.');
    event.target.value = '';
    if (passEl) passEl.focus();
    return;
  }
  try {
    const raw = await file.text();
    const env = JSON.parse(raw);
    if (!env || env.encV !== 2 || !env.salt || !env.ct || !env.iv) {
      throw new Error('Invalid .zenc encrypted backup format.');
    }
    const backupKey = await StudioCrypto.deriveDataKey(passphrase, env.salt, env.iterations || 120000);
    const decrypted = await StudioCrypto.decryptJsonEnvelope(env, backupKey, env.aad || 'zenc-backup');
    if (backupKey.keyBytes) backupKey.keyBytes.fill(0);
    const counts = mergeJsonPayloadNonDestructive(decrypted);
    const mergedCount = counts.projects + counts.clients + counts.suppliers + counts.meetings + counts.orgProfiles;
    saveStudioState();
    passEl.value = '';
    event.target.value = '';
    showToast(`Decrypted backup: merged ${mergedCount} new record${mergedCount === 1 ? '' : 's'} non-destructively.`);
  } catch (err) {
    console.error('Import .zenc error:', err);
    event.target.value = '';
    showToast('Decryption failed: wrong passphrase or incompatible backup file.');
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const secModal = document.getElementById('securityCenterModal');
    if (secModal && !secModal.classList.contains('hidden')) {
      closeSecurityCenterModal();
      return;
    }
    const projWs = document.getElementById('projectWorkspaceContainer');
    if (projWs && !projWs.classList.contains('hidden')) {
      closeProjectWorkspace();
    }
  }
});

window.addEventListener('resize', syncMobileViewportOrientation);
window.addEventListener('orientationchange', () => setTimeout(syncMobileViewportOrientation, 60));

/* ====================================================================== */
/* INTERACTIVE LOCK SCREEN: 3D ISOMETRIC EVENT STAGE & SKYLINE MATRIX     */
/* ====================================================================== */
let lockCanvasRafId = null;
let lockCanvasInitialized = false;
const lockPointer = {
  x: -9999,
  y: -9999,
  targetX: -9999,
  targetY: -9999,
  vx: 0,
  vy: 0,
  speed: 0,
  active: false
};
const lockIsoState = { tileW: 72, tileH: 36, cols: 0, rows: 0, rowsList: [] };
const lockStageWaves = [];
const lockSkySparks = [];
const lockIsoPaletteCache = { light: null, dark: null };
const lockHaloCache = { light: null, dark: null };
const lockBgCache = { w: 0, h: 0, isDark: null, grad: null };
const lockRestRowScratch = [];
const lockActiveRowScratch = [];

function getIsoPaletteCache(isDark) {
  const key = isDark ? 'dark' : 'light';
  if (lockIsoPaletteCache[key]) return lockIsoPaletteCache[key];

  const pal = isDark
    ? {
        topBase: [26, 36, 54],
        leftBase: [19, 27, 42],
        rightBase: [12, 19, 31],
        blueTop: [56, 189, 248],
        blueLeft: [14, 116, 184],
        blueRight: [10, 70, 122],
        goldTop: [251, 191, 36],
        goldLeft: [186, 122, 16],
        goldRight: [124, 76, 10],
        rimBase: 'rgba(148, 163, 184, 0.13)'
      }
    : {
        topBase: [253, 254, 255],
        leftBase: [230, 237, 246],
        rightBase: [208, 219, 234],
        blueTop: [37, 99, 235],
        blueLeft: [29, 78, 216],
        blueRight: [30, 64, 175],
        goldTop: [245, 158, 11],
        goldLeft: [217, 119, 6],
        goldRight: [180, 83, 9],
        rimBase: 'rgba(148, 163, 184, 0.28)'
      };

  const mix = (a, b, t) =>
    `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;

  const levels = 32;
  const buildRamp = (topAcc, leftAcc, rightAcc) => {
    const ramp = new Array(levels);
    for (let i = 0; i < levels; i++) {
      const e = i / (levels - 1);
      const m = e * 0.90;
      ramp[i] = {
        top: mix(pal.topBase, topAcc, m),
        left: mix(pal.leftBase, leftAcc, m * 0.92),
        right: mix(pal.rightBase, rightAcc, m * 0.92),
        rim: e > 0.24 ? `rgba(${topAcc[0]},${topAcc[1]},${topAcc[2]},${(0.30 + e * 0.60).toFixed(2)})` : pal.rimBase,
        collar: e > 0.30 ? `rgba(${topAcc[0]},${topAcc[1]},${topAcc[2]},${(0.32 + e * 0.48).toFixed(2)})` : null
      };
    }
    return ramp;
  };

  const entry = {
    rimBase: pal.rimBase,
    restTop: `rgb(${pal.topBase[0]},${pal.topBase[1]},${pal.topBase[2]})`,
    restLeft: `rgb(${pal.leftBase[0]},${pal.leftBase[1]},${pal.leftBase[2]})`,
    restRight: `rgb(${pal.rightBase[0]},${pal.rightBase[1]},${pal.rightBase[2]})`,
    blue: buildRamp(pal.blueTop, pal.blueLeft, pal.blueRight),
    gold: buildRamp(pal.goldTop, pal.goldLeft, pal.goldRight)
  };
  lockIsoPaletteCache[key] = entry;
  return entry;
}

function getLockBgGradient(ctx, w, h, isDark) {
  if (lockBgCache.grad && lockBgCache.w === w && lockBgCache.h === h && lockBgCache.isDark === isDark) {
    return lockBgCache.grad;
  }
  const g = ctx.createLinearGradient(0, 0, w, h);
  if (isDark) {
    g.addColorStop(0, '#111827');
    g.addColorStop(0.55, '#192234');
    g.addColorStop(1, '#1E293B');
  } else {
    g.addColorStop(0, '#EEF3FB');
    g.addColorStop(0.5, '#E2EBF8');
    g.addColorStop(1, '#EDF2FA');
  }
  lockBgCache.w = w;
  lockBgCache.h = h;
  lockBgCache.isDark = isDark;
  lockBgCache.grad = g;
  return g;
}

function getCursorHaloSprite(isDark) {
  const key = isDark ? 'dark' : 'light';
  if (lockHaloCache[key]) return lockHaloCache[key];

  const off = document.createElement('canvas');
  off.width = 256;
  off.height = 256;
  const octx = off.getContext('2d');
  if (octx) {
    const g = octx.createRadialGradient(128, 128, 4, 128, 128, 128);
    if (isDark) {
      g.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
      g.addColorStop(0.55, 'rgba(251, 191, 36, 0.06)');
      g.addColorStop(1, 'rgba(15, 23, 42, 0)');
    } else {
      g.addColorStop(0, 'rgba(0, 122, 255, 0.11)');
      g.addColorStop(0.55, 'rgba(217, 119, 6, 0.04)');
      g.addColorStop(1, 'rgba(255, 255, 255, 0)');
    }
    octx.fillStyle = g;
    octx.fillRect(0, 0, 256, 256);
  }
  lockHaloCache[key] = off;
  return off;
}

function rebuildIsoGrid(w, h) {
  const tileW = w < 640 ? 58 : 72;
  const tileH = tileW * 0.5;
  const cols = Math.ceil(w / tileW) + 3;
  const rows = Math.ceil(h / (tileH * 0.5)) + 6;
  const rowsList = [];

  for (let r = -1; r < rows; r++) {
    const xOffset = (r % 2 !== 0) ? tileW * 0.5 : 0;
    const by = r * (tileH * 0.5);
    const yTerm = by * 0.0082;
    const sinY = Math.sin(yTerm);
    const cosY = Math.cos(yTerm);
    const rowCells = [];

    for (let c = -1; c < cols; c++) {
      const bx = c * tileW + xOffset;
      const xTerm = bx * 0.0068;
      const barTerm = bx * 0.019;
      const stepGroup = Math.abs(Math.sin(c * 0.52 + r * 0.31));
      const phase = r * 0.37 + c * 0.61;
      rowCells.push({
        bx,
        by,
        h: 8,
        v: 0,
        flash: 0,
        drawCx: bx,
        drawTy: by - 8,
        swatch: null,
        sinX: Math.sin(xTerm),
        cosX: Math.cos(xTerm),
        sinY,
        cosY,
        sinBar: Math.sin(barTerm),
        cosBar: Math.cos(barTerm),
        sinPh: Math.sin(phase),
        cosPh: Math.cos(phase),
        tier: stepGroup > 0.72 ? 8 : (stepGroup > 0.38 ? 3.5 : 0)
      });
    }
    rowsList.push(rowCells);
  }

  lockIsoState.tileW = tileW;
  lockIsoState.tileH = tileH;
  lockIsoState.cols = cols;
  lockIsoState.rows = rows;
  lockIsoState.rowsList = rowsList;
}

function initLockBgCanvas() {
  if (lockCanvasInitialized) return;
  const canvas = document.getElementById('lockBgCanvas');
  const lockScreen = document.getElementById('authLockScreen');
  if (!canvas || !lockScreen) return;
  lockCanvasInitialized = true;

  const resizeCanvas = () => {
    const w = window.innerWidth || 1280;
    const h = window.innerHeight || 720;
    const dprCap = (w * h > 1050000) ? 1.25 : 1.5;
    const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    const ctx = canvas.getContext('2d', { alpha: false }) || canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lockBgCache.grad = null;
    rebuildIsoGrid(w, h);
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  lockScreen.addEventListener('pointermove', (e) => {
    if (lockPointer.active) {
      const dvx = e.clientX - lockPointer.targetX;
      const dvy = e.clientY - lockPointer.targetY;
      lockPointer.vx = dvx;
      lockPointer.vy = dvy;
      const spd = Math.sqrt(dvx * dvx + dvy * dvy);
      lockPointer.speed = spd < 40 ? spd : 40;
    }
    lockPointer.targetX = e.clientX;
    lockPointer.targetY = e.clientY;
    lockPointer.active = true;
    if (lockPointer.x < -1000) {
      lockPointer.x = e.clientX;
      lockPointer.y = e.clientY;
    }
  }, { passive: true });

  lockScreen.addEventListener('pointerdown', (e) => {
    if (e.target.closest('#authLockCard')) return;
    lockStageWaves.push({ x: e.clientX, y: e.clientY, radius: 10, maxRadius: 620, strength: 1.15 });
    for (let i = 0; i < 18; i++) {
      const ang = (Math.PI * 2 * i) / 18 + (Math.random() - 0.5) * 0.25;
      const spd = 1.8 + Math.random() * 3.0;
      lockSkySparks.push({
        x: e.clientX,
        y: e.clientY,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd - 1.4,
        life: 1.0,
        gold: i % 2 === 0,
        size: 1.5 + Math.random() * 1.6
      });
    }
  }, { passive: true });

  lockScreen.addEventListener('pointerleave', () => {
    lockPointer.active = false;
    lockPointer.speed = 0;
  }, { passive: true });
}

function stopLockBgAnimation() {
  if (lockCanvasRafId) {
    cancelAnimationFrame(lockCanvasRafId);
    lockCanvasRafId = null;
  }
}

function drawBatchedRestingRow(ctx, rowList, by, hw, hh, palCache) {
  const len = rowList.length;
  if (!len) return;

  // Batch all left facets in this row
  ctx.beginPath();
  for (let i = 0; i < len; i++) {
    const c = rowList[i];
    const cx = c.drawCx;
    const ty = c.drawTy;
    ctx.moveTo(cx - hw, ty);
    ctx.lineTo(cx, ty + hh);
    ctx.lineTo(cx, by + hh);
    ctx.lineTo(cx - hw, by);
    ctx.closePath();
  }
  ctx.fillStyle = palCache.restLeft;
  ctx.fill();

  // Batch all right facets in this row
  ctx.beginPath();
  for (let i = 0; i < len; i++) {
    const c = rowList[i];
    const cx = c.drawCx;
    const ty = c.drawTy;
    ctx.moveTo(cx, ty + hh);
    ctx.lineTo(cx + hw, ty);
    ctx.lineTo(cx + hw, by);
    ctx.lineTo(cx, by + hh);
    ctx.closePath();
  }
  ctx.fillStyle = palCache.restRight;
  ctx.fill();

  // Batch all top caps + rim outlines in this row
  ctx.beginPath();
  for (let i = 0; i < len; i++) {
    const c = rowList[i];
    const cx = c.drawCx;
    const ty = c.drawTy;
    ctx.moveTo(cx, ty - hh);
    ctx.lineTo(cx + hw, ty);
    ctx.lineTo(cx, ty + hh);
    ctx.lineTo(cx - hw, ty);
    ctx.closePath();
  }
  ctx.fillStyle = palCache.restTop;
  ctx.fill();
  ctx.strokeStyle = palCache.rimBase;
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawIsoPillar(ctx, cx, by, ty, hw, hh, swatch) {
  // Left facet
  ctx.beginPath();
  ctx.moveTo(cx - hw, ty);
  ctx.lineTo(cx, ty + hh);
  ctx.lineTo(cx, by + hh);
  ctx.lineTo(cx - hw, by);
  ctx.fillStyle = swatch.left;
  ctx.fill();

  // Right facet
  ctx.beginPath();
  ctx.moveTo(cx, ty + hh);
  ctx.lineTo(cx + hw, ty);
  ctx.lineTo(cx + hw, by);
  ctx.lineTo(cx, by + hh);
  ctx.fillStyle = swatch.right;
  ctx.fill();

  // Illuminated architectural LED collar strip under active stage caps
  if (swatch.collar && (by - ty) > 14) {
    const band = Math.min(4.2, (by - ty) * 0.16);
    ctx.beginPath();
    ctx.moveTo(cx - hw, ty);
    ctx.lineTo(cx, ty + hh);
    ctx.lineTo(cx + hw, ty);
    ctx.lineTo(cx + hw, ty + band);
    ctx.lineTo(cx, ty + hh + band);
    ctx.lineTo(cx - hw, ty + band);
    ctx.fillStyle = swatch.collar;
    ctx.fill();
  }

  // Top diamond cap
  ctx.beginPath();
  ctx.moveTo(cx, ty - hh);
  ctx.lineTo(cx + hw, ty);
  ctx.lineTo(cx, ty + hh);
  ctx.lineTo(cx - hw, ty);
  ctx.closePath();
  ctx.fillStyle = swatch.top;
  ctx.fill();

  ctx.strokeStyle = swatch.rim;
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawPeakOverlayAndBeams(ctx, peaks, spotX, spotY, pointerActive, isDark, t) {
  // Cached GPU texture blit for soft floor spotlight halo
  const haloSprite = getCursorHaloSprite(isDark);
  ctx.drawImage(haloSprite, spotX - 210, spotY - 210, 420, 420);

  if (peaks.length) {
    peaks.sort((a, b) => b.energy - a.energy);
    const beamCount = Math.min(16, peaks.length);

    for (let i = 0; i < beamCount; i++) {
      const pk = peaks[i];
      const beamH = 42 + pk.energy * 72;
      const rgb = pk.gold
        ? (isDark ? '251, 191, 36' : '217, 119, 6')
        : (isDark ? '56, 189, 248' : '0, 122, 255');

      // Two-step translucent vertical stage pylon (zero gradient allocation)
      const midY = pk.y - beamH * 0.45;
      const topY = pk.y - beamH;
      ctx.beginPath();
      ctx.moveTo(pk.x - 1.4, pk.y);
      ctx.lineTo(pk.x + 1.4, pk.y);
      ctx.lineTo(pk.x + 3.4, midY);
      ctx.lineTo(pk.x - 3.4, midY);
      ctx.fillStyle = `rgba(${rgb}, ${(0.28 * pk.energy).toFixed(3)})`;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(pk.x - 3.4, midY);
      ctx.lineTo(pk.x + 3.4, midY);
      ctx.lineTo(pk.x + 5.5, topY);
      ctx.lineTo(pk.x - 5.5, topY);
      ctx.fillStyle = `rgba(${rgb}, ${(0.10 * pk.energy).toFixed(3)})`;
      ctx.fill();

      // Floating crisp diamond beacon above cap
      const by = pk.y - 9 - pk.energy * 7;
      ctx.beginPath();
      ctx.moveTo(pk.x, by - 3.2);
      ctx.lineTo(pk.x + 3.2, by);
      ctx.lineTo(pk.x, by + 3.2);
      ctx.lineTo(pk.x - 3.2, by);
      ctx.fillStyle = `rgba(${rgb}, ${(0.62 + pk.energy * 0.38).toFixed(3)})`;
      ctx.fill();
    }

    // Connect neighboring summits into a luminous executive skyline
    const maxConnect = Math.min(34, peaks.length);
    ctx.lineWidth = 1.15;
    for (let i = 0; i < maxConnect; i++) {
      const a = peaks[i];
      for (let j = i + 1; j < maxConnect; j++) {
        const b = peaks[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dSq = dx * dx + dy * dy;
        if (dSq < 12544 && dSq > 324) {
          const d = Math.sqrt(dSq);
          const alpha = (1 - d / 112) * Math.min(a.energy, b.energy) * (isDark ? 0.58 : 0.44);
          const rgb = (a.gold && b.gold)
            ? (isDark ? '251, 191, 36' : '217, 119, 6')
            : (isDark ? '125, 211, 252' : '0, 122, 255');
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${rgb}, ${alpha.toFixed(3)})`;
          ctx.stroke();
        }
      }
    }
  }

  // Dual pulsing isometric cue rings around active cursor
  if (pointerActive) {
    const pulse = 1 + Math.sin(t * 3.5) * 0.08;
    ctx.beginPath();
    ctx.ellipse(spotX, spotY, 48 * pulse, 24 * pulse, 0, 0, Math.PI * 2);
    ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.36)' : 'rgba(0, 122, 255, 0.28)';
    ctx.lineWidth = 1.25;
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(spotX, spotY, 82, 41, 0, 0, Math.PI * 2);
    ctx.strokeStyle = isDark ? 'rgba(251, 191, 36, 0.18)' : 'rgba(217, 119, 6, 0.14)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function triggerLockIntroWave(strength = 1.05) {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const w = window.innerWidth || 1280;
  const h = window.innerHeight || 720;
  const cx = w * 0.5;
  const cy = h * 0.5;
  lockStageWaves.push({
    x: cx,
    y: cy,
    radius: 14,
    maxRadius: Math.max(w, h) * 0.78,
    strength
  });
  for (let i = 0; i < 16; i++) {
    const ang = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.18;
    const spd = 1.6 + Math.random() * 2.4;
    lockSkySparks.push({
      x: cx + Math.cos(ang) * 28,
      y: cy + Math.sin(ang) * 16,
      vx: Math.cos(ang) * spd,
      vy: Math.sin(ang) * spd - 0.9,
      life: 0.95,
      gold: i % 2 === 0,
      size: 1.4 + Math.random() * 1.4
    });
  }
  if (lockSkySparks.length > 60) lockSkySparks.splice(0, lockSkySparks.length - 60);
}

function startLockBgAnimation() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  initLockBgCanvas();
  if (lockCanvasRafId) return;
  triggerLockIntroWave(1.05);

  const canvas = document.getElementById('lockBgCanvas');
  const lockScreen = document.getElementById('authLockScreen');
  if (!canvas || !lockScreen) return;
  const ctx = canvas.getContext('2d', { alpha: false }) || canvas.getContext('2d');
  if (!ctx) return;

  let lastNow = 0;
  let introStartNow = 0;

  const tick = (now) => {
    if (lockScreen.classList.contains('hidden')) {
      lockCanvasRafId = null;
      return;
    }

    const currentNow = now || performance.now();
    if (!lastNow) {
      lastNow = currentNow;
      introStartNow = currentNow;
    }
    const rawDt = (currentNow - lastNow) * 0.001;
    const dt = rawDt > 0 ? Math.min(0.033, Math.max(0.004, rawDt)) : (1 / 60);
    lastNow = currentNow;
    const step = dt * 60;
    const t = currentNow * 0.001;
    const introProgress = Math.min(1, Math.max(0, (currentNow - introStartNow) / 900));
    const introEase = 1 - Math.pow(1 - introProgress, 3);

    const w = window.innerWidth || 1280;
    const h = window.innerHeight || 720;
    const isDark = document.documentElement.classList.contains('dark');
    const palCache = getIsoPaletteCache(isDark);

    // Opaque canvas background fill (avoids alpha compositing with DOM underneath)
    ctx.fillStyle = getLockBgGradient(ctx, w, h, isDark);
    ctx.fillRect(0, 0, w, h);

    // Delta-time normalized cursor tracking & idle stage sweep
    const idleX = w * 0.5 + Math.sin(t * 0.52) * (w * 0.29);
    const idleY = h * 0.52 + Math.sin(t * 1.04) * (h * 0.20);
    const desiredX = lockPointer.active ? lockPointer.targetX : idleX;
    const desiredY = lockPointer.active ? lockPointer.targetY : idleY;

    if (lockPointer.x < -1000) {
      lockPointer.x = desiredX;
      lockPointer.y = desiredY;
    } else {
      const followLerp = 1 - Math.pow(0.85, step);
      lockPointer.x += (desiredX - lockPointer.x) * followLerp;
      lockPointer.y += (desiredY - lockPointer.y) * followLerp;
    }
    lockPointer.speed *= Math.pow(0.92, step);

    // Emit subtle trailing sparks smoothly once per frame when sweeping fast
    if (lockPointer.active && lockPointer.speed > 7 && Math.random() > 0.52) {
      lockSkySparks.push({
        x: lockPointer.targetX + (Math.random() - 0.5) * 24,
        y: lockPointer.targetY + (Math.random() - 0.5) * 14,
        vx: lockPointer.vx * 0.08 + (Math.random() - 0.5) * 0.8,
        vy: -0.7 - Math.random() * 1.4,
        life: 0.9,
        gold: Math.random() > 0.42,
        size: 1.3 + Math.random() * 1.3
      });
      if (lockSkySparks.length > 52) lockSkySparks.shift();
    }

    const spotX = lockPointer.x;
    const spotY = lockPointer.y;
    const parX = (spotX / w - 0.5) * 16;
    const parY = (spotY / h - 0.5) * 9;

    const { tileW, tileH, rowsList } = lockIsoState;
    const hw = tileW * 0.44;
    const hh = tileH * 0.44;
    const cursorRadius = (w < 640 ? 160 : 225) + Math.min(45, lockPointer.speed * 1.4);
    const cursorRadiusSq = cursorRadius * cursorRadius;
    const velBoost = 1 + Math.min(0.45, lockPointer.speed * 0.018);

    const subSteps = Math.max(1, Math.ceil(step));
    const sStep = step / subSteps;
    const subDamp = Math.pow(0.79, sStep);
    const subStiff = 0.21 * sStep;
    const flashDecay = Math.pow(0.91, step);
    const peaks = [];

    // Precompute frame-level trig terms once (zero per-cell Math.sin/cos)
    const sinWtX = Math.sin(t * 1.35);
    const cosWtX = Math.cos(t * 1.35);
    const sinWtY = Math.sin(t * 0.92);
    const cosWtY = Math.cos(t * 0.92);
    const sinBarT = Math.sin(t * 1.85);
    const cosBarT = Math.cos(t * 1.85);
    const sinPhT = Math.sin(t * 0.45);
    const cosPhT = Math.cos(t * 0.45);

    // Advance radial shockwaves
    for (let i = lockStageWaves.length - 1; i >= 0; i--) {
      const sw = lockStageWaves[i];
      sw.radius += 11.5 * step;
      sw.strength *= Math.pow(0.945, step);
      if (sw.radius >= sw.maxRadius || sw.strength < 0.03) {
        lockStageWaves.splice(i, 1);
      }
    }

    const hasWaves = lockStageWaves.length > 0;
    const minVisX = -hw;
    const maxVisX = w + hw;

    // Update spring physics and draw row-by-row back-to-front
    for (let r = 0; r < rowsList.length; r++) {
      const rowCells = rowsList[r];
      if (!rowCells.length) continue;

      const by = rowCells[0].by - parY;
      if (by < -hh || by - 120 > h) continue;

      lockRestRowScratch.length = 0;
      lockActiveRowScratch.length = 0;

      for (let c = 0; c < rowCells.length; c++) {
        const cell = rowCells[c];
        const cx = cell.bx - parX;

        // Trigonometric addition identity avoids per-cell sin/cos calls
        const waveX = cell.sinX * cosWtX - cell.cosX * sinWtX;
        const waveY = cell.cosY * cosWtY - cell.sinY * sinWtY;
        const wave = waveX * waveY;
        const barPulse = (cell.sinBar * cosBarT + cell.cosBar * sinBarT) * 0.5 + 0.5;
        let targetH = 8 + (cell.tier + (wave > 0 ? wave * 14 : 0) + barPulse * 6) * introEase;

        const dx = cx - spotX;
        const dy = by - spotY;
        const dSq = dx * dx + dy * dy;
        if (dSq < cursorRadiusSq) {
          const dist = Math.sqrt(dSq);
          const f = 1 - dist / cursorRadius;
          const ringHarmonic = lockPointer.active ? (0.86 + 0.14 * Math.sin(dist * 0.09 - t * 4.5)) : 1;
          targetH += f * f * (lockPointer.active ? 58 * velBoost : 30) * ringHarmonic * introEase;
        }

        cell.flash *= flashDecay;
        if (hasWaves) {
          for (let k = 0; k < lockStageWaves.length; k++) {
            const sw = lockStageWaves[k];
            const wdx = cx - sw.x;
            const wdy = by - sw.y;
            const band = Math.abs(Math.sqrt(wdx * wdx + wdy * wdy) - sw.radius);
            if (band < 46) {
              const pulse = (1 - band / 46) * sw.strength;
              cell.v += pulse * 6.2 * step;
              cell.flash = Math.max(cell.flash, pulse);
            }
          }
        }

        for (let s = 0; s < subSteps; s++) {
          cell.v = cell.v * subDamp + (targetH - cell.h) * subStiff;
          cell.h += cell.v * sStep;
        }

        if (cx < minVisX || cx > maxVisX) continue;

        const elev = cell.h > 4 ? cell.h : 4;
        const e = Math.max(0, Math.min(1, (elev - 12) / 58 + cell.flash * 0.55));
        const lvl = e <= 0 ? 0 : Math.min(31, Math.floor(e * 31));

        cell.drawCx = cx;
        cell.drawTy = by - elev;

        if (lvl === 0) {
          lockRestRowScratch.push(cell);
        } else {
          const isGold = cell.flash > 0.25 || (cell.sinPh * cosPhT + cell.cosPh * sinPhT) > 0.32;
          cell.swatch = (isGold ? palCache.gold : palCache.blue)[lvl];
          lockActiveRowScratch.push(cell);

          if (e > 0.44) {
            peaks.push({ x: cx, y: cell.drawTy, energy: e, gold: isGold });
          }
        }
      }

      drawBatchedRestingRow(ctx, lockRestRowScratch, by, hw, hh, palCache);
      for (let i = 0; i < lockActiveRowScratch.length; i++) {
        const ac = lockActiveRowScratch[i];
        drawIsoPillar(ctx, ac.drawCx, by, ac.drawTy, hw, hh, ac.swatch);
      }
    }

    // Peak beams, skyline threads, cached halo & pulsing reticle
    drawPeakOverlayAndBeams(ctx, peaks, spotX, spotY, lockPointer.active, isDark, t);

    // Floating sparks from fast sweeps & click cues
    const sparkDecay = 0.025 * step;
    const sparkDamp = Math.pow(0.96, step);
    for (let i = lockSkySparks.length - 1; i >= 0; i--) {
      const s = lockSkySparks[i];
      s.x += s.vx * step;
      s.y += s.vy * step;
      s.vx *= sparkDamp;
      s.life -= sparkDecay;
      if (s.life <= 0) {
        lockSkySparks.splice(i, 1);
        continue;
      }
      const rgb = s.gold
        ? (isDark ? '251, 191, 36' : '217, 119, 6')
        : (isDark ? '56, 189, 248' : '0, 122, 255');
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, ${s.life.toFixed(3)})`;
      ctx.fill();
    }

    lockCanvasRafId = requestAnimationFrame(tick);
  };

  lockCanvasRafId = requestAnimationFrame(tick);
}

let studioInitPromise = null;
async function ensureStudioInitialized() {
  if (studioInitPromise) return studioInitPromise;
  studioInitPromise = (async () => {
    try {
      const meetingDateEl = document.getElementById('meetingDateInput');
      if (meetingDateEl && !meetingDateEl.value) meetingDateEl.value = new Date().toISOString().split('T')[0];
      if (typeof indexedDB !== 'undefined') {
        await initIndexedDBVault();
      }
    } catch (err) {
      console.warn('IndexedDB vault unavailable:', err);
    }
  })();
  return studioInitPromise;
}

window.addEventListener('DOMContentLoaded', () => {
  syncMobileViewportOrientation();
  initAppearanceTheme();
  const lockCryptoLabel = document.getElementById('authLockCryptoLabel');
  if (lockCryptoLabel) lockCryptoLabel.textContent = `${StudioCrypto.getActiveShortCipher()} + PBKDF2-SHA256`;
  if (typeof startLockBgAnimation === 'function') startLockBgAnimation();
  if (typeof playLockScreenEntrance === 'function') playLockScreenEntrance();
  ensureStudioInitialized();
});

/* =====================================================================
   PRODUCTION TOOLKIT
   Run of Show / Cue Sheet • Crew Call Sheet • Milestone Payments •
   Gear Load-in/Load-out Checklist • Client Sign-off Signature Pad
   All data lives on project.production and is persisted through the
   existing encrypted saveStudioState() pipeline (AES-GCM, per profile).
   ===================================================================== */
let productionActiveTab = 'ros';
let signaturePadState = { drawing: false, hasInk: false, lastX: 0, lastY: 0 };

const ROS_FIELDS = [
  { key: 'time', label: 'Time', type: 'time', w: 'w-24' },
  { key: 'duration', label: 'Min', type: 'number', w: 'w-16' },
  { key: 'cue', label: 'Cue', type: 'text', w: 'w-16' },
  { key: 'segment', label: 'Segment / Item', type: 'text', w: 'min-w-[150px]' },
  { key: 'audio', label: 'Audio / Mics', type: 'text', w: 'min-w-[110px]' },
  { key: 'lighting', label: 'Lighting', type: 'text', w: 'min-w-[100px]' },
  { key: 'visuals', label: 'LED / Visuals', type: 'text', w: 'min-w-[110px]' },
  { key: 'talent', label: 'Talent / Presenter', type: 'text', w: 'min-w-[120px]' },
  { key: 'notes', label: 'Stage Manager Notes', type: 'text', w: 'min-w-[150px]' }
];

const CREW_FIELDS = [
  { key: 'name', label: 'Name', type: 'text', w: 'min-w-[120px]' },
  { key: 'role', label: 'Role', type: 'text', w: 'min-w-[110px]' },
  { key: 'phone', label: 'WhatsApp / Phone', type: 'tel', w: 'min-w-[120px]' },
  { key: 'date', label: 'Date', type: 'date', w: 'w-36' },
  { key: 'callTime', label: 'Call', type: 'time', w: 'w-24' },
  { key: 'wrapTime', label: 'Wrap', type: 'time', w: 'w-24' },
  { key: 'rate', label: 'Day Rate', type: 'number', w: 'w-24' }
];

const GEAR_STARTER_KITS = {
  conference: [
    ['Audio', 'Wireless handheld mic', 4], ['Audio', 'Lavalier / lapel mic', 4], ['Audio', 'Lectern gooseneck mic', 1],
    ['Audio', 'Digital mixer + stage box', 1], ['Visuals', 'LED wall processor', 1], ['Visuals', 'Confidence monitor', 2],
    ['Visuals', 'Presentation clicker + spare batteries', 2], ['Visuals', 'Laptop (show + backup)', 2],
    ['Comms', 'Clear-Com / walkie-talkie set', 6], ['Cables', 'HDMI / SDI runs + adapters', 1], ['Power', 'Power distro + extension reels', 1]
  ],
  concert: [
    ['Audio', 'Line array + subs', 1], ['Audio', 'IEM packs', 6], ['Audio', 'Wedge monitors', 6], ['Audio', 'Drum mic kit', 1],
    ['Lighting', 'Moving heads', 12], ['Lighting', 'LED wash fixtures', 16], ['Lighting', 'Hazer + fluid', 1], ['Lighting', 'Lighting console', 1],
    ['Staging', 'Truss + motors', 1], ['Staging', 'Risers / drum riser', 2], ['Power', '3-phase distro', 1], ['Comms', 'Intercom belt packs', 8]
  ],
  exhibition: [
    ['Visuals', 'Booth LED screen / TV', 2], ['Visuals', 'Media player', 2], ['Audio', 'Booth speaker + mic', 1],
    ['Furniture', 'Reception counter', 1], ['Furniture', 'Bar stools', 4], ['Lighting', 'Spotlights / track lights', 8],
    ['Branding', 'Graphics / vinyl kit', 1], ['Power', 'Multi-plug boards', 4], ['Tools', 'Toolkit + cable ties + gaffer tape', 1]
  ]
};

function prodUid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

function getToolkitProject() {
  const idEl = document.getElementById('projIdInput');
  const id = idEl ? idEl.value : '';
  return (studioState.projects || []).find(p => p.id === id) || null;
}

function ensureProduction(proj) {
  if (!proj) return null;
  if (!proj.production || typeof proj.production !== 'object') proj.production = {};
  const pr = proj.production;
  if (!Array.isArray(pr.ros)) pr.ros = [];
  if (!Array.isArray(pr.crew)) pr.crew = [];
  if (!Array.isArray(pr.payments)) pr.payments = [];
  if (!Array.isArray(pr.gear)) pr.gear = [];
  if (!pr.callInfo || typeof pr.callInfo !== 'object') pr.callInfo = {};
  return pr;
}

function persistProduction(rerender = true) {
  saveStudioState();
  if (rerender) {
    const proj = getToolkitProject();
    if (proj) renderProductionToolkit(proj);
  }
}

function setProductionTab(tab) {
  productionActiveTab = tab;
  document.querySelectorAll('#productionToolkitCard [data-ptab]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-ptab') === tab);
  });
  const proj = getToolkitProject();
  if (proj) renderProductionToolkit(proj);
}

function getProjectClientPhone(proj) {
  if (!proj || !proj.clientId) return '';
  const c = (studioState.clients || []).find(x => x.id === proj.clientId);
  return c && c.phone ? c.phone : '';
}

function openWhatsappText(phone, text) {
  const clean = normalizeWhatsappPhone(phone || '');
  const url = `https://wa.me/${clean}?text=${encodeURIComponent(text || '')}`;
  if (typeof window.open === 'function') window.open(url, '_blank', 'noopener,noreferrer');
}

async function copyTextToClipboard(text, okMsg) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    showToast(okMsg || 'Copied to clipboard.');
  } catch (e) {
    showToast('Clipboard unavailable. Please copy manually.');
  }
}

function prodSafeSlug(str) {
  return String(str || 'Event').replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'Event';
}

function prodDownloadCsv(filename, header, rows) {
  const esc = v => {
    const s = String(v === undefined || v === null ? '' : v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [header.map(esc).join(','), ...rows.map(r => r.map(esc).join(','))].join('\n');
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
  triggerBrowserBlobDownload(blob, filename);
  showToast(`Downloaded "${filename}"`);
}

/* Generic jsPDF table document used by Run of Show, Call Sheet and Gear list */
async function buildProductionTablePdf({ title, subtitle, infoLines = [], columns, rows, filename, orientation = 'landscape', projectId = '' }) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    showToast('PDF engine is still loading. Please try again in a moment.');
    return null;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 32;
  const usableW = pageW - margin * 2;
  const totalWeight = columns.reduce((s, c) => s + (c.weight || 1), 0);
  const colW = columns.map(c => (usableW * (c.weight || 1)) / totalWeight);

  const drawHeader = () => {
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, pageW, 64, 'F');
    doc.setFillColor(0, 122, 255);
    doc.rect(0, 0, pageW, 4, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text(String(title || ''), margin, 30);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(203, 213, 225);
    doc.text(String(subtitle || ''), margin, 47);
    doc.text(`Generated ${new Date().toLocaleString()}`, pageW - margin, 47, { align: 'right' });
  };

  const drawTableHead = (y) => {
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, usableW, 20, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    let x = margin;
    columns.forEach((c, i) => {
      doc.text(String(c.label), x + 4, y + 13);
      x += colW[i];
    });
    return y + 20;
  };

  drawHeader();
  let y = 82;
  if (infoLines.length) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    infoLines.filter(Boolean).forEach(line => {
      const wrapped = doc.splitTextToSize(String(line), usableW);
      doc.text(wrapped, margin, y);
      y += 12 * wrapped.length;
    });
    y += 6;
  }
  y = drawTableHead(y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  rows.forEach((row, rIdx) => {
    const cells = columns.map((c, i) => doc.splitTextToSize(String(row[i] === undefined || row[i] === null ? '' : row[i]), colW[i] - 8));
    const lines = Math.max(1, ...cells.map(c => c.length));
    const rowH = lines * 10 + 8;
    if (y + rowH > pageH - margin) {
      doc.addPage();
      drawHeader();
      y = drawTableHead(82);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
    }
    if (rIdx % 2 === 1) {
      doc.setFillColor(248, 250, 252);
      doc.rect(margin, y, usableW, rowH, 'F');
    }
    doc.setTextColor(15, 23, 42);
    let x = margin;
    cells.forEach((lines2, i) => {
      doc.text(lines2, x + 4, y + 12);
      x += colW[i];
    });
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y + rowH, margin + usableW, y + rowH);
    y += rowH;
  });

  if (rows.length === 0) {
    doc.setTextColor(148, 163, 184);
    doc.text('No entries yet.', margin + 4, y + 14);
  }

  const blob = doc.output('blob');
  triggerBrowserBlobDownload(blob, filename);
  try {
    await saveFileToIndexedDBVault(filename, '/01_Event_Projects/', 'application/pdf', blob, { projectId });
  } catch (e) { /* vault optional */ }
  showToast(`Saved "${filename}"`);
  return blob;
}

/* ---------- Generic row editing ---------- */
function updateProductionRow(listKey, rowId, field, value) {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  const row = (pr[listKey] || []).find(r => r.id === rowId);
  if (!row) return;
  if (field === 'rate' || field === 'amount' || field === 'qty' || field === 'duration') {
    row[field] = parseFloat(value) || 0;
  } else if (field === 'confirmed' || field === 'loadIn' || field === 'loadOut') {
    row[field] = !!value;
  } else {
    row[field] = value;
  }
  if (listKey === 'payments' && field === 'status') {
    row.paidDate = value === 'paid' ? (row.paidDate || new Date().toISOString().split('T')[0]) : '';
    persistProduction(true);
    return;
  }
  persistProduction(false);
  refreshProductionSummaries(proj);
}

function removeProductionRow(listKey, rowId) {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  pr[listKey] = (pr[listKey] || []).filter(r => r.id !== rowId);
  persistProduction(true);
}

function moveProductionRow(listKey, rowId, dir) {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  const list = pr[listKey];
  const i = list.findIndex(r => r.id === rowId);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= list.length) return;
  [list[i], list[j]] = [list[j], list[i]];
  persistProduction(true);
}

function prodInput(listKey, row, f) {
  const val = row[f.key] === undefined || row[f.key] === null ? '' : row[f.key];
  return `<input type="${f.type}" ${f.type === 'number' ? 'min="0" step="any"' : ''} value="${escapeHtml(val)}" aria-label="${escapeHtml(f.label)}" placeholder="${escapeHtml(f.label)}" onchange="updateProductionRow('${listKey}', '${row.id}', '${f.key}', this.value)" class="helios-input ${f.w} w-full px-2 py-1 text-xs ${f.type === 'time' || f.type === 'number' || f.type === 'date' ? 'font-mono' : ''}" />`;
}

/* ---------- Master render ---------- */
function renderProductionToolkit(proj) {
  const body = document.getElementById('productionToolkitBody');
  if (!body || !proj) return;
  ensureProduction(proj);
  document.querySelectorAll('#productionToolkitCard [data-ptab]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-ptab') === productionActiveTab);
  });
  if (productionActiveTab === 'crew') body.innerHTML = renderCrewTab(proj);
  else if (productionActiveTab === 'pay') body.innerHTML = renderPaymentsTab(proj);
  else if (productionActiveTab === 'gear') body.innerHTML = renderGearTab(proj);
  else if (productionActiveTab === 'sign') { body.innerHTML = renderSignTab(proj); initSignaturePad(); }
  else body.innerHTML = renderRosTab(proj);
  refreshProductionSummaries(proj);
}

function refreshProductionSummaries(proj) {
  const pr = ensureProduction(proj);
  if (!pr) return;
  const cur = proj.currency || getActiveCurrencyCode();
  const crewEl = document.getElementById('prodCrewSummary');
  if (crewEl) {
    const total = pr.crew.reduce((s, c) => s + (Number(c.rate) || 0), 0);
    const confirmed = pr.crew.filter(c => c.confirmed).length;
    crewEl.innerHTML = `<span class="font-semibold">${pr.crew.length}</span> crew • <span class="text-emerald-600 dark:text-emerald-400 font-semibold">${confirmed} confirmed</span> • Labour cost <span class="font-mono font-semibold">${escapeHtml(formatCurrency(total, cur))}</span>`;
  }
  const payEl = document.getElementById('prodPaySummary');
  if (payEl) payEl.innerHTML = renderPaymentSummaryHTML(proj);
  const rosEl = document.getElementById('prodRosSummary');
  if (rosEl) {
    const mins = pr.ros.reduce((s, r) => s + (Number(r.duration) || 0), 0);
    const first = pr.ros.find(r => r.time);
    rosEl.textContent = `${pr.ros.length} cue${pr.ros.length === 1 ? '' : 's'} • ${Math.floor(mins / 60)}h ${mins % 60}m running time${first ? ' • starts ' + first.time : ''}`;
  }
  const gearEl = document.getElementById('prodGearSummary');
  if (gearEl) {
    const n = pr.gear.length;
    const inC = pr.gear.filter(g => g.loadIn).length;
    const outC = pr.gear.filter(g => g.loadOut).length;
    gearEl.innerHTML = `${n} items • Load-in <span class="font-mono font-semibold">${inC}/${n}</span> • Load-out <span class="font-mono font-semibold ${n && outC < n ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">${outC}/${n}</span>`;
  }
}

/* =================== RUN OF SHOW =================== */
function renderRosTab(proj) {
  const pr = proj.production;
  const rows = pr.ros.map((r, idx) => `
    <tr class="align-top">
      <td class="py-1 pr-1 text-slate-400 font-mono">${idx + 1}</td>
      ${ROS_FIELDS.map(f => `<td class="py-1 px-1">${prodInput('ros', r, f)}</td>`).join('')}
      <td class="py-1 pl-1 whitespace-nowrap">
        <button type="button" onclick="moveProductionRow('ros','${r.id}',-1)" class="btn-mac-secondary px-1.5 py-1 text-[10px]" aria-label="Move up">↑</button>
        <button type="button" onclick="moveProductionRow('ros','${r.id}',1)" class="btn-mac-secondary px-1.5 py-1 text-[10px]" aria-label="Move down">↓</button>
        <button type="button" onclick="removeProductionRow('ros','${r.id}')" class="btn-mac-secondary px-1.5 py-1 text-[10px] text-rose-500" aria-label="Remove cue">&times;</button>
      </td>
    </tr>`).join('');
  return `
    <div class="space-y-3">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div id="prodRosSummary" class="text-[11px] text-slate-500 dark:text-slate-400"></div>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" onclick="addRosCue()" class="btn-mac-primary px-3 py-1.5 text-xs">+ Add Cue</button>
          <button type="button" onclick="loadRosTemplate()" class="btn-mac-secondary px-3 py-1.5 text-xs">Starter Template</button>
          <button type="button" onclick="autoChainRosTimes()" class="btn-mac-secondary px-3 py-1.5 text-xs" title="Recalculate each cue time from the first cue + durations">Auto-chain Times</button>
          <button type="button" onclick="sortRosByTime()" class="btn-mac-secondary px-3 py-1.5 text-xs">Sort by Time</button>
          <button type="button" onclick="exportRosPdf()" class="btn-mac-secondary px-3 py-1.5 text-xs">Cue Sheet PDF</button>
          <button type="button" onclick="exportRosCsv()" class="btn-mac-secondary px-3 py-1.5 text-xs">CSV</button>
          <button type="button" onclick="shareRosWhatsapp()" class="btn-mac-secondary px-3 py-1.5 text-xs text-emerald-600 dark:text-emerald-400">WhatsApp</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead><tr class="text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-200/70 dark:border-white/10">
            <th class="py-1.5 pr-1">#</th>${ROS_FIELDS.map(f => `<th class="py-1.5 px-1">${f.label}</th>`).join('')}<th></th>
          </tr></thead>
          <tbody>${rows || `<tr><td colspan="${ROS_FIELDS.length + 2}" class="py-5 text-center text-slate-400">No cues yet. Add a cue or load the starter template.</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;
}

function rosTimeToMin(t) {
  const m = /^(\d{1,2}):(\d{2})/.exec(t || '');
  return m ? (parseInt(m[1], 10) * 60 + parseInt(m[2], 10)) : null;
}
function rosMinToTime(min) {
  const v = ((min % 1440) + 1440) % 1440;
  return `${String(Math.floor(v / 60)).padStart(2, '0')}:${String(v % 60).padStart(2, '0')}`;
}

function addRosCue() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  const last = pr.ros[pr.ros.length - 1];
  let time = '';
  if (last && rosTimeToMin(last.time) !== null) time = rosMinToTime(rosTimeToMin(last.time) + (Number(last.duration) || 0));
  pr.ros.push({ id: prodUid('cue'), time, duration: 5, cue: `Q${pr.ros.length + 1}`, segment: '', audio: '', lighting: '', visuals: '', talent: '', notes: '' });
  persistProduction(true);
}

function loadRosTemplate() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  if (pr.ros.length && !confirm('Append the starter template to the existing cues?')) return;
  const tpl = [
    ['18:00', 30, 'Doors open • Registration & welcome drinks', 'Walk-in playlist', 'Ambient wash', 'Holding slide / sponsor loop', 'Hostesses', 'Check VIP seating'],
    ['18:30', 2, 'Voice of God — welcome & housekeeping', 'VOG mic live', 'House to half', 'VOG slide', 'VOG', 'Phones on silent'],
    ['18:32', 3, 'Opening video', 'Video playback audio', 'House out', 'Opener video', '—', 'Standby for MC'],
    ['18:35', 10, 'MC welcome', 'HH mic 1', 'Stage special', 'MC lower third', 'MC', ''],
    ['18:45', 20, 'Keynote address', 'Lectern mic + Lav 1', 'Lectern special', 'Presenter deck', 'Keynote speaker', 'Clicker check'],
    ['19:05', 30, 'Panel discussion', 'Lav 2–5', 'Panel wash', 'Panel names', 'Moderator + panelists', 'Q&A mics standby'],
    ['19:35', 25, 'Awards segment', 'Award walk-up stings', 'Chase spots', 'Winner slides', 'MC + presenters', 'Trophies stage left'],
    ['20:00', 5, 'Closing remarks & photo', 'HH mic 1', 'Full stage', 'Thank you slide', 'Host', 'Group photo cue'],
    ['20:05', 60, 'Dinner & networking', 'Background playlist', 'Dinner state', 'Sponsor loop', '—', '']
  ];
  tpl.forEach((t, i) => pr.ros.push({ id: prodUid('cue'), time: t[0], duration: t[1], cue: `Q${pr.ros.length + 1}`, segment: t[2], audio: t[3], lighting: t[4], visuals: t[5], talent: t[6], notes: t[7] }));
  persistProduction(true);
  showToast('Starter run of show loaded.');
}

function autoChainRosTimes() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr || !pr.ros.length) return;
  let cursor = rosTimeToMin(pr.ros[0].time);
  if (cursor === null) { showToast('Set a time on the first cue first.'); return; }
  pr.ros.forEach(r => { r.time = rosMinToTime(cursor); cursor += Number(r.duration) || 0; });
  persistProduction(true);
  showToast('Cue times recalculated.');
}

function sortRosByTime() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  pr.ros.sort((a, b) => (rosTimeToMin(a.time) ?? 99999) - (rosTimeToMin(b.time) ?? 99999));
  persistProduction(true);
}

function getRosRows(proj) {
  return proj.production.ros.map(r => [r.time, r.duration ? `${r.duration}m` : '', r.cue, r.segment, r.audio, r.lighting, r.visuals, r.talent, r.notes]);
}

function exportRosPdf() {
  const proj = getToolkitProject();
  if (!proj) return;
  ensureProduction(proj);
  const ci = proj.production.callInfo || {};
  buildProductionTablePdf({
    title: `RUN OF SHOW — ${proj.name}`,
    subtitle: `${formatProjectDateRange(proj)}${ci.venue ? ' • ' + ci.venue : ''}`,
    columns: [
      { label: 'Time', weight: 0.7 }, { label: 'Dur', weight: 0.5 }, { label: 'Cue', weight: 0.5 }, { label: 'Segment', weight: 2.2 },
      { label: 'Audio', weight: 1.4 }, { label: 'Lighting', weight: 1.2 }, { label: 'LED / Visuals', weight: 1.4 }, { label: 'Talent', weight: 1.3 }, { label: 'Notes', weight: 1.8 }
    ],
    rows: getRosRows(proj),
    filename: `${prodSafeSlug(proj.name)}-Run-of-Show.pdf`,
    projectId: proj.id
  });
}

function exportRosCsv() {
  const proj = getToolkitProject();
  if (!proj) return;
  ensureProduction(proj);
  prodDownloadCsv(`${prodSafeSlug(proj.name)}-Run-of-Show.csv`, ['Time', 'Duration (min)', 'Cue', 'Segment', 'Audio', 'Lighting', 'LED / Visuals', 'Talent', 'Notes'],
    proj.production.ros.map(r => [r.time, r.duration, r.cue, r.segment, r.audio, r.lighting, r.visuals, r.talent, r.notes]));
}

function shareRosWhatsapp() {
  const proj = getToolkitProject();
  if (!proj) return;
  ensureProduction(proj);
  const lines = [`*RUN OF SHOW — ${proj.name}*`, formatProjectDateRange(proj), ''];
  proj.production.ros.forEach(r => {
    lines.push(`*${r.time || '--:--'}* ${r.cue ? '[' + r.cue + '] ' : ''}${r.segment || ''}${r.talent ? ' — ' + r.talent : ''}${r.duration ? ` (${r.duration}m)` : ''}`);
  });
  const phone = prompt('Send run of show to WhatsApp number (leave blank to choose a chat):', '');
  if (phone === null) return;
  openWhatsappText(phone, lines.join('\n'));
}

/* =================== CREW CALL SHEET =================== */
function renderCrewTab(proj) {
  const pr = proj.production;
  const ci = pr.callInfo;
  const supplierOpts = (studioState.suppliers || []).map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(s.name)}${s.category ? ' — ' + escapeHtml(s.category) : ''}</option>`).join('');
  const infoField = (key, label, ph) => `
    <div>
      <label class="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">${label}</label>
      <input type="text" value="${escapeHtml(ci[key] || '')}" placeholder="${escapeHtml(ph)}" onchange="updateCallInfo('${key}', this.value)" class="helios-input w-full px-2.5 py-1.5 text-xs" />
    </div>`;
  const rows = pr.crew.map(c => `
    <tr class="align-top">
      ${CREW_FIELDS.map(f => `<td class="py-1 px-1">${prodInput('crew', c, f)}</td>`).join('')}
      <td class="py-1 px-1 text-center"><input type="checkbox" ${c.confirmed ? 'checked' : ''} aria-label="Confirmed" onchange="updateProductionRow('crew','${c.id}','confirmed', this.checked)" class="mt-1.5 accent-emerald-500" /></td>
      <td class="py-1 pl-1 whitespace-nowrap">
        <button type="button" onclick="sendCrewCallWhatsapp('${c.id}')" class="btn-mac-secondary px-2 py-1 text-[10px] text-emerald-600 dark:text-emerald-400">WhatsApp</button>
        <button type="button" onclick="removeProductionRow('crew','${c.id}')" class="btn-mac-secondary px-1.5 py-1 text-[10px] text-rose-500" aria-label="Remove crew">&times;</button>
      </td>
    </tr>`).join('');
  return `
    <div class="space-y-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        ${infoField('venue', 'Venue', 'e.g., DWTC Hall 4, Loading Bay 2')}
        ${infoField('mapLink', 'Map / Location Pin', 'Google Maps link')}
        ${infoField('dressCode', 'Dress Code', 'e.g., All black, closed shoes')}
        ${infoField('meals', 'Meals / Breaks', 'e.g., Lunch 13:00, Dinner 19:30')}
        ${infoField('parking', 'Parking / Access', 'e.g., Gate 3, passes at security')}
        ${infoField('onsiteContact', 'On-site Contact', 'Name + mobile')}
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div id="prodCrewSummary" class="text-[11px] text-slate-500 dark:text-slate-400"></div>
        <div class="flex flex-wrap items-center gap-1.5">
          <button type="button" onclick="addCrewMember()" class="btn-mac-primary px-3 py-1.5 text-xs">+ Add Crew</button>
          ${supplierOpts ? `<select aria-label="Add from suppliers" onchange="addCrewFromSupplier(this.value); this.value='';" class="helios-input px-2 py-1.5 text-xs"><option value="">+ From Suppliers…</option>${supplierOpts}</select>` : ''}
          <button type="button" onclick="copyGroupCallSheet()" class="btn-mac-secondary px-3 py-1.5 text-xs">Copy Group Call Sheet</button>
          <button type="button" onclick="exportCallSheetPdf()" class="btn-mac-secondary px-3 py-1.5 text-xs">Call Sheet PDF</button>
          <button type="button" onclick="applyCrewCostToProject()" class="btn-mac-secondary px-3 py-1.5 text-xs" title="Add crew labour total into this project's supplier costs">Apply to Costs</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead><tr class="text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-200/70 dark:border-white/10">
            ${CREW_FIELDS.map(f => `<th class="py-1.5 px-1">${f.label}</th>`).join('')}<th class="py-1.5 px-1 text-center">OK</th><th></th>
          </tr></thead>
          <tbody>${rows || `<tr><td colspan="${CREW_FIELDS.length + 2}" class="py-5 text-center text-slate-400">No crew assigned yet.</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;
}

function updateCallInfo(key, value) {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  pr.callInfo[key] = (value || '').trim();
  persistProduction(false);
}

function addCrewMember(seed = {}) {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  const start = getProjectWorkingSummary(proj).start || proj.dateCreated || '';
  pr.crew.push(Object.assign({ id: prodUid('crew'), name: '', role: '', phone: '', date: start, callTime: '08:00', wrapTime: '', rate: 0, confirmed: false }, seed));
  persistProduction(true);
}

function addCrewFromSupplier(supplierId) {
  if (!supplierId) return;
  const s = (studioState.suppliers || []).find(x => x.id === supplierId);
  if (!s) return;
  addCrewMember({ name: s.contactPerson ? `${s.contactPerson} (${s.name})` : s.name, role: s.category || '', phone: s.phone || '' });
}

function buildCallSheetText(proj, crewMember) {
  const ci = proj.production.callInfo || {};
  const lines = [];
  lines.push(`*CALL SHEET — ${proj.name}*`);
  if (crewMember) {
    lines.push(`Hi ${crewMember.name || 'there'}, here are your call details${crewMember.role ? ' as *' + crewMember.role + '*' : ''}:`);
    lines.push('');
    lines.push(`📅 Date: ${crewMember.date || formatProjectDateRange(proj)}`);
    lines.push(`⏰ Call time: *${crewMember.callTime || 'TBC'}*${crewMember.wrapTime ? ' • Est. wrap ' + crewMember.wrapTime : ''}`);
  } else {
    lines.push(`📅 ${formatProjectDateRange(proj)}`);
  }
  if (ci.venue) lines.push(`📍 Venue: ${ci.venue}`);
  if (ci.mapLink) lines.push(`🗺️ Pin: ${ci.mapLink}`);
  if (ci.parking) lines.push(`🚗 Access: ${ci.parking}`);
  if (ci.dressCode) lines.push(`👕 Dress code: ${ci.dressCode}`);
  if (ci.meals) lines.push(`🍽️ Meals: ${ci.meals}`);
  if (ci.onsiteContact) lines.push(`📞 On-site contact: ${ci.onsiteContact}`);
  if (!crewMember) {
    lines.push('');
    lines.push('*CREW*');
    proj.production.crew.forEach(c => {
      lines.push(`• ${c.callTime || '--:--'} — ${c.name || 'TBC'}${c.role ? ' (' + c.role + ')' : ''}${c.date ? ' • ' + c.date : ''}`);
    });
  }
  lines.push('');
  lines.push('Please reply to confirm. Thank you!');
  return lines.join('\n');
}

function sendCrewCallWhatsapp(crewId) {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  const c = pr && pr.crew.find(x => x.id === crewId);
  if (!c) return;
  if (!c.phone) showToast('No phone saved — choose the chat in WhatsApp.');
  openWhatsappText(c.phone, buildCallSheetText(proj, c));
}

function copyGroupCallSheet() {
  const proj = getToolkitProject();
  if (!proj) return;
  ensureProduction(proj);
  copyTextToClipboard(buildCallSheetText(proj, null), 'Group call sheet copied — paste into your crew WhatsApp group.');
}

function exportCallSheetPdf() {
  const proj = getToolkitProject();
  if (!proj) return;
  const pr = ensureProduction(proj);
  const ci = pr.callInfo;
  buildProductionTablePdf({
    title: `CREW CALL SHEET — ${proj.name}`,
    subtitle: formatProjectDateRange(proj),
    infoLines: [
      ci.venue ? `Venue: ${ci.venue}` : '', ci.mapLink ? `Location: ${ci.mapLink}` : '', ci.parking ? `Access / Parking: ${ci.parking}` : '',
      ci.dressCode ? `Dress code: ${ci.dressCode}` : '', ci.meals ? `Meals: ${ci.meals}` : '', ci.onsiteContact ? `On-site contact: ${ci.onsiteContact}` : ''
    ],
    columns: [{ label: 'Name', weight: 1.6 }, { label: 'Role', weight: 1.3 }, { label: 'Phone', weight: 1.2 }, { label: 'Date', weight: 0.9 }, { label: 'Call', weight: 0.6 }, { label: 'Wrap', weight: 0.6 }, { label: 'Confirmed', weight: 0.7 }],
    rows: pr.crew.map(c => [c.name, c.role, c.phone, c.date, c.callTime, c.wrapTime, c.confirmed ? 'Yes' : 'Pending']),
    filename: `${prodSafeSlug(proj.name)}-Call-Sheet.pdf`,
    projectId: proj.id
  });
}

function applyCrewCostToProject() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  const total = pr.crew.reduce((s, c) => s + (Number(c.rate) || 0), 0);
  const prev = Number(pr.crewCostApplied) || 0;
  const base = Math.max(0, (Number(proj.supplierCosts) || 0) - prev);
  const next = base + total;
  const cur = proj.currency || getActiveCurrencyCode();
  if (!confirm(`Update supplier costs to ${formatCurrency(next, cur)} (includes crew labour ${formatCurrency(total, cur)})?`)) return;
  proj.supplierCosts = Math.round(next * 100) / 100;
  pr.crewCostApplied = total;
  const costInput = document.getElementById('projSupplierCostInput');
  if (costInput) costInput.value = proj.supplierCosts;
  saveStudioState();
  renderProjectInfoOverview(proj);
  showToast('Crew labour applied to project costs.');
}

/* =================== MILESTONE PAYMENTS =================== */
function getPaymentStats(proj) {
  const pr = ensureProduction(proj);
  const total = getProjectRevenue(proj);
  const today = new Date().toISOString().split('T')[0];
  let received = 0;
  let overdue = 0;
  let nextDue = null;
  (pr ? pr.payments : []).forEach(p => {
    const amt = Number(p.amount) || 0;
    if (p.status === 'paid') received += amt;
    else {
      if (p.dueDate && p.dueDate < today) overdue++;
      if (p.dueDate && (!nextDue || p.dueDate < nextDue.dueDate)) nextDue = p;
    }
  });
  const scheduled = (pr ? pr.payments : []).reduce((s, p) => s + (Number(p.amount) || 0), 0);
  return { total, received, balance: Math.max(0, total - received), overdue, nextDue, scheduled, count: pr ? pr.payments.length : 0 };
}

function getPaymentBadgeHTML(proj) {
  if (!proj || !proj.production || !Array.isArray(proj.production.payments) || !proj.production.payments.length) return '';
  if ((proj.status || '') === 'Cancelled') return '';
  const s = getPaymentStats(proj);
  let cls = 'bg-amber-500/15 text-amber-700 dark:text-amber-300';
  let label = s.received > 0 ? 'Deposit Paid' : 'Unpaid';
  if (s.total > 0 && s.received >= s.total - 0.005) { cls = 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'; label = 'Fully Paid'; }
  else if (s.overdue > 0) { cls = 'bg-rose-500/15 text-rose-600 dark:text-rose-300'; label = `${s.overdue} Overdue`; }
  return `<span class="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${cls}">${label}</span>`;
}

function renderPaymentSummaryHTML(proj) {
  const s = getPaymentStats(proj);
  const cur = proj.currency || getActiveCurrencyCode();
  const pct = s.total > 0 ? Math.min(100, Math.round((s.received / s.total) * 100)) : 0;
  const mismatch = s.count && Math.abs(s.scheduled - s.total) > 0.01
    ? `<div class="text-[11px] text-amber-600 dark:text-amber-400">Scheduled milestones (${escapeHtml(formatCurrency(s.scheduled, cur))}) don't match project total.</div>` : '';
  return `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div class="p-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"><div class="text-[10px] uppercase tracking-wider text-slate-400">Project Total</div><div class="font-mono font-semibold">${escapeHtml(formatCurrency(s.total, cur))}</div></div>
      <div class="p-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"><div class="text-[10px] uppercase tracking-wider text-slate-400">Received</div><div class="font-mono font-semibold text-emerald-600 dark:text-emerald-400">${escapeHtml(formatCurrency(s.received, cur))}</div></div>
      <div class="p-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"><div class="text-[10px] uppercase tracking-wider text-slate-400">Balance Due</div><div class="font-mono font-semibold ${s.balance > 0 ? 'text-amber-600 dark:text-amber-400' : ''}">${escapeHtml(formatCurrency(s.balance, cur))}</div></div>
      <div class="p-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"><div class="text-[10px] uppercase tracking-wider text-slate-400">Overdue</div><div class="font-mono font-semibold ${s.overdue ? 'text-rose-500' : ''}">${s.overdue}</div></div>
    </div>
    <div class="mt-2 h-2 rounded-full bg-slate-500/10 overflow-hidden"><div class="h-full bg-emerald-500 transition-all" style="width:${pct}%"></div></div>
    <div class="mt-1 flex justify-between text-[10px] text-slate-400"><span>${pct}% collected</span><span>${s.nextDue ? 'Next due ' + escapeHtml(s.nextDue.dueDate) : ''}</span></div>
    ${mismatch}`;
}

function renderPaymentsTab(proj) {
  const pr = proj.production;
  const today = new Date().toISOString().split('T')[0];
  const rows = pr.payments.map(p => {
    const isOverdue = p.status !== 'paid' && p.dueDate && p.dueDate < today;
    return `
    <tr class="align-top ${isOverdue ? 'bg-rose-500/5' : ''}">
      <td class="py-1 px-1">${prodInput('payments', p, { key: 'label', label: 'Milestone', type: 'text', w: 'min-w-[140px]' })}</td>
      <td class="py-1 px-1">${prodInput('payments', p, { key: 'amount', label: 'Amount', type: 'number', w: 'w-28' })}</td>
      <td class="py-1 px-1">${prodInput('payments', p, { key: 'dueDate', label: 'Due', type: 'date', w: 'w-36' })}</td>
      <td class="py-1 px-1">
        <select aria-label="Status" onchange="updateProductionRow('payments','${p.id}','status', this.value)" class="helios-input w-28 px-2 py-1 text-xs ${p.status === 'paid' ? 'text-emerald-600 dark:text-emerald-400' : (isOverdue ? 'text-rose-500' : '')}">
          <option value="pending" ${p.status !== 'paid' ? 'selected' : ''}>${isOverdue ? 'Overdue' : 'Pending'}</option>
          <option value="paid" ${p.status === 'paid' ? 'selected' : ''}>Paid</option>
        </select>
      </td>
      <td class="py-1 px-1">${prodInput('payments', p, { key: 'paidDate', label: 'Paid on', type: 'date', w: 'w-36' })}</td>
      <td class="py-1 px-1">${prodInput('payments', p, { key: 'method', label: 'Method', type: 'text', w: 'min-w-[100px]' })}</td>
      <td class="py-1 pl-1 whitespace-nowrap">
        ${p.status !== 'paid' ? `<button type="button" onclick="sendPaymentReminderWhatsapp('${p.id}')" class="btn-mac-secondary px-2 py-1 text-[10px] text-emerald-600 dark:text-emerald-400">Remind</button>` : ''}
        <button type="button" onclick="removeProductionRow('payments','${p.id}')" class="btn-mac-secondary px-1.5 py-1 text-[10px] text-rose-500" aria-label="Remove milestone">&times;</button>
      </td>
    </tr>`;
  }).join('');
  return `
    <div class="space-y-3">
      <div id="prodPaySummary"></div>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex flex-wrap items-center gap-1.5">
          <span class="text-[11px] text-slate-500 dark:text-slate-400">Split presets:</span>
          <button type="button" onclick="applyPaymentPreset([50,50])" class="btn-mac-secondary px-2.5 py-1 text-xs">50 / 50</button>
          <button type="button" onclick="applyPaymentPreset([30,70])" class="btn-mac-secondary px-2.5 py-1 text-xs">30 / 70</button>
          <button type="button" onclick="applyPaymentPreset([40,40,20])" class="btn-mac-secondary px-2.5 py-1 text-xs">40 / 40 / 20</button>
          <button type="button" onclick="applyPaymentPreset([100])" class="btn-mac-secondary px-2.5 py-1 text-xs">100% on completion</button>
        </div>
        <button type="button" onclick="addPaymentMilestone()" class="btn-mac-primary px-3 py-1.5 text-xs">+ Add Milestone</button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead><tr class="text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-200/70 dark:border-white/10">
            <th class="py-1.5 px-1">Milestone</th><th class="py-1.5 px-1">Amount</th><th class="py-1.5 px-1">Due Date</th><th class="py-1.5 px-1">Status</th><th class="py-1.5 px-1">Paid On</th><th class="py-1.5 px-1">Method</th><th></th>
          </tr></thead>
          <tbody>${rows || `<tr><td colspan="7" class="py-5 text-center text-slate-400">No payment milestones yet. Pick a split preset to start.</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;
}

function addDaysIso(iso, days) {
  const d = iso ? new Date(iso + 'T00:00:00') : new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function applyPaymentPreset(splits) {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  if (pr.payments.length && !confirm('Replace existing payment milestones with this split?')) return;
  const total = getProjectRevenue(proj);
  const ws = getProjectWorkingSummary(proj);
  const today = new Date().toISOString().split('T')[0];
  const labels = splits.length === 1 ? ['Full payment on completion']
    : splits.length === 2 ? ['Booking deposit', 'Final balance (post-event)']
      : ['Booking deposit', 'Pre-event payment', 'Final balance (post-event)'];
  const dues = splits.length === 1 ? [addDaysIso(ws.end, 14)]
    : splits.length === 2 ? [today, addDaysIso(ws.end, 14)]
      : [today, addDaysIso(ws.start, -7), addDaysIso(ws.end, 14)];
  let allocated = 0;
  pr.payments = splits.map((pct, i) => {
    const amt = i === splits.length - 1 ? Math.round((total - allocated) * 100) / 100 : Math.round(total * pct) / 100;
    allocated += amt;
    return { id: prodUid('pay'), label: `${labels[i]} (${pct}%)`, amount: amt, dueDate: dues[i], status: 'pending', paidDate: '', method: '' };
  });
  persistProduction(true);
  showToast('Payment schedule created.');
}

function addPaymentMilestone() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  const s = getPaymentStats(proj);
  pr.payments.push({ id: prodUid('pay'), label: 'Milestone', amount: Math.max(0, Math.round((s.total - s.scheduled) * 100) / 100), dueDate: addDaysIso('', 14), status: 'pending', paidDate: '', method: '' });
  persistProduction(true);
}

function sendPaymentReminderWhatsapp(payId) {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  const p = pr && pr.payments.find(x => x.id === payId);
  if (!p) return;
  const cur = proj.currency || getActiveCurrencyCode();
  const org = getSelectedOrgProfile();
  const client = (studioState.clients || []).find(c => c.id === proj.clientId);
  const today = new Date().toISOString().split('T')[0];
  const overdue = p.dueDate && p.dueDate < today;
  const lines = [
    `Hi ${client && client.contactPerson ? client.contactPerson : 'there'},`,
    '',
    overdue
      ? `A gentle reminder that the *${p.label}* for *${proj.name}* was due on ${p.dueDate}.`
      : `Friendly reminder that the *${p.label}* for *${proj.name}* is due${p.dueDate ? ' on ' + p.dueDate : ''}.`,
    `Amount: *${formatCurrency(p.amount, cur)}*${proj.invoiceNumber ? ` • Ref: ${proj.invoiceNumber}` : ''}`,
    ''
  ];
  if (org && (org.iban || org.accountNumber)) {
    lines.push('*Bank details*');
    if (org.bankName) lines.push(`Bank: ${org.bankName}`);
    if (org.accountHolder || org.name) lines.push(`Account: ${org.accountHolder || org.name}`);
    if (org.iban) lines.push(`IBAN: ${org.iban}`);
    if (org.swift) lines.push(`SWIFT: ${org.swift}`);
    lines.push('');
  }
  lines.push('Kindly share the remittance once processed. Thank you!');
  openWhatsappText(getProjectClientPhone(proj), lines.join('\n'));
}

/* =================== GEAR CHECKLIST =================== */
function renderGearTab(proj) {
  const pr = proj.production;
  const rows = pr.gear.map(g => `
    <tr class="align-top ${g.loadIn && g.loadOut ? 'opacity-60' : ''}">
      <td class="py-1 px-1">${prodInput('gear', g, { key: 'category', label: 'Category', type: 'text', w: 'w-28' })}</td>
      <td class="py-1 px-1">${prodInput('gear', g, { key: 'item', label: 'Item', type: 'text', w: 'min-w-[180px]' })}</td>
      <td class="py-1 px-1">${prodInput('gear', g, { key: 'qty', label: 'Qty', type: 'number', w: 'w-16' })}</td>
      <td class="py-1 px-1 text-center"><input type="checkbox" ${g.loadIn ? 'checked' : ''} aria-label="Loaded in" onchange="updateProductionRow('gear','${g.id}','loadIn', this.checked)" class="mt-1.5 accent-sky-500" /></td>
      <td class="py-1 px-1 text-center"><input type="checkbox" ${g.loadOut ? 'checked' : ''} aria-label="Loaded out" onchange="updateProductionRow('gear','${g.id}','loadOut', this.checked)" class="mt-1.5 accent-emerald-500" /></td>
      <td class="py-1 pl-1"><button type="button" onclick="removeProductionRow('gear','${g.id}')" class="btn-mac-secondary px-1.5 py-1 text-[10px] text-rose-500" aria-label="Remove item">&times;</button></td>
    </tr>`).join('');
  return `
    <div class="space-y-3">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div id="prodGearSummary" class="text-[11px] text-slate-500 dark:text-slate-400"></div>
        <div class="flex flex-wrap items-center gap-1.5">
          <button type="button" onclick="addGearItem()" class="btn-mac-primary px-3 py-1.5 text-xs">+ Add Item</button>
          <select aria-label="Load starter kit" onchange="loadGearKit(this.value); this.value='';" class="helios-input px-2 py-1.5 text-xs">
            <option value="">Starter Kit…</option>
            <option value="conference">Conference / Corporate AV</option>
            <option value="concert">Concert / Stage Show</option>
            <option value="exhibition">Exhibition Booth</option>
          </select>
          <button type="button" onclick="resetGearChecks()" class="btn-mac-secondary px-3 py-1.5 text-xs">Reset Checks</button>
          <button type="button" onclick="exportGearPdf()" class="btn-mac-secondary px-3 py-1.5 text-xs">Checklist PDF</button>
          <button type="button" onclick="copyMissingGear()" class="btn-mac-secondary px-3 py-1.5 text-xs text-amber-600 dark:text-amber-400">Copy Missing Items</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead><tr class="text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-200/70 dark:border-white/10">
            <th class="py-1.5 px-1">Category</th><th class="py-1.5 px-1">Item</th><th class="py-1.5 px-1">Qty</th><th class="py-1.5 px-1 text-center">Load-in</th><th class="py-1.5 px-1 text-center">Load-out</th><th></th>
          </tr></thead>
          <tbody>${rows || `<tr><td colspan="6" class="py-5 text-center text-slate-400">No gear listed. Add items or load a starter kit.</td></tr>`}</tbody>
        </table>
      </div>
    </div>`;
}

function addGearItem() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  pr.gear.push({ id: prodUid('gear'), category: 'General', item: '', qty: 1, loadIn: false, loadOut: false });
  persistProduction(true);
}

function loadGearKit(kit) {
  const items = GEAR_STARTER_KITS[kit];
  if (!items) return;
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  items.forEach(([category, item, qty]) => pr.gear.push({ id: prodUid('gear'), category, item, qty, loadIn: false, loadOut: false }));
  persistProduction(true);
  showToast('Starter kit added.');
}

function resetGearChecks() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr) return;
  pr.gear.forEach(g => { g.loadIn = false; g.loadOut = false; });
  persistProduction(true);
}

function exportGearPdf() {
  const proj = getToolkitProject();
  if (!proj) return;
  const pr = ensureProduction(proj);
  buildProductionTablePdf({
    title: `GEAR CHECKLIST — ${proj.name}`,
    subtitle: `${formatProjectDateRange(proj)}${pr.callInfo.venue ? ' • ' + pr.callInfo.venue : ''}`,
    columns: [{ label: 'Category', weight: 1 }, { label: 'Item', weight: 3 }, { label: 'Qty', weight: 0.5 }, { label: 'Load-in', weight: 0.7 }, { label: 'Load-out', weight: 0.7 }],
    rows: pr.gear.map(g => [g.category, g.item, g.qty, g.loadIn ? '[x]' : '[  ]', g.loadOut ? '[x]' : '[  ]']),
    filename: `${prodSafeSlug(proj.name)}-Gear-Checklist.pdf`,
    orientation: 'portrait',
    projectId: proj.id
  });
}

function copyMissingGear() {
  const proj = getToolkitProject();
  if (!proj) return;
  const pr = ensureProduction(proj);
  const missing = pr.gear.filter(g => !g.loadOut);
  if (!missing.length) { showToast('All gear is loaded out. Nothing missing!'); return; }
  const text = [`*Gear not yet loaded out — ${proj.name}*`, ...missing.map(g => `• ${g.qty || 1}× ${g.item || 'Item'} (${g.category || 'General'})`)].join('\n');
  copyTextToClipboard(text, `${missing.length} missing item(s) copied.`);
}

/* =================== CLIENT SIGN-OFF =================== */
function getProjectSignatureForPdf(proj) {
  return proj && proj.production && proj.production.signature && proj.production.signature.dataUrl
    ? proj.production.signature : null;
}

function renderSignTab(proj) {
  const sig = proj.production.signature;
  const client = (studioState.clients || []).find(c => c.id === proj.clientId);
  const defaultName = sig ? sig.name : (client && client.contactPerson ? client.contactPerson : '');
  return `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="space-y-2.5">
        <div class="text-[11px] text-slate-500 dark:text-slate-400">Have the client sign below on a phone, tablet or trackpad. The approval is stamped onto this project's Quotation &amp; Invoice PDFs.</div>
        <div>
          <label class="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Signer Name &amp; Title</label>
          <input id="sigSignerNameInput" type="text" value="${escapeHtml(defaultName || '')}" placeholder="e.g., Sarah Khan, Marketing Director" class="helios-input w-full px-2.5 py-1.5 text-xs" />
        </div>
        <canvas id="signaturePadCanvas" width="600" height="200" class="w-full h-40 rounded-xl bg-white border-2 border-dashed border-slate-300 dark:border-white/20 touch-none cursor-crosshair" aria-label="Signature pad"></canvas>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" onclick="saveSignatureFromPad()" class="btn-mac-primary px-3 py-1.5 text-xs">Save Approval Signature</button>
          <button type="button" onclick="clearSignaturePad()" class="btn-mac-secondary px-3 py-1.5 text-xs">Clear Pad</button>
        </div>
      </div>
      <div class="p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 space-y-2">
        <div class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Current Approval</div>
        ${sig && sig.dataUrl ? `
          <img src="${sig.dataUrl}" alt="Client signature" class="max-h-28 bg-white rounded-lg border border-slate-200 p-1" />
          <div class="text-xs font-semibold">${escapeHtml(sig.name || 'Client')}</div>
          <div class="text-[11px] font-mono text-slate-500 dark:text-slate-400">Signed ${escapeHtml(new Date(sig.signedAt).toLocaleString())}${sig.docRef ? ' • ' + escapeHtml(sig.docRef) : ''}</div>
          <div class="text-[11px] text-emerald-600 dark:text-emerald-400">✓ Will appear on Quotation &amp; Invoice PDFs</div>
          <button type="button" onclick="removeProjectSignature()" class="btn-mac-secondary px-3 py-1.5 text-xs text-rose-500">Remove Signature</button>
        ` : `<div class="py-6 text-center text-slate-400">No client approval captured yet.</div>`}
      </div>
    </div>`;
}

function initSignaturePad() {
  const canvas = document.getElementById('signaturePadCanvas');
  if (!canvas || typeof canvas.getContext !== 'function') return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  signaturePadState = { drawing: false, hasInk: false, lastX: 0, lastY: 0 };
  ctx.lineWidth = 2.6;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#0f172a';
  const pos = (e) => {
    const r = canvas.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (canvas.width / (r.width || canvas.width)), y: (e.clientY - r.top) * (canvas.height / (r.height || canvas.height)) };
  };
  canvas.onpointerdown = (e) => {
    e.preventDefault();
    if (canvas.setPointerCapture && e.pointerId !== undefined) canvas.setPointerCapture(e.pointerId);
    const p = pos(e);
    signaturePadState.drawing = true;
    signaturePadState.lastX = p.x;
    signaturePadState.lastY = p.y;
  };
  canvas.onpointermove = (e) => {
    if (!signaturePadState.drawing) return;
    e.preventDefault();
    const p = pos(e);
    ctx.beginPath();
    ctx.moveTo(signaturePadState.lastX, signaturePadState.lastY);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    signaturePadState.lastX = p.x;
    signaturePadState.lastY = p.y;
    signaturePadState.hasInk = true;
  };
  const end = () => { signaturePadState.drawing = false; };
  canvas.onpointerup = end;
  canvas.onpointerleave = end;
  canvas.onpointercancel = end;
}

function clearSignaturePad() {
  const canvas = document.getElementById('signaturePadCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  signaturePadState.hasInk = false;
}

function saveSignatureFromPad() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  const canvas = document.getElementById('signaturePadCanvas');
  if (!pr || !canvas) return;
  if (!signaturePadState.hasInk) { showToast('Please sign on the pad first.'); return; }
  const name = ((document.getElementById('sigSignerNameInput') || {}).value || '').trim();
  if (!name) { showToast('Enter the signer name.'); return; }
  pr.signature = {
    dataUrl: canvas.toDataURL('image/png'),
    name,
    signedAt: new Date().toISOString(),
    docRef: proj.quotationNumber || proj.invoiceNumber || ''
  };
  persistProduction(true);
  showToast('Client approval saved.');
}

function removeProjectSignature() {
  const proj = getToolkitProject();
  const pr = ensureProduction(proj);
  if (!pr || !confirm('Remove the saved client signature?')) return;
  delete pr.signature;
  persistProduction(true);
}
