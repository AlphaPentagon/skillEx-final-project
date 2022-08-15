describe("Log in E2E", () => {
	it("Logs in with Auth0, redirects to Skillex after log in", () => {
		// Navigate to Skillex
		cy.visit("/");
		//Open the menu
		cy.get(".menu_menu__1P4Y_").click(); // mobile view
		// Open the "Log in" link
		cy.get('.menu_userLinks__ZwXtF > [href="/api/auth/login"]').click();
		// Navigate to Auth0 domain
		cy.origin("https://skillex.eu.auth0.com", () => {
			//type in stored credentials
			cy.get("#email").type(Cypress.env("EMAIL"));
			cy.get("#password").type(Cypress.env("PASSWORD"));
			// Click log in button
			cy.get("#btn-login").click();
		});
		// Verify return to Skillex domain
		cy.url().should("contain", "skill-ex.vercel.app");
		cy.request("/api/auth/me").its("status").should("eq", 200);
	});
});
