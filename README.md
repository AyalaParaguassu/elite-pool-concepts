# Elite Pool Concepts — Website

A professional, responsive, static website for Elite Pool Concepts — premium residential fiberglass pool installation in South Florida.

## Project Structure

```
website/
├── index.html              # Home page
├── pools.html              # Pool Concepts catalog
├── process.html            # Our Process (5-step installation guide)
├── about.html              # About Elite Pool Concepts
├── contact.html            # Contact form & consultation request
├── thank-you.html          # Form confirmation page
├── style.css               # Shared stylesheet
├── script.js               # Shared JavaScript (nav, accordion)
├── favicon.png             # Site favicon
├── logo.png                # Company logo
└── assets/
    └── images/             # Pool photos and graphics
        ├── TheClassic.png
        ├── TheEntertainer.png
        ├── TheLapPool.png
        ├── TheLagoon.png
        ├── TheRetreat.png
        ├── TheOasis.png
        ├── L-ShapeDesign.png
        ├── pool_and_spa.png
        ├── tanning-ledge-add-on.png
        └── fiberglass_pool_finish_water_color_guide.png
```

## Features

- **Pure HTML/CSS/JavaScript** — no frameworks, no build tools
- **Fully responsive** — mobile-first design, hamburger menu on small screens
- **Netlify Forms integration** — contact form submissions captured automatically
- **Google Fonts** — Playfair Display (headings) + Montserrat (body)
- **Accessibility** — semantic HTML, ARIA labels, keyboard navigation
- **Performance** — lazy-loaded images, minimal CSS/JS
- **SEO-friendly** — meta tags, Open Graph tags, sitemap-ready
- **Fast load times** — no third-party scripts, optimized images

## Pages

### Home (`index.html`)
- Sticky navigation with mobile hamburger menu
- Full-height hero with gradient overlay
- "Why Choose Us" value proposition cards
- Pool gallery preview (3 featured designs)
- Fiberglass vs. Concrete comparison section
- Process preview (5 steps)
- Testimonials (3 customer reviews)
- CTA banner and footer

### Pool Concepts (`pools.html`)
- Page hero with title and intro
- Rectangle Series (The Classic, The Entertainer, The Lap Pool)
- Freeform Series (The Lagoon, The Retreat, The Oasis)
- Specialty Designs (L-Shape, Pool + Spa, Tanning Ledge)
- Finishes & Colors section with photo guide
- South Florida climate benefits section
- CTA banner

### Our Process (`process.html`)
- Hero section
- 5-step process detail with visual flow
- Typical project timeline (weeks 1–3)
- FAQ accordion (6 questions)
- CTA banner

### About (`about.html`)
- About hero
- Our Story section (text + photo placeholder)
- Core Values cards (4 values)
- Why Fiberglass section
- Service Area (Miami-Dade, Broward, Palm Beach)

### Contact (`contact.html`)
- Page hero
- Two-column layout:
  - **Left:** Contact details (phone, email, service area)
  - **Right:** Lead capture form with Netlify integration
- Form fields:
  - First/Last Name, Email, Phone
  - Address, City, County dropdown
  - Pool Interest dropdown
  - Budget range dropdown
  - "How did you hear about us?" dropdown
  - Message textarea
  - Submit button

### Thank You (`thank-you.html`)
- Simple confirmation page
- Warm thank you message
- Next steps info
- Link back to home

## Deployment to Netlify

### Prerequisites
- Netlify account (free tier is fine)
- Custom domain configured (optional)

### Quick Deploy

**Option 1: Drag & Drop**
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag the entire `website` folder onto the Netlify dashboard
3. Your site goes live immediately at a `.netlify.app` domain

**Option 2: Git Integration (Recommended)**
1. Push the `website` folder to a GitHub repo
2. In Netlify, connect your GitHub account
3. Select the repo and set build settings:
   - **Base directory:** (leave blank or set to `website/`)
   - **Build command:** (leave blank — static site, no build needed)
   - **Publish directory:** (leave blank or `.`)
4. Deploy

**Option 3: Netlify CLI**
```bash
# Install Netlify CLI (one time)
npm install -g netlify-cli

# From the website directory, deploy
cd website
netlify deploy --prod --dir .
```

### Configure Custom Domain

Once deployed:
1. In Netlify **Site settings** → **Domain management**
2. Add your custom domain (`elitepoolconcepts.com`)
3. Netlify provides nameservers
4. Update DNS at your registrar (Squarespace, GoDaddy, etc.) to point to Netlify nameservers
5. Wait 24–48 hours for DNS propagation

### Netlify Forms Setup

The contact form is already configured for Netlify Forms. After deployment:

1. Go to your Netlify site **Forms** tab
2. You'll see the `contact` form listed
3. Submissions appear in real-time
4. (Optional) Set up email notifications: **Site settings** → **Forms** → **Notifications**

Netlify captures all submissions automatically — no backend required.

## Local Development

No build process needed. Simply:

```bash
# Open index.html in a browser
# Or run a local server:
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Customization

### Brand Colors
Edit the color variables in `style.css`:
```css
/* Main colors */
#002D72 - Elite Navy (primary)
#001F4D - Deep Navy (dark backgrounds)
#0078D4 - Pool Blue (accents, CTAs)
#B8BDC7 - Silver Gray (dividers)
#333333 - Charcoal (text)
```

### Business Info
Update phone, email, and service area in:
- `index.html` (footer)
- `pools.html` (footer)
- `process.html` (footer)
- `about.html` (footer + service area section)
- `contact.html` (contact details section + footer)
- `thank-you.html` (footer)

### Images
Replace images in `assets/images/` with your own photos. Keep the same filenames or update references in HTML.

### Typography
Google Fonts are loaded in every page's `<head>`:
- **Playfair Display** for headings (H1–H4)
- **Montserrat** for body, buttons, navigation

Change fonts in the `<link>` tag if needed.

## Performance Tips

- **Images:** Optimize pool photos before upload (max width 1200px, compress with TinyPNG or similar)
- **Lazy loading:** Already implemented via `loading="lazy"` in img tags (add as needed)
- **Caching:** Netlify handles static file caching automatically
- **Minimize CSS/JS:** Current files are already minimal

## SEO Checklist

- ✅ Meta titles & descriptions on every page
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML (nav, main, section, footer)
- ✅ Mobile-responsive
- ✅ Fast load time
- ✅ Accessible forms
- **TODO:** Add robots.txt, sitemap.xml, Google Analytics (optional)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## License

© 2026 Elite Pool Concepts. All rights reserved.

---

**Questions?** Contact sales@elitepoolconcepts.com or call (610) 316-6333.
