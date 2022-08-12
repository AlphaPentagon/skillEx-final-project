import styles from "../styles/faq.module.css";
import Head from "next/head";

export default function FAQS() {
  return (
    <div id="home" className={styles.container}>
      <Head>
        <title>FAQS</title>
      </Head>

      <h1 className={styles.header1}>FAQS</h1>
      <p></p>
      <div id="q1" className={styles.box}>
        <h1 className={styles.header1}>How does the website work?</h1>
        <p className={styles.answer}>
          SkillEx helps you link up with volunteer teachers and keen learners to
          organise 1-2-1 lessons at your convenience. Browse through our
          categories, select a skill you would like to learn or teach, choose a
          member of our community that suits your needs and drop them a message
          to get started - it's that easy!
        </p>
      </div>
      <div id="q2" className={styles.box}>
        <h1 className={styles.header1}>Which skills can I teach or learn?</h1>
        <p className={styles.answer}>
          At the moment we have a smaller selection of skills to teach and to
          learn but as our small business grows we plan on implementing more.
          However! That doesn't mean you can't message fellow users and have
          conversations about other skills that you might be interested in. This
          site is designed for you to meet like-minded people who would love to
          share your (and their!) passions.
        </p>
      </div>
      <div id="q3" className={styles.box}>
        <h1 className={styles.header1}>
          What happens after I contact someone through the platform?
        </h1>

        <p className={styles.answer}>
          Once you have messaged another SkillEx-er, you can sit back, relax and
          wait for a reply. From there it is up to you how you would like to
          organise your lessons, whether that be in person, via video call, or
          even on the phone.
        </p>
      </div>
      <div id="q4" className={styles.box}>
        <h1 className={styles.header1}>
          How do I get in touch with the Skillex team?
        </h1>

        <p className={styles.answer}>
          If you would like to get in contact with us, then you may do so! Head
          down to the footer at the bottom of the page, click the link called
          "Contact Us". Write your message in the form, and don't forget to
          write your email in the field at the top if you want a reply! This
          will email our customer service team. Alternatively you can also find
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
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import Header from "../src/components/Header";

// const Faq = () => {
//   return (
//     <>
//       <Head>
//         <title>Frequently Asked Questions</title>
//       </Head>
//       <Header text="Frequently Asked Questions" />
//       <div className="faq">
//         <h2>How does it work?</h2>
//         <p>
//           Ever wanted to teach or learn a new Skill, but never know where to
//           start? SkillEx helps you link up with other users that have that same
//           burning passion as yourself and allows for you to get in contact and
//           organise 1-2-1 lessons. Browse through our categories, select a skill
//           you would like to learn or teach, choose a user that suites you and
//           drop them a message. Start your journey below by visiting our discover
//           page.
//         </p>
//         <br />
//         <h2>Which skills can I teach or learn?</h2>
//         <p>
//           At the moment we have a smaller selection of skills to teach and to
//           learn but as our small business grows we plan on implementing more.
//           However! That doesn't mean you can't message fellow users and have
//           conversations about other skills to learn or teach that you are
//           interested in. This site is more of a hub to meet like minded people
//           that would love to share there passions.
//         </p>
//         <br />
//         <h2>If I want to learn a skill, do I also have to teach?</h2>
//         <p>
//           If you are wanting to learn a skill with us, we would recomend that
//           you select a skill to teach. Skillex is a community of like minded
//           people that are up for motivating one another and helping others
//           progress within education allowing more doors to be open for others.
//         </p>
//         <br />
// <h2>What happens after I contact someone through the platform?</h2>
// <p>
//   Once you have messaged one of our users (whether thats to teach or to
//   learn). This will shoot of an email to the user specified. Then you
//   can sit back and relax and wait for a reply. From there it is up to
//   you how you would like to organise your lessons, whether that be in
//   person, over zoom, or even on the phone.
// </p>
//         <br />
// <h2>How do I get in touch with the Skillex team?</h2>
// <p>
//   If you would be liking to get in contact with us, then you may do so!
//   Head down to the footer at the bottom of the page, click the link
//   called "Contact Us". You should see a messaging system for you to
//   enter your own email address at the top, and then your message
//   underneith. This will email our customer service team. Alternatively
//   you shall find our address and phone number on this same page for you
//   to get in contact.
// </p>
//         <br />
// <h2>What is expected of me?</h2>
// <p>
//   Here at Skillex, we expect all of our users to have a read and a
//   understanding of our code of conduct policy, which should be followed
//   at all times when interacting with our app and its users.
// </p>
//       </div>
//     </>
//   );
// };

// export default Faq;
