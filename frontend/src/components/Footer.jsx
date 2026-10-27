// Icons imports
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="p-5 bg-blue-400 w-full flex flex-col justify-end items-center gap-2">
            <div className="flex flex-row justify-center items-center gap-5">
                <a
                    href="https://www.linkedin.com/in/ignacio-carrizo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="text-black hover:text-blue-500 text-2xl" />
                </a>
                <a
                    href="https://github.com/carrizoignacio07"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="text-black hover:text-blue-500 text-2xl" />
                </a>
                <a
                    href="https://www.facebook.com/ignacio.carrizo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="text-black hover:text-blue-500 text-2xl" />
                </a>
                <a
                    href="https://twitter.com/ignaciocarrizo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter className="text-black hover:text-blue-500 text-2xl" />
                </a>
                <a
                    href="https://www.instagram.com/ignaciocarrizo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="text-black hover:text-blue-500 text-2xl" />
                </a>
            </div>
        </footer>
    );
};
