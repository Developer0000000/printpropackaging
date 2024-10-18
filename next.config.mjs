/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },

            {
                protocol: 'https',
                hostname: 'blackbirdpackaging.com',
            },

            {
                protocol: 'https',
                hostname: 'printpropackaging.vercel.app',
            },
        ]
    }
};

export default nextConfig;
