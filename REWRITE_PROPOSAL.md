# VowPerfect Rewrite Proposal

## 1. Current Project Analysis (Reference Only)

**Product:** Wedding website builder / showcase (“VowPerfect”).

**Core concepts (reimplement, do not copy):**
- **Landing:** Hero, template gallery (Elegant / Modern / Wedding Post / Lux), features, testimonials, CTA, how it works, pricing tiers, contact, booking modal (Google Calendar iframe), package selection modal.
- **Templates:** Multiple wedding-site themes; each theme is a full page with: hero, welcome/intro, countdown, event details, our story, gallery, RSVP, when/where, FAQ (where applicable), navigation. Some use GSAP; all use i18n.
- **i18n:** English + Serbian; locale from saved preference → browser lang → geo (Balkan → Serbian); LocaleDetector + `saveLocalePreference` / `getSavedLocale`; geo via ipapi.co / ipinfo.io with localStorage cache.
- **RSVP:** Form per template; one template (Lux) posts to external API (`https://vowperfectapi.azurewebsites.net`); others are UI-only.
- **Dashboard:** Seating/table management (tables, guests, drag-drop, guest selector) — optional for rewrite.
- **Tech:** Nuxt 3, Vue 3, PrimeVue, Tailwind, GSAP, @nuxtjs/i18n, @nuxt/image, Vercel Analytics, GTM.

**Structural issues to avoid in rewrite:**
- Components scattered across `Landing/`, `General/`, `templates/<name>/`, `Dashboard/` with duplicated concepts (e.g. multiple BookingModals, Navigation variants).
- No clear API layer; RSVP URL hardcoded in component.
- Template pages manually importing many components; naming inconsistent (e.g. `WlcomeMessage`).
- Mix of `$t`, `useI18n`, and inline strings; geo logic in a single util with console logs.

---

## 2. Recommended Tech Stack

| Layer           | Choice              | Reason |
|----------------|---------------------|--------|
| Framework       | **React 18**        | Clear component model, strong ecosystem, good for portfolio; different from current Vue so rewrite stays clean-room. |
| Build           | **Vite**            | Fast HMR, simple config, native ESM. |
| Routing         | **React Router v6** | Standard, declarative, code-splitting with lazy routes. |
| Styling         | **Tailwind CSS**    | Same as current; keep utility-first, design tokens in `tailwind.config`. |
| State (server)  | **TanStack Query**  | RSVP submit, future API calls; caching, loading/error states. |
| State (client)  | **Zustand**         | UI state (modals, locale, booking flow); minimal boilerplate. |
| i18n            | **react-i18next**   | Mature, namespace support, fits React; use with a thin locale service. |
| API             | **Fetch + thin client** | One `api/` layer with typed functions; no line-by-line copy of existing code. |
| Forms           | **React Hook Form** | RSVP and contact forms; validation optional (e.g. Zod). |
| Analytics       | **Vercel Analytics** (optional) | Same as current; inject via env. |

**Alternative:** If you prefer to stay in the Vue ecosystem, use **Vue 3 + Vite + Vue Router + Pinia + VueUse + same API/i18n patterns**; the folder structure below maps over 1:1 (swap `components/` to Vue SFCs and `hooks/` to composables).

---

## 3. New Folder Structure

```
vowperfect-app/
├── public/
│   ├── favicon.ico
│   ├── fonts/              # Custom fonts (EB Garamond, etc.)
│   ├── images/             # Static images, flags, template previews
│   └── locales/            # Optional: JSON used by i18n if loaded from public
├── src/
│   ├── api/                # API abstraction (no UI)
│   │   ├── client.ts       # Base fetch wrapper, env base URL
│   │   ├── rsvp.ts         # submitRsvp(eventId, payload)
│   │   └── types.ts        # Request/response types
│   ├── app/                # App shell
│   │   ├── App.tsx
│   │   ├── Router.tsx      # Routes + lazy splits
│   │   └── Providers.tsx   # QueryClient, i18n, theme
│   ├── components/         # Reusable, presentational
│   │   ├── ui/             # Buttons, modals, inputs, cards
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── ...
│   │   ├── layout/         # Header, Footer, Navigation, Section
│   │   └── shared/         # LanguageSwitcher, Countdown (generic)
│   ├── features/           # Feature-based modules
│   │   ├── landing/
│   │   │   ├── components/ # Hero, TemplateShowcase, Features, Testimonials, Pricing, Contact, CTA, HowItWorks
│   │   │   ├── LandingPage.tsx
│   │   │   └── hooks/      # useScrollVisibility, useBookingModal
│   │   ├── templates/
│   │   │   ├── elegant/
│   │   │   │   ├── components/ # Hero, Welcome, Countdown, EventDetails, Story, Gallery, RsvpBlock
│   │   │   │   └── ElegantPage.tsx
│   │   │   ├── modern/
│   │   │   │   ├── components/
│   │   │   │   └── ModernPage.tsx
│   │   │   ├── lux/
│   │   │   │   ├── components/
│   │   │   │   └── LuxPage.tsx
│   │   │   ├── wedding-post/
│   │   │   │   ├── components/
│   │   │   │   └── WeddingPostPage.tsx
│   │   │   ├── shared/     # TemplateNav, TemplateRsvpForm (wraps api + form)
│   │   │   └── config.ts   # Template meta: id, name, path, preview image
│   │   ├── booking/
│   │   │   ├── BookingModal.tsx
│   │   │   └── PackageModal.tsx
│   │   └── locale/
│   │       ├── LocaleProvider.tsx  # Wraps i18next + persistence
│   │       ├── useLocale.ts
│   │       └── detectLocale.ts     # Preference → browser → geo (Balkan)
│   ├── services/           # Pure logic, no React
│   │   ├── locale.ts       # getSavedLocale, setSavedLocale, detectRegion (geo)
│   │   └── geo.ts          # fetchCountryCode, isBalkanRegion, cache in localStorage
│   ├── stores/              # Zustand
│   │   ├── ui.ts           # modals, mobile menu
│   │   └── locale.ts        # currentLocale, setLocale (synced with i18next)
│   ├── hooks/               # Generic React hooks
│   │   ├── useIntersection.ts
│   │   └── useMediaQuery.ts
│   ├── i18n/
│   │   ├── config.ts
│   │   ├── resources/      # en.json, sr.json (namespaced: common, landing, rsvp, templates)
│   │   └── index.ts        # init i18next, backend, detection
│   ├── assets/             # Images/css imported by code
│   │   └── css/
│   │       └── index.css   # Tailwind entry + font-face
│   └── pages/              # Optional: if you use file-based routing later
│       └── (none; routes live in Router.tsx)
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

**Design principles:**
- **api/** – Single place for all HTTP; env-based base URL; typed functions only.
- **components/ui** + **layout** + **shared** – Reusable across landing and templates; no feature logic.
- **features/** – One folder per feature (landing, templates, booking, locale); each has its own components and optionally hooks; pages compose from feature components.
- **services/** – Stateless helpers (locale persistence, geo); used by stores and locale feature.
- **stores/** – Minimal global UI state; server state lives in TanStack Query.
- **i18n/** – Central config and resources; detection logic in `services/locale` + `detectLocale` using `services/geo`.

---

## 4. Architectural Decisions

| Decision | Approach | Reason |
|----------|----------|--------|
| **API layer** | Single `api/client` (base URL, headers, error handling) + one module per domain (`api/rsvp`). | No scattered fetch calls; easy to add auth or logging later. |
| **Templates as features** | Each template is a feature subfolder with its own page component and section components. | Clear ownership; shared pieces (TemplateNav, TemplateRsvpForm) live under `templates/shared`. |
| **RSVP** | Shared `TemplateRsvpForm` (or per-template wrapper) that calls `api/rsvp.submit()`; API base URL from env. | One form pattern; template-specific styling via props or CSS class. |
| **i18n** | react-i18next with namespaced JSON (e.g. `landing`, `rsvp`, `templates`). | Avoids one huge file; lazy load namespaces if needed. |
| **Locale detection** | On app init: `getSavedLocale()` → browser language → `geo.isBalkanRegion()` then set i18next language and `setSavedLocale()`. | Same concept as current (preference → browser → geo); reimplement in `services/locale` + `services/geo` without copying. |
| **Booking modal** | Controlled by Zustand or React state; content = iframe (Google Calendar URL from env). | Same behavior as current; no PrimeVue dependency. |
| **Pricing / package modal** | Same pattern: modal state in store or parent; form in feature component. | Reuse `components/ui/Modal`. |
| **Animations** | CSS + Intersection Observer for scroll-in; optional small lib (e.g. Framer Motion) for template-specific motion; avoid copying GSAP usage line-by-line. | Lighter than GSAP where possible; consistent with “clean-room” rewrite. |
| **Images** | Static assets in `public/images` or `src/assets`; template previews and fonts in `public`. | No Nuxt Image in React; use standard `<img>` or a small responsive image component. |

---

## 5. Reimplementing Key Features (Concepts Only)

- **Landing**
  - Single `LandingPage` that composes: Hero, TemplateShowcase (links to `/templates/elegant`, etc. from config), Features, Testimonials, CTA, HowItWorks, Pricing, Contact.
  - Reuse `components/layout/Header` and `Footer`; scroll-to-section via React Router hash or refs.
  - Booking: “Book now” opens `BookingModal` (iframe); pricing CTA can open `PackageModal`; state from store or parent.

- **Templates**
  - Route table: `/templates/elegant`, `/templates/modern`, `/templates/lux`, `/templates/wedding-post` → lazy-loaded page components.
  - Each page: TemplateNav + theme-specific sections (Hero, Story, Countdown, EventDetails, Gallery, WhenWhere, Rsvp, FAQ). Implement sections from scratch with same *sections* (hero, story, RSVP, etc.), not the same markup.
  - Shared: `TemplateNav` (anchor links + optional locale switcher), optional shared `Countdown`, and `TemplateRsvpForm` that uses `api/rsvp` and react-i18next.

- **Locale**
  - On startup: run `detectLocale()` (uses `getSavedLocale`, browser lang, `geo.isBalkanRegion()`); set i18next and persist. No copy-paste of existing LocaleDetector; implement once in `app/Providers` or a small `LocaleProvider` that runs detection and wraps children.

- **RSVP**
  - `api/rsvp.submit(eventId, payload)` with types; `TemplateRsvpForm` collects fields and calls it. Success/error UI reimplemented simply (message + reset). API base URL from `import.meta.env.VITE_API_BASE_URL` or similar.

- **Geo**
  - New implementation in `services/geo`: one function to get country code (e.g. single provider with timeout), one `isBalkanRegion()` that uses a list of country codes and optional localStorage cache with TTL. No duplication of current code.

---

## 6. Best Practices for a Production-Grade App

- **Env:** All base URLs and public keys in `VITE_*` env vars; document in README.
- **Errors:** API client throws or returns Result type; boundaries in Router or layout for graceful error UI.
- **Accessibility:** Semantic HTML, focus management in modals, aria where needed; avoid div-only click areas.
- **Performance:** Lazy route components; optional lazy namespaces for i18n; minimal JS in critical path.
- **Testing:** Unit tests for `services/geo`, `services/locale`, and `api/rsvp`; React Testing Library for one landing section and one template section.
- **Types:** TypeScript throughout; shared types in `api/types`, `stores`, and feature props.
- **Consistency:** One design token set in Tailwind (colors, spacing); one Button/Modal pattern; one form pattern (React Hook Form + optional Zod).
- **Docs:** README with setup, env vars, and high-level architecture (this proposal); JSDoc on public API and services.

---

## 7. Suggested Implementation Order

1. **Scaffold:** Vite + React + TypeScript + React Router + Tailwind; `App`, `Router`, `Providers`; route list (landing + four templates).
2. **API + env:** `api/client`, `api/rsvp`, `api/types`; `.env.example` with `VITE_API_BASE_URL`.
3. **i18n + locale:** react-i18next, `i18n/resources`, `services/locale` and `services/geo`; `detectLocale` and init in Providers.
4. **UI primitives:** Button, Modal, inputs; Layout (Header, Footer, Section).
5. **Landing:** Hero, TemplateShowcase (from config), Features, Pricing, Contact, modals; then wire scroll and CTA.
6. **Templates:** Config + shared Nav/Countdown/RsvpForm; then one template (e.g. Elegant) end-to-end; then Modern, Lux, Wedding Post with new section components.
7. **Polish:** Analytics (optional), SEO (meta per route), and one or two tests as above.

This gives you a clean, scalable codebase that reuses the *product* and *features* of the current app without reusing its implementation or structure.
