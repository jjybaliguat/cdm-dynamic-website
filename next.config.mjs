/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "integral-gift-6c2838ffdc.media.strapiapp.com",
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
