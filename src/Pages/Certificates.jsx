import { useState } from "react";
import { certificates } from "../constants/index";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCertificates = certificates.filter((cert) =>
    cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="relative w-full mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-screen bg-[#121212] text-[#EAEAEA]">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#1A1A2E]/40 blur-[160px] top-0 left-[-200px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#16213E]/40 blur-[160px] bottom-0 right-[-200px]"></div>
      </div>

      {/* Title */}
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-center">
        My{" "}
        <span className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent font-semibold drop-shadow">
          Certificates
        </span>
      </h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-md mx-auto mt-8">
        <input
          type="text"
          placeholder="Search certificates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 rounded-full bg-[#1A1A2E] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#007CF0] shadow-lg backdrop-blur-lg"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto mt-12">
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1A1A2E]/50 backdrop-blur-lg p-5 rounded-2xl shadow-lg  hover:shadow-xl flex  flex-col"
            >
              <a
  href={cert.img}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-gradient-to-r from-[#007CF0] to-[#096e6b] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#1b4a65]/50 hover:from-[#005FAD] hover:to-[#087970] duration-300 text-center flex flex-row justify-around items-center transform transition-all hover:scale-105 border border-[#2E2E3A] backdrop-blur-md"

>
  View Certificate
  <FaArrowRight className="w-3 h-5" />
</a>
              <h2 className="text-lg font-semibold mt-4 text-center">{cert.name}</h2>
              <p className="text-sm text-gray-400 text-center">{cert.category}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">No certificates found.</p>
        )}
      </div>
    </section>
  );
};

export default Certificates;
