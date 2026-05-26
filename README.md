# Thiago Farias - Personal Portfolio

A modern, responsive personal portfolio showcasing my work as a software engineer with expertise in test automation, quality engineering, frontend, and backend development.

## 🎨 Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop screens
- **Dark Mode** — Toggle between light and dark themes with persistent storage
- **Multi-language Support** — English and Portuguese translations
- **Premium UI** — Custom color palette with glassmorphism effects
- **Modern Tech Stack** — Built with Next.js 16, React 19, and Tailwind CSS

## 🚀 Tech Stack

- [Next.js 16](https://nextjs.org) — React framework with app router
- [React 19](https://react.dev) — UI library
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [next-themes](https://github.com/pacocoursey/next-themes) — Theme management
- [Lucide React](https://lucide.dev) — Icon library
- [TypeScript](https://www.typescriptlang.org) — Type safety

## 📋 Pages

- **Home** — Landing page with hero section and intro
- **About** — Personal background and experience summary
- **Experience** — Professional experience timeline
- **Contact** — Get in touch section

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/thiagofarias94/thiago-farias-portfolio.git
cd thiago-farias-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Colors

Light mode and dark mode color palettes are defined in `app/globals.css`:

- **Light mode** — Warm beige background with teal accents
- **Dark mode** — Deep navy background with teal accents

### Translations

Translations are managed with a global language provider in `components/language/language-provider.tsx`. Add new translations by updating the translation maps in each page component.

## 📄 License

This project is open source and available under the MIT License.
