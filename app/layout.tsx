import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "SwiftPing",
  description: "Reduce ping. Boost FPS.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}