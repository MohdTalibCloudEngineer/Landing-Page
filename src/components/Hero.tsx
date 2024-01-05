import React from "react";

interface HeroProps {
  imagePath: string;
  title: string;
  subtitle: string;
  points: { heading: string; description: string }[];
}

const HeroSection: React.FC<HeroProps> = ({
  imagePath,
  title,
  subtitle,
  points,
}) => {
  return (
    <div className="p-5 sm:p-10">
      <div className="p-2">
        <h1 className="text-center sm:text-4xl md:text-xl lg:text-md xl:text-4xl font-semibold mb-2">
          {title}
          <br />
          {subtitle}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:p-10">
        <img
          src={imagePath}
          alt=""
          className="w-full h-auto sm:w-3/4 sm:h-96 mb-4 sm:mb-0 bg-slate-100 sm:h-96"
        />
        <div className="sm:ml-10">
          {points.map((point, index) => (
            <div key={index}>
              <h1 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">
                {point.heading}
              </h1>
              <p className="text-sm sm:text-lg text-slate-500 mb-4 sm:mb-6">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = (prop) => {
  const heroProps = {
    imagePath: prop.imagePath,
    title: prop.title,
    subtitle: prop.subtitle,
    points: prop.points,
  };

  return (
    <div className="">
      <HeroSection {...heroProps} />
    </div>
  );
};

export default Hero;
