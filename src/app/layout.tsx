"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const routes = [
  { name: "Login", path: "/login" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <html lang="en">
      <body>
        <header style={{ background: "lightblue", color: "black" }}>
          <h1> Welcome everyone!</h1>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          {routes.map((route) => {
            const isActive = pathname.startsWith(route.path);
            return (
              <Link
                href={route.path}
                style={{ color: isActive ? "green" : "blue" }}
                key={route.name}
              >
                {route.name}
              </Link>
            );
          })}
        </header>
        {children}

        <footer style={{ background: "lightblue", color: "black" }}>
          This is footer
        </footer>
      </body>
    </html>
  );
}
