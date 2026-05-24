# Bell Green Landscaping

Professional lawn care and landscaping services for homeowners in Northeast Philadelphia and surrounding neighborhoods.

**Live site:** [bellgreenlandscaping.com](https://bellgreenlandscaping.com)

---

## About This Project

This is a modern, mobile-first website for a local landscaping business. Currently in active development — we're gathering feedback and iterating on design and content.

### Tech Stack

- **Frontend:** React 19 + Vite (fast builds, hot module reload)
- **Routing:** React Router v7
- **Icons:** react-icons (Font Awesome 5)
- **Styling:** CSS3 with CSS variables (clean, maintainable)
- **Build:** Vite
- **Deployment:** Vercel (auto-deploy on git push)
- **Version Control:** Git + GitHub

### Features

✅ Fully responsive mobile-first design  
✅ Fast page loads (Vite optimized)  
✅ Sticky navigation with hamburger menu  
✅ Hero section with clear CTA  
✅ Service showcase (6 cards)  
✅ Team about section  
✅ Before/after project gallery  
✅ Client testimonials  
✅ Contact form with success message  
✅ Dark green professional color palette  

---

## Project Structure

```
src/
├── components/
│   ├── Button.jsx       — Reusable button (primary/outline/green)
│   ├── Navbar.jsx       — Sticky nav with mobile menu
│   └── Footer.jsx       — Dark footer with links
├── sections/
│   ├── Hero.jsx         — Hero with tagline & CTAs
│   ├── Services.jsx     — 6 service cards
│   ├── About.jsx        — Team story & values
│   ├── BeforeAfter.jsx  — Project showcase
│   ├── Reviews.jsx      — Testimonials
│   └── Contact.jsx      — Quote request form
├── pages/
│   └── Home.jsx         — Main page (all sections)
├── App.jsx              — Router & layout wrapper
├── main.jsx             — Entry point
└── index.css            — Global styles + CSS variables
```

---

## Setup & Development

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/andy-1au/bell-green-landscaping.git
cd bell-green-landscaping

# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Style
- ESLint configured for React
- Run linter: `npm run lint`

---

## Making Changes

1. **Make edits locally** (components, content, styles)
2. **Test in dev server** (`npm run dev`)
3. **Commit changes** (`git commit -m "..."`)
4. **Push to GitHub** (`git push`)
5. **Vercel auto-deploys** (~1-2 min)

---

## Customization Notes

### Content to Update
- **Contact info:** `src/sections/Contact.jsx` (phone, email, hours)
- **Services:** `src/sections/Services.jsx` (edit service cards)
- **Testimonials:** `src/sections/Reviews.jsx` (add/edit reviews)
- **Before/After:** `src/sections/BeforeAfter.jsx` (replace emojis with real photos)
- **Colors:** `src/index.css` (CSS variables at top)

### Form Submission
The contact form currently shows a success message. To actually send emails, integrate:
- [Formspree](https://formspree.io/) (free, easy)
- [EmailJS](https://www.emailjs.com/)
- Custom backend

---

## Feedback & Next Steps

This is an early version — we're actively gathering feedback to improve:
- Content and messaging
- Design refinements
- Service list accuracy
- Photo gallery (real before/after projects)
- Call-to-action optimization

**Have feedback?** Let me know what works, what doesn't, and what you'd like to see changed.

---

## Deployment

Hosted on **Vercel** with auto-deployment from GitHub:
- Push to master branch → Vercel detects changes → Auto-rebuild & deploy
- Domain: bellgreenlandscaping.com (via Vercel DNS)

---

## License

Personal project for Bell Green Landscaping © 2026
