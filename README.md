# MOMENTARY — Café & Kitchen Website

A production-quality, responsive restaurant website built to match the design reference image and enhanced with interactive WhatsApp ordering and rich animations.

## Key Enhancements

1. **Hero with Cheesy Pull Dish**:
   - High-resolution, warm-lit wood-fired cheese-pull pizza with mozzarella strings, fresh basil, and steam.
   - Animated steam wisps rising from the hot dish.
   - Floating ingredient cutouts (basil leaves, tomato slices, chilli flakes) with mouse and scroll parallax.
   - Floating "100% Fresh Ingredients" badge and illuminated "Good Food Good Mood" handwritten script.

2. **Popular at Momentary (Alive & Dynamic)**:
   - Infinite marquee ticker strip across the top of the sage panel.
   - Continuous gentle plate floating and slow rotation with shadow pulse.
   - Hot dish steam & sparkle particles above warm items.
   - 3D cursor-tracking card tilt on hover.
   - Customer ratings (★ 4.8) and badges (*Bestseller*, *Chef's Pick*, *Must Try*).
   - Slide-up "Add to Order" action.

3. **Chef's Specials (Premium Dark Aesthetic)**:
   - Deep forest charcoal/green backdrop with amber ambient glow.
   - Spotlight Card on the left with full-bleed texture imagery, rating, prep time, and tags.
   - 3 stacked cards on the right with equal height and hover shine sweep.
   - Expanding "+" into "Add to Order" on hover.
   - **Universal Lightbox**: Clicking any food photo opens a full-screen zoomed modal with dish story, price, tags, and prev/next arrows.

4. **Visual Gallery (`#gallery`)**:
   - Filterable photo grid (All, Food & Bites, Coffee Bar, Ambience).
   - Full lightbox preview with keyboard navigation (`Esc`, `←`, `→`).

5. **Our Story**:
   - 3-photo layered collage with slight rotations and shadows.
   - Floating polaroid card: *"Where every cup tells a story — Est. 2021"*.
   - Uncropped, separately positioned glowing neon sign with gentle flicker animation (*Good Food • Good People*).
   - Animated stat counters on scroll (*5+ Years*, *10,000+ Guests*, *50+ Dishes*, *4.8★*).
   - 3-step journey timeline and signature pull-quote.

6. **Footer**:
   - Newsletter removed.
   - Giant faint "MOMENTARY" watermark in the background.
   - Direct Google Maps directions link for the Nanded location.
   - Quick navigation links and "Reserve Your Table" CTA.

7. **Direct WhatsApp Orders & Reservations**:
   - Configured with `WHATSAPP_NUMBER = "919356911075"`.
   - **Cart Checkout**: Validates name, phone, order type (Dine-in / Takeaway / Delivery), conditional delivery address, and notes. Generates formatted WhatsApp cart message, opens `wa.me`, triggers toast notification, and clears cart.
   - **Table Booking**: Validates date (`min={today}` preventing past dates), time, guest count, and notes. Formats and sends booking message via WhatsApp with confetti celebration.

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build production bundle
npm run build
```

Dev server runs locally at `http://localhost:5173/`.
