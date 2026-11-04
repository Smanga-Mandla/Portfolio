import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter'
});
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: '--font-mono'
});
export const metadata = {
    title: 'Mandla Tivane | Software Developer Portfolio',
    description: 'ICT Graduate & Aspiring Software Engineer. Passionate about building AI-powered solutions, web applications, and scalable systems.',
    keywords: ['Software Developer', 'Web Developer', 'ICT Graduate', 'AI', 'React', 'Python', 'Java'],
    authors: [{ name: 'Mandla Tivane' }],
    openGraph: {
        title: 'Mandla Tivane | Software Developer Portfolio',
        description: 'ICT Graduate & Aspiring Software Engineer passionate about AI and building solutions that solve real-world problems.',
        type: 'website',
    },
    icons: {
        icon: '/icon.svg',
        apple: '/apple-icon.png',
    },
};
export default function RootLayout({ children, }) {
                return (<html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    {children}
                    <Analytics />
                </ThemeProvider>
      </body>
    </html>);
}
