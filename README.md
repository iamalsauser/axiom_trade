# Token Trading Table - AXIOM Pro

A modern, real-time cryptocurrency trading interface built with Next.js, featuring live price updates, advanced filtering, and comprehensive token analytics.

## 🚀 Features

- **Real-time Price Updates**: Live WebSocket-powered price feeds with smooth animations
- **Advanced Filtering**: Multi-criteria filtering with protocol tags, keywords, and audit metrics
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Trading Settings**: Configurable presets for buy/sell parameters, MEV protection, and RPC endpoints
- **Token Analytics**: Comprehensive audit scores, transaction data, and market metrics
- **Dark Theme**: Professional dark UI optimized for trading environments

## 📱 Screenshots

### Desktop Layout
![Desktop View](/placeholder.svg?height=800&width=1400&text=Desktop+Trading+Interface)
*Full desktop experience with complete token table, filters, and trading controls*

### Tablet Layout
![Tablet View](/placeholder.svg?height=600&width=1024&text=Tablet+Trading+Interface)
*Optimized tablet layout with condensed navigation and responsive table*

### Mobile Layout
![Mobile View](/placeholder.svg?height=800&width=375&text=Mobile+Trading+Interface)
*Mobile-first design with collapsible navigation and touch-optimized controls*

### Trading Settings Modal
![Trading Settings](/placeholder.svg?height=600&width=400&text=Trading+Settings+Modal)
*Advanced trading configuration with preset management and MEV protection*

### Filters Modal
![Filters Modal](/placeholder.svg?height=700&width=400&text=Advanced+Filters+Modal)
*Comprehensive filtering system with protocol tags and audit criteria*

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Real-time**: WebSocket mock service
- **State Management**: React Hooks

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd token-trading-table
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main application entry
├── components/
│   ├── atoms/               # Basic UI components
│   │   ├── audit-badge.tsx
│   │   ├── price-change.tsx
│   │   ├── token-badges.tsx
│   │   ├── token-logo.tsx
│   │   └── trend-indicator.tsx
│   ├── molecules/           # Composite components
│   │   ├── action-button.tsx
│   │   ├── action-menu.tsx
│   │   ├── audit-cell.tsx
│   │   ├── market-cap-cell.tsx
│   │   ├── token-info.tsx
│   │   ├── transaction-cell.tsx
│   │   └── volume-cell.tsx
│   ├── organisms/           # Complex components
│   │   ├── filters-modal.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── sub-navigation.tsx
│   │   ├── table-row.tsx
│   │   ├── token-table.tsx
│   │   └── trading-settings-modal.tsx
│   └── templates/           # Page templates
│       ├── discover-page.tsx
│       └── pump-live-page.tsx
├── hooks/
│   └── use-token-data.ts    # Custom hook for token data management
├── lib/
│   └── utils.ts             # Utility functions
├── services/
│   └── websocket-mock.ts    # Mock WebSocket service
├── types/
│   └── token.ts             # TypeScript type definitions
└── public/
    └── images/              # Static assets
\`\`\`

## 🎯 Key Components

### Token Table
- **Real-time updates**: Live price feeds with visual indicators
- **Sortable columns**: Click headers to sort by any metric
- **Responsive design**: Adapts to different screen sizes
- **Hover effects**: Interactive token logos with detailed overlays

### Filters System
- **Protocol filtering**: Filter by blockchain protocols
- **Keyword search**: Include/exclude specific terms
- **Audit metrics**: Filter by security scores and percentages
- **MEV protection**: Configure transaction protection levels

### Trading Settings
- **Preset management**: Save and switch between trading configurations
- **Buy/Sell settings**: Separate parameters for different transaction types
- **Fee configuration**: Auto-fee calculation with maximum limits
- **RPC endpoints**: Custom blockchain connection settings

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Add any required environment variables here
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_WS_URL=your_websocket_url
\`\`\`

### Customization

#### Colors and Theming
Edit `tailwind.config.ts` to customize the color scheme:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      // Customize your color palette
      primary: "#6366f1",
      success: "#00ff88",
      danger: "#ff4444",
      // ... more colors
    }
  }
}
\`\`\`

#### Mock Data
Update `hooks/use-token-data.ts` to modify the sample token data or connect to a real API.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (xl)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the component examples in `/components`

## 🔮 Roadmap

- [ ] Real WebSocket integration
- [ ] User authentication
- [ ] Portfolio tracking
- [ ] Advanced charting
- [ ] Mobile app version
- [ ] Multi-language support

---

Built with ❤️ using Next.js and modern web technologies.
