# Los Monstruos - Website

A modern, responsive website showcasing the Los Monstruos iOS game. Built with React 19, TypeScript, and Vite.

## Features

### Design & UX
- **Modern UI**: Dark theme with gradient accents and smooth animations
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and mobile menu
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Content Sections
- **Hero Section**: Game introduction with video preview and call-to-action
- **Features Grid**: Detailed breakdown of game engine capabilities
- **Gallery**: Video showcase of gameplay mechanics
- **Technical Specs**: Performance and platform requirements
- **Beta Signup**: Email collection for early access
- **Footer**: Links, branding, and release information

### Technical Features
- **React 19**: Latest React features and hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast development and build tooling
- **CSS Grid/Flexbox**: Modern layout techniques
- **Mobile Menu**: Hamburger menu for mobile devices

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
cd site
npm install
```

### Development Server
```bash
npm run dev
```
Runs the development server at `http://localhost:5173`

### Building for Production
```bash
npm run build
```
Creates optimized production build in `dist/` directory

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality

## Project Structure

```
site/
├── public/              # Static assets
│   └── videos/         # Game demo videos
├── src/                # Source code
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.tsx        # Application entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── eslint.config.js     # ESLint configuration
```

## Styling

### CSS Architecture
- **CSS Variables**: Consistent color scheme and spacing
- **Component-based**: Styles organized by component
- **Responsive**: Mobile-first with progressive enhancement
- **Animations**: Smooth transitions and hover effects

### Color Scheme
```css
:root {
  --bg: #0b0b0e;        /* Background */
  --fg: #e7e7ea;        /* Foreground text */
  --muted: #a6a6ad;     /* Secondary text */
  --brand: #66d9ff;     /* Primary accent */
  --brand-2: #8b5cf6;   /* Secondary accent */
  --card: #13131a;      /* Card backgrounds */
  --line: #222231;      /* Borders and lines */
}
```

## Components

### App Component
Main application component with:
- Navigation state management
- Smooth scrolling between sections
- Mobile menu functionality
- Active section highlighting

### Navigation
- Sticky header with backdrop blur
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Active state indicators

### Hero Section
- Game introduction and description
- Video preview with autoplay
- Call-to-action buttons
- Key statistics display

### Features Grid
- Card-based feature presentation
- Hover effects and animations
- Responsive grid layout
- Icon-based visual hierarchy

### Gallery
- Video showcase with descriptions
- Responsive grid layout
- Hover effects and shadows
- Optimized video loading

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 920px
- **Desktop**: > 920px

### Mobile Features
- Collapsible navigation menu
- Stacked layouts for small screens
- Touch-friendly button sizes
- Optimized typography scaling

## Performance

### Optimizations
- **Lazy Loading**: Videos load on demand
- **CSS Optimization**: Minimal CSS with efficient selectors
- **Image Optimization**: WebP support and responsive images
- **Bundle Splitting**: Code splitting for better caching

### Build Output
- **Minified CSS/JS**: Production-ready assets
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Compressed and optimized files

## Deployment

### Build Process
1. Run `npm run build` to create production build
2. Deploy `dist/` directory to web server
3. Configure server for SPA routing (fallback to index.html)

### Recommended Hosting
- **Vercel**: Zero-config deployment
- **Netlify**: Easy static site hosting
- **GitHub Pages**: Free hosting for open source
- **AWS S3**: Scalable static hosting

## Browser Support

### Modern Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features Used
- CSS Grid and Flexbox
- CSS Variables
- ES6+ JavaScript
- Modern CSS animations

## Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Make changes and test
4. Submit pull request

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Maintain consistent CSS naming
- Write meaningful commit messages

## License

This project is proprietary software.

## Support

For questions or support, please contact the development team.
