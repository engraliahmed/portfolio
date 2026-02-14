// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "res.cloudinary.com",
//             },
//         ],
//     },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        
        // 2. Remote patterns
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
        
        // 3. Minimum Cache TTL (Time To Live)
        // image wil stay on vercel cache for a year
        minimumCacheTTL: 31536000, 
        
        // 4. Device Sizes (Optional but recommended for faster mobile load)
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    },
    // to make production build faster
    swcMinify: true,
};

export default nextConfig;