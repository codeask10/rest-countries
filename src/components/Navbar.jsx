import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../contexts/ThemeContex";

const Navbar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <nav
            className={`block  ${darkMode ? "bg-DarkBlue" : "bg-white "
                } max-w-full h-20 mx-auto shadow-md px-5 md:px-6 py-5 `}
        >
            <div
                className={`lg:max-w-screen-xl ${darkMode ? "text-white" : ""
                    } container flex  items-center justify-between mx-auto`}
            >
                <div className="md:text-2xl sm:text-xl block cursor-pointer py-1.5 font-bold">
                    Where in the world
                </div>

                <button type="button" onClick={toggleTheme}>
                    {!darkMode && (
                        <div className="p-0.5 flex items-center">
                            <MdOutlineDarkMode className="h-6 w-auto md:px-3" /> Dark Mode
                        </div>
                    )}
                    {darkMode && (
                        <div className="p-0.5 flex items-center">
                            <MdOutlineLightMode className="h-6 w-auto md:px-3" /> Light Mode
                        </div>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
