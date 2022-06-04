/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: ["https://modules.astralapp.io/", "http://127.0.0.1:4567/"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsx/,
      use: {
        loader: "babel-loader", // Note: `npm install babel-loader` needs to be installed
        options: {
          presets: ["@babel/preset-react"], // Note: `npm install @babel/preset-react` needs to be installed
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
