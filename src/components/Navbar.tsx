import React from 'react';

interface NavStrip {
  text: string
}


const Strip : React.FC<NavStrip> = ({text}) => {
  return (
    <div className="z-10 h-16 sm:h-14 w-full border-4 border-red-500 flex items-center bg-orange-500 justify-center font-mono text-sm">
      <p className="text-center text-white text-md sm:text-lg lg:text-xl font-bold p-2">
        {text}
      </p>
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <div>
      <Strip text='Attention Solopreneurs*, Freelancers, and New-Business Owners'/>
    </div>
  );
};

export default Navbar;
