'use client';

import React from 'react';
import Link from 'next/link';
import AnimatedHeading from '@/components/common/AnimatedHeading';

export default function AnimatedHeadingDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center items-center p-8">
      {/* Demo Section 1: Basic Heading */}
      <div className="mb-16">
        <AnimatedHeading
          mainText="Welcome to the Future"
          subText="Where innovation meets creativity"
          className="mb-8"
        />
      </div>

      {/* Demo Section 2: Typing Effect */}
      <div className="mb-16">
        <AnimatedHeading
          mainText="TypeScript Expert"
          subText="Building scalable applications with modern technologies like React, Next.js, and Node.js"
          enableTyping={true}
          typingSpeed={80}
          className="mb-8"
        />
      </div>

      {/* Demo Section 3: Fast Typing */}
      <div className="mb-16">
        <AnimatedHeading
          mainText="Creative Developer"
          subText="Passionate about UI/UX design and cutting-edge web technologies"
          enableTyping={true}
          typingSpeed={40}
          className="mb-8"
        />
      </div>

      {/* Demo Section 4: Long Text */}
      <div className="mb-16">
        <AnimatedHeading
          mainText="Full Stack Engineer"
          subText="Experienced in frontend frameworks, backend APIs, database design, cloud deployment, DevOps practices, and agile development methodologies"
          enableTyping={true}
          typingSpeed={60}
          className="mb-8"
        />
      </div>

      {/* Navigation */}
      <div className="mt-8">
        <Link 
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}