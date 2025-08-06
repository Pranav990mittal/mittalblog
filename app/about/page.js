// import Image from 'next/image';

// export default function About() {
//   return (
//     <div className="bg-gradient-to-r from-pink-100 to-blue-100">
//       <div className="flex flex-col items-center justify-center py-32 "> 
//         {/* bg-gray-100 dark:bg-gray-700 */}
//         <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
//           <div className="flex flex-col md:flex-row">
//             <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
//               <div className="relative w-48 h-48 rounded-full overflow-hidden">
//                 <Image
//                   src="/logo.png"
//                   alt="Profile"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                 />
//               </div>
//             </div>
//             <div className="w-full md:w-2/3 flex flex-col justify-center">
//             {/* text-gray-800 dark:text-white */}
//               <h1 className="text-4xl font-bold mb-4">About Me</h1>
//               <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
//                 Hi, I'm <strong>Pranav Mittal</strong>, a Computer Engineering student at Thapar Institute and a passionate full-stack developer. I have 2+ years of experience in web development, particularly with the MERN stack, Stripe integration, and modern frontend tools. This blog is where I share tutorials, thoughts, and tips for developers at all levels.
//               </p>
//               <p className="text-gray-600 dark:text-gray-50 text-lg">
//                 I believe in continuous learning and love contributing to real-world tech solutions. Whether you're a beginner or an experienced dev, I hope you find valuable insights here to level up your skills.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Pranav's Coding Journey</h2>
//             <p className="mt-4 text-xl text-gray-600 dark:text-gray-50">
//               From writing my first program to launching full-stack apps, here’s a glimpse of my path in tech.
//             </p>
//           </div>
//           <div className="space-y-12">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/3">
//                 <img src="/logo.png" alt="Pranav starting out" className=" rounded-lg shadow-lg h-60 w-60" />
//               </div>
//               <div className="md:w-2/3 md:pl-1 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Beginning</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50 text-xl">
//                   My journey began in college when I was introduced to Python and C++. What started as coursework quickly became a passion. I began experimenting with projects and soon moved into web development using JavaScript, React, and Node.js.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row-reverse items-center">
//               <div className="md:w-1/3">
//                 <img src="/logo.png" alt="Pranav learning deeper concepts" className="h-60 w-60 rounded-lg shadow-lg ml-36" />
//               </div>
//               <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50 text-xl">
//                   I explored data structures, algorithms, REST APIs, and database design. My interest led to building full-stack applications like <strong>CourseHaven</strong> (MERN + Stripe) and <strong>AI Career Coach</strong> (Next.js + Gemini + Clerk). These projects helped me understand product thinking, clean code, and scalable architectures.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/3">
//                 <img src="logo.png" alt="Pranav building a project" className="w-60 h-60 rounded-lg shadow-lg" />
//               </div>
//               <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50 text-xl">
//                   From interning at National Fertilizers Limited to solving real-world problems, I pushed myself to keep improving. I've also participated in open-source contributions, GitHub projects, and continue learning about system design and DevOps.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row-reverse items-center">
//               <div className="md:w-1/3">
//                 <img src="/logo.png" alt="Pranav helping others" className="w-60 h-60 rounded-lg shadow-lg ml-36" />
//               </div>
//               <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Sharing & Mentoring</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50">
//                   I actively mentor juniors at my university, write tech blogs, and help others get started with coding. I believe knowledge grows when shared. This blog is a small part of that vision.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// import Image from 'next/image';

// export default function About() {
//   return (
//     <div className="bg-gradient-to-r from-pink-100 to-blue-100 min-h-screen ">
//       <div className="flex flex-col items-center justify-center py-32">
//         <div className="w-full max-w-4xl p-8 bg-white/80 dark:bg-gray-500/80 shadow-lg rounded-lg">
//           <div className="flex flex-col md:flex-row ">
//             <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
//               <div className="relative w-48 h-48 rounded-full overflow-hidden">
//                 <Image
//                   src="/logo.png"
//                   alt="Profile"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                 />
//               </div>
//             </div>
//             <div className="w-full md:w-2/3 flex flex-col justify-center ">
//               <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
//               <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
//                 Hi, I'm <strong>Pranav Mittal</strong>, a Computer Engineering student at Thapar Institute and a passionate full-stack developer. I have 2+ years of experience in web development, particularly with the MERN stack, Stripe integration, and modern frontend tools. This blog is where I share tutorials, thoughts, and tips for developers at all levels.
//               </p>
//               <p className="text-gray-600 dark:text-gray-50 text-lg">
//                 I believe in continuous learning and love contributing to real-world tech solutions. Whether you're a beginner or an experienced dev, I hope you find valuable insights here to level up your skills.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className="py-16 ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-gray-900 dark:text-black">Pranavs Coding Journey</h2>
//             <p className="mt-4 text-xl text-gray-600 dark:text-gray-800">
//               From writing my first program to launching full-stack apps, here’s a glimpse of my path in tech.
//             </p>
//           </div>
//           <div className="space-y-12">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/3">
//                 <Image src="/logo.png" alt="Pranav starting out" className="rounded-lg shadow-lg " width={240} height={240} />
//               </div>
//               <div className="md:w-2/3 md:pl-1 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800">The Beginning</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-50 text-xl dark:text-gray-800">
//                   My journey began in college when I was introduced to Python and C++. What started as coursework quickly became a passion. I began experimenting with projects and soon moved into web development using JavaScript, React, and Node.js.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row-reverse items-center">
//               <div className="md:w-1/3">
//                 <Image src="/logo.png" alt="Pranav learning deeper concepts" className=" rounded-lg shadow-lg ml-36" width={240} height={240} />
//               </div>
//               <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800">Diving Deeper</h3>
//                 <p className="mt-4 text-gray-600  text-xl dark:text-gray-800">
//                   I explored data structures, algorithms, REST APIs, and database design. My interest led to building full-stack applications like <strong>CourseHaven</strong> (MERN + Stripe) and <strong>AI Career Coach</strong> (Next.js + Gemini + Clerk). These projects helped me understand product thinking, clean code, and scalable architectures.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/3">
//                 <Image src="/logo.png" alt="Pranav building a project" className=" rounded-lg shadow-lg" width={240} height={240} />
//               </div>
//               <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800">Taking on Challenges</h3>
//                 <p className="mt-4 text-gray-600  text-xl dark:text-gray-800">
//                   From interning at National Fertilizers Limited to solving real-world problems, I pushed myself to keep improving. I've also participated in open-source contributions, GitHub projects, and continue learning about system design and DevOps.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row-reverse items-center">
//               <div className="md:w-1/3">
//                 <Image src="/logo.png" alt="Pranav helping others" className=" rounded-lg shadow-lg ml-36" width={240} height={240} />
//               </div>
//               <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800">Sharing & Mentoring</h3>
//                 <p className="mt-4 text-gray-600 dark:text-gray-800 text-xl ">
//                   I actively mentor juniors at my university, write tech blogs, and help others get started with coding. I believe knowledge grows when shared. This blog is a small part of that vision.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-blue-100 min-h-screen ">
      <div className="flex flex-col items-center justify-center py-32">
        <div className="w-full max-w-4xl p-8 bg-white/80 dark:bg-gray-500/80 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hi, I&apos;m <strong>Pranav Mittal</strong>, a Computer Engineering student at Thapar Institute and a passionate full-stack developer. I have 2+ years of experience in web development, particularly with the MERN stack, Stripe integration, and modern frontend tools. This blog is where I share tutorials, thoughts, and tips for developers at all levels.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                I believe in continuous learning and love contributing to real-world tech solutions. Whether you&apos;re a beginner or an experienced dev, I hope you find valuable insights here to level up your skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-black">Pranav&apos;s Coding Journey</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-800">
              From writing my first program to launching full-stack apps, here&apos;s a glimpse of my path in tech.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image src="/logo.png" alt="Pranav starting out" className="rounded-lg shadow-lg " width={240} height={240} />
              </div>
              <div className="md:w-2/3 md:pl-1 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800">The Beginning</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50 text-xl dark:text-gray-800">
                  My journey began in college when I was introduced to Python and C++. What started as coursework quickly became a passion. I began experimenting with projects and soon moved into web development using JavaScript, React, and Node.js.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image src="/logo.png" alt="Pranav learning deeper concepts" className=" rounded-lg shadow-lg ml-36" width={240} height={240} />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800">Diving Deeper</h3>
                <p className="mt-4 text-gray-600  text-xl dark:text-gray-800">
                  I explored data structures, algorithms, REST APIs, and database design. My interest led to building full-stack applications like <strong>CourseHaven</strong> (MERN + Stripe) and <strong>AI Career Coach</strong> (Next.js + Gemini + Clerk). These projects helped me understand product thinking, clean code, and scalable architectures.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image src="/logo.png" alt="Pranav building a project" className=" rounded-lg shadow-lg" width={240} height={240} />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600  text-xl dark:text-gray-800">
                  From interning at National Fertilizers Limited to solving real-world problems, I pushed myself to keep improving. I&apos;ve also participated in open-source contributions, GitHub projects, and continue learning about system design and DevOps.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image src="/logo.png" alt="Pranav helping others" className=" rounded-lg shadow-lg ml-36" width={240} height={240} />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-800">Sharing & Mentoring</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-800 text-xl ">
                  I actively mentor juniors at my university, write tech blogs, and help others get started with coding. I believe knowledge grows when shared. This blog is a small part of that vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
