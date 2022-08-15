const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "rbyncf",
	defaultCommandTimeout: 3000,

	e2e: {
		baseUrl: "https://skill-ex.vercel.app",
		viewportWidth: 390,
		viewportHeight: 844,
		defaultCommandTimeout: 500,
		experimentalSessionAndOrigin: true,
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
