import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Imra Wana",
  description: "Creative Designer Portfolio",
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