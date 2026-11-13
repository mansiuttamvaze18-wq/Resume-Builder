export const TEMPLATES = [
  {
    id: "modern",
    name: "Modern",
    blurb: "Clean and professional with a strong modern layout.",
    accent: "#2B4C3F",
    route: "/tamplate3",

  },
  {
    id: "professional",
    name: "Professional",
    blurb: "Traditional and professional layout for corporate roles.",
    accent: "#1F3A5F",
    route: "/tamplate1",

  },
  {
    id: "minimal",
    name: "Minimal",
    blurb: "Simple typography and plenty of whitespace.",
    accent: "#4A4A45",
    route: "/tamplate2",
  },
]

export const createEmptyResume = () => ({
  fullName: "",
  title: "",
  email: "",
  phone: "",
  location: "",
  links: "",
  summary: "",
  skills: [],
  experience: [
    { role: "", company: "", location: "", dates: "", details: "" },
  ],
  education: [{ school: "", degree: "", dates: "" }],
  projects: [{ name: "", description: "" }],
});