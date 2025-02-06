/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	images: {
		unoptimized: true,
	},
	assetPrefix: isProd ? "" : "",
	basePath: isProd ? "" : "",
	output: "export",
	webpack(config) {
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			exclude: /node_modules/,
			use: ["raw-loader", "glslify-loader"],
		});
		return config;
	},
};

module.exports = nextConfig;
