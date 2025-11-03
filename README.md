# Real Estate Portfolio

A modern real estate portfolio website featuring immersive 3D experiences, smooth animations, and responsive design.

## 🚀 Tech Stack

- **Build Tool**: Vite 7.x
- **3D Graphics**: Three.js (r158+)
- **Animation**: GSAP with ScrollTrigger
- **Gallery**: Swiper
- **Styling**: Modern CSS with CSS Variables
- **Code Quality**: ESLint + Prettier

## 📦 Project Structure

```
.
├── assets/
│   ├── images/         # Image assets
│   ├── models/         # 3D models (GLB/GLTF)
│   └── icons/          # Icon assets
├── css/
│   ├── base.css        # Base styles and CSS variables
│   ├── layout.css      # Layout styles
│   └── components.css  # Component styles
├── js/
│   ├── main.js         # Application entry point
│   ├── modules/
│   │   ├── three-scene.js    # Three.js scene setup
│   │   ├── animations.js     # GSAP animations
│   │   ├── gallery.js        # Swiper gallery
│   │   ├── properties.js     # Property listings
│   │   └── analytics.js      # Analytics tracking
│   └── data/
│       ├── properties.js     # Property data
│       └── models.js         # 3D model data
├── public/             # Static assets
├── index.html          # Main HTML file
└── vite.config.js      # Vite configuration

```

## 🛠️ Setup

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd real-estate-portfolio
```

2. Install dependencies:

```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

Preview the production build:

```bash
npm run preview
```

## 🧹 Code Quality

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

## 📁 Asset Handling

Vite is configured to handle the following asset types:

- **Images**: PNG, JPG, SVG, GIF, etc.
- **3D Models**: GLB, GLTF
- **HDR/EXR**: Environment maps

Place your assets in the appropriate directories:

- Images → `assets/images/`
- 3D Models → `assets/models/`
- Icons → `assets/icons/`

## 🎨 Styling

The project uses CSS variables for theming. Modify variables in `css/base.css`:

```css
:root {
  --color-primary: #2c3e50;
  --color-secondary: #3498db;
  --spacing-md: 2rem;
  /* ... */
}
```

## 🎭 3D Models

To add 3D models:

1. Place your GLB/GLTF files in `assets/models/`
2. Add model metadata to `js/data/models.js`
3. Load models in `js/modules/three-scene.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run format`
5. Submit a pull request
