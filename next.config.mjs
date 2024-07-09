/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'images.pexels.com', pathname: '/photos/**'},
            {protocol: 'https', hostname: 'cdn.sanity.io'}
        ]
    },
};

export default nextConfig;
