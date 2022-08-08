import Head from 'next/head'
import SignUpForm from '../../src/components/SignUpForm';
import styles from '../../src/components/SignUpForm/signUpForm.module.css';



export default function SignUp () {



    return (<div className={styles.signUpContainer}>
        <Head>

            <title>Sign Up Form </title>
        </Head>

        <h1>Sign Up Form</h1>

        <SignUpForm />


    </div>);
}