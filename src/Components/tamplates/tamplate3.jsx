
import React, { useState } from "react";

export default function Tamplate3() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    hobby: "",
    education: "",
    skills: "",
    about: "",
  });

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setResume({
      ...resume,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-4 md:p-8 font-sans">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-7">

        {/* ================================================= */}
        {/* LEFT SIDE - FORM */}
        {/* ================================================= */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">

          {/* FORM HEADER */}
          <div className="bg-emerald-700 px-7 py-6 text-white">

            <h2 className="text-2xl font-bold">
              Resume Form
            </h2>

            <p className="text-emerald-100 text-sm mt-1">
              Enter your educational details
            </p>

          </div>


          {/* FORM */}
          <div className="p-7">

            {/* Name */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={resume.name}
                onChange={handleChange}
                className="
                  w-full
                  p-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-lg
                  text-gray-800
                  outline-none
                  focus:border-emerald-500
                  focus:ring-2
                  focus:ring-emerald-100
                  transition
                "
              />

            </div>


            {/* Email */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={resume.email}
                onChange={handleChange}
                className="
                  w-full
                  p-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-lg
                  text-gray-800
                  outline-none
                  focus:border-emerald-500
                  focus:ring-2
                  focus:ring-emerald-100
                  transition
                "
              />

            </div>


            {/* Phone */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Enter your phone"
                value={resume.phone}
                onChange={handleChange}
                className="
                  w-full
                  p-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-lg
                  text-gray-800
                  outline-none
                  focus:border-emerald-500
                  focus:ring-2
                  focus:ring-emerald-100
                  transition
                "
              />

            </div>





            {/* About */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                About Me
              </label>

              <textarea
                name="about"
                placeholder="Write about yourself..."
                value={resume.about}
                onChange={handleChange}
                className="
                  w-full
                  h-28
                  p-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-lg
                  text-gray-800
                  outline-none
                  resize-none
                  focus:border-emerald-500
                  focus:ring-2
                  focus:ring-emerald-100
                  transition
                "
              />

            </div>


            {/* Education */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Education
              </label>

              <textarea
                name="education"
                placeholder={"BCA - XYZ College\n12th - ABC School"}
                value={resume.education}
                onChange={handleChange}
                className="
                  w-full
                  h-28
                  p-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-lg
                  text-gray-800
                  outline-none
                  resize-none
                  focus:border-emerald-500
                  focus:ring-2
                  focus:ring-emerald-100
                  transition
                "
              />

            </div>


            {/* Skills */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Skills
              </label>

              <textarea
                name="skills"
                placeholder="React, JavaScript, HTML, CSS..."
                value={resume.skills}
                onChange={handleChange}
                className="
                  w-full
                  h-28
                  p-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-lg
                  text-gray-800
                  outline-none
                  resize-none
                  focus:border-emerald-500
                  focus:ring-2
                  focus:ring-emerald-100
                  transition
                "
              />

            </div>

            {/* Hobby */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hobby
              </label>

              <input
                type="text"
                name="hobby"
                placeholder="Reading, travelling..."
                value={resume.hobby}
                onChange={handleChange}
                className="
                  w-full
                  p-3
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-lg
                  text-gray-800
                  outline-none
                  focus:border-emerald-500
                  focus:ring-2
                  focus:ring-emerald-100
                  transition
                "
              />

            </div>

            {/* SAVE BUTTON */}
            <button
              className="
                w-full
                py-3
                bg-emerald-600
                text-white
                rounded-lg
                font-semibold
                hover:bg-emerald-700
                hover:shadow-lg
                active:scale-95
                transition
              "
            >
              Save the PDF
            </button>

          </div>
        </div>


        {/* ================================================= */}
        {/* RIGHT SIDE - EDUCATIONAL RESUME */}
        {/* ================================================= */}

        <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

          {/* RESUME TOP */}
          <div className="bg-emerald-800 text-white px-8 md:px-10 py-9">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* NAME */}
              <div>

                <p className="text-emerald-300 text-xs uppercase tracking-[4px] mb-2">
                  Student Resume
                </p>

                <h1 className="text-4xl md:text-5xl font-bold">
                  {resume.name || "Your Name"}
                </h1>

                <p className="mt-3 text-emerald-100">
                 
                </p>

              </div>


 

            </div>


            {/* CONTACT */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7 text-sm text-emerald-100">

              <span>
                ✉ {resume.email || "your@email.com"}
              </span>

              <span>
                ☎ {resume.phone || "9876543210"}
              </span>

            </div>

          </div>


          {/* RESUME BODY */}
          <div className="p-8 md:p-10">


            {/* ================= ABOUT ================= */}

            <section className="mb-9">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-2 h-7 bg-emerald-600 rounded-full"></div>

                <h2 className="text-xl font-bold text-gray-800">
                  About Me
                </h2>

              </div>

              <p className="text-gray-600 leading-7">
                {resume.about ||
                  "Write something about yourself. Mention your educational background, interests and career goals."}
              </p>

            </section>


            {/* ================= EDUCATION ================= */}

            <section className="mb-9">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-2 h-7 bg-emerald-600 rounded-full"></div>

                <h2 className="text-xl font-bold text-gray-800">
                  Education
                </h2>

              </div>


              {/* Timeline */}
              <div className="relative pl-7 border-l-2 border-emerald-200">

                <div className="relative">




                  <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">

                    <h3 className="font-bold text-gray-800">
                      Educational Background
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7 whitespace-pre-line">
                      {resume.education ||
                        "Your education details will appear here."}
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* ================= SKILLS ================= */}

            <section className="mb-9">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-2 h-7 bg-emerald-600 rounded-full"></div>

                <h2 className="text-xl font-bold text-gray-800">
                  Skills
                </h2>

              </div>


              <div className="flex flex-wrap gap-3">

                {(
                  resume.skills
                    ? resume.skills.split(",")
                    : ["HTML", "CSS", "JavaScript", "React"]
                ).map((skill, index) => (

                  <span
                    key={index}
                    className="
                      px-4
                      py-2
                      bg-emerald-50
                      border
                      border-emerald-200
                      text-emerald-700
                      rounded-lg
                      text-sm
                      font-semibold
                    "
                  >
                    {skill.trim()}
                  </span>

                ))}

              </div>

            </section>


            {/* ================= HOBBIES ================= */}

            <section>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-2 h-7 bg-emerald-600 rounded-full"></div>

                <h2 className="text-xl font-bold text-gray-800">
                  Hobbies & Interests
                </h2>

              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">

                <p className="text-gray-600 leading-7">
                  {resume.hobby ||
                    "Reading, Travelling, Music, Sports..."}
                </p>

              </div>

            </section>

          </div>



        </div>

      </div>

    </div>
  );
}

