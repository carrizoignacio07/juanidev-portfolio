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
            <img
                className="p-0 m-0 object-fit h-50"
                src={image_url}
                alt={title}
            />
            <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>
                    {description.length > 125
                        ? `${description.substring(0, 125)}...`
                        : description}
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2">
                <a
                    href={demo_url}
                    className="p-3 m-3 h-min max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiNetlify className="inline" /> Demo
                </a>
                <a
                    href={urlGithub}
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
