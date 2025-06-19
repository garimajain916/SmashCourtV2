# Smash Court 🎾

A modern web application that connects tennis players in your local area. Find players, coordinate games, and build your tennis community.

<!-- Trigger new deployment -->

## Features

### 🏆 Core Functionality

- **Player Profiles**: Create and manage your tennis profile with NTRP skill rating, availability, and court preferences
- **Smart Discovery**: Find players based on court location, availability (days/time), and NTRP skill level with advanced filtering
- **In-App Messaging**: Coordinate games and chat with other players directly within the app
- **Dark Mode UI**: Clean, modern interface with dark mode by default for comfortable viewing

### 🎯 Key Features

#### Profile Management
- Customizable player profiles with NTRP skill ratings (1.0 - 7.0)
- Availability scheduling by days of the week and time of day
- Court location preferences and favorite courts
- Profile photos and bio

#### Player Discovery
- Location-based player search by court proximity
- Filter by NTRP skill level, availability (days/time), and distance
- Real-time availability status
- Player recommendations based on skill compatibility

#### Communication
- Direct messaging between players
- Game coordination tools
- Notification system
- Chat history

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - Modern, accessible component library
- **Lucide React** - Beautiful icons

### Backend & Database
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Reliable relational database
- **NextAuth.js** - Authentication solution

### Additional Tools
- **Vercel** - Deployment and hosting
- **Clerk** - User authentication (alternative to NextAuth)
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **date-fns** - Date manipulation

## UI Components

This project uses a comprehensive design system built with **shadcn/ui** components and **Tailwind CSS**. All components are fully accessible, customizable, and follow modern design principles.

### 🎨 Core Components

#### **Theme System**
- **ThemeProvider** - Context provider for theme management
- **ModeToggle** - Dark/light mode switcher with smooth transitions
- **Custom Color Scheme** - HSL-based green theme for light and dark modes

#### **Layout & Navigation**
- **NavigationMenu** - Accessible navigation with dropdown support
- **Breadcrumb** - Hierarchical navigation breadcrumbs
- **AspectRatio** - Responsive aspect ratio container for media

#### **Interactive Elements**
- **Button** - Multiple variants (default, destructive, outline, secondary, ghost, link)
- **Avatar** - User profile images with fallback support
- **Pagination** - Page navigation with customizable controls

#### **Feedback & Alerts**
- **WarningAlert** - Alert component for important notifications
- **Toast** - Non-intrusive notification system

### 🎯 Component Features

#### **Accessibility**
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

#### **Responsive Design**
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions
- Flexible grid systems

#### **Customization**
- CSS custom properties for theming
- Tailwind utility classes
- Component variants and sizes
- Consistent spacing and typography

### 📁 Component Structure

```
components/
├── ui/                    # shadcn/ui components
│   ├── alert.tsx         # Warning and info alerts
│   ├── aspect-ratio.tsx  # Responsive aspect ratios
│   ├── avatar.tsx        # User avatars
│   ├── breadcrumb.tsx    # Navigation breadcrumbs
│   ├── button.tsx        # Button variants
│   ├── navigation-menu.tsx # Main navigation
│   ├── pagination.tsx    # Page navigation
│   └── theme-provider.tsx # Theme management
├── theme-toggle.tsx      # Dark/light mode toggle
└── layout/              # Layout components
```

### 🎨 Design System

#### **Color Palette**
- **Primary**: Custom green HSL theme
- **Secondary**: Neutral grays
- **Accent**: Highlight colors
- **Muted**: Subtle backgrounds
- **Destructive**: Error states

#### **Typography**
- **Font Family**: System fonts with fallbacks
- **Font Sizes**: Responsive scale
- **Line Heights**: Optimized for readability
- **Font Weights**: Consistent hierarchy

#### **Spacing**
- **Consistent Scale**: 4px base unit
- **Responsive**: Adapts to screen size
- **Component-Specific**: Tailored spacing for each component

### 🚀 Usage Examples

```tsx
// Theme Toggle
<ModeToggle />

// Navigation Menu
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Features</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Dropdown content */}
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// Avatar with Fallback
<Avatar>
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Responsive Aspect Ratio
<AspectRatio ratio={16 / 9}>
  <Image src="/tennis-court.jpg" alt="Tennis Court" fill />
</AspectRatio>
```

## Project Milestones

### 🚀 Milestone 1: Foundation & Profiles (Week 1-2)
**Goal**: Basic app structure with user authentication and profile management

**Deliverables**:
- [ ] Project setup with Next.js, TypeScript, and Tailwind
- [ ] Shadcn/ui component library integration
- [ ] User authentication system
- [ ] Basic profile creation and editing
- [ ] Database schema design
- [ ] Responsive layout and navigation

**Key Features**:
- User registration and login
- Profile creation with NTRP skill rating (1.0 - 7.0), bio, and photo
- Court preferences and favorite courts selection
- Availability scheduling by days of the week and time of day
- Basic profile editing
- Dark mode implementation

### 🎯 Milestone 2: Discovery & Search (Week 3-4)
**Goal**: Player discovery and filtering system

**Deliverables**:
- [ ] Player search and filtering interface
- [ ] Location-based search functionality by court proximity
- [ ] Availability scheduling system (days/time)
- [ ] Advanced filtering (NTRP skill level, distance, availability)
- [ ] Player cards and list views
- [ ] Search results pagination

**Key Features**:
- Browse all players in the area
- Filter by NTRP skill level, availability (days/time), and distance
- Court-based location search
- Availability calendar integration
- Player profile viewing

### 💬 Milestone 3: Messaging & Coordination (Week 5-6)
**Goal**: Communication system for game coordination

**Deliverables**:
- [ ] Real-time messaging system
- [ ] Chat interface and message history
- [ ] Game coordination features
- [ ] Notification system
- [ ] User blocking and reporting
- [ ] Final polish and testing

**Key Features**:
- Direct messaging between players
- Game scheduling coordination
- Push notifications
- Message history and search

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smash-court.git
   cd smash-court
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/smash_court"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run database migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# Open Prisma Studio
npx prisma studio
```

## Project Structure

```
smash-court/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── api/               # API routes
│   ├── dashboard/         # Main app dashboard
│   ├── profile/           # Profile management
│   ├── search/            # Player discovery
│   └── messages/          # Messaging system
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   └── forms/            # Form components
├── lib/                  # Utility functions
├── prisma/               # Database schema
├── public/               # Static assets
└── styles/               # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ for the tennis community** 