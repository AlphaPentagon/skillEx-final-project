//SignUpForm
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from './signUpForm.module.css';


export default function SignUpForm() {


    return (<div className={styles.signUpSubContainer} >

        <NamesAndDetails />
        <LearnTeachChecks />



    </div>);
}