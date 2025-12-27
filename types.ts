export type Language = 'ko' | 'en';

export interface Translation {
  nav: {
    brand: string;
    brandItems: {
      vision: string;
      company: string;
      team: string;
    };
    products: string;
    productItems: {
      standard: string;
      manager: string;
      app: string;
    };
    resources: string;
    resourceItems: {
      guides: string;
      marketing: string;
      company: string;
    };
    support: string;
    supportItems: {
      faq: string;
      manuals: string;
      board: string;
    };
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  productsPage: {
    title: string;
    subtitle: string;
    items: {
      standard: { name: string; desc: string; features: string[] };
      manager: { name: string; desc: string; features: string[] };
      app: { name: string; desc: string; features: string[] };
    };
  };
  brand: {
    title: string;
    subtitle: string;
    vision: {
      title: string;
      missionTitle: string;
      desc: string;
      missionDesc: string;
    };
    company: {
      title: string;
      desc: string;
      history: { year: string; event: string }[];
    };
    team: {
      title: string;
      desc: string;
      members: { name: string; role: string }[];
    };
  };
  standardPage: {
    title: string;
    desc: string;
    price: string;
    delivery: string;
    install: string;
    cta: string;
    videoTitle: string;
    sections: {
      install: { title: string; desc: string; };
      reality: { title: string; desc: string; };
      capacity: { title: string; desc: string; };
      interface: { title: string; desc: string; };
      data: { title: string; desc: string; };
    };
    specs: {
      label: string;
      items: { label: string; value: string; }[];
    };
  };
  managerPage: {
    title: string;
    subtitle: string;
    pricing: {
      setup: string;
      monthly: string;
    };
    features: {
      iot: { title: string; desc: string; };
      energy: { title: string; desc: string; table: { label: string; before: string; after: string; }[] };
      compatibility: { title: string; desc: string; };
    };
    checklist: string[];
    cta: string;
  };
  appPage: {
    hero: { title: string; subtitle: string; download: string; };
    features: {
      search: { title: string; desc: string; };
      booking: { title: string; desc: string; };
      match: { title: string; desc: string; };
    };
    cta: string;
  };
  solutions: {
    title: string;
    subtitle: string;
    feature1: string;
    feature2: string;
  };
  resourcesPage: {
    title: string;
    subtitle: string;
    sections: {
      guides: string;
      marketing: string;
      company: string;
    };
    items: {
      standard: string;
      manager: string;
      app: string;
      catalog: string;
      companyProfile: string;
    };
    download: string;
  };
  support: {
    title: string;
    subtitle: string;
    faq: string;
    manuals: string;
    board: string;
    faqItems: { category: string; q: string; a: string }[];
    boardItems: { id: number; date: string; title: string; author: string; content: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      contact: string;
      email: string;
      type: string;
      typePlaceholder: string;
      types: {
        purchase: string;
        b2b: string;
        partnership: string;
      };
      dynamic: {
        product: string;
        quantity: string;
        region: string;
        businessName: string;
        spaceSize: string;
        companyName: string;
        website: string;
      };
      message: string;
      privacy: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    privacy: string;
    terms: string;
    news: string;
    contactLink: string;
    inquiryLabel: string;
    companyName: string;
    owner: string;
    bizId: string;
    address: string;
    copyright: string;
  };
}

export interface FormData {
  name: string;
  contact: string;
  email: string;
  type: string;
  message: string;
  privacy: boolean;
  // Dynamic fields
  productName?: string;
  quantity?: string;
  region?: string;
  businessName?: string;
  spaceSize?: string;
  companyName?: string;
  website?: string;
}