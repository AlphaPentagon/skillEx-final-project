import styles from './signUpForm.module.css';




export default function NamesAndDetails() {



    return (<div className={styles.container}>


<div className={styles.inputContainer}>
<label for="firstName">First Name:</label>
<input type="text" id="firstName" name="firstName" className={styles.inputField} />
</div>




<div className={styles.inputContainer}>
<label for="lastName">Last Name:</label>
<input type="text" id="lastName" name="lastName"  className={styles.inputField}/>
</div>




<div className={styles.inputContainer}>
<label for="lastName">Email:</label>
<input type="text" id="email" name="email"  className={styles.inputField}/>
</div>





<div className={styles.inputContainer}>
<label for="location">Location:</label>
<input type="text" id="location" name="location"  className={styles.inputField} />
</div>




<div className={styles.descriptionContainer}>
<label for="description">Description:</label>
<input type="text" name="description" className={styles.inputField} id={styles.description}/>
</div>





    </div>);
}