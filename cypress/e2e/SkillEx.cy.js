describe("SkillEx E2E testing", () => {
	it('Open the menu and click discover"', () => {
		cy.visit("https://skill-ex.vercel.app");
		cy.get(".menu_menu__1P4Y_").click();
		cy.get('.menu_pageLinks__Th5q_ > [title="Discover skills"]').click();
		cy.url().should("eq", "https://skill-ex.vercel.app/discover");
	});

	it('Select a skill from the corresponding skill button"', () => {
		cy.get(
			":nth-child(2) > :nth-child(1) > span > .skillCard_image__Op2Wf"
		).click();

		cy.contains("cooking");
	});

	it('Navigate through cooking profile results and find Pira"', () => {
		cy.visit("https://skill-ex.vercel.app/discover/cooking");

		cy.get(".ProfileGallery_iconRightArrow__FeXRY").click();
		cy.get(".ProfileGallery_iconRightArrow__FeXRY").click();
		cy.get(".ProfileGallery_iconRightArrow__FeXRY").click();
		cy.get(".ProfileGallery_iconLeftArrow__RILGd").click();
		cy.contains("piratejas");
	});

	it('Get in touch with Pira"', () => {
		cy.get(".button_profileCardButton__qzm6R").click();
	});

	it('Complete sign up form"', () => {
		cy.visit("https://skill-ex.vercel.app/profiles/sign-up");

		cy.get("#fullName").click().type("Cypress Test User");
		cy.get("#username").click().type("CypressTest");
		cy.get("#imageUrl")
			.click()
			.type("https://randomuser.me/api/portraits/men/70.jpg");
		cy.get("#signUpForm_description__ydjz0")
			.click()
			.type("I love teaching cooking and want to learn IT");
		cy.get(":nth-child(2) > :nth-child(3) > input").check({ force: true });
		cy.get(":nth-child(9) > :nth-child(1) > input").check({ force: true });
		cy.get("#agree").check();
		cy.contains("Sign Up").click();
		//Test stops here because it cannot continue without Auth0 user data
		//		cy.url().should("include", "/discover");
	});

	it("Check menu close button works correctly", () => {
		cy.visit("https://skill-ex.vercel.app");

		cy.get(".menu_menu__1P4Y_").click();
		cy.get(".image").click();
	});

	it("Check logo image link is working", () => {
		cy.visit("https://skill-ex.vercel.app");
		cy.get(
			":nth-child(5) > :nth-child(1) > span > .skillCard_image__Op2Wf"
		).click();
		cy.get(
			'[style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative"] > img'
		).click();
		cy.wait(500);
		cy.url().should("eq", "https://skill-ex.vercel.app/");

		it("Check skill category button directs to the correct page", () => {
			cy.visit("https://skill-ex.vercel.app");

			cy.get(
				":nth-child(6) > :nth-child(1) > span > .skillCard_image__Op2Wf"
			).click();
			cy.wait(500);
			cy.url().should("eq", "https://skill-ex.vercel.app/discover/it");
		});
	});
});
