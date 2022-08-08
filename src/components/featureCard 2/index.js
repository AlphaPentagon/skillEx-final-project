// one card

const FeatureCard = ({ icon, desc }) => {
  return (
    <div>
      <img src={icon} alt="" />
      <p>{desc}</p>
    </div>
  );
};

export default FeatureCard;
