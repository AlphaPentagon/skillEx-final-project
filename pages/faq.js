import styles from "../styles/faq.module.css";
import Head from "next/head";

export default function FAQS() {
  return (
    <div id="home" className={styles.container}>
      <Head>


        <title>SkillEx | FAQS</title>
      </Head>

      <h1 className={styles.header1}>FAQS</h1>
      <div id="q1" className={styles.box}>
        <h1 className={styles.header1}>How does SkillEx work?</h1>
        <p className={styles.answer}>
          Our platform helps volunteer teachers and learners
          organise one-to-one lessons at their convenience. Browse through our
          categories, select a skill you would like to learn or teach, choose a
          member of our community that suits your needs and drop them a message
          to get started - it's that easy!
        </p>
      </div>
      <div id="q2" className={styles.box}>
        <h1 className={styles.header1}>Which skills can I teach or learn?</h1>
        <p className={styles.answer}>
          At the moment we have a small selection of skills available, but as our small business grows we will include more based on feedback from our community.
          However, that doesn't mean you can't message fellow users and have
          conversations about other skills that you might be interested in. This
          site is designed for you to meet like-minded people who love to share their passions and interests with others.
        </p>
      </div>
      <div id="q3" className={styles.box}>
        <h1 className={styles.header1}>
          What happens after I contact someone through the platform?
        </h1>

        <p className={styles.answer}>
          Once you have messaged another SkillEx-er, you can sit back, relax and
          wait for a reply. From there it is up to you how you would like to
          organise your lessons: in-person, via video call, or
          even on the phone.
        </p>
      </div>
      <div id="q4" className={styles.box}>
        <h1 className={styles.header1}>
          How do I get in touch with the Skillex team?
        </h1>

        <p className={styles.answer}>
          If you would like to get in contact with us, then head
          down to the footer at the bottom of the page and click the link called
          "Contact Us". Write your message in the form, and don't forget to
          write your email in the field at the top if you want a reply! Your message will be sent directly to the SkillEx team. We are open to any suggestions as we love to hear from our community how we can make our platform better. Alternatively, you can find
          our address and phone number on the same page for you to get in
          contact.
        </p>
      </div>
      <div id="q5" className={styles.box}>
        <h1 className={styles.header1}>What is expected of me?</h1>
        <p className={styles.answer}>
          Here at Skillex, we expect all of our users to have read and
          understood our Code of Conduct policy, which should be followed at all
          times when interacting with our app and its users.
        </p>
      </div>
    </div>
  );
}