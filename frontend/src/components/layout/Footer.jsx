// Icons imports
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import { LinksRRSS } from '../ui/LinksRRSS.jsx';

export const Footer = () => {
    return (
        <footer className="p-5 bg-blue-400 w-full flex flex-col justify-end items-center gap-2">
            <div className="flex flex-row justify-center items-center gap-5">
                <LinksRRSS
                    link="https://www.linkedin.com/in/ignacio-carrizo/"
                    children={
                        <FaLinkedin className="text-black hover:text-blue-500 text-2xl" />
                    }
                />
                <LinksRRSS
                    link="https://github.com/carrizoignacio07"
                    children={
                        <FaGithub className="text-black hover:text-blue-500 text-2xl" />
                    }
                />
                <LinksRRSS
                    link="https://www.facebook.com/ignacio.carrizo.798"
                    children={
                        <FaFacebook className="text-black hover:text-blue-500 text-2xl" />
                    }
                />
                <LinksRRSS
                    link="https://twitter.com/carrizoignacio2"
                    children={
                        <FaTwitter className="text-black hover:text-blue-500 text-2xl" />
                    }
                />
                <LinksRRSS
                    link="https://www.instagram.com/carrizoignacio1/"
                    children={
                        <FaInstagram className="text-black hover:text-blue-500 text-2xl" />
                    }
                />
            </div>
        </footer>
    );
};
