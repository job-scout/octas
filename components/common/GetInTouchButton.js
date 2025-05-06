// components/GetInTouchButton.jsx
import React from "react";

const GetInTouchButton = () => {
  const handleClick = () => {
    const el = document.getElementById("contact-us");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-xl  cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in-out"
    >
      Get In Touch
    </button>
  );
};

export default GetInTouchButton;
