// ---------------------------------------------------------------------------
// What Stapled. offers, shared by the homepage, /services and /possibilities.
// ---------------------------------------------------------------------------
// Rules for this file (from Matt, Oct 2026):
// - No prices, packages or payment plans: everything is quoted in writing.
// - Google help covers only an eligible Google Business Profile and search
//   foundations on the website. Never promise rankings or enquiries.
// - The client portal and AI receptionist are future ideas. Don't list them.
// ---------------------------------------------------------------------------

export type IllustrationVariant =
  | "website"
  | "profile"
  | "enquiry"
  | "gallery"
  | "call"
  | "areas"
  | "speed"
  | "reviews"
  | "care";

export const services: {
  id: string;
  n: string;
  title: string;
  summary: string;
  includes: string[];
  note?: string;
  art: IllustrationVariant;
}[] = [
  {
    id: "websites",
    n: "01",
    title: "Websites, built around your work",
    summary:
      "New websites and redesigns, built around your trade, the areas you cover and photos of your real jobs. Fast and easy to use on a phone.",
    includes: [
      "Design and build, or a redesign of an existing site",
      "Pages for each service and the areas you cover",
      "Galleries for photos of your real jobs",
      "Built mobile-first and tested on different screen sizes",
    ],
    art: "website",
  },
  {
    id: "google",
    n: "02",
    title: "Google Business Profile and search basics",
    summary:
      "Help setting up or improving an eligible Google Business Profile, and a website built so search engines can understand it.",
    includes: [
      "Help setting up or improving an eligible Google Business Profile",
      "Clear page titles and descriptions",
      "Service and area pages that say plainly what you do and where",
      "Fast, well-structured pages",
    ],
    note:
      "Rankings depend on many things outside any one website, so I don't promise positions or a number of enquiries. I make sure the basics are done properly.",
    art: "profile",
  },
  {
    id: "enquiries",
    n: "03",
    title: "Easier enquiries",
    summary:
      "Clear ways for customers to get in touch: one-tap calling and messaging, and quote requests that ask for the job, the area and a few photos.",
    includes: [
      "Tap-to-call and messaging buttons on every page",
      "Quote requests that ask the questions you'd ask on the phone",
      "Contact details that are easy to find on a phone",
    ],
    art: "enquiry",
  },
  {
    id: "care",
    n: "04",
    title: "Hosting and care",
    summary:
      "Optional hosting, updates, backups and small changes, handled by the person who built your site. Set out in your written quote if you want it.",
    includes: [
      "Hosting with HTTPS",
      "Technical maintenance",
      // Approved wording: backups cover the repository only (private product notes).
      "Weekly backups of your website's code and files stored in its repository",
      "Small content changes when you need them",
    ],
    note: "Optional. You can use your own hosting instead; your quote sets out the options.",
    art: "care",
  },
];

export type Goal = "look" | "found" | "enquire";

export const goals: Record<Goal, string> = {
  look: "Look professional",
  found: "Get found",
  enquire: "Handle enquiries",
};

export const features: {
  id: string;
  goal: Goal;
  title: string;
  body: string;
  art: IllustrationVariant;
}[] = [
  {
    id: "galleries",
    goal: "look",
    title: "Project galleries",
    body: "Your real jobs, organised by service, with before and after views where you have the photos.",
    art: "gallery",
  },
  {
    id: "speed",
    goal: "look",
    title: "Quick on a weak signal",
    body: "Light pages that load fast, even when a customer is out and about.",
    art: "speed",
  },
  {
    id: "reviews",
    goal: "look",
    title: "Genuine reviews, shown well",
    body: "Real reviews from your customers, presented clearly. Never invented, never padded.",
    art: "reviews",
  },
  {
    id: "areas",
    goal: "found",
    title: "Service and area pages",
    body: "A clear page for each service and the places you cover, so people and search engines know what you do and where.",
    art: "areas",
  },
  {
    id: "profile",
    goal: "found",
    title: "Google Business Profile help",
    body: "Help setting up or improving an eligible profile, linked properly to your website. No promised rankings.",
    art: "profile",
  },
  {
    id: "quote",
    goal: "enquire",
    title: "Quote request forms",
    body: "Ask for the job type, area and photos up front, so you can price the work before you visit.",
    art: "enquiry",
  },
  {
    id: "call",
    goal: "enquire",
    title: "Tap to call or message",
    body: "Phone and WhatsApp always one tap away on mobile.",
    art: "call",
  },
];

export const steps = [
  { title: "Talk it through", body: "Your work, your customers, and what you need the website to do." },
  { title: "Get a written quote", body: "What's included and the total price, agreed before any work starts." },
  { title: "Build and refine", body: "See it take shape, give feedback, and get changes made." },
  { title: "Launch and look after", body: "Live on your domain, with optional ongoing care." },
];
