// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact

import React from "react";
import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-3xl text-center ">
        
        {/* Profile image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Pranav Mittal"
            width={120}
            height={120}
            className="rounded-full border-4 border-blue-500"
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Pranav Mittal</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Web Developer | Blogger  </p>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
            <Mail className="w-5 h-5" />
            <a href="mailto:pranavmittal990@gmail.com" className="hover:underline">
              pranavmittal990@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
            <Linkedin className="w-5 h-5" />
            <a
              href="https://www.linkedin.com/in/pranav-mittal-721935312/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
            <Github className="w-5 h-5" />
            <a
              href="https://github.com/Pranav990mittal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
