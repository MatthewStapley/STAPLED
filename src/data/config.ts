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
  tagline: "Websites and digital support for trade and service businesses.",
  description:
    "Stapled. provides websites and digital support for trade and service businesses: websites built around your work, help with an eligible Google Business Profile, and simpler ways for customers to get in touch. Serving Southampton and businesses across the UK.",
  location: "Serving Southampton and businesses across the UK",
  founder: "Matt",
};

// The trader behind the Stapled. name. A sole trader using a business name
// must show their own name and an address where documents can be served
// (Companies Act 2006, Part 41), and the E-Commerce Regulations 2002 ask
// for the geographic address where the business is established.
export const business = {
  proprietor: "Matthew Stapley",
  tradingAs: "Stapled.",
  // The business address Stapled. operates from, shown publicly on the
  // Business details page only (never the homepage, footer or structured
  // data). Matt supplies the value directly. While it's empty,
  // `npm run check:publish` fails. Filling it in completes the disclosure
  // on the site; it doesn't by itself establish legal compliance.
  address: "26 Littlewood Lane, Buxted, East Sussex, TN22 4LW, United Kingdom",
  addressLines: ["26 Littlewood Lane", "Buxted", "East Sussex", "TN22 4LW", "United Kingdom"] as string[],
  addressLabel: "Business address",
};

// Shown in a "to confirm" note if business.address is ever emptied again.
export const addressNote =
  "No business address set. A sole trader using a business name must show an address where documents can be served. Set it in src/data/config.ts → business.address (see the private launch notes).";

// REPLACE: real contact details once available.
// Email is the only enquiry route on the site — keep this to details
// actually used elsewhere (email links, Instagram).
export const contact = {
  email: "stapledweb@gmail.com",
  phone: "", // REPLACE — optional, leave blank to hide phone links
  // The footer hides the Instagram link if these are left blank.
  instagramHandle: "@stapledwebsites",
  instagramLink: "https://www.instagram.com/stapledwebsites/",
};

// Enquiries come in by email (see PreviewForm.astro). The FormSubmit form
// endpoint was removed on 22 Oct 2026 because its processing terms
// couldn't be verified; there's no form endpoint until a replacement is
// chosen.

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
  // crema-current-editorial.png, kept unpublished in assets-source/, for ~18x
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

// Primary navigation for the redesign. "Our Work" joins this list once
// Matt approves the first project to show (see the private launch notes).
export const nav = [
  { label: "Services", href: "/services/" },
  { label: "Possibilities", href: "/possibilities/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

// "Talk about your business" is the one primary call to action site-wide.
// `quote` and `work` are still read by the older homepage sections kept in
// src/components/sections/ for reference; they no longer point at pricing.
export const ctas = {
  primary: {
    label: "Talk about your business",
    href: "/contact/",
  },
  quote: {
    label: "How I can help",
    href: "/services/",
  },
  work: {
    label: "See what's possible",
    href: "/possibilities/",
  },
};
