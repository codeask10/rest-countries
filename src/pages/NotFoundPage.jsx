import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContex";

const NotFoundPage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-screen ${darkMode && "bg-VeryDarkBlue text-white"}`}>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4"></FaExclamationTriangle>
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to="/"
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >
          Go Back{" "}
        </Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
