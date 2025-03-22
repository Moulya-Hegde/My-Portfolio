import { useState, useCallback } from "react";
import { socialLinks } from "../constants";

const Contact = () => {
  const handleClick = (url) => {
    try {
      console.log(`Opening URL: ${url}`);
      window.open(url, "_blank");
      console.log(`Successfully opened: ${url}`);
      return `Successfully opened ${url}`;
    } catch (error) {
      console.error(`Failed to open ${url}:`, error);
      return `Failed to open ${url}`;
    }
  };
  
  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-w-full mx-auto sm:p-16 pb-12 pt-28 px-8 min-h-[calc(100vh-80px)] h-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        {/* Left Section */}
        <div className="flex-1 min-w-[50%] flex flex-col justify-center">
          <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-left">
            Get In Touch With{" "}
            <span className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent font-semibold drop-shadow">
              Moulya
            </span>{" "}
            👋
          </h1>
          <p className="text-gray-300 text-lg mt-4 leading-relaxed">
            Feel free to connect with me through my social links below.
          </p>

          {/* Social Links */}
<div className="flex flex-wrap gap-6 mt-6">
  {socialLinks.map((link) => (
    <button
      key={link.name}
      onClick={() => {
        try {
          console.log(`Attempting to open: ${link.link}`);
          handleClick(link.link);
          console.log(`Successfully opened: ${link.link}`);
        } catch (error) {
          console.error(`Error opening ${link.name}:`, error);
          alert(`Failed to open ${link.name}. Please try again.`);
        }
      }}
      className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/50"
    >
      <img src={link.iconUrl} alt={link.name} className="w-6 h-6" />
      <span className="text-gray-300 hover:text-white transition-all">
        {link.name}
      </span>
    </button>
  ))}
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center py-6 border-t border-gray-600 bg-[#0f172a] text-gray-400 text-xl">
        <p className="text-xl mb-2 font-italic text-white">moulyahegde2004@gmail.com</p>
        <p className="mb-2">
          © 2025{" "}
          <span className="text-white font-semibold">Moulya Hegde</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
