/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@react-three/drei", "three"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig