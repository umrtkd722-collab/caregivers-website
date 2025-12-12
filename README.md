# Home Caregivers GA LLC Website

A modern, animated Next.js website for Home Caregivers GA LLC - Professional Painting & Home Improvement Services.

## Features

- ✨ Fully animated with Framer Motion
- 🎨 Professional theme with blue and amber color scheme
- 📱 Fully responsive design
- 📧 Contact form with email API
- 🚀 Built with Next.js 16, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Configure email for contact form:
   - Create a `.env.local` file in the root directory
   - Add your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
   - For Gmail, you'll need to generate an App Password: https://myaccount.google.com/apppasswords

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
caregivers-website/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Main page
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Services.tsx          # Services section
│   ├── Testimonials.tsx      # Testimonials section
│   ├── Gallery.tsx           # Gallery section
│   ├── AreasServed.tsx       # Areas served section
│   ├── Contact.tsx           # Contact section
│   └── Footer.tsx            # Footer
└── public/                   # Static assets (add logo here)
```

## Adding Your Logo

1. Place your logo file in the `public/` directory
2. Update the Navbar component to use your logo:
   - Open `components/Navbar.tsx`
   - Replace the text logo with an Image component pointing to your logo

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables (EMAIL_USER, EMAIL_PASS) if using email
4. Deploy!

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Nodemailer** - Email sending

## Contact

For questions about the website, contact:
- Email: gomezhomeservice23@gmail.com
- Phone: 404-407-5719
