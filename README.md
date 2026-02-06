# AB Infotech Landing Page

A modern, professional landing page for AB Infotech built with Next.js 14 and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast performance with Next.js
- 📱 Mobile-friendly layout
- 🎯 Sections included:
  - Hero section with call-to-action
  - Services showcase (6 services)
  - Team members display
  - Contact form
  - Responsive navigation header
  - Professional footer

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Components**: React 18

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

## Project Structure

```
/app              - Next.js app directory (pages and layouts)
/components       - Reusable React components
/public           - Static assets
```

### Components

- **Header**: Navigation with mobile menu
- **Hero**: Main hero section with statistics
- **Services**: 6 service cards
- **Team**: Team members showcase
- **Contact**: Contact form with info
- **Footer**: Footer with links and info

## Customization

### Update Company Information

Edit the following files to customize content:
- `components/Header.tsx` - Logo and navigation
- `components/Services.tsx` - Services list
- `components/Team.tsx` - Team members
- `components/Contact.tsx` - Contact details and form
- `components/Footer.tsx` - Footer links and info

### Colors

Modify Tailwind colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',
      secondary: '#1e40af',
    },
  },
},
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

This project is licensed under the MIT License.