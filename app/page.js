"use client"
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Tech Insights", "Code Tips", "UI Design", "JavaScript Tricks", "Career Advice"],
      typeSpeed: 30,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r   from-purple-300 to-pink-100 text-white py-20 px-4 lg:px-24">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-10 lg:mb-0 lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Explore the world of <br />
              <span ref={el} className="underline decoration-white/60" />
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Dive into tutorials, insights, and tech stories from developers like you.
            </p>
            <Link href="/blog">
              <Button className="mt-6" variant="default">
                Start Reading
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9"
              alt="Blog Hero"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Message Instead of Blog Cards */}
      {/* <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Want to Read the Latest Blogs?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Visit the <strong>Blog</strong> section from the navbar to explore in-depth guides, tech reviews, and development tips!
          </p>
          <Link href="/blog">
            <Button variant="outline">Go to Blog</Button>
          </Link>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Readers Say</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Stories from our amazing readers 👇</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <TestimonialCard
              name="Ananya Sharma"
              role="Full Stack Developer"
              quote="Your blog helped me finally understand async/await!"
            />
            <TestimonialCard
              name="Rahul Verma"
              role="UI Designer"
              quote="I’ve redesigned my entire app using Tailwind tips from here."
            />
            <TestimonialCard
              name="Karan Singh"
              role="Tech Lead"
              quote="Always fresh content and valuable insights. Love this blog!"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const TestimonialCard = ({ name, role, quote }) => {
  return (
    <div className="max-w-sm bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow-md">
      <p className="text-gray-700 dark:text-gray-300 italic">“{quote}”</p>
      <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">{name}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  );
};
