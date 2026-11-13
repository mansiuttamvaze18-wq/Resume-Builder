import React, { useState, useRef } from "react";

function Tamplate1() {
  const resumeRef = useRef(null);

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    about: "",
    education: "",
    skills: "",
    experience: "",
    hobby: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResume({
      ...resume,
      [name]: value,
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setResume({
        ...resume,
        photo: URL.createObjectURL(file),
      });
    }
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      {/* Print-only CSS: hides everything except the resume preview when printing */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-preview, #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
        }
      `}</style>

      <div className="min-h-screen bg-neutral-100 p-5 md:p-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ================= FORM ================= */}

          <div className="lg:col-span-2 bg-white border border-neutral-300 shadow-lg">

            {/* Header */}
            <div className="bg-neutral-950 px-7 py-7">
              <p className="text-amber-400 text-sm uppercase tracking-[3px]">
                Resume Builder
              </p>

              <h2 className="text-3xl font-bold text-white mt-2">
                Professional CV
              </h2>

              <p className="text-neutral-400 text-sm mt-2">
                Build your professional office resume
              </p>
            </div>

            <div className="p-7">

              {/* PHOTO */}
              <div className="mb-6">

                <label className="block text-sm font-semibold text-neutral-700 mb-3">
                  Profile Photo
                </label>

                <div className="flex items-center gap-4">

                  <div className="w-20 h-20 rounded-lg border border-neutral-300 overflow-hidden bg-neutral-100 flex items-center justify-center">

                    {resume.photo ? (
                      <img
                        src={resume.photo}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs text-neutral-400">
                        PHOTO
                      </span>
                    )}

                  </div>

                  <label className="cursor-pointer border border-neutral-400 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">

                    Upload Photo

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhoto}
                      className="hidden"
                    />

                  </label>

                </div>
              </div>


              {/* INPUT STYLE */}

              <div className="mb-4">
                <label className="text-sm font-semibold text-neutral-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={resume.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none focus:border-amber-600 transition"
                />
              </div>


              <div className="mb-4">
                <label className="text-sm font-semibold text-neutral-700">
                  Job Title
                </label>

                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Software Developer"
                  value={resume.jobTitle}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none focus:border-amber-600 transition"
                />
              </div>


              <div className="mb-4">
                <label className="text-sm font-semibold text-neutral-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={resume.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none focus:border-amber-600 transition"
                />
              </div>


              <div className="mb-4">
                <label className="text-sm font-semibold text-neutral-700">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={resume.phone}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none focus:border-amber-600 transition"
                />
              </div>


              <div className="mb-4">
                <label className="text-sm font-semibold text-neutral-700">
                  Professional Summary
                </label>

                <textarea
                  name="about"
                  placeholder="Write your professional summary..."
                  value={resume.about}
                  onChange={handleChange}
                  className="w-full h-24 mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none resize-none focus:border-amber-600 transition"
                />
              </div>


              <div className="mb-4">
                <label className="text-sm font-semibold text-neutral-700">
                  Work Experience
                </label>

                <textarea
                  name="experience"
                  placeholder="Company, position, responsibilities..."
                  value={resume.experience}
                  onChange={handleChange}
                  className="w-full h-28 mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none resize-none focus:border-amber-600 transition"
                />
              </div>


              <div className="mb-4">
                <label className="text-sm font-semibold text-neutral-700">
                  Education
                </label>

                <textarea
                  name="education"
                  placeholder="Degree, college, year..."
                  value={resume.education}
                  onChange={handleChange}
                  className="w-full h-24 mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none resize-none focus:border-amber-600 transition"
                />
              </div>


              <div className="mb-4">
                <label className="text-sm font-semibold text-neutral-700">
                  Skills
                </label>

                <textarea
                  name="skills"
                  placeholder="React, JavaScript, HTML, CSS..."
                  value={resume.skills}
                  onChange={handleChange}
                  className="w-full h-24 mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none resize-none focus:border-amber-600 transition"
                />
              </div>


              <div className="mb-6">
                <label className="text-sm font-semibold text-neutral-700">
                  Hobbies
                </label>

                <input
                  type="text"
                  name="hobby"
                  placeholder="Reading, travelling..."
                  value={resume.hobby}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 bg-neutral-50 border border-neutral-300 outline-none focus:border-amber-600 transition"
                />
              </div>


              {/* SAVE BUTTON */}

              <button
                onClick={handleDownloadPDF}
                className="
                  w-full
                  bg-neutral-950
                  hover:bg-amber-700
                  text-white
                  py-3
                  font-semibold
                  tracking-wide
                  transition
                  duration-300
                "
              >
                SAVE / DOWNLOAD PDF
              </button>

            </div>
          </div>


          {/* ================= RESUME ================= */}

          <div
            id="resume-preview"
            ref={resumeRef}
            className="lg:col-span-3 bg-white shadow-xl min-h-[850px]"
          >

            {/* TOP */}

            <div className="px-10 md:px-14 pt-12 pb-8">

              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">

                {/* NAME */}

                <div>

                  <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-3 uppercase">
                    {resume.name || "Your Name"}
                  </h1>

                  <p className="text-neutral-500 text-lg mt-2">
                    {resume.jobTitle || "Professional Position"}
                  </p>

                </div>


                {/* PHOTO */}

                <div className="w-28 h-28 border-4 border-neutral-900 overflow-hidden">

                  {resume.photo ? (
                    <img
                      src={resume.photo}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                      <span className="text-xs text-neutral-400">
                        PHOTO
                      </span>
                    </div>
                  )}

                </div>

              </div>


              {/* CONTACT */}

              <div className="border-t border-b border-neutral-300 mt-7 py-4 flex flex-wrap gap-5 text-sm text-neutral-600">

                <span>
                  {resume.email || "your@email.com"}
                </span>

                <span>
                  {resume.phone || "+91 9876543210"}
                </span>

              </div>

            </div>


            {/* BODY */}

            <div className="px-10 md:px-14 pb-12">

              {/* SUMMARY */}

              <section className="mb-8">

                <div className="flex items-center gap-4">

                  <h2 className="text-sm font-bold uppercase tracking-[3px] text-neutral-900 whitespace-nowrap">
                    Profile
                  </h2>

                  <div className="h-px bg-amber-600 flex-1"></div>

                </div>

                <p className="text-neutral-600 mt-4 leading-7">
                  {resume.about ||
                    "Your professional summary will appear here. Add information about your professional background, strengths and career goals."}
                </p>

              </section>


              {/* EXPERIENCE */}

              <section className="mb-8">

                <div className="flex items-center gap-4">

                  <h2 className="text-sm font-bold uppercase tracking-[3px] text-neutral-900 whitespace-nowrap">
                    Experience
                  </h2>

                  <div className="h-px bg-amber-600 flex-1"></div>

                </div>

                <div className="mt-4 border-l-2 border-amber-500 pl-5">

                  <p className="text-neutral-600 leading-7 whitespace-pre-line">
                    {resume.experience ||
                      "Your professional work experience will appear here."}
                  </p>

                </div>

              </section>


              {/* EDUCATION */}

              <section className="mb-8">

                <div className="flex items-center gap-4">

                  <h2 className="text-sm font-bold uppercase tracking-[3px] text-neutral-900 whitespace-nowrap">
                    Education
                  </h2>

                  <div className="h-px bg-amber-600 flex-1"></div>

                </div>

                <p className="text-neutral-600 mt-4 leading-7 whitespace-pre-line">
                  {resume.education ||
                    "Your education details will appear here."}
                </p>

              </section>


              {/* SKILLS */}

              <section className="mb-8">

                <div className="flex items-center gap-4">

                  <h2 className="text-sm font-bold uppercase tracking-[3px] text-neutral-900 whitespace-nowrap">
                    Skills
                  </h2>

                  <div className="h-px bg-amber-600 flex-1"></div>

                </div>

                <div className="flex flex-wrap gap-2 mt-4">

                  {resume.skills ? (
                    resume.skills.split(",").map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-neutral-300 text-sm text-neutral-700"
                      >
                        {skill.trim()}
                      </span>
                    ))
                  ) : (
                    <span className="text-neutral-400">
                      Your skills
                    </span>
                  )}

                </div>

              </section>


              {/* HOBBIES */}

              <section>

                <div className="flex items-center gap-4">

                  <h2 className="text-sm font-bold uppercase tracking-[3px] text-neutral-900 whitespace-nowrap">
                    Interests and Hobbies
                  </h2> 

                  <div className="h-px bg-amber-600 flex-1"></div>

                </div>

                <p className="text-neutral-600 mt-4">
                  {resume.hobby ||
                    "Reading • Travelling • Music"}
                </p>


              </section>
              

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Tamplate1;