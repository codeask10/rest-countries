import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {

    return (
        <nav className="block bg-white dark:bg-slate-800 dark:col max-w-full h-20 mx-auto shadow-md  px-6 py-5 ">
            <div className="max-w-screen-xl dark:text-white container flex flex-wrap items-center justify-between mx-auto ">
                <div className="md:text-2xl dark:text-whitesm:text-xl block cursor-pointer py-1.5 font-bold">
                    Where in the world
                </div>
                <div className="flex gap-1 md:gap-2  sm:mx-4 ">
                    <MdOutlineDarkMode className="h-6 w-auto" />
                    <div className="p-0.5">Dark Mode</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar