import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#050414] text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">

        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/profile3.png"
            alt="Shikha"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg mb-4">
            Hello! I’m <span className="text-pink-400 font-semibold">Shikha Shree</span>, a passionate learner and a frontend developer with a strong interest in full-stack development. I enjoy creating beautiful, responsive, and user-friendly web applications that bring ideas to life.
          </p>

          <p className="text-lg mb-4">
            Currently, I am continuously enhancing my skills in <span className="text-pink-400 font-semibold">React</span>, <span className="text-pink-400 font-semibold">JavaScript</span>, and <span className="text-pink-400 font-semibold">Tailwind CSS</span>. My technical journey also includes programming languages like <span className="text-pink-400 font-semibold">C</span>, <span className="text-pink-400 font-semibold">C++</span>, and <span className="text-pink-400 font-semibold">Python</span> which have helped me build a strong logical mindset.
          </p>

          <p className="text-lg mb-8">
            I'm always excited to learn new technologies, work on challenging projects, and improve my problem-solving abilities. My goal is to become a well-rounded developer who can contribute to real-world projects with creativity and passion.
          </p>

          {/* Skills */}
          <div className="space-y-4">
            <SkillBar title="HTML & CSS" width="90%" />
            <SkillBar title="JavaScript" width="85%" />
            <SkillBar title="Python" width="70%" />
            <SkillBar title="C / C++" width="75%" />
          </div>
        </div>

      </div>
    </section>
  );
};

// SkillBar Component
const SkillBar = ({ title, width }) => {
  return (
    <div>
      <p className="mb-1 italic">{title}</p>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="h-2 rounded-full bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-500"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

export default About;
