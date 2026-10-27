// Icons Imports
import { FaGithub } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';

export const Card = ({
    title,
    description,
    demo_url,
    urlGithub,
    image_url,
}) => {
    return (
        <article className="p-5 max-w-96 bg-sky-100 flex flex-col justify-center items-center">
            <img src={image_url} alt={title} />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
            <div className="flex flex-wrap justify-center items-center gap-2">
                <a
                    href={demo_url}
                    className="p-3 m-3 max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-600"
                    target="_blank"
                    rel=""
                >
                    <SiNetlify /> Demo
                </a>
                <a
                    href={urlGithub}
                    className="p-3 m-3 w-max bg-blue-400 text-white rounded cursor-pointer hover:bg-green-500"
                    target="_blank"
                    rel=""
                >
                    <FaGithub /> Github
                </a>
            </div>
        </article>
    );
};
