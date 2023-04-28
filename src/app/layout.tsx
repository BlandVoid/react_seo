import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
    const title = `React SEO Website`;
    const description = "React SEO is a React app with SEO in mind.";

    //
    return {
        title: { default: title, template: `%s | ${title}` },
        description,
        openGraph: { title, description },
    };
};

interface Props {
    children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
