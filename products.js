const PRODUCTS = [
  {
    id: "crm-suite",
    name: "CodeCraft CRM Suite",
    category: "Software",
    fulfillment: ["download"],
    price: 24999,
    summary: "Sales pipeline, leads, follow-ups, and customer records for growing teams.",
    description: "A complete customer relationship system for agencies and businesses that need a clean pipeline without enterprise complexity. Import contacts, assign owners, and track every conversation to close.",
    use: [
      "Capture and qualify inbound leads from your website",
      "Run weekly sales stand-ups from a shared pipeline board",
      "Store notes, files, and next actions against each account"
    ],
    specs: {
      Platform: "Windows, macOS, web dashboard",
      Stack: "PHP, MySQL, JavaScript",
      Users: "Up to 25 seats on Standard license",
      Delivery: "Installer + admin guide after purchase",
      Support: "90 days email support"
    },
    integration: "Install the desktop/web package on your server or hosted panel. Point your domain to the CRM folder, import the SQL file, and set SMTP in Settings → Mail. Website enquiry forms can POST leads to /api/leads."
  },
  {
    id: "hrm-pro",
    name: "PeopleOps HRM",
    category: "Software",
    fulfillment: ["download"],
    price: 18999,
    summary: "Attendance, leave, payroll-ready exports, and employee profiles.",
    description: "Human resource software for offices that still mix spreadsheets with WhatsApp. Employees request leave, managers approve, and HR exports salary-ready sheets.",
    use: [
      "Onboard staff with a digital employee file",
      "Track attendance and leave balances",
      "Export monthly payroll CSVs for your accountant"
    ],
    specs: {
      Platform: "Web application",
      Stack: "PHP, MySQL, Bootstrap",
      Users: "Unlimited employees, 5 HR admins",
      Delivery: "ZIP + database dump",
      Support: "60 days setup assistance"
    },
    integration: "Upload to a PHP hosting account, create a MySQL database, and run the included installer. Optional biometric CSV import is documented in docs/attendance.md."
  },
  {
    id: "erp-lite",
    name: "Workshop ERP Lite",
    category: "Software",
    fulfillment: ["download", "integrate"],
    price: 32999,
    summary: "Inventory, purchase orders, and job cards for workshops and factories.",
    description: "Lightweight ERP for industrial and service workshops. Track stock, vendors, and work orders without a six-month implementation.",
    use: [
      "Issue materials against a job card",
      "Alert when spare parts hit reorder level",
      "Share order status with a client portal widget"
    ],
    specs: {
      Platform: "Web + optional kiosk mode",
      Stack: "Node.js, Express, MySQL",
      Users: "10 concurrent operators",
      Delivery: "Source package + Docker compose",
      Support: "Onboarding call included"
    },
    integration: "Embed the client status widget with a script tag. REST endpoints under /api/v1 accept API keys generated in Admin → Integrations."
  },
  {
    id: "accounts-desk",
    name: "LedgerDesk Accounting",
    category: "Software",
    fulfillment: ["download"],
    price: 15999,
    summary: "Invoices, GST-ready reports, and expense tracking for small firms.",
    description: "Accounting software focused on Indian small businesses: invoices, payments, and simple books you can hand to a CA.",
    use: [
      "Create branded invoices and payment receipts",
      "Record expenses by category",
      "Export GST summary reports"
    ],
    specs: {
      Platform: "Windows desktop + backup to cloud folder",
      Stack: "Desktop application",
      Users: "3 company files",
      Delivery: "Downloadable installer",
      Support: "Email + remote session"
    },
    integration: "Standalone desktop product. Optional CSV export can be imported into Tally or your CA’s tools. No website embed required."
  },
  {
    id: "campus-app",
    name: "CampusConnect App",
    category: "Applications",
    fulfillment: ["download"],
    price: 27999,
    summary: "School and coaching app for notices, fees, and parent updates.",
    description: "A white-label campus application for institutes. Admins publish notices, parents track fees, and teachers share homework.",
    use: [
      "Replace scattered WhatsApp class groups for official notices",
      "Collect fee acknowledgements",
      "Share timetable and exam circulars"
    ],
    specs: {
      Platform: "Android APK + admin web",
      Stack: "React Native companion + PHP API",
      Users: "Up to 1,000 students",
      Delivery: "APK + admin panel files",
      Support: "Play listing checklist included"
    },
    integration: "Host the API, rebuild the app with your institute name and icon (guide in branding.md), then publish. Website can deep-link to fee and notice pages."
  },
  {
    id: "field-app",
    name: "FieldForce Service App",
    category: "Applications",
    fulfillment: ["download", "integrate"],
    price: 21999,
    summary: "Assign on-site jobs, capture photos, and close tickets from the field.",
    description: "Mobile workflow for technicians. Dispatchers assign jobs; field staff update status, parts used, and customer sign-off.",
    use: [
      "Dispatch AMC and breakdown visits",
      "Collect before/after photos",
      "Sync completed jobs to your existing website or CRM"
    ],
    specs: {
      Platform: "Android + dispatcher web",
      Stack: "JavaScript, REST API",
      Users: "20 field seats",
      Delivery: "App package + API",
      Support: "30 days go-live support"
    },
    integration: "POST completed jobs to your webhook. A WordPress/PHP snippet is included to show “service in progress” on the client’s site."
  },
  {
    id: "chat-agent",
    name: "SitePilot AI Agent",
    category: "AI Agents",
    fulfillment: ["integrate"],
    price: 8999,
    summary: "Website chat agent that answers FAQs and captures qualified leads.",
    description: "An embeddable assistant trained on your pages, brochure, and FAQs. It greets visitors, answers product questions, and hands off to WhatsApp when a human is needed.",
    use: [
      "Answer pricing and service questions 24/7",
      "Collect name, phone, and requirement",
      "Escalate to WhatsApp +91 98213 37127"
    ],
    specs: {
      Platform: "JavaScript widget",
      Stack: "Embed script + admin prompts",
      Users: "1 website / license",
      Delivery: "Snippet + prompt workbook",
      Support: "Prompt tuning for 14 days"
    },
    integration: "Paste the snippet before </body> on any HTML/PHP/WordPress site. Configure knowledge files in the agent console. CORS and allowed domains are set per license key."
  },
  {
    id: "ticket-agent",
    name: "DeskMate Support Agent",
    category: "AI Agents",
    fulfillment: ["integrate"],
    price: 11999,
    summary: "Turns support emails and form tickets into tagged, suggested replies.",
    description: "AI agent for support teams. It reads incoming tickets, suggests replies, and tags urgency so your staff spend time on real issues.",
    use: [
      "Triage website contact-form tickets",
      "Draft first-response emails",
      "Flag billing vs technical issues"
    ],
    specs: {
      Platform: "Cloud agent + mailbox connect",
      Stack: "API + admin panel",
      Users: "5 support agents",
      Delivery: "API key + panel access",
      Support: "Mailbox mapping session"
    },
    integration: "Forward tickets to the agent inbox or POST JSON to /tickets. Your existing admin panel can display suggested replies via a small iframe or REST poll."
  },
  {
    id: "lead-form",
    name: "ConvertForm Contact Kit",
    category: "Contact Forms",
    fulfillment: ["integrate", "download"],
    price: 2499,
    summary: "High-converting contact and quote forms with WhatsApp fallback.",
    description: "Styled contact forms that match CodeCraft sites: validation, spam checks, email notify, and optional WhatsApp deep link.",
    use: [
      "Replace a plain mailto link with a proper enquiry form",
      "Send leads to email and a Google Sheet",
      "Offer “Chat on WhatsApp” as a second CTA"
    ],
    specs: {
      Platform: "HTML, CSS, PHP",
      Stack: "Vanilla JS + PHP mailer",
      Users: "Unlimited submissions",
      Delivery: "Downloadable form pack",
      Support: "Install notes for cPanel"
    },
    integration: "Copy /forms/contact into your site, update form-handler.php SMTP/to-address, and include form.css. Works on static and PHP websites."
  },
  {
    id: "quote-form",
    name: "Multi-Step Quote Builder",
    category: "Contact Forms",
    fulfillment: ["integrate"],
    price: 4499,
    summary: "Guided quote form for websites, apps, and custom software enquiries.",
    description: "A stepped form that asks project type, pages/modules, timeline, and budget — then emails a structured brief to your team.",
    use: [
      "Qualify custom development leads",
      "Stop incomplete “need a website” messages",
      "Attach the brief to your CRM or inbox"
    ],
    specs: {
      Platform: "Embeddable widget",
      Stack: "JavaScript + PHP endpoint",
      Users: "1 domain",
      Delivery: "Embed + handler",
      Support: "Field customization"
    },
    integration: "Add data-codecraft-quote and the loader script. Map fields in quote-config.js. Submissions hit your endpoint or ours during trial."
  },
  {
    id: "admin-pro",
    name: "CommandDeck Admin Panel",
    category: "Admin Panels",
    fulfillment: ["integrate", "download"],
    price: 14999,
    summary: "Ready admin UI for users, content, media, and roles.",
    description: "A dark, fast admin panel you can drop onto a client project. Includes auth, roles, tables, and a dashboard of KPIs.",
    use: [
      "Give clients a place to edit pages and leads",
      "Manage staff accounts and permissions",
      "Review form submissions in one inbox"
    ],
    specs: {
      Platform: "Web admin",
      Stack: "PHP, MySQL, JavaScript",
      Users: "Unlimited roles",
      Delivery: "Source + seed SQL",
      Support: "Theme tokens to match the public site"
    },
    integration: "Place /admin beside the public site, share the same database, and whitelist admin routes. JWT/session keys live in config.php. Embed charts via the included dashboard widgets."
  },
  {
    id: "cms-kit",
    name: "PageSmith CMS Kit",
    category: "Admin Panels",
    fulfillment: ["integrate"],
    price: 9999,
    summary: "Lightweight CMS so clients can update blogs, services, and banners.",
    description: "Not WordPress — a small CMS for CodeCraft static/dynamic sites. Clients change copy and images without touching layout.",
    use: [
      "Let a marketing intern update case studies",
      "Swap homepage banners seasonally",
      "Publish news without a developer ticket"
    ],
    specs: {
      Platform: "PHP CMS",
      Stack: "MySQL + file media",
      Users: "3 editor seats",
      Delivery: "CMS package",
      Support: "Editor training PDF"
    },
    integration: "Include render helpers in your PHP templates. Pages fetch published blocks by slug. Cache-busting is documented for CDN setups."
  },
  {
    id: "book-saas",
    name: "SlotCloud Booking SaaS",
    category: "SaaS",
    fulfillment: ["integrate"],
    price: 6999,
    summary: "Appointment booking for clinics, consultants, and service businesses.",
    description: "Hosted booking: services, staff calendars, reminders. Embed on any client website and take bookings without a custom calendar build.",
    use: [
      "Clinics and coaching slots",
      "Consultation calls for agencies",
      "Showroom visit scheduling"
    ],
    specs: {
      Platform: "Hosted SaaS",
      Stack: "Web app + embed",
      Users: "Annual license / site",
      Delivery: "Account + embed code",
      Support: "Calendar sync help"
    },
    integration: "Add the booking iframe or popup script. Webhooks notify your CRM when a slot is booked. Stripe/UPI can be enabled in the SaaS billing tab (your merchant account)."
  },
  {
    id: "invoice-saas",
    name: "BillStream Invoicing SaaS",
    category: "SaaS",
    fulfillment: ["download", "integrate"],
    price: 4999,
    summary: "Recurring invoices and payment links you can brand for each client.",
    description: "SaaS invoicing with PDF invoices, payment-status page, and a customer portal snippet for the client’s website.",
    use: [
      "Retainers and AMC billing",
      "Share a “pay invoice” page on the client site",
      "Export books monthly"
    ],
    specs: {
      Platform: "Hosted + optional self-host",
      Stack: "Node.js / web",
      Users: "1 organization",
      Delivery: "Login or self-host ZIP",
      Support: "GST field setup"
    },
    integration: "Self-host unzip to VPS or use hosted URL. Embed the customer portal with an iframe and organization public key."
  },
  {
    id: "seo-widget",
    name: "TrustBar Review Widget",
    category: "Website Widgets",
    fulfillment: ["integrate"],
    price: 1999,
    summary: "Testimonials, ratings, and partner logos as a drop-in site section.",
    description: "A polished social-proof strip that matches the CodeCraft visual language — teal cards, orange titles, rounded media.",
    use: [
      "Add reviews under a services grid",
      "Rotate client logos on the homepage",
      "Keep proof updated from the admin panel"
    ],
    specs: {
      Platform: "HTML/JS widget",
      Stack: "Vanilla JS",
      Users: "Unlimited pages / site",
      Delivery: "Script + JSON reviews file",
      Support: "Style token mapping"
    },
    integration: "Include trustbar.js and a reviews.json (or CMS endpoint). Place <div id=\"cc-trustbar\"></div> where the strip should appear."
  },
  {
    id: "analytics-kit",
    name: "PulseTrack Analytics Kit",
    category: "Website Widgets",
    fulfillment: ["integrate", "download"],
    price: 3499,
    summary: "Privacy-light visit stats and conversion events for client sites.",
    description: "A first-party analytics snippet plus a small dashboard. Track brochure downloads, form submits, and product-page views.",
    use: [
      "See which service pages convert",
      "Measure brochure PDF clicks",
      "Share a monthly traffic snapshot with clients"
    ],
    specs: {
      Platform: "JS snippet + dashboard",
      Stack: "PHP logger or Node collector",
      Users: "10 sites / license",
      Delivery: "Snippet + dashboard files",
      Support: "Event map template"
    },
    integration: "Add the tracker before </head>. Define events in pulse-events.js (view_brochure, add_to_cart, submit_form). Dashboard reads the same database."
  }
];

const CATEGORIES = ["All", ...[...new Set(PRODUCTS.map((p) => p.category))]];
const WHATSAPP = "919821337127";
const CART_KEY = "cct-cart";

const money = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const iconFor = (category) => {
  const icons = {
    Software: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="12" width="48" height="32" rx="4"/><path d="M16 52h32M24 44v8M40 44v8M20 24h24M20 32h16"/></svg>`,
    Applications: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="8" width="28" height="48" rx="4"/><circle cx="32" cy="48" r="2"/></svg>`,
    "AI Agents": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="28" r="12"/><path d="M20 52c4-8 20-8 24 0"/><circle cx="26" cy="26" r="2" fill="currentColor"/><circle cx="38" cy="26" r="2" fill="currentColor"/></svg>`,
    "Contact Forms": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="10" width="40" height="44" rx="4"/><path d="M20 22h24M20 32h24M20 42h14"/></svg>`,
    "Admin Panels": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="12" width="48" height="40" rx="4"/><path d="M8 24h48M20 12v40"/><rect x="28" y="32" width="10" height="8"/><rect x="42" y="32" width="8" height="14"/></svg>`,
    SaaS: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 40a12 12 0 0 1 2-24 14 14 0 0 1 26 6h2a10 10 0 0 1 0 20H18"/><path d="M24 40v8M32 36v12M40 40v8"/></svg>`,
    "Website Widgets": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="14" width="44" height="36" rx="4"/><path d="M10 24h44M18 34h12M18 42h20"/></svg>`
  };
  return icons[category] || icons.Software;
};

const state = {
  category: "All",
  query: "",
  cart: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
  activeProduct: null,
  tab: "description"
};

const els = {};

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
  renderCartCount();
}

function cartCount() {
  return state.cart.reduce((n, i) => n + i.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((n, i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return n + (p ? p.price * i.qty : 0);
  }, 0);
}

function addToCart(id, qty = 1) {
  const row = state.cart.find((i) => i.id === id);
  if (row) row.qty += qty;
  else state.cart.push({ id, qty });
  saveCart();
  toast("Added to cart");
  renderCart();
}

function setQty(id, qty) {
  if (qty < 1) state.cart = state.cart.filter((i) => i.id !== id);
  else {
    const row = state.cart.find((i) => i.id === id);
    if (row) row.qty = qty;
  }
  saveCart();
  renderCart();
}

function toast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add("is-on");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => els.toast.classList.remove("is-on"), 1800);
}

function filtered() {
  const q = state.query.trim().toLowerCase();
  return PRODUCTS.filter((p) => {
    const catOk = state.category === "All" || p.category === state.category;
    const text = `${p.name} ${p.summary} ${p.category} ${p.description}`.toLowerCase();
    return catOk && (!q || text.includes(q));
  });
}

function badges(p) {
  return p.fulfillment
    .map((f) => `<span class="badge ${f === "integrate" ? "badge-integrate" : "badge-download"}">${f === "integrate" ? "Website integrate" : "Download"}</span>`)
    .join("");
}

function renderFilters() {
  els.filters.innerHTML = CATEGORIES.map(
    (c) => `<button type="button" class="filter-chip${c === state.category ? " is-active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");
}

function renderGrid() {
  const list = filtered();
  if (!list.length) {
    els.grid.innerHTML = `<div class="empty-catalog"><h3>No products match</h3><p>Try another category or search term.</p></div>`;
    return;
  }
  els.grid.innerHTML = list
    .map(
      (p) => `<article class="product-card">
        <div class="product-media">${iconFor(p.category)}<div class="product-badges">${badges(p)}</div></div>
        <div class="product-body">
          <p class="eyebrow">${p.category}</p>
          <h3>${p.name}</h3>
          <p>${p.summary}</p>
          <div class="product-meta">
            <span class="price">${money(p.price)}</span>
            <div class="product-actions">
              <button type="button" class="btn btn-outline btn-sm" data-view="${p.id}">Details</button>
              <button type="button" class="btn btn-cyan btn-sm" data-add="${p.id}">Add</button>
            </div>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function specRows(p) {
  return Object.entries(p.specs)
    .map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`)
    .join("");
}

function openProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  state.activeProduct = p;
  state.tab = "description";
  els.overlay.classList.add("is-open");
  els.panel.classList.add("is-open");
  els.panel.setAttribute("aria-hidden", "false");
  renderPanel();
}

function closePanels() {
  els.overlay.classList.remove("is-open");
  els.panel.classList.remove("is-open");
  els.cartDrawer.classList.remove("is-open");
  els.panel.setAttribute("aria-hidden", "true");
  els.cartDrawer.setAttribute("aria-hidden", "true");
}

function renderPanel() {
  const p = state.activeProduct;
  if (!p) return;
  const tabs = [
    ["description", "Description"],
    ["specs", "Specifications"],
    ["use", "How to use"],
    ["guide", "Integration guide"]
  ];
  const bodies = {
    description: `<p>${p.description}</p>`,
    specs: `<table class="spec-table">${specRows(p)}</table>`,
    use: `<ul>${p.use.map((u) => `<li>${u}</li>`).join("")}</ul>`,
    guide: `<p>${p.integration}</p><pre class="code-block">&lt;script src="https://cdn.thecodecraft.tech/${p.id}.js" data-key="YOUR_LICENSE"&gt;&lt;/script&gt;</pre>`
  };
  els.panelBody.innerHTML = `
    <div class="panel-media">${iconFor(p.category)}</div>
    <div class="panel-content">
      <p class="panel-kicker">${p.category} · ${p.fulfillment.map((f) => (f === "integrate" ? "Integrate" : "Download on purchase")).join(" & ")}</p>
      <h2>${p.name}</h2>
      <p>${p.summary}</p>
      <div class="panel-price">${money(p.price)}</div>
      <div class="tabs">${tabs.map(([id, label]) => `<button type="button" class="tab${state.tab === id ? " is-active" : ""}" data-tab="${id}">${label}</button>`).join("")}</div>
      ${tabs.map(([id]) => `<div class="tab-panel${state.tab === id ? " is-active" : ""}" data-tab-panel="${id}">${bodies[id]}</div>`).join("")}
      <div class="panel-actions">
        <button type="button" class="btn btn-primary" data-buy="${p.id}">Buy now</button>
        <button type="button" class="btn btn-cyan" data-add="${p.id}">Add to cart</button>
      </div>
    </div>`;
}

function openCart() {
  els.overlay.classList.add("is-open");
  els.cartDrawer.classList.add("is-open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  els.panel.classList.remove("is-open");
  renderCart();
}

function renderCartCount() {
  const n = cartCount();
  els.cartCount.textContent = n;
  els.cartCount.dataset.empty = n ? "false" : "true";
}

function renderCart() {
  renderCartCount();
  if (!state.cart.length) {
    els.cartList.innerHTML = `<li class="cart-item"><p>Your cart is empty. Add a product to get a download license or integration key.</p></li>`;
    els.cartTotal.textContent = money(0);
    return;
  }
  els.cartList.innerHTML = state.cart
    .map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      if (!p) return "";
      return `<li class="cart-item">
        <div>
          <h3>${p.name}</h3>
          <p>${p.category} · ${money(p.price)}</p>
          <div class="qty-row">
            <button type="button" data-qty="${p.id}" data-d="-1">−</button>
            <span>${i.qty}</span>
            <button type="button" data-qty="${p.id}" data-d="1">+</button>
            <button type="button" data-qty="${p.id}" data-d="0">Remove</button>
          </div>
        </div>
        <strong>${money(p.price * i.qty)}</strong>
      </li>`;
    })
    .join("");
  els.cartTotal.textContent = money(cartTotal());
}

function checkout(event) {
  event.preventDefault();
  if (!state.cart.length) {
    toast("Cart is empty");
    return;
  }
  const fd = new FormData(event.target);
  const name = fd.get("name");
  const email = fd.get("email");
  const phone = fd.get("phone");
  const note = fd.get("note") || "—";
  const msg = [
    "Hello CodeCraft,",
    "",
    "I want to purchase:",
    ...state.cart.map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      return `• ${p.name} × ${i.qty} — ${money(p.price * i.qty)} (${p.fulfillment.join("/")})`;
    }),
    "",
    `Total: ${money(cartTotal())}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Note: ${note}`
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  toast("Opening WhatsApp to complete order");
}

function onReady() {
  els.filters = document.getElementById("filters");
  els.grid = document.getElementById("product-grid");
  els.search = document.getElementById("product-search");
  els.overlay = document.getElementById("overlay");
  els.panel = document.getElementById("product-panel");
  els.panelBody = document.getElementById("panel-body");
  els.cartDrawer = document.getElementById("cart-drawer");
  els.cartList = document.getElementById("cart-list");
  els.cartTotal = document.getElementById("cart-total");
  els.cartCount = document.getElementById("cart-count");
  els.toast = document.getElementById("toast");

  renderFilters();
  renderGrid();
  renderCartCount();

  els.search.addEventListener("input", () => {
    state.query = els.search.value;
    renderGrid();
  });

  document.body.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-cat]");
    if (chip) {
      state.category = chip.dataset.cat;
      renderFilters();
      renderGrid();
      return;
    }
    const view = e.target.closest("[data-view]");
    if (view) {
      openProduct(view.dataset.view);
      return;
    }
    const add = e.target.closest("[data-add]");
    if (add) {
      addToCart(add.dataset.add);
      return;
    }
    const buy = e.target.closest("[data-buy]");
    if (buy) {
      addToCart(buy.dataset.buy);
      openCart();
      return;
    }
    const tab = e.target.closest("[data-tab]");
    if (tab) {
      state.tab = tab.dataset.tab;
      renderPanel();
      return;
    }
    const qty = e.target.closest("[data-qty]");
    if (qty) {
      const row = state.cart.find((i) => i.id === qty.dataset.qty);
      const d = Number(qty.dataset.d);
      if (!row) return;
      if (d === 0) setQty(row.id, 0);
      else setQty(row.id, row.qty + d);
      return;
    }
    if (e.target.closest("[data-open-cart]")) {
      openCart();
      return;
    }
    if (e.target.closest("[data-close]")) {
      closePanels();
    }
  });

  els.overlay.addEventListener("click", closePanels);
  document.getElementById("checkout-form").addEventListener("submit", checkout);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanels();
  });

  const params = new URLSearchParams(location.search);
  if (params.get("cart") === "open") openCart();
  const pid = params.get("product");
  if (pid) openProduct(pid);
}

document.addEventListener("DOMContentLoaded", onReady);
