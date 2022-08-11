describe("Sign up E2E", () => {
	it("Signs up", () => {
		cy.visit("https://skill-ex.vercel.app");
		cy.get(".menu_menu__1P4Y_").click();
		cy.get('[href="/api/auth/signup"]').click();

		cy.origin("https://skillex.eu.auth0.com", () => {
			cy.get("#email").type(Cypress.env("SIGNUPEMAIL"));
			cy.get("#password").type(Cypress.env("PASSWORD"));
			cy.get("#btn-signup").click();
		});

		cy.get("h1").should("contain", "Sign Up Form");
	});
});
