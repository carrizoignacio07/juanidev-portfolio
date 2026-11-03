// Icons Imports
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export const ThanksCard = ({ creator, about, img, github_url, about_url }) => {
    return (
        <article className="p-5 max-w-96 bg-sky-100 flex flex-col justify-center items-center">
            <img className="p-0 m-0 object-fit h-50" src={img} alt={creator} />
            <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
                <h3 className="text-xl font-medium mb-2">{creator}</h3>
                <p>{about}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2">
                <a
                    href={about_url}
                    className="p-3 m-3 h-min max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube className="inline" /> View
                </a>
                <a
                    href={github_url}
                    className="p-3 m-3 max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-green-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="inline" /> Github
                </a>
            </div>
        </article>
    );
};
