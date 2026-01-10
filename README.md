# BHAA Project - Educational Platform

A modern educational platform built with React, Vite, and Tailwind CSS, designed to match the Figma design exactly.

## Features

- **Home Page**: Hero section with search form, features, and AI supporter section
- **Sign In Page**: User authentication interface
- **Topics Page**: Browse and select educational topics
- **Why Choose Us Page**: Information about the platform's mission and vision
- **AI Supporter Page**: Interactive AI chat interface

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar component
│   └── Footer.jsx      # Footer component
├── pages/
│   ├── Home.jsx        # Home page
│   ├── SignIn.jsx      # Sign in page
│   ├── Topics.jsx      # Topics page
│   ├── WhyChooseUs.jsx # Why choose us page
│   └── AISupporter.jsx # AI supporter page
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css          # Global styles with Tailwind
```

## Design

The design is based on the Figma file and includes:
- Responsive layout matching 1440px width
- Blue color scheme (#2563eb primary)
- Modern UI with gradients and shadows
- Consistent spacing and typography

## Routes

- `/` - Home page
- `/signin` - Sign in page
- `/topics` - Topics page
- `/why-choose-us` - Why choose us page
- `/ai-supporter` - AI supporter page
