import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
    const title = "React SEO Website";
    const description = "React SEO is a React app with SEO in mind.";
    const image_url = "/cover.jpg";
    const image_width = 1280;
    const image_height = 720;
    const image_type = "image/jpeg";

    const og = {
        title,
        description,
        images: [
            {
                url: image_url,
                width: image_width,
                height: image_height,
                type: image_type,
                alt: title,
            },
        ],
    };

    return {
        title: { default: title, template: `%s | ${title}` },
        description,
        openGraph: og,
        twitter: og,
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
