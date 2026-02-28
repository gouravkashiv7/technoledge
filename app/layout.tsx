import { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://technoledge.in"),
  title: "Technoledge - Leading Multi-disciplinary Research & Excellence",
  description:
    "Technoledge bridges the gap between academic theory and industrial reality through cutting-edge smart labs, IoT sensor arrays, and expert mentorship.",
  keywords: [
    "Technoledge",
    "Research",
    "Smart Labs",
    "IoT",
    "Education",
    "Excellence",
    "Infrastructure",
    "Hiring",
  ],
  authors: [{ name: "Technoledge" }],
  creator: "Technoledge India",
  publisher: "Technoledge",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://technoledge.in",
    title: "Technoledge - Multi-disciplinary Research & Excellence",
    description:
      "Experience the synergy of innovation and education. We provide turn-key Smart Labs and career fast-tracks.",
    siteName: "Technoledge India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technoledge - Innovation Meets Education",
    description:
      "Bridging the gap between academia and industry with state-of-the-art infrastructure.",
    creator: "@technoledge",
  },
  alternates: {
    canonical: "https://technoledge.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} font-sans transition-colors duration-300 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
