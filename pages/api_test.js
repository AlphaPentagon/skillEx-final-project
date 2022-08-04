const Profiles = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1>All profiles</h1>
      {data.map((profile) => (
        <>
          <h2>{profile.bio}</h2>
          <p>
            Learn:{" "}
            {profile.learn_skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </p>
          <p>
            Teach:{" "}
            {profile.teach_skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </p>
        </>
      ))}
    </>
  );
};

export default Profiles;

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/profiles`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
