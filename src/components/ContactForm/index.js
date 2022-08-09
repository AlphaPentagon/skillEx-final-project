//ContactForm
import Button from "../Button/index";
import Header from "../Header/index";
import styles from "./contactform.module.css";
const ContactForm = () => {
	return (
		<>
		<title>Contact us</title>
			<Header text="Contact us" colour="terraCotta" />
			<form className={styles.form}>
				<div className={styles.inputContainer}>
				<div className={styles.padding}>
					<label className={styles.label} />
					Email:
					</div>
					<input
						className={styles.emailInput}
						type="text"
						name="email"
						placeholder=""
					/>
				
				</div>
				<br></br>
				<div className={styles.inputContainer}>
					<div className={styles.padding}>
				<label className={styles.label}/>
					Message:
					</div>
					<textarea className={styles.messageInput}
					type="text"
					name="message"
					placeholder="">
				</textarea>
				</div>
				<br></br>
				<div className= {styles.contactFormButton}>
				<Button type="contactFormButton" text="Submit" />
				</div>
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
