# SteamScope — SEG3125 Assignment 5 Dashboard

## Project Overview

Build a polished, responsive, bilingual Steam games analytics dashboard for **SEG3125 Assignment 5: Bilingual Interactive Dashboard**.

The dashboard should help users explore and compare Steam game performance through two different interactive chart types.

The project must be implemented as a **high-fidelity React prototype**, hosted online, linked from the user's portfolio, and supported by a short assignment report.

---

## Core Assignment Requirements

The final application must include:

- A JavaScript framework, preferably React
- At least two charts
- Two different chart types
- At least one interaction per chart
- A proper dashboard title and explanatory text
- A clutter-free single-page dashboard layout
- English and French localization
- A visible language selector
- At least one fully localized chart
- Localized chart titles, controls, labels, tooltips, legends, and axis text
- Consistent visual design
- Responsive behaviour
- Public deployment
- A visible data source or synthetic-data notice
- Accessibility-conscious controls and contrast

---

# Product Concept

## Product Name

**SteamScope**

## English Subtitle

**Steam Game Performance Dashboard**

## French Subtitle

**Tableau de bord des performances des jeux Steam**

## Goal

Allow users to compare popular Steam games by player activity and inspect how player counts change over time.

The dashboard should feel inspired by Steam's dark visual language without directly copying Steam's interface.

---

# Recommended Technology Stack

Use:

- React
- Vite
- JavaScript with JSX
- Tailwind CSS
- Recharts
- Lucide React
- React Router only if needed
- Netlify or Vercel for deployment

Do not use TypeScript unless explicitly requested later.

---

# Dashboard Layout

Use a responsive single-page dashboard.

Recommended structure:

```text
------------------------------------------------------------
Header
SteamScope
Steam Game Performance Dashboard
Short description
Language selector: English | Français
------------------------------------------------------------

Summary Stat Cards
[ Games Analyzed ] [ Most Popular Game ]
[ Highest Rated ]  [ Average Price ]

------------------------------------------------------------
Chart 1 Card
Most Popular Games by Player Count
Short supporting description

Genre filter
Metric filter

Bar chart
------------------------------------------------------------

Chart 2 Card
Player Activity Over Time
Short supporting description

Game filter
Time-period filter

Line chart
------------------------------------------------------------

Footer
Data notice
Course/project note
------------------------------------------------------------
```

On mobile:

- Stack all stat cards
- Stack chart controls
- Keep charts horizontally readable
- Avoid page-level horizontal scrolling
- Ensure touch targets are large enough

---

# Data Strategy

Use a small static dataset stored locally in the project.

Use approximately 12 to 15 games.

Recommended games:

- Counter-Strike 2
- Dota 2
- PUBG: Battlegrounds
- Apex Legends
- Stardew Valley
- Baldur's Gate 3
- Cyberpunk 2077
- Elden Ring
- Terraria
- Rust
- Grand Theft Auto V
- Helldivers 2
- Palworld
- Football Manager 2024
- Sid Meier's Civilization VI

The data may be synthetic for educational purposes.

If synthetic data is used, display this notice clearly:

> This dashboard uses synthetic sample data created for educational purposes.

French:

> Ce tableau de bord utilise des données synthétiques créées à des fins éducatives.

Do not imply the figures are live Steam data.

---

# Suggested Data Model

Create:

```text
src/data/games.js
```

Recommended object structure:

```js
{
  id: "counter-strike-2",
  name: "Counter-Strike 2",
  genre: "Shooter",
  releaseYear: 2023,
  priceCAD: 0,
  rating: 87,
  peakPlayers: 1500000,
  averagePlayers: 850000,
  monthlyPlayers: [
    { month: "Jan", players: 810000 },
    { month: "Feb", players: 825000 },
    { month: "Mar", players: 840000 },
    { month: "Apr", players: 820000 },
    { month: "May", players: 860000 },
    { month: "Jun", players: 875000 },
    { month: "Jul", players: 890000 },
    { month: "Aug", players: 905000 },
    { month: "Sep", players: 880000 },
    { month: "Oct", players: 920000 },
    { month: "Nov", players: 940000 },
    { month: "Dec", players: 960000 }
  ]
}
```

Use consistent units and realistic-looking values.

---

# Chart 1 — Bar Chart

## English Title

**Most Popular Games by Player Count**

## French Title

**Jeux les plus populaires selon le nombre de joueurs**

## Purpose

Compare player activity across games.

## Chart Type

Horizontal or vertical bar chart.

A horizontal bar chart is preferred because game names can be long.

## Default View

Show the top 8 games.

## Required Interactions

### Genre Filter

Options:

- All genres
- Shooter
- RPG
- Action
- Strategy
- Simulation
- Sandbox

### Metric Filter

Options:

- Peak players
- Average players

Changing either filter must update the chart immediately.

## Behaviour

- Sort games from highest to lowest
- Limit the result to the top 8
- Highlight the highest-value bar
- Show exact values in a tooltip
- Format large numbers compactly where appropriate
- Preserve readable game names

## Supporting Description

English:

> Compare the highest and average player counts of selected Steam games.

French:

> Comparez le nombre maximal et moyen de joueurs de certains jeux Steam.

---

# Chart 2 — Line Chart

## English Title

**Player Activity Over Time**

## French Title

**Activité des joueurs au fil du temps**

## Purpose

Show how player activity changes over time for a selected game.

## Chart Type

Line chart.

## Required Interactions

### Game Filter

Let the user choose one game.

### Time Period Filter

Options:

- 6 months
- 12 months

Changing either filter must update the chart immediately.

## Behaviour

- Show monthly values
- Use a smooth but readable line
- Include visible data points
- Show exact month and player count in the tooltip
- Localize month labels
- Make the chart responsive

## Supporting Description

English:

> Follow monthly player activity for a selected Steam game.

French:

> Suivez l'activité mensuelle des joueurs pour un jeu Steam sélectionné.

---

# Summary Cards

Include four summary cards above the charts.

## Card 1

English: **Games analyzed**

French: **Jeux analysés**

Value: Number of games in the dataset.

## Card 2

English: **Most popular game**

French: **Jeu le plus populaire**

Value: Game with the highest peak player count.

## Card 3

English: **Highest rated**

French: **Mieux noté**

Value: Game with the highest rating.

## Card 4

English: **Average price**

French: **Prix moyen**

Value: Average price in Canadian dollars.

Format price using localized currency formatting.

---

# Localization Requirements

Use a clear text-based language selector:

```text
English | Français
```

Do not use flags as the only language indicator.

The language selector should:

- Be visible in the header
- Clearly indicate the active language
- Update the interface immediately
- Preserve current filters when switching languages

Translate:

- Main title
- Subtitle
- Introductory text
- Summary card labels
- Chart titles
- Chart descriptions
- Filter labels
- Filter option labels
- Axis labels
- Tooltip labels
- Legend text
- Month names
- Data notice
- Footer text
- Empty-state messages

Do not translate game names.

Use `Intl.NumberFormat` for:

- Player counts
- Ratings if displayed with locale-aware formatting
- Currency

Use Canadian English and Canadian French locales:

```js
en-CA
fr-CA
```

Recommended translation file:

```text
src/translations/translations.js
```

Example:

```js
export const translations = {
  en: {
    dashboardTitle: "Steam Game Performance Dashboard",
    gamesAnalyzed: "Games analyzed",
    peakPlayers: "Peak players"
  },
  fr: {
    dashboardTitle: "Tableau de bord des performances des jeux Steam",
    gamesAnalyzed: "Jeux analysés",
    peakPlayers: "Joueurs simultanés maximum"
  }
};
```

---

# Visual Design

## Overall Style

Create a professional dark dashboard inspired by Steam.

## Recommended Visual Direction

- Deep navy page background
- Slightly lighter cards
- Cool blue accent
- White primary text
- Muted blue-grey secondary text
- Rounded card corners
- Soft borders
- Minimal shadows
- Clear spacing
- Strong chart hierarchy

## Design Principles

Apply:

- Contrast
- Scale
- Balance
- Visual hierarchy
- Negative space
- Alignment
- Consistency
- Gestalt similarity
- Gestalt proximity
- Figure-ground separation

Do not use excessive gradients or decorative effects.

---

# The 3Cs

The implementation should visibly reflect the 3Cs.

## Context

Each chart must have:

- A clear title
- A short explanation
- Appropriate labels
- Meaningful units
- Clear filter labels

## Clutter-Free

Avoid:

- Excessive gridlines
- Too many colours
- Decorative icons inside charts
- Redundant legends
- Too many games at once
- Dense labels
- Unnecessary borders

## Contrast

Use contrast to:

- Highlight the most important value
- Separate cards from the page background
- Make headings easy to scan
- Keep secondary text visually quieter
- Ensure controls are obvious and interactive
- Preserve accessible text contrast

---

# Accessibility

Implement:

- Semantic headings
- Proper labels for every select control
- Keyboard-accessible controls
- Visible focus indicators
- Sufficient colour contrast
- No information conveyed by colour alone
- ARIA labels where needed
- Descriptive chart container labels
- Clear empty states
- Responsive text sizing
- Reduced-motion-friendly transitions

Use native `<select>` elements unless a custom control is fully accessible.

---

# Interaction and Usability Requirements

The interface should follow usability heuristics.

Include:

- Immediate chart updates after filter changes
- Clear active language state
- Consistent controls
- Predictable placement
- Helpful default selections
- Clear labels
- No dead buttons
- No hidden essential controls
- Error-free filtering
- Empty-state messaging when no games match
- Reset filters button if useful
- Hover and keyboard focus feedback

Avoid unnecessary modals, navigation, accounts, authentication, or backend features.

---

# Suggested Component Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── LanguageSelector.jsx
│   ├── StatCard.jsx
│   ├── StatCards.jsx
│   ├── ChartCard.jsx
│   ├── PopularGamesChart.jsx
│   ├── PlayerTrendChart.jsx
│   ├── FilterSelect.jsx
│   ├── DataNotice.jsx
│   └── Footer.jsx
├── data/
│   └── games.js
├── translations/
│   └── translations.js
├── utils/
│   ├── formatters.js
│   └── chartHelpers.js
├── App.jsx
├── main.jsx
└── index.css
```

Keep components reasonably small and reusable.

---

# Suggested Application State

In `App.jsx`, manage:

```js
const [language, setLanguage] = useState("en");
const [selectedGenre, setSelectedGenre] = useState("all");
const [selectedMetric, setSelectedMetric] = useState("peakPlayers");
const [selectedGame, setSelectedGame] = useState("counter-strike-2");
const [selectedPeriod, setSelectedPeriod] = useState(12);
```

Do not reset filters when language changes.

---

# Formatting Utilities

Create helpers for:

- Compact player counts
- Full tooltip counts
- Currency
- Localized month labels
- Localized percentages or ratings

Example:

```js
new Intl.NumberFormat(locale, {
  notation: "compact",
  maximumFractionDigits: 1
}).format(value);
```

For tooltips, use full values with separators.

---

# Responsive Requirements

Desktop:

- Four stat cards in one row
- Wide chart cards
- Controls aligned neatly

Tablet:

- Two stat cards per row
- Charts remain full-width

Mobile:

- One stat card per row
- Controls stack vertically
- Charts remain readable
- No clipped labels
- No horizontal page scroll

---

# Empty States

If a genre has no matching games, show a friendly message.

English:

> No games match the selected filters.

French:

> Aucun jeu ne correspond aux filtres sélectionnés.

Do not render a broken or empty chart.

---

# Footer Content

English:

> Built for SEG3125 — Analysis and Design of User Interfaces.

French:

> Créé pour SEG3125 — Analyse et conception des interfaces utilisateur.

Also include the synthetic-data notice or real source citation.

---

# Deliverables

The project must ultimately include:

- Working React app
- Two interactive charts
- English/French localization
- Responsive design
- Public deployment
- GitHub repository
- Portfolio link
- Assignment report

---

# Portfolio Integration

Add a new project card to the existing portfolio.

Recommended content:

## Title

**SteamScope**

## Description

**An interactive bilingual dashboard for exploring Steam game popularity and player trends.**

## Buttons

- Live Demo
- GitHub

Use a real project screenshot rather than a placeholder image.

---

# Report Notes to Preserve During Development

Keep track of the following details because they must appear in the final report:

## Dashboard Goal and Data

- Domain: Steam games
- Dataset type: synthetic or manually collected
- Number of games included
- Data fields used
- Any modifications or simplifications

## Chart Decisions

- Why a bar chart was appropriate for comparing games
- Why a line chart was appropriate for time trends

## 3Cs

For both charts, document:

- Context
- Clutter reduction
- Contrast decisions

## Interactions

Document:

- Genre filter
- Metric filter
- Game selector
- Time-period selector
- Language selector

## Internationalization

Document:

- English and French
- Translation method
- Text expansion difficulties
- Localized months
- Localized numbers
- Localized currency
- UI controls translated
- Chart labels translated

## Visual Design

Document:

- Dark Steam-inspired theme
- Typography
- Spacing
- Hierarchy
- Responsive behaviour
- Accessibility choices

## Generative AI Acknowledgement

State how Codex and ChatGPT were used for:

- Planning
- Code generation
- Debugging
- Translation support
- Report editing

Do not claim that AI completed work without review.

---

# Development Order

Follow this order:

1. Create the React/Vite project
2. Install Tailwind CSS
3. Install Recharts
4. Install Lucide React
5. Add the game dataset
6. Build the page shell
7. Build summary cards
8. Build the bar chart
9. Add bar chart filters
10. Build the line chart
11. Add line chart filters
12. Add localization
13. Localize charts and tooltips
14. Add empty states
15. Improve accessibility
16. Test responsiveness
17. Add footer and data notice
18. Deploy
19. Add the project to the portfolio
20. Capture screenshots for the report

---

# Acceptance Checklist

The project is complete only when all of the following are true:

- [ ] React app runs without console errors
- [ ] Two different chart types are present
- [ ] Bar chart is interactive
- [ ] Line chart is interactive
- [ ] Filters update charts immediately
- [ ] Language selector works
- [ ] English and French are supported
- [ ] At least one chart is fully localized
- [ ] Tooltip text is localized
- [ ] Month labels are localized
- [ ] Number formatting is localized
- [ ] Currency formatting is localized
- [ ] Game names remain unchanged
- [ ] Synthetic-data notice or source citation is visible
- [ ] Dashboard is responsive
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Empty states are handled
- [ ] No placeholder images remain
- [ ] App is publicly hosted
- [ ] GitHub repository is public or accessible
- [ ] Portfolio contains the dashboard
- [ ] Portfolio uses an updated project image
- [ ] Report contains all required sections
- [ ] Generative AI use is acknowledged
- [ ] Group review registration is completed

---

# Important Constraints

Do not add unnecessary scope such as:

- User accounts
- Authentication
- Databases
- Live Steam API integration
- Admin panels
- Complex routing
- Saved dashboards
- Social features
- Backend services

Focus on polish, clarity, interactivity, bilingual support, and meeting the assignment rubric.

---

# Codex Working Instructions

When implementing this project:

1. Inspect the existing repository before changing files.
2. Preserve working functionality.
3. Use JavaScript and JSX, not TypeScript.
4. Keep the design consistent across all components.
5. Avoid adding dependencies unless they are useful.
6. Do not create fake backend integrations.
7. Keep all sample data local.
8. Do not claim the data is live.
9. Make responsive behaviour part of the initial implementation.
10. Test the app after every major change.
11. Resolve all console warnings and errors.
12. Keep code readable and organized.
13. Reuse components where it improves maintainability.
14. Do not overcomplicate state management.
15. Use clear commit-sized implementation steps.

The highest priority is satisfying the assignment requirements with a polished and usable dashboard.