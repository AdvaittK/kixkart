# KixKart - Premium Sneakers & Streetwear E-Commerce Platform

![KixKart Logo](/public/final.png)

## Overview

KixKart is a modern, cyberpunk-themed e-commerce platform specializing in premium sneakers and streetwear. The application offers a wide range of products across multiple categories including running, basketball, lifestyle, training, and limited editions.

## Features

- **Responsive Design**: Fully responsive UI for optimal viewing across all devices
- **Dark/Light Theme**: Theme toggle for user preference
- **Category Navigation**: Browse products by different categories
- **Product Pages**: Detailed product information with images and specifications
- **User Account Management**: Personal account management system
- **Shopping Cart**: Add and manage items in your cart
- **Wishlist**: Save products for future reference
- **Newsletter Subscription**: Stay updated with the latest drops and promotions
- **Cyberpunk UI Elements**: Unique design with cyberpunk aesthetic features

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/)
  - [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Form Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Charts**: [Recharts](https://recharts.org/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)

## Project Structure

```
app/                  # Next.js application pages
  page.tsx            # Homepage
  layout.tsx          # Root layout
  account/            # User account section
  cart/               # Shopping cart
  category/           # Product categories
  product/            # Product detail pages
  wishlist/           # User's saved items
components/           # Reusable UI components
  ui/                 # Base UI components from shadcn/ui
hooks/                # Custom React hooks
lib/                  # Utility functions
public/               # Static assets and images
styles/               # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS version)
- pnpm (package manager)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/kixkart.git
cd kixkart
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
pnpm build
pnpm start
```

## Key Pages

- **Home**: Featured products, new arrivals, categories
- **Category Pages**: Browse products by category
- **Product Detail**: View detailed information about a product
- **Cart**: Manage items for purchase
- **Wishlist**: Save products for later
- **Account**: User profile and settings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the incredible framework
- Radix UI and shadcn/ui for the component library
- All open-source projects that made this possible
