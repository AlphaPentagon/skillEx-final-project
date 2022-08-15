describe("Edit my profile", () => {
	it("Logs in with Auth0, redirects to Skillex after log in, visits My Profile page, clicks on Edit Profile button, submits newly edited profile", () => {
		// Navigate to Skillex
		cy.visit("/");
		//Open the Contact Us link
		cy.get(
			'.Footer_sitemapContainer__LpyyN > [title="Get in touch"]'
		).click();

		//type in stored email address
		cy.get(".contactform_emailInput__zUhgR").type(Cypress.env("EMAIL"));

		//Type in a message
		cy.get(".contactform_messageInput__NQgFd").type(
			"This is a test message sent from Cypress."
		);

		//Send the message
		cy.get(".button_contactFormButton__5izpp").click(); // mobile view

		// Should land on My Profile page
		cy.get("h3").should("contain", "Thank you for your message!");
	});
});
