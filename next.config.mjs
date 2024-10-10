/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'media.kavehome.com',
            port: '',
            pathname: '/media/catalog/product/**'
        }]
    },

};

export default nextConfig;
