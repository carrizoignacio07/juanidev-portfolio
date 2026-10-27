// Icons Imports
import { FaGithub } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';

export const Card = ({
    title,
    description,
    demo_url,
    urlGithub,
    image_url,
    project_technologies,
}) => {
    return (
        <div>
            <img src={image_url} alt={title} />
            <div>
                <h5>{title}</h5>
                {/* <ul>
                    {project_technologies.map((technology, index) => (
                        <li key={technology + index} className="list-item">
                            {technology}
                        </li>
                    ))}
                </ul> */}
                <p>{description}</p>
                <div>
                    <a
                        href={demo_url}
                        className="btn btn-primary card-link"
                        target="_blank"
                        rel=""
                    >
                        <SiNetlify /> Go to Netlify
                    </a>
                    <a
                        href={urlGithub}
                        className="btn btn-info card-link"
                        target="_blank"
                        rel=""
                    >
                        <FaGithub /> Go to Github
                    </a>
                </div>
            </div>
        </div>
    );
};
