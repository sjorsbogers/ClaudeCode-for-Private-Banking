import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Code for Private Banking",
  description:
    "Learn to use Claude Code for private banking and wealth management — from daily workflows to deploying production tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Inline script to set theme before first paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark');}else{d.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-warm-white dark:bg-navy text-navy dark:text-warm-white font-sans antialiased transition-colors">
        {children}
      </body>
    </html>
  );
}
