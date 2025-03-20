import { useState } from "react";
import myCert from "../assets/images/my_cert.jpg";

export default function InternshipCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-16">
      <h3 className="font-semibold sm:text-3xl text-xl font-poppins text-[#EAEAEA] text-center">
        Work Experience
      </h3>

      <p className="mt-5 text-lg text-[#EAEAEA]/80 text-center max-w-3xl mx-auto">
        Gaining hands-on experience through real-world projects, I’ve worked on building impactful solutions while honing my technical and problem-solving skills.
      </p>

      {/* Internship Card */}
      <div className="mt-10 flex justify-center">
        <div className="relative group bg-[#1A1A2E] shadow-lg rounded-xl p-6 border border-[#2E2E3A] transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl w-full max-w-lg">
          
          {/* Company Logo */}
          <div className="flex justify-center">
            <img src="https://linktr.ee/og/image/yhills.jpg" alt="Company Logo" className="w-24 h-24 object-contain rounded-md" />
          </div>

          {/* Internship Details */}
          <div className="mt-4 text-center">
            <h4 className="text-lg font-semibold text-[#EAEAEA]">Web Developer Intern</h4>
            <p className="text-[#EAEAEA]/80 text-sm mt-2">
              - Developed an interactive event platform that allowed students to register, explore, and engage with events seamlessly. <br />
              - Implemented a secure authentication system for user logins and registrations. <br />
              - Designed a responsive UI using Tailwind CSS, ensuring smooth navigation and a clean experience across all devices. <br />
              - Worked with backend APIs to fetch and display dynamic event details efficiently. <br />
              - Gained experience in full-stack development, debugging, and optimizing web performance.
            </p>
          </div>

          {/* View Certificate Button */}
          <div className="mt-4 text-center">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-[#00DFD8] font-semibold text-sm hover:underline"
            >
              View Certificate →
            </button>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1A1A2E] p-6 rounded-lg shadow-lg max-w-md w-full border border-[#2E2E3A]">
            <h4 className="text-lg font-semibold text-[#EAEAEA] mb-4">Internship Certificate</h4>
            <img src={myCert} alt="Certificate" className="w-full rounded-lg" />
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] text-white px-4 py-2 rounded-md hover:opacity-90 transition-transform duration-300 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
