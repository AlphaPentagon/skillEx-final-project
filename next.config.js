/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	images: {
		domains: [
			"randomuser.me",
			"media-exp1.licdn.com",
			"avatars.githubusercontent.com",
			"github.com",
			"image.com",
			"sketchmob.com",
			"google.com",
			"www.google.com",
			"upload.wikimedia.org",
			"d1csarkz8obe9u.cloudfront.net",
			"www.playbookux.com",
		],
	},
};

module.exports = nextConfig;
