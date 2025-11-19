import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' https://www.clarity.ms;
              connect-src 'self' https://www.clarity.ms https://o.clarity.ms;
              style-src 'self' https://www.clarity.ms;
              img-src 'self' data:; 
              // Diğer kısımları mevcut CSP politikanızla birleştirin.
            `
              .replace(/\s{2,}/g, " ")
              .trim(), // Boşlukları temizler
          },
        ],
      },
    ];
  },
  // 🔑 CSP BAŞLIKLARI BİTİŞ
};

export default withMDX(nextConfig);
