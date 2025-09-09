# Portfolio Website Project

## Overview

This is a modern, interactive portfolio website built as a full-stack web application showcasing advanced web development skills. The project features a sophisticated React frontend with custom animations, glassmorphism effects, and particle systems, backed by an Express.js server with PostgreSQL database integration. The site demonstrates cutting-edge web technologies including interactive animations, responsive design, and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for theming and advanced animations
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: Custom Vite integration for seamless full-stack development

### UI/UX Design Patterns
- **Glassmorphism**: Advanced CSS effects with backdrop filters and transparency
- **Interactive Animations**: Custom particle systems, morphing blobs, and scroll-triggered animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Design System**: Consistent color palette using CSS custom properties and Tailwind theming

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Validation**: Drizzle-zod integration for runtime type checking
- **Migrations**: Drizzle Kit for database schema management

### Development Workflow
- **Monorepo Structure**: Shared types and schemas between client/server
- **Hot Reload**: Vite HMR for instant development feedback
- **TypeScript**: Strict type checking across the entire application
- **Path Aliases**: Simplified imports with @ prefixes for better organization

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL with Neon serverless database provider
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Components**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS for utility-first styling

### Animation & Interaction Libraries
- **Canvas API**: Custom particle system implementation
- **Embla Carousel**: Touch-friendly carousel components
- **Date Handling**: date-fns for date manipulation
- **Form Validation**: React Hook Form with Zod resolvers

### Development Tools
- **Build System**: Vite with custom plugins for Replit integration
- **Package Manager**: npm with lockfile for dependency management
- **TypeScript**: Full-stack type safety with shared schemas
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Third-Party Integrations
- **Font Awesome**: Icon library for social media and UI icons
- **Google Fonts**: Custom typography with Inter, Poppins, and other web fonts
- **WhatsApp Integration**: Direct messaging links for client communication
- **External Portfolio Links**: Integration with external portfolio sites and projects