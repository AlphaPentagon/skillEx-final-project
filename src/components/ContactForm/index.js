//ContactForm
import Button from "../Button/index";
import Header from "../Header/index";
import styles from "./contactform.module.css";
const ContactForm = () => {
	return (
		<>
			<Header text="Contact us" colour="terraCotta" />
			<form className={styles.form}>
				<label className={styles.label}>
					Email:
					<input
						className={styles.emailInput}
						type="text"
						name="email"
						placeholder="Enter your email"
					/>
				</label>
				<br></br>
				<label className={styles.label}>
					Message:
					<input
						className={styles.messageInput}
						type="text"
						name="message"
						placeholder="Type your request"
					/>
				</label>
				<br></br>

				<Button type="contactFormButton" text="Submit" />
			</form>

			<div className={styles.contactInfo}>
				<p className={styles.label}>Address:</p>
				<p>
					2 Whitehall Ct, <br></br>
					London <br></br>
					SW1A 2EJ
				</p>
				<p className={styles.label}>Phone: </p>
				<p>020 008 87545</p>
			</div>
		</>
	);
};

export default ContactForm;
