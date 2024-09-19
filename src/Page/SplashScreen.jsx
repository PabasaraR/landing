import React, { useEffect } from "react";
import image1 from "../Image/image1.jpg";
import bg from "../Image/bg.png";

export default function SplashScreen({ onFinish, isExiting }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center bg-[#F5DFFB]  transition-opacity duration-1000 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={bg}
        alt="Splash"
        className="w-[400px] h-[400px] animate-fadeInOut border-none"
      />
    </div>
  );
}
