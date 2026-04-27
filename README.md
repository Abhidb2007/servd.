# Served – AI Recipes Platform

An AI-powered recipe platform that helps users discover, create, and manage recipes using advanced machine learning. Built with Next.js, Clerk authentication, and modern UI components.

## Features

- **AI Recipe Generation**: Generate personalized recipes based on ingredients and preferences
- **User Authentication**: Secure sign-in/sign-up with Clerk
- **Recipe Management**: Save and organize your favorite recipes
- **Pantry Tracking**: Keep track of your ingredients
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Subscription Plans**: Free and Pro tiers with advanced features

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Authentication**: Clerk
- **UI Components**: Radix UI, Lucide Icons
- **Styling**: Tailwind CSS with custom themes
- **Deployment**: Vercel (recommended)

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd served
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Clerk keys:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
     CLERK_SECRET_KEY=your_secret_key
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Clerk Setup

1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Copy the publishable key and secret key
3. Configure sign-in and sign-up URLs in your Clerk dashboard

## Project Structure

```
frontend/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── dashboard/
│   ├── pantry/
│   ├── recipes/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── ui/
│   └── ...
├── lib/
├── middleware.ts
├── .env.example
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
