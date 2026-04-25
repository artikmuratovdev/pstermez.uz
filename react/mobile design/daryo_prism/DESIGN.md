# Design System Document: The Editorial Pulse

## 1. Overview & Creative North Star
**Creative North Star: The Digital Curator**
This design system moves away from the "template" feel of traditional news portals. Instead of a rigid, claustrophobic grid of boxes, we embrace **Organic Bentoism**. The goal is to present high-density information through a lens of sophisticated editorial authority. We achieve this by breaking the traditional 12-column symmetry in favor of intentional, weighted imbalances—where the "Lenta" (live feed) acts as a grounding anchor for more expressive, asymmetric featured content.

The vibe is **Expressive Minimalism**: clean and functional enough for rapid news consumption, yet luxurious enough to feel like a premium broadsheet. We leverage white space not as "empty room," but as a structural element that guides the eye.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
We use color to define structure, moving away from legacy web patterns.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. 
Boundaries are defined solely through background color shifts. For example, a "Breaking News" section should be wrapped in `surface_container_low`, sitting directly on a `surface` background. This creates a "soft edge" that feels integrated, not boxed in.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
*   **Base:** `surface` (#f8f9fa)
*   **Secondary Content Areas:** `surface_container_low` (#f3f4f5)
*   **Interactive Cards:** `surface_container_lowest` (#ffffff)
*   **Persistent Sidebars (Lenta):** `surface_container` (#edeeef)

### The "Glass & Gradient" Rule
For floating elements like the Sticky Header or Language Toggles, use **Glassmorphism**. Combine `surface` at 80% opacity with a `backdrop-filter: blur(12px)`. This prevents the header from feeling like a heavy "lid" on the content.
*   **Signature Texture:** Use a subtle linear gradient from `primary` (#003569) to `primary_container` (#004c91) for Premium Subscription CTAs and Hero accents to add "soul" and depth.

---

## 3. Typography: Editorial Authority
We utilize **Inter** for its neutral, high-legibility architecture and **Work Sans** for technical labels to create a subtle typographic friction that aids navigation.

*   **Display (Display-LG/MD):** Reserved for major breaking news or deep-dive investigations. Tracking should be set to -0.02em to feel tight and authoritative.
*   **Headlines (Headline-SM/MD):** The workhorse of the portal. Use `on_surface` (#191c1d) with a line-height of 1.2 to maintain density without sacrificing readability.
*   **The "Label" Distinction:** Use `label-md` (Work Sans) for "Lenta" timestamps and "Regional" tags. The slight stylistic shift from Inter signals to the user that this is "meta-information" rather than the narrative.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for a modern news environment. We use **Tonal Layering**.

*   **The Layering Principle:** Place a `surface_container_lowest` card on top of a `surface_container_low` section. The change in hex code provides enough "lift" for the human eye without the clutter of a shadow.
*   **Ambient Shadows:** If an element must float (e.g., a search modal), use: `box-shadow: 0 12px 40px rgba(25, 28, 29, 0.06)`. The tint is derived from `on_surface`, ensuring it feels like natural light, not a gray smudge.
*   **The Ghost Border Fallback:** If accessibility requires a border, use `outline_variant` at 15% opacity. Never use 100% opaque lines.

---

## 5. Components

### Cards & The Bento Grid
*   **Rule:** Forbid divider lines. Use vertical white space (1.5rem to 2rem) or subtle background shifts.
*   **Featured Card:** High-contrast images with `surface_container_highest` overlays for legibility.
*   **Lenta Item:** A vertical stack using `body-md` for titles. Separation is achieved through a 16px gap and a background shift on hover.

### Buttons
*   **Primary:** Background: Gradient `primary` to `primary_container`. Text: `on_primary`. Shape: `md` (0.375rem).
*   **Secondary:** Background: `surface_container_high`. Text: `on_surface`.
*   **Tertiary (Text-only):** Text: `primary`. No container. Used for "Read More" links.

### Input Fields (Search & Newsletter)
*   **State:** Default state uses `surface_container_highest` as the background. On focus, transition to `surface_container_lowest` with a 1px `primary` "Ghost Border" (20% opacity).

### Regional Tabs & Language Toggles
*   **Style:** Use "Pill" shapes (`full` roundedness).
*   **Active:** `primary_container` with `on_primary`.
*   **Inactive:** `surface_container_low` with `on_surface_variant`.

### Video/Podcast Integration
*   **Signature Element:** Use a `backdrop-blur` overlay on the play button. The container should use `inverse_surface` to give it a "Dark Mode" feel even within a light layout, signaling a shift to media-heavy content.

---

## 6. Do's and Don'ts

### Do
*   **Do** vary the aspect ratios in the Bento grid (e.g., one 2x2 card next to two 1x1 cards) to create visual rhythm.
*   **Do** use `primary_fixed` for subtle highlights in editorial pull-quotes.
*   **Do** prioritize "Lenta" (Latest News) with a persistent sidebar that feels like a separate layer of reality using a slightly darker `surface_dim`.

### Don't
*   **Don't** use black (#000000) for text. Always use `on_surface` (#191c1d) to maintain a premium, ink-on-paper feel.
*   **Don't** use standard "Drop Shadows" on cards; use background color steps instead.
*   **Don't** cram the mobile view. If information density is too high, use horizontal carousels for regional tabs rather than stacking them vertically.

### Accessibility Note
Ensure all `on_surface_variant` text on `surface` backgrounds meets WCAG AA standards. When using Glassmorphism, ensure the `backdrop-filter` is supported or provide a solid `surface_container` fallback.