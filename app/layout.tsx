export const metadata = { title: "SwiftPing", description: "Reduce ping. Boost FPS." };
import "./globals.css";
export default function RootLayout({ children }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
