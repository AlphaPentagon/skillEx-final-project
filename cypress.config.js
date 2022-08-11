const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "rbyncf",
	defaultCommandTimeout: 3000,
	viewportHeight: 1000,
	viewportWidth: 1000,

	e2e: {
		baseUrl: "https://skill-ex.vercel.app",
		experimentalSessionAndOrigin: true,
		defaultCommandTimeout: 500,
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
		// setupNodeEvents(on, config) {
		// 	// implement node event listeners here
		// },
	},

	component: {
		viewportWidth: 500,
		viewportHeight: 500,
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
	},
});
