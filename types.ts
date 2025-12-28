export type Language = 'ko' | 'en';

export interface Translation {
  lang: Language;
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
  latestNotices: {
    title: string;
    viewAll: string;
    new: string;
  };
  partners: {
    title: string;
  };
  stats: {
    title: string;
    items: { value: string; label: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string; icon: string }[];
  };
  products: {
    title: string;
    subtitle: string;
    cta: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: { number: string; title: string; desc: string }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { name: string; role: string; comment: string; rating: number }[];
  };
  press: {
    title: string;
    subtitle: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
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
      brandAssets: string;
    };
    pages: {
      guides: {
        label: string;
        subtitle: string;
      };
      marketing: {
        label: string;
        subtitle: string;
      };
      company: {
        label: string;
        subtitle: string;
      };
    };
    download: string;
  };
  support: {
    title: string;
    subtitle: string;
    faq: string;
    manuals: string;
    board: string;
    sections: {
      faqDesc: string;
      manualsDesc: string;
      boardDesc: string;
    };
    contactSection: {
      title: string;
      subtitle: string;
      button: string;
    };
    pages: {
      faq: {
        subtitle: string;
        empty: string;
      };
      manuals: {
        subtitle: string;
        empty: string;
        all: string;
      };
      board: {
        subtitle: string;
        date: string;
        title: string;
        author: string;
      };
    };
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
    disclaimers: string[];
    sections: {
      shopLearn: string;
      resources: string;
      support: string;
      company: string;
    };
    links: {
      standard: string;
      manager: string;
      app: string;
      guides: string;
      mediaKit: string;
      faq: string;
      manuals: string;
      contactUs: string;
      about: string;
      newsroom: string;
      partnerships: string;
    };
    moreWays: string;
    contactAction: string;
    or: string;
    call: string;
    privacy: string;
    terms: string;
    legal: string;
    siteMap: string;
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