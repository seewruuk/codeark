import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers/ThemeProvider";
import {Layout} from "@/components/Layout";

const inter = Inter({subsets: ["latin"]});

export const metadata = {

    title: {
        template: '%s | CodeArk - Arkadiusz Stankiewicz',
        default: 'CodeArk - Arkadiusz Stankiewicz',
    },
    description: "Tworzymy innowacyjne systemy informatyczne i wspieramy Twoją firmę w osiąganiu sukcesu",
    openGraph: {
        title: "CodeArk - Arkadiusz Staniewicz",
        description: "Tworzymy innowacyjne systemy informatyczne i wspieramy Twoją firmę w osiąganiu sukcesu",
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="pl" className={`${inter.className}`}>
        <body className={`flex min-h-full flex-col bg-white dark:bg-gray-950`}>
        <Providers>
            <Layout>
                {children}
            </Layout>
        </Providers>
        </body>
        </html>
    );
}
