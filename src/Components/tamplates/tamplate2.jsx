
import React, { useState } from "react";

export default function Tamplate() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    hobby: "",
    education: "",
    skills: "",
    about: "",
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResume({
      ...resume,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-200 p-6 md:p-10">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* ================= FORM ================= */}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl shadow-2xl p-7 text-white">

          <div className="mb-7">
            <h2 className="text-3xl font-bold">
              Resume Builder
            </h2>

            <p className="text-slate-400 mt-2">
              Enter your details below
            </p>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={resume.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={resume.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={resume.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Hobby */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Hobby
            </label>

            <input
              type="text"
              name="hobby"
              placeholder="Reading, travelling..."
              value={resume.hobby}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* About */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              About Me
            </label>

            <textarea
              name="about"
              placeholder="Write about yourself..."
              value={resume.about}
              onChange={handleChange}
              className="w-full h-24 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none resize-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Education */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Education
            </label>

            <textarea
              name="education"
              placeholder="Enter your education..."
              value={resume.education}
              onChange={handleChange}
              className="w-full h-24 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none resize-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Skills */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Skills
            </label>

            <textarea
              name="skills"
              placeholder="React, JavaScript, HTML..."
              value={resume.skills}
              onChange={handleChange}
              className="w-full h-24 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none resize-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Button */}
          <button
            className="
              w-full
              py-3
              rounded-xl
              bg-cyan-400
              text-slate-900
              font-bold
              hover:bg-cyan-300
              hover:shadow-lg
              hover:shadow-cyan-400/30
              active:scale-95
              transition
            "
          >
            Save the PDF
          </button>
        </div>


        {/* ================= RESUME ================= */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Resume Header */}
          <div className="bg-slate-800 to-cyan-500 px-10 py-10 text-white">

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
              {resume.name || "Your Name"}
            </h1>

            <div className="flex flex-wrap gap-4 mt-4 text-sm text-blue-50">

              <span>
                ✉ {resume.email || "your@email.com"}
              </span>

              <span>
                ☎ {resume.phone || "9876543210"}
              </span>

            </div>
          </div>



          {/* Resume Body */}
          <div className="p-10 ">

          {/* Hobby */}
             <section className="mb-8">

              <h2 className="text-lg font-bold text-blue-700 uppercase tracking-widest border-b-2 border-blue-100 pb-2">
                Hobbies
              </h2>

              <p className="text-gray-600 mt-4 leading-7">
                {resume.hobby ||
                  "Reading, travelling, music..."}
              </p>

            </section>

            {/* About */}

            <section className="mb-8">

              <h2 className="text-lg font-bold text-blue-700 uppercase tracking-widest border-b-2 border-blue-100 pb-2">
                About Me
              </h2>

              <p className="text-gray-600 mt-4 leading-7">
                {resume.about ||
                  "Write something about yourself..."}
              </p>

            </section>


            {/* Education */}
            <section className="mb-8">

              <h2 className="text-lg font-bold text-blue-700 uppercase tracking-widest border-b-2 border-blue-100 pb-2">
                Education
              </h2>

              <p className="text-gray-600 mt-4 leading-7 whitespace-pre-line">
                {resume.education ||
                  "Your education details"}
              </p>

            </section>


            {/* Skills */}
            <section className="mb-8">

              <h2 className="text-lg font-bold text-blue-700 uppercase tracking-widest border-b-2 border-blue-100 pb-2">
                Skills
              </h2>

              <p className="text-gray-600 mt-4 leading-7 whitespace-pre-line">
                {resume.skills || "Your skills"}
              </p>

            </section>




          </div>


          </div>

        </div>

      </div>

  );
}
