import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

        <body className={`flex min-h-full flex-col bg-gray-950 overflow-x-hidden`}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
