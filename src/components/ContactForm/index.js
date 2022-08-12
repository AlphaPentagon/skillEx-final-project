//ContactForm
import Button from "../Button/index";
import Header from "../Header/index";
import styles from "./contactform.module.css";
import { useState } from "react";

const ContactForm = () => {
	const [text, setText] = useState("");
	const [messageSent, setMessageSent] = useState(false);

	const handleSend = (event) => {
		event.preventDefault();
		//console.log(text);
		setText("");
		setMessageSent(true);
		//console.log(messageSent);
	};

	const handleChange = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<title>Contact us</title>
			<Header text="Contact us" colour="terraCotta" />
			<form className={styles.form} onSubmit={handleSend}>
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
						<label className={styles.label} />
						Message:
					</div>

					<textarea
						className={styles.messageInput}
						type="text"
						name="message"
						placeholder=""
						onChange={handleChange}
						value={text}
					></textarea>
				</div>
				<br></br>
				<div className={styles.contactButton}>
					<Button type="contactFormButton" text="Submit" />
				</div>
			</form>
			<h3>{messageSent ? "Thank you for your message!" : null}</h3>
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
