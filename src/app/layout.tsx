import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {

    return (
        <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="app-bg">
            <div className="app-shell">
                <main className="container">
                    {children}
                </main>
            </div>
        </div>
        </body>
        </html>
    );
}
