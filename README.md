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

<img width="1440" height="811" alt="Screenshot 2025-07-28 at 1 23 43 PM" src="https://github.com/user-attachments/assets/08e2f8a3-a447-4f80-a076-321feca0f259" />

<img width="2880" height="1616" alt="image" src="https://github.com/user-attachments/assets/249d5e7d-b308-4064-b4b7-1180278f2586" />

<img width="453" height="632" alt="Screenshot 2025-07-28 at 1 24 12 PM" src="https://github.com/user-attachments/assets/b4a353db-5929-431a-b993-4755cdbd73ec" />

<img width="378" height="705" alt="Screenshot 2025-07-28 at 1 24 40 PM" src="https://github.com/user-attachments/assets/92515aa2-90fb-4347-bf64-109b0ab5760e" />

<img width="385" height="379" alt="Screenshot 2025-07-28 at 1 25 04 PM" src="https://github.com/user-attachments/assets/dc1ab1bd-05e6-41ba-a4e2-e99f87eb997d" />


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



## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



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

Built within 48 hours ❤️
