import Head from "next/head";
import SignUpForm from "../../src/components/SignUpForm";
import styles from "../../src/components/SignUpForm/signUpForm.module.css";
import Header from "../../src/components/Header";
export default function SignUp() {
  return (
    <div className={styles.signUpContainer}>
      <Head>
        <title>Sign Up Form </title>
      </Head>
      <Header text="Sign Up" colour="terraCotta" /> <SignUpForm />
    </div>
  );
}
