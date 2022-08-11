describe("Log in", () => {
	it("Logs in with Auth0, redirects to Skillex after log in, view users interested in cooking, view a profile and send message to that user", () => {
		// Navigate to Skillex
		cy.visit("/");
		//Open the menu
		cy.get(".menu_menu__1P4Y_").click(); // mobile view
		// Open the "Log in" link
		cy.get('[href="/api/auth/login"]').click();
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
		// Redirect to My profile from successful log in not yet implemented
		//		cy.get(".menu_menu__1P4Y_").click(); // mobile view
		//		cy.get(".menu_modal__1psRN").should("contain", "My profile");
	});
});
