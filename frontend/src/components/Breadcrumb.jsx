import { Link } from "react-router-dom";
const Breadcrumb = ({ e }) => {
  return (
    <>
      <li className="animate-slideleft">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </li>
      <li>
        <Link
          to={e}
          className="block transition hover:text-gray-700 animate-slideleft">
          {e}
        </Link>
      </li>
    </>
  );
};

export default Breadcrumb;
