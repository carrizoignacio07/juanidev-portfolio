import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="w-max flex flex-row justify-center items-center p-3 gap-5">
            <NavLink
                to="/about"
                className="text-black hover:bg-blue-300 p-3 rounded-2xl text-xl font-medium"
            >
                About me
            </NavLink>
            <NavLink
                to="/stack"
                className="text-black hover:bg-blue-300 p-3 rounded-2xl text-xl font-medium"
            >
                Stack
            </NavLink>
            <NavLink
                to="/projects"
                className="text-black hover:bg-blue-300 p-3 rounded-2xl text-xl font-medium"
            >
                Projects
            </NavLink>
            <NavLink
                to="/thanks"
                className="text-black hover:bg-blue-300 p-3 rounded-2xl text-xl font-medium"
            >
                Thanks
            </NavLink>
            <NavLink
                to="/contact"
                className="text-black hover:bg-blue-300 p-3 rounded-2xl text-xl font-medium"
            >
                Contact
            </NavLink>
            <Link
                href="./frontend/public/favicon.ico.png"
                download
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer text-xl"
            >
                My Resume
            </Link>
        </nav>
    );
};
