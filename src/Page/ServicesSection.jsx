import React from "react";
import {
  FaUserTie,
  FaLaptopCode,
  FaCashRegister,
  FaQrcode,
  FaBullhorn,
  FaPaintBrush,
} from "react-icons/fa";

export const ServicesSection = () => {
  const services = [
    {
      icon: <FaUserTie />,
      title: "Creative and Talented Staff Augmenting",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web & App Development",
    },
    {
      icon: <FaCashRegister />,
      title: "ERP-POS Systems",
    },
    { icon: <FaQrcode />, title: "QR Code Solutions" },
    { icon: <FaBullhorn />, title: "Digital Marketing" },
    {
      icon: <FaPaintBrush />,
      title: "Social Media Management & Content Creation",
    },
  ];

  return (
    <div className="flex justify-center my-5">
      {" "}
      <div className="py-10 text-center rounded-lg bg-[#ffffff]/60 my-9 drop-shadow-xl border-[1px]">
        <h2 className="mb-8 text-4xl font-bold text-gray-800">Our Services</h2>
        <div className="flex items-center justify-center ">
          <div className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 transition-shadow duration-300  rounded-lg shadow-xl hover:shadow-2xl w-[100%] bg-[#F5DFFB] "
              >
                <div className="mb-4 text-4xl text-[#0f072c]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
