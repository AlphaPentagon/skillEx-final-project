describe("Edit my profile", () => {
	it("Logs in with Auth0, redirects to Skillex after log in, visits My Profile page, clicks on Edit Profile button, submits newly edited profile", () => {
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

		//Open the menu
		cy.get(".menu_menu__1P4Y_").click(); // mobile view

		// Click on "My Profile" link
		cy.get('.menu_userLinks__ZwXtF > [title="View your profile"]').click();

		// Should land on My Profile page
		cy.url().should("contain", "my-profile");

		// Click on "Edit Profile" button
		cy.get(".button_blue__iNb9A").click();

		// Should find Update Profile button visible
		cy.get(".button_signUpFormButton__wrtD9").should("be.visible");
	});
});
