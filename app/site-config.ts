export const siteConfig = {
  template: {
    version: "1.0.0",
    citySlug: "casares",
    leadPath: "/woning-aanmelden/",
    thankYouPath: "/bedankt/",
    sourceWebsite: "verhuurbeheercasares.nl",
  },
  brand: {
    name: "Verhuurbeheer Casares",
    legalName: "Verhuurbeheer Spanje",
    parentUrl: "https://www.verhuurbeheerspanje.nl/",
  },
  location: {
    city: "Casares",
    region: "Costa del Sol",
    language: "nl-NL",
    areas: [
      "Casares Pueblo",
      "Casares Costa",
      "Doña Julia",
      "Bahía de Casares",
      "Marina de Casares",
      "Finca Cortesin",
      "La Perla de la Bahía",
    ],
  },
  assets: {
    logo: "/vbs-logo-casares.webp",
    hero: "/casares-hero.webp",
    social: "/luxe-woning-casares-zeezicht.webp",
    signup: "/zonnig-terras-zeezicht-casares.webp",
  },
  domain: "https://verhuurbeheercasares.nl",
  contact: {
    email: "contact@verhuurbeheerspanje.nl",
    whatsapp: "31852128105",
  },
  pricing: {
    holidayRental: "Vanaf 18%",
    midterm: "Eenmalig 1 maand huur",
    longterm: "Eenmalig 1 maand huur",
  },
  social: {
    instagram: "https://www.instagram.com/verhuurbeheer_spanje/",
    facebook: "https://www.facebook.com/verhuurbeheerspanje/",
  },
  seo: {
    title: "Verhuurbeheer Casares | Voor Nederlandse eigenaren",
    description:
      "Fullservice verhuurbeheer in Casares voor Nederlandse eigenaren. Vakantieverhuur vanaf 18%, midterm, langetermijn en lokaal vastgoedbeheer.",
    primaryKeywords: [
      "verhuurbeheer Casares",
      "vakantieverhuurbeheer Casares",
      "vastgoedbeheer Casares",
      "woningbeheer Casares",
      "vakantiewoning verhuren Casares",
      "Airbnb beheer Casares",
      "Nederlandse verhuurmakelaar Casares",
      "sleutelbeheer Casares",
      "verhuurlicentie Casares",
      "appartement verhuren Casares",
      "villa verhuren Casares",
      "appartement verhuren Casares Costa",
      "vastgoedbeheer Doña Julia",
    ],
    longTailKeywords: [
      "Nederlandstalig verhuurbeheer voor woningeigenaren in Casares",
      "vakantiewoning professioneel laten verhuren in Casares",
      "Airbnb en Booking beheer voor appartement in Casares",
      "fullservice vakantieverhuurbeheer aan de Costa del Sol",
      "lokaal vastgoedbeheer voor tweede woning in Casares",
      "villa verhuren met beheer in Casares",
      "Nederlandstalig woningbeheer Casares Costa",
    ],
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "G-PEP8FKKN8J",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
    searchConsoleVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "3lEiIk8m58-C-jEulKtJkZ7LRrUIxhzr2y8lYQV1Xvw",
  },
} as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
export const leadFormAction = `https://formsubmit.co/${siteConfig.contact.email}`;
export const leadHref = siteConfig.template.leadPath;
export const leadSubject = (context = "woningaanmelding") =>
  `Nieuwe ${context} via ${siteConfig.brand.name}`;
export const whatsappHref = (
  message = `Hallo, ik heb een vraag over verhuurbeheer in ${siteConfig.location.city}`,
) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
