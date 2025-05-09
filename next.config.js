/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/services': { page: '/services' },
      '/billing': { page: '/billing' },
      '/crm-general': { page: '/crm-general' },
      '/crm-immigrations': { page: '/crm-immigrations' },
      '/radio-broadcasting': { page: '/radio-broadcasting' },
      '/tv-broadcasting': { page: '/tv-broadcasting' },
      '/portfolio': { page: '/portfolio' },
      '/contact-us': { page: '/contact-us' },
      '/faq': { page: '/faq' },
      '/team': { page: '/team' },
      '/career': { page: '/career' },
      '/privacy': { page: '/privacy' },
      '/tos': { page: '/tos' },

      // Add more routes as needed
    }
  },
  getStaticProps: async () => {
    return {
      fallback: true,
    }
  },
}

module.exports = {
  output: 'export',
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  
  
};