/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"*"
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            }
        ],
    },
};

export default nextConfig;
