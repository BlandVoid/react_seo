/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
        typedRoutes: true,
    },
    images: {
        remotePatterns: [{ hostname: "*" }],
    },
};

module.exports = nextConfig;
