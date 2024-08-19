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
        ]
    }
};

export default nextConfig;
