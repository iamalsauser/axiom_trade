# Axiom Pro

A modern, real-time cryptocurrency trading interface built with Next.js, featuring live price updates, advanced filtering, and comprehensive token analytics.

## 🔗 Live Demo

- **🌐 Live Application**: [axiom-trade-six.vercel.app](https://axiom-trade-six.vercel.app)
- **📺 Demo Video**: [Watch on YouTube](https://youtu.be/HbNLlmVXc98?si=_Lok5XfhcCwh13AJ)

## ✨ Key Features

### Real-Time Trading Interface
- **Live Price Updates**: WebSocket-powered price feeds with smooth animations
- **Interactive Token Table**: Sortable columns with hover effects and detailed overlays
- **Advanced Filtering**: Multi-criteria filtering with protocol tags, keywords, and audit metrics
- **Trading Settings**: Configurable presets for buy/sell parameters, MEV protection, and RPC endpoints

### Analytics & Insights
- **Token Analytics**: Comprehensive audit scores, transaction data, and market metrics
- **Market Data**: Real-time market cap, volume, and price change indicators
- **Audit Integration**: Token safety scores and verification badges

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark UI optimized for trading environments
- **Performance Optimized**: Built with Next.js 14 and modern React patterns

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui |
| **Icons** | Lucide React |
| **Language** | TypeScript (Full type safety) |
| **Real-time** | WebSocket mock service |
| **State Management** | React Hooks |

## 📱 Screenshots

### Desktop Interface
<img width="1440" height="811" alt="Desktop Trading Interface" src="https://github.com/user-attachments/assets/08e2f8a3-a447-4f80-a076-321feca0f259" />

### Responsive Design
<img width="2880" height="1616" alt="Responsive Layout" src="https://github.com/user-attachments/assets/249d5e7d-b308-4064-b4b7-1180278f2586" />

### Mobile Views
<img width="453" height="632" alt="Mobile Interface" src="https://github.com/user-attachments/assets/b4a353db-5929-431a-b993-4755cdbd73ec" />

<img width="378" height="705" alt="Mobile Menu" src="https://github.com/user-attachments/assets/92515aa2-90fb-4347-bf64-109b0ab5760e" />

### Trading Settings
<img width="385" height="379" alt="Trading Settings Modal" src="https://github.com/user-attachments/assets/dc1ab1bd-05e6-41ba-a4e2-e99f87eb997d" />

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd axiom-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open application**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 🏗️ Project Architecture

The project follows atomic design principles for scalable component architecture:

| Directory/File | Type | Component Level | Description |
|----------------|------|-----------------|-------------|
| **app/** | Directory | - | Next.js app directory |
| ├── globals.css | File | - | Global styles and animations |
| ├── layout.tsx | File | - | Root layout component |
| └── page.tsx | File | - | Main application entry |
| **components/** | Directory | - | React components organized by atomic design |
| ├── **atoms/** | Directory | Atomic | Basic UI components |
| │   ├── audit-badge.tsx | Component | Atomic | Audit status badge component |
| │   ├── price-change.tsx | Component | Atomic | Price change indicator |
| │   ├── token-badges.tsx | Component | Atomic | Token status badges |
| │   ├── token-logo.tsx | Component | Atomic | Token logo display |
| │   └── trend-indicator.tsx | Component | Atomic | Trend direction indicator |
| ├── **molecules/** | Directory | Molecular | Composite components |
| │   ├── action-button.tsx | Component | Molecular | Interactive action button |
| │   ├── action-menu.tsx | Component | Molecular | Dropdown action menu |
| │   ├── audit-cell.tsx | Component | Molecular | Table cell for audit info |
| │   ├── market-cap-cell.tsx | Component | Molecular | Market cap display cell |
| │   ├── token-info.tsx | Component | Molecular | Token information display |
| │   ├── transaction-cell.tsx | Component | Molecular | Transaction data cell |
| │   └── volume-cell.tsx | Component | Molecular | Volume data cell |
| ├── **organisms/** | Directory | Organism | Complex components |
| │   ├── filters-modal.tsx | Component | Organism | Filtering modal dialog |
| │   ├── footer.tsx | Component | Organism | Application footer |
| │   ├── header.tsx | Component | Organism | Application header |
| │   ├── sub-navigation.tsx | Component | Organism | Secondary navigation |
| │   ├── table-row.tsx | Component | Organism | Complete table row |
| │   ├── token-table.tsx | Component | Organism | Main token data table |
| │   └── trading-settings-modal.tsx | Component | Organism | Trading configuration modal |
| └── **templates/** | Directory | Template | Page templates |
|     ├── discover-page.tsx | Template | Template | Discovery page layout |
|     └── pump-live-page.tsx | Template | Template | Live pump tracking page |
| **hooks/** | Directory | - | Custom React hooks |
| └── use-token-data.ts | Hook | - | Token data management hook |
| **lib/** | Directory | - | Utility libraries |
| └── utils.ts | File | - | Utility functions |
| **services/** | Directory | - | External service integrations |
| └── websocket-mock.ts | Service | - | Mock WebSocket service |
| **types/** | Directory | - | TypeScript definitions |
| └── token.ts | Types | - | Token-related type definitions |
| **public/** | Directory | - | Static assets |
| └── **images/** | Directory | - | Image assets |

### Component Architecture Summary

| Level | Count | Purpose |
|-------|-------|---------|
| **Atoms** | 5 | Basic, reusable UI elements |
| **Molecules** | 7 | Combinations of atoms with specific functionality |
| **Organisms** | 7 | Complex components combining molecules and atoms |
| **Templates** | 2 | Page-level layouts and structures |

## 🎯 Core Components

### Token Table Features
- Real-time price updates with visual change indicators
- Sortable columns for all metrics
- Responsive table design with mobile optimization
- Interactive token logos with detailed hover overlays
- Advanced filtering and search capabilities

### Trading Settings Modal
- Preset management for quick configuration switching
- Separate buy/sell parameter controls
- Auto-fee calculation with configurable limits
- Custom RPC endpoint configuration
- MEV protection settings

### Filter System
- Protocol-based filtering
- Keyword search across token names and symbols
- Audit score filtering
- Market cap and volume range filters
- Real-time filter application

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file:

```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_WS_URL=your_websocket_url

# Trading Configuration
NEXT_PUBLIC_DEFAULT_SLIPPAGE=0.5
NEXT_PUBLIC_MAX_FEE_LIMIT=0.02
```

### Customization Options

#### Theme Customization
Update `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#6366f1",
      success: "#00ff88",
      danger: "#ff4444",
      warning: "#fbbf24",
      // Add custom trading colors
      "price-up": "#00ff88",
      "price-down": "#ff4444",
      "price-neutral": "#64748b"
    }
  }
}
```

#### Data Source Integration
Modify `hooks/use-token-data.ts` to connect to real APIs:

```typescript
// Replace mock data with real API calls
const fetchTokenData = async () => {
  const response = await fetch('/api/tokens');
  return response.json();
};
```

## 📱 Responsive Design

### Breakpoint Strategy

| Device | Breakpoint | Optimizations |
|--------|------------|---------------|
| **Mobile** | < 640px | Simplified table, collapsible filters |
| **Tablet** | 640px - 1024px | Condensed columns, touch-friendly controls |
| **Desktop** | > 1024px | Full feature set, multi-column layout |

### Mobile Optimizations
- Horizontal scrolling for table content
- Collapsible filter panel
- Touch-optimized button sizes
- Simplified navigation menu

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**
   - Push code to GitHub
   - Import project in Vercel dashboard

2. **Configure Build Settings**
   ```bash
   # Build Command
   npm run build
   
   # Output Directory
   .next
   ```

3. **Environment Variables**
   - Add production environment variables in Vercel dashboard

### Alternative Deployment Options

#### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Static Export
```bash
npm run build
npm run export
```

## 🔧 Development Guidelines

### Code Organization
- Follow atomic design principles
- Use TypeScript for type safety
- Implement proper error boundaries
- Write unit tests for core components

### Performance Best Practices
- Implement proper React memoization
- Use lazy loading for large components
- Optimize WebSocket connections
- Minimize bundle size with code splitting

## 🤝 Contributing

### Development Workflow

1. **Fork & Clone**
   ```bash
   git clone https://github.com/your-username/axiom-pro.git
   cd axiom-pro
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Development**
   - Follow existing code patterns
   - Add tests for new features
   - Update documentation

4. **Submit PR**
   ```bash
   git commit -m 'Add amazing feature'
   git push origin feature/amazing-feature
   ```

### Code Standards
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Include tests for new features
