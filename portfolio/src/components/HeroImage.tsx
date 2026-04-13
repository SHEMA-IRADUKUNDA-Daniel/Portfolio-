import HeroImage from "../assets/hero.jpg";

const HeroImageComponent = () => {
  return (
    <img
      src={HeroImage}
      alt="profile"
      className="relative rounded-4xl w-full h-130 object-cover border border-white/10"
    />
  );
};
export default HeroImageComponent;
