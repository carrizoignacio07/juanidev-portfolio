// Icons Imports
import { FaGithub } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';

export const Card = ({
    title,
    description,
    urlNetlify,
    urlGithub,
    img,
    tecnologias,
}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <ul className="list">
                    {tecnologias.map((tecnologia, index) => (
                        <li key={tecnologia + index} className="list-item">
                            {tecnologia}
                        </li>
                    ))}
                </ul>
                <p className="card-text card-body ">{description}</p>
                <div className="d-flex flex-row justify-content-between align-items-flex-end">
                    <a
                        href={urlNetlify}
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
