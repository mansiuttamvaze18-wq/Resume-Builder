import { NavLink } from "react-router-dom";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import image from "../../assets/images/image.png";

const IMAGES = {
  modern: img1,
  professional: img2,
  minimal: image,
};
function TemplateCard({ template }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden flex flex-col">
      <img
        src={IMAGES[template.id]}
        alt={template.name}
        className="w-full h-90 p-4 object-cover"
      />
      <div className="flex-1 flex flex-col bg-gray-300">
        <h2 className="text-sm font-semibold px-4 pt-4 ">{template.name}</h2>
        <p className="text-xs text-gray-700 px-4 pt-1 flex-1">
          {template.blurb}
        </p>
        <NavLink
          to={template.route}
        className="m-4 rounded-lg bg-stone-900 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-100 hover:text-black hover:bg-black-200"
        >
          Use this template

        </NavLink>
      </div>
    </div>
  );
}

export default TemplateCard;



