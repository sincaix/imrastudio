import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Imra Studio",
  description: "Creative Designer Portfolio",

  icons: {
    icon: [
      { url: "/Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/Logo.png", sizes: "192x192", type: "image/png" },
      { url: "/Logo.png", sizes: "512x512", type: "image/png" },
    ],

    apple: "/Logo.png",
    shortcut: "/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        {children}
      </body>
    </html>
  );
}