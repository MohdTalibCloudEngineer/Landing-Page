"use client";
import React from "react";
import Link from "next/link";

interface CallButtonProps {
  buttonText: string;
  linkTo: string;
}

const CallMe: React.FC<CallButtonProps> = ({ buttonText, linkTo }) => {
  return (
    <Link href={linkTo}>
      <button className="bg-orange-500 hover:bg-orange-600 shadow-lg shadow-slate-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline h-14 p-5 text-xl w-64 m-auto block">
        {buttonText}
      </button>
    </Link>
  );
};

const CallButton: React.FC = () => {
  return (
    <div>
      <CallMe buttonText="Book a Call Now" linkTo="/your-path" />
    </div>
  );
};

export default CallButton;
