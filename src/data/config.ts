// ---------------------------------------------------------------------------
// STAPLED. SITE CONFIG
// ---------------------------------------------------------------------------
// Every placeholder contact detail, external link and form endpoint lives
// here. Replace the values marked "REPLACE" once real details are ready —
// nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const site = {
  name: "Stapled.",
  legalName: "Stapled.",
  domain: "stapled.co.uk",
  url: "https://stapled.co.uk",
  tagline: "Helping Southampton businesses look the part online.",
  description:
    "Stapled. designs and builds modern, mobile-friendly websites for Southampton businesses — barbers, tradespeople, restaurants and independent shops. £50 a month for your website, hosting, updates, Google Business Profile management and fortnightly check-ins. 12-month minimum with an early-exit option.",
  location: "Southampton, UK",
  founder: "Matt",
};

// REPLACE: real contact details once available.
// The enquiry form is the only contact route on the site — keep this to
// details actually used elsewhere (email links, Instagram).
export const contact = {
  email: "stapledweb@gmail.com",
  phone: "", // REPLACE — optional, leave blank to hide phone links
  // The footer hides the Instagram link if these are left blank.
  instagramHandle: "@stapledwebsites",
  instagramLink: "https://www.instagram.com/stapledwebsites/",
};

// Enquiry form delivery, via FormSubmit (https://formsubmit.co).
// The first submission from this domain triggers a one-time confirmation
// email to the address below — it must be clicked before FormSubmit will
// deliver further enquiries.
export const formEndpoint = "https://formsubmit.co/stapledweb@gmail.com";

// Where FormSubmit redirects the visitor after a successful submission.
export const thankYouUrl = `${site.url}/thank-you/`;

export const barberWarnzUrl = "https://barberwarnz.co.uk";
export const leroyDrivingInstructorUrl = "https://leroydrivinginstructor.co.uk";

// Future portfolio screenshots. Drop real files at these paths (same
// filenames) and the styled fallback mockups will automatically be
// replaced — no component code needs to change.
export const images = {
  barberWarnzDesktop: "/images/barber-warnz-desktop.webp",
  barberWarnzMobile: "/images/barber-warnz-mobile.webp",
  leroyDesktop: "/images/leroy-driving-instructor-desktop.webp",
  leroyMobile: "/images/leroy-driving-instructor-mobile.webp",
  tradesConceptDesktop: "/images/trades-concept-desktop.webp",
  restaurantConceptDesktop: "/images/restaurant-concept-desktop.webp",
  cremaCurrentDesktop: "/images/crema-current-desktop.webp",
  // Wide editorial photo for the cinematic section directly after the
  // Crema Current hero. Delivered as .webp (converted from the original
  // crema-current-editorial.png, also kept in public/images, for ~18x
  // smaller payload at no visible quality loss). 1672x941 source, 16:9.
  cremaCurrentAtmosphere: "/images/crema-current-editorial.webp",
  // Real screenshot of the standalone bathroom demo's hero (1600x1000).
  bathroomConceptDesktop: "/images/bathroom-concept-desktop.webp",
};

// The bathroom renovation demo is a separate project
// (github.com/MatthewStapley/StapledRenovationDemo), hosted on GitHub Pages
// rather than inside this site. REPLACE if it moves to a custom domain.
export const bathroomDemoUrl =
  "https://matthewstapley.github.io/StapledRenovationDemo/bathroom/";

// Interactive Concepts — full standalone concept pages (unlike the
// visual-only cards in Work.astro), each showing a distinct brand built
// for a different local trade. Fictional businesses only, invented for
// this portfolio section: never a real company's name.
//
// To add another concept later: add an entry here, a fallback variant in
// FallbackScreen.astro, and a new page under src/pages/concepts/. Nothing
// else in InteractiveConcepts.astro needs to change. A concept hosted
// elsewhere sets `href` (and `displayUrl` for the mockup's address bar)
// instead of having a page here; `cta` overrides the link label.
export const interactiveConcepts: {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  href?: string;
  displayUrl?: string;
  cta?: string;
}[] = [
  {
    slug: "crema-current",
    name: "Crema Current",
    category: "Coffee shop concept",
    tagline:
      "A premium independent coffee brand concept, built to show a bolder, more editorial direction than a typical small-business site.",
    image: images.cremaCurrentDesktop,
  },
  {
    slug: "bathroom-renovation",
    name: "Bathroom renovation — interactive concept",
    category: "FORM Bathrooms, a fictional brand",
    tagline:
      "An interactive bathroom website concept with scroll storytelling, material selection and an inspiration gallery.",
    image: images.bathroomConceptDesktop,
    href: bathroomDemoUrl,
    displayUrl: "matthewstapley.github.io/StapledRenovationDemo",
    cta: "Explore bathroom demo",
  },
];

// Homepage-relative anchors. Using a leading "/" (rather than a bare "#…")
// means these still resolve correctly from other pages (e.g. /thank-you),
// not just from the homepage itself.
export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#preview" },
];

// Every enquiry CTA points at the enquiry form — it's the only
// contact route.
export const ctas = {
  primary: {
    label: "Request a free homepage preview",
    href: "#preview",
  },
  quote: {
    label: "See what £50 a month includes",
    href: "/#pricing",
  },
  work: {
    label: "View recent work",
    href: "#work",
  },
};
