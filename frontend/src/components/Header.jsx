import { NavLink } from 'react-router-dom';
import { NavBar } from './NavBar.jsx';
export const Header = () => {
    return (
        <header className="w-full bg-blue-200 flex flex-row justify-between items-center p-3">
            <NavLink
                to="/"
                className="text-black hover:bg-blue-300 text-center px-4 rounded-2xl text-3xl font-mono font-medium flex flex-row justify-center items-center gap-2"
            >
                <img
                    src="/favicon.ico.png"
                    alt="juani-dev"
                    className="w-min h-min rounded-full"
                />
                Juani Dev
            </NavLink>
            <NavBar />
        </header>
    );
};
