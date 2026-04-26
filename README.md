# 🚀 Advanced React Portfolio Website

A modern, high-performance personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Showcasing technical skills, Web3 experience, and innovative projects with a beautiful, cosmic-themed interactive interface.

## ✨ Features

- **⚡ Lightning-fast performance** - Built with Vite for optimal dev experience and production builds
- **📱 Fully responsive design** - Mobile-first approach with Tailwind CSS
- **🎨 Cosmic design theme** - Dark grays and purples with smooth animations
- **🔧 React + TypeScript** - Full type safety and modern JavaScript with React hooks
- **🌈 Advanced animations** - Typing effect, floating animations, carousel, and scroll animations
- **⌨️ Sticky Navbar** - Transparent at top, transitions to solid on scroll
- **🎯 Typing Animation** - Dynamic title rotation with typing effect
- **🎠 Skills Carousel** - React Multi-Carousel with percentage-based graphics
- **📊 Project Showcase** - Tabbed interface with gradient overlays on hover
- **📧 Contact Form** - Full-featured form with real-time validation and email integration
- **📰 Newsletter** - Mailchimp integration for email subscriptions
- **🔗 Social integration** - LinkedIn, GitHub, Twitter, Discord connections
- **🌐 Smooth scrolling** - Navigation with scroll-to-section behavior
- **♿ Semantic HTML** - Accessible markup and proper SEO meta tags

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Animate.css + custom CSS keyframes
- **Components**: 
  - React Multi-Carousel (Skills slider)
  - React On-Screen (Scroll animations)
  - React Mailchimp Subscribe
- **Backend**: Express.js + Node.js
- **Email**: Nodemailer with Gmail SMTP
- **HTTP Client**: Axios
- **CORS**: CORS middleware for cross-origin requests

## 📁 Project Structure

```
MY WEBSITE/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with scroll detection
│   │   ├── Hero.tsx            # Hero section with typing animation
│   │   ├── Skills.tsx          # Skills carousel with progress circles
│   │   ├── Projects.tsx        # Tabbed projects showcase
│   │   ├── Contact.tsx         # Contact form with validation
│   │   └── Footer.tsx          # Footer with newsletter and social links
│   ├── styles/
│   │   └── main.css            # Global styles and animations
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # React entry point
├── server.ts                   # Express backend for email handling
├── .env                        # Environment variables (not in git)
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.cjs         # Tailwind CSS configuration
└── postcss.config.cjs          # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone or navigate to the project directory**

```bash
cd "c:\Users\Eliza\Documents\MY WEBSITE"
```

2. **Install dependencies** (already done)

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration (for contact form)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Server Configuration
PORT=5000
NODE_ENV=development
```

**Note**: For Gmail:
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated 16-character password in `EMAIL_PASSWORD`

### Development

1. **Start the frontend development server** (runs on http://localhost:5173):

```bash
npm run dev
```

2. **In another terminal, start the backend server** (runs on http://localhost:5000):

```bash
npm run server
```

Or run both simultaneously:

```bash
npm run server:dev
```

### Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Type Checking

Check for TypeScript errors:

```bash
npm run type-check
```

## 📋 Component Details

### Navbar
- Sticky header with smooth scroll detection
- Transparent background at top, transitions to #151515 after 50px scroll
- Smooth-scroll navigation to all sections
- "Let's Connect" button linking to contact section
- Mobile-responsive with hidden menu structure

### Hero Section
- **Typing Animation**: Rotates through titles with typing and deleting effects
  - "Project Developer"
  - "Mechanical Designer"
  - "AI Tech Enthusiast"
- Hero image with floating CSS animation
- Call-to-action buttons with gradient effects

### Skills Section
- React Multi-Carousel for responsive skill display
- Circular progress indicators showing proficiency percentage
- 8 featured skills with icons
- Hover effects and smooth transitions

### Projects Section
- Tabbed interface with three categories:
  - Web3 Projects (3 projects)
  - Full-Stack (3 projects)
  - Mechanical (3 projects)
- Project cards with gradient overlay on hover
- Tags for technology stack
- Click to view project details

### Contact Section
- Functional contact form with state management
- Real-time form validation
- Success/error message feedback
- "Sending..." state during submission
- Contact information display (Email, LinkedIn, Discord)
- Integrated with backend for email sending

### Footer
- Newsletter subscription with Mailchimp integration
- Logo and description
- Quick navigation links
- Social media links (LinkedIn, GitHub, Twitter, Email)
- Privacy policy and terms of service links
- Copyright information

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple (#a855f7) to Pink (#ec4899)
- **Background**: Dark gradients from slate-900 through purple-900
- **Text Primary**: White (#ffffff)
- **Text Muted**: Gray (#d1d5db)
- **Accent**: Purple (#a855f7)

### Animations
- **Float**: 3s ease-in-out for hovering effects
- **Typing**: Custom animation for text reveal
- **Glow**: Box shadow pulse effect on hover
- **Slide In**: Fade in animations on scroll

### Responsive Breakpoints
- **Mobile**: < 464px
- **Tablet**: 464px - 1024px
- **Desktop**: > 1024px

## 📧 Email Configuration

The contact form uses **Nodemailer** with Gmail SMTP to send emails.

### Features:
- Receives form submissions at `POST /contact`
- Sends confirmation email to visitor
- Sends notification email to portfolio owner
- HTML formatted emails with full message content

### Setup Steps:
1. Create `.env` file with Gmail credentials
2. Enable 2FA on Google account
3. Generate App Password
4. Update `.env` with credentials
5. Start backend server with `npm run server`

## 🔧 Customization

### Update Personal Information
- Edit component content in `src/components/*.tsx`
- Update skill percentages in `Skills.tsx`
- Modify project details in `Projects.tsx`
- Change contact info in `Contact.tsx` and `Footer.tsx`

### Styling
- Tailwind CSS classes are used throughout
- Custom styles in `src/styles/main.css`
- Modify `tailwind.config.cjs` for theme customization

### Add More Projects
Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    category: 'web3' | 'fullstack' | 'mechanical',
  },
  // Add more projects...
]
```

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first design approach
- Tailwind CSS breakpoints
- Flexible navigation
- Responsive typography
- Adaptive grid layouts
- Touch-friendly buttons

## ⚙️ Configuration Files

### `vite.config.ts`
- Vite configuration with React plugin
- Port 5173 for development
- Production build settings

### `tsconfig.json`
- React JSX support
- Strict type checking
- ES2020 target

### `tailwind.config.cjs`
- Custom theme colors
- Extended utilities
- Responsive design settings

### `postcss.config.cjs`
- Tailwind CSS processing
- Autoprefixer for browser compatibility

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deploy to Popular Platforms

**Vercel** (Recommended for React):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Then deploy the dist/ folder
```

**GitHub Pages**:
Update `vite.config.ts` with base path and deploy `dist/` folder

### Backend Deployment

Deploy `server.ts` to a Node.js hosting platform:
- Render
- Railway
- Heroku
- AWS Lambda
- DigitalOcean App Platform

Update your frontend's axios baseURL to match the deployed backend.

## 🐛 Troubleshooting

### Port Already in Use
- Change port in `vite.config.ts` or `.env`
- Kill process: `lsof -ti:5173 | xargs kill -9` (macOS/Linux)

### Email Not Sending
- Verify `.env` variables are correct
- Check Gmail 2FA and App Password setup
- Ensure backend server is running on port 5000
- Check firewall/CORS settings

### Styling Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Rebuild Tailwind: `npm run build`
- Check `tailwind.config.cjs` for correct file patterns

### TypeScript Errors
- Run `npm run type-check` to see all errors
- Verify all imports have correct paths
- Check for missing type definitions

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Express.js Documentation](https://expressjs.com)
- [Nodemailer Documentation](https://nodemailer.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Belmont** - Full-Stack Developer | Mechanical Designer | AI Tech Enthusiast

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**
- **Build Tool**: Vite 5.0+
- **Language**: TypeScript 5.3+
- **Styling**: Pure CSS3 (no preprocessor needed)
- **Package Manager**: npm or yarn

## 📁 Project Structure

```
src/
├── main.ts                 # Application entry point
├── app.ts                  # Core app initialization
├── components/
│   ├── header.ts          # Navigation header
│   ├── hero.ts            # Hero/banner section
│   ├── projects.ts        # Projects showcase
│   ├── skills.ts          # Skills & expertise
│   ├── web3.ts            # Web3 experience
│   ├── social.ts          # Social links
│   └── footer.ts          # Footer section
└── styles/
    └── main.css           # Advanced CSS3 styling

Root files:
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # Node TypeScript config
├── package.json           # Dependencies and scripts
└── .gitignore             # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd "MY WEBSITE"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   - Opens automatically at `http://localhost:5173`
   - Hot reload enabled - changes reflect instantly

4. **Build for production**:
   ```bash
   npm run build
   ```
   - Generates optimized files in `dist/` folder
   - Type checking included

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Customization Guide

### Update Hero Section
Edit [src/components/hero.ts](src/components/hero.ts) to change:
- Welcome message
- Subtitle/tagline
- CTA button text

### Add/Edit Projects
Modify the `projects` array in [src/components/projects.ts](src/components/projects.ts):
```typescript
const projects: Project[] = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/username/repo',
    link: 'https://live-demo.com'
  },
  // Add more projects...
]
```

### Update Skills
Edit the `skillsData` array in [src/components/skills.ts](src/components/skills.ts) to add your skills by category.

### Add Social Links
Modify the `socialLinks` array in [src/components/social.ts](src/components/social.ts):
```typescript
const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourprofile', icon: '🐙' },
  { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: '𝕏' },
  // Add more links...
]
```

### Customize Styling
All styling is in [src/styles/main.css](src/styles/main.css). Key customization points:
- **Colors**: Modify CSS custom properties (`:root`) at the top
- **Animations**: Edit `@keyframes` sections
- **Responsive breakpoints**: Adjust media queries at the bottom

#### CSS Variables Available:
```css
--primary-color: #00d4ff          /* Cyan accent */
--secondary-color: #ff006e        /* Pink/Magenta accent */
--dark-bg: #0a0e27                /* Main background */
--text-primary: #ffffff           /* Main text color */
--text-secondary: #b0b8d4         /* Secondary text */
--spacing-xs to --spacing-2xl      /* Spacing scale */
```

### Update Header Links
Edit the navigation links in [src/components/header.ts](src/components/header.ts):
```typescript
const links = ['Home', 'Projects', 'Skills', 'Web3', 'Contact']
```

## 🎨 Advanced CSS3 Features Used

- **Gradient backgrounds** - Linear and radial gradients for modern look
- **CSS animations** - Smooth `slideInUp`, `float`, and custom animations
- **Flexbox & CSS Grid** - Responsive layouts without breakpoints where possible
- **Backdrop filters** - Frosted glass effect on header
- **Box shadows** - Glowing effects and depth perception
- **Transitions** - Smooth hover and state changes
- **CSS custom properties** - Theme management and consistency
- **Media queries** - Mobile-first responsive design

## 🔧 Available Scripts

```bash
npm run dev           # Start development server with HMR
npm run build         # Build for production (optimized)
npm run preview       # Preview production build locally
npm run type-check    # Run TypeScript type checking
```

## 📦 Dependencies

### Production
- **three** (optional): For 3D graphics if needed

### Development
- **vite**: Ultra-fast build tool
- **typescript**: Type-safe JavaScript
- **@types/node**: Node.js type definitions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options

1. **Netlify**
   - Connect your git repo
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel**
   - Import project
   - Framework: `Other`
   - Build command: `npm run build`
   - Output directory: `dist`

3. **GitHub Pages**
   ```bash
   npm run build
   # Push dist folder to gh-pages branch
   ```

4. **Traditional Hosting**
   - Upload `dist/` folder contents to your hosting provider
   - Configure server to serve `index.html` for all routes (SPA)

## 🌐 Web3 Integration

To add Web3 functionality:

1. **Install Web3 library**:
   ```bash
   npm install ethers
   # or
   npm install web3
   ```

2. **Create Web3 utility** (`src/utils/web3.ts`):
   ```typescript
   import { ethers } from 'ethers'
   
   export async function connectWallet() {
     if (!window.ethereum) {
       alert('Please install MetaMask!')
       return
     }
     const provider = new ethers.providers.Web3Provider(window.ethereum)
     await provider.send("eth_requestAccounts", [])
     return new ethers.Signer(provider)
   }
   ```

3. **Use in components** to add wallet connection, smart contract interaction, etc.

## 🎯 Performance Tips

- **Images**: Optimize and compress images before adding
- **Fonts**: Use system fonts or limit custom fonts to 2-3 typefaces
- **Animations**: Keep animations under 500ms for better UX
- **Code splitting**: Vite handles this automatically
- **Caching**: Production build has optimized cache busting

## 🔒 Security

- **No sensitive data** in the repo - use environment variables
- **HTTPS only** for deployment
- **Content Security Policy** headers recommended
- **Regular dependency updates**: `npm audit fix`

## 🤝 Contributing

Feel free to customize and extend this portfolio! Some ideas:

- Add a blog section
- Implement dark/light theme toggle
- Add contact form with backend
- Integrate newsletter signup
- Add real-time project statistics
- Create filterable project gallery

## 📄 License

Free to use for personal portfolios. Modify as needed for your needs!

## 💡 Tips for Maximum Impact

1. **Add real content** - Replace placeholder projects with your actual work
2. **High-quality images** - Add screenshots/thumbnails for projects
3. **Real links** - Ensure all social and project links are active
4. **Mobile testing** - Test thoroughly on different devices
5. **Performance audit** - Use Lighthouse to check performance
6. **SEO optimization** - Update meta tags in `index.html`
7. **Analytics** - Consider adding Google Analytics or similar

## 📞 Support

For questions or issues:
- Check the TypeScript types in component files
- Refer to CSS comments for styling details
- Review Vite documentation for build issues
- Consult CSS3 resources for animation customization

---

**Built with ❤️ using TypeScript, Vite, and advanced CSS3**

Happy coding! 🚀
