# InstiWise Landing Website - Technical Documentation

![React](https://img.shields.io/badge/React-v18.x-blue)
![Vite](https://img.shields.io/badge/Vite-v5.x-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.x-blue)
![Pure CSS](https://img.shields.io/badge/Styling-Pure_CSS-green)

InstiWise is an intelligent institute management and collaboration platform designed to enhance academic connectivity, communication, and productivity within educational institutions. It enables students and staff to access real-time academic information such as lessons, rooms, and schedules; share and explore projects; receive institute-wide news and announcements; and build meaningful student networks. The platform integrates academic management, project sharing, and social connectivity into one centralized system, promoting a smarter, more connected campus experience.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Features](#features)
- [Authentication](#authentication)
- [Theme Management](#theme-management)
- [Testing](#testing)
- [Deployment](#deployment)
- [Error Handling](#error-handling)
- [Security](#security)
- [Future Improvements](#future-improvements)
- [Support](#support)

## Overview

The InstiWise website is a modern, responsive landing and multi-page application built with React and Vite. It serves as the marketing and informational hub, featuring pages for home, features, how it works, testimonials, and contact. The site emphasizes conversion with strong CTAs, brand-consistent design, and form submission for demo requests.

## Architecture

### Components

- **React Router**: For client-side routing across pages.
- **Pure CSS**: Custom styles with no external libraries beyond Tailwind (optional).
- **Reusable Components**: Header, Footer, Buttons, Cards for consistent UI.
- **State Management**: React Hooks for form handling and local state.
- **Form Submission**: Direct fetch to backend API for contact/demo requests.

### Directory Structure

```plaintext
instiwise-website/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroGraphic.jsx
│   │   └── CTASection.jsx
│   ├── assets/
│   │   └── images/
│   │       └── logo.png
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Technologies

- **React**: v18.x for component-based UI
- **Vite**: v5.x for fast development and builds
- **Tailwind CSS**: v3.x (or Pure CSS) for responsive styling
- **React Router**: v6.x for navigation
- **Fetch API**: For backend communication

## Setup Instructions

### Prerequisites

- **Node.js**: v18.x or higher

1. Clone the repository:
    ```bash
    git clone https://github.com/mixro/instiwise_landing_page
    cd instiwise_landing_page
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the app:
    ```bash
    npm run dev
    ```

    - Open http://localhost:5173

4. Build for production:
    ```bash
    npm run build
    ```

## Project Structure

The project follows a page-based structure with shared components for header/footer. Pages are modular for easy maintenance.

## Features

- **Responsive Landing Page**: Hero with custom graphic, features grid, CTA.
- **Dedicated Pages**: Features, How It Works, Testimonials, Contact.
- **Form Handling**: Contact page with validation and backend submission.
- **Brand Consistency**: Custom logo and teal-green color scheme.
- **Navigation**: Fixed header with links.

## Authentication

- Not implemented on frontend (handled via backend or future login portal).

## Theme Management

- Light mode primary; dark mode optional via CSS variables.

## Testing

- Manual testing recommended; add Jest/React Testing Library for components.

## Deployment

- Deploy via Vercel, Netlify, or any static host.
- Use `npm run build` and upload dist folder.

## Error Handling

- Form submission with success/error feedback.
- Graceful fallbacks for API errors.

## Security

- Client-side only; ensure backend validates inputs.
- Use HTTPS in production.

## Future Improvements

- Add user dashboard preview.
- Integrate analytics.
- Multi-language support.
- SEO enhancements.

## Support

Contact the team via the website form or email for issues. Provide details for quick resolution.