import AboutImage from "../assets/hero.jpg";

const HeroImageComponent = () => {
  return (
    <img
      src={AboutImage}
      alt="profile"
      className="relative rounded-4xl w-full h-130 object-cover border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-[0_0_30px_rgba(190,242,100,0.20)] "
    />
  );
};
export default HeroImageComponent;
