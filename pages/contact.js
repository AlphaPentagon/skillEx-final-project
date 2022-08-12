import ContactForm from "../src/components/ContactForm";
import SimpleSlider from "../src/components/Testimonials1";
import Head from "next/head";

const Contact = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Contact the SkillEx team" />

				<title>SkillEx | Contact Us</title>
			</Head>
			<ContactForm />
		</>
	);
};

export default Contact;
