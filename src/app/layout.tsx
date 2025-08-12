import type { Metadata } from "next";
import "./globals.css";
import ReduxWrapper from "../providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Parsa Ghorbani",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
      <ReduxWrapper>{children}</ReduxWrapper>

      </body>
    </html>
  );
}
