import { images } from "./Data";
export const LogoSection = () => {
  return (
    <div className=" w-full grid grid-cols-2 sm:grid-cols-4 m-8 items-center gap-6 md:px-24 px-0">
      {images.map((img, index) => (
        <img key={img} className="logos" src={img} alt={`logo-${index}`} />
      ))}
    </div>
  );
};
