//Why Choose Us
import { FeatureData } from "../../libs/whyChooseUs";
import FeatureCard from "../featureCard";


const WhyChooseUs = () => {
  return (
<div>
      {FeatureData.map((data) => (
        <FeatureCard 

        key={data.feature_id} 
        icon={data.icon} 
        desc={data.desc} 

        />
      ))}
   </div> 
  );
};

export default WhyChooseUs;
