//SignUpForm
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from './signUpForm.module.css';


export default function SignUpForm() {

    function handleSumbit() {
        console.log('submitting form');
    
    }


    return (<div className={styles.signUpSubContainer} >

        <NamesAndDetails />
        <LearnTeachChecks />

        <button onClick={handleSumbit}>Sign Up</button>



    </div>);
}