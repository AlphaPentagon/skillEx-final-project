describe("Log in and message another user E2E", () => {
	it("Logs in with Auth0, redirects to Skillex after log in, view users interested in cooking, view a profile and send message to that user", () => {
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
		//		cy.request("/api/user").its("status").should("eq", 200);

		// Click on a skill from the gallery
		cy.get(":nth-child(2) > .skillCard_text__vxyO9")
			.contains("cooking")
			.click();
		// Click on "get in touch" button
		cy.get(".ProfileCard_buttonContainer__rsXx5").click();
		// Successfully view message page
		cy.url().should("contain", "/profiles/");
		cy.get("textarea").type(
			"Hello! I would like to teach you IT in exchange for your cooking skills. Contact me at "
		);
		cy.get("textarea").type(Cypress.env("EMAIL"));
		// Successfully click "send" button
		cy.get(".button_profileInfoButton__2JHJj").click({ force: true });
	});
});
