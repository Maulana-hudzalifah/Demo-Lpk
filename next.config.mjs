/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Foto hero diambil dari Unsplash
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
