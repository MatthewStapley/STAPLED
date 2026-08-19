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
    "Stapled. designs and builds modern, mobile-friendly websites for Southampton businesses — barbers, tradespeople, restaurants and independent shops. Most projects cost £400–£800.",
  location: "Southampton, UK",
  founder: "Matt",
};

// REPLACE: real contact details once available.
// The enquiry form is the only contact route on the site — keep this to
// details actually used elsewhere (email links, Instagram).
export const contact = {
  email: "hello@stapled.co.uk", // REPLACE with real inbox
  phone: "", // REPLACE — optional, leave blank to hide phone links
  instagramHandle: "@stapled.co", // REPLACE
  instagramLink: "https://instagram.com/stapled.co", // REPLACE
};

// Enquiry form delivery, via FormSubmit (https://formsubmit.co).
// The first submission from this domain triggers a one-time confirmation
// email to the address below — it must be clicked before FormSubmit will
// deliver further enquiries.
export const formEndpoint = "https://formsubmit.co/stapledweb@gmail.com";

// Where FormSubmit redirects the visitor after a successful submission.
export const thankYouUrl = `${site.url}/thank-you`;

// REPLACE: live URL once Barber Warnz is published.
export const barberWarnzUrl = "https://barberwarnz.example.com"; // REPLACE with live site link

// Future portfolio screenshots. Drop real files at these paths (same
// filenames) and the styled fallback mockups will automatically be
// replaced — no component code needs to change.
export const images = {
  barberWarnzDesktop: "/images/barber-warnz-desktop.webp",
  barberWarnzMobile: "/images/barber-warnz-mobile.webp",
  tradesConceptDesktop: "/images/trades-concept-desktop.webp",
  restaurantConceptDesktop: "/images/restaurant-concept-desktop.webp",
};

// Homepage-relative anchors. Using a leading "/" (rather than a bare "#…")
// means these still resolve correctly from other pages (e.g. /thank-you),
// not just from the homepage itself.
export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#preview" },
];

// Every CTA on the site points at the enquiry form — it's the only
// contact route.
export const ctas = {
  primary: {
    label: "Request a free homepage preview",
    href: "#preview",
  },
  quote: {
    label: "Get a free quote",
    href: "#preview",
  },
  work: {
    label: "View recent work",
    href: "#work",
  },
};
