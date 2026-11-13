import { useNavigate } from "react-router-dom";
import TemplateCard from "./TamplateCard";
import { TEMPLATES } from "../data/data";

function Dashboard() {
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    navigate(`/editor/${template.id}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-48 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold">ResumeBuilder</h2>
        <p className="mt-6 hover:bg-emerald-100">Dashboard</p>
      </div>

      {/* Main */}
      <div className="flex-1 bg-gray-100">
        {/* Navbar */}
        <nav className="bg-gray-700 p-4 flex justify-between shadow">
          <h2 className="font-bold text-amber-50">Dashboard</h2>
        </nav>

        <div className="text-lg text-cyan-900">
          <h2 className="p-4 font-bold">Resume Dashboard</h2>
          <p className="px-3 text-gray-400">
            Choose one of the templates below to create your resume.
          </p>
        </div>

        {/* Template cards */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {TEMPLATES.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={() => handleTemplateSelect(template)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


