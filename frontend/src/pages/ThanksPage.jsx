import { useEffect, useState } from 'react';
import { ThanksCard } from '../components/ThanksCard.jsx';
import { fetchHttp } from '../helpers/fetchHttp';

export const ThanksPage = () => {
    const [thanks, setThanks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchHttp('thanks', setLoading, setThanks);
    }, []);
    return (
        <section className="p-7 grid grid-cols-3 gap-5">
            {loading ? (
                <p>Loading...</p>
            ) : (
                thanks.map((thank) => (
                    <ThanksCard
                        key={thank.id}
                        creator={thank.creator}
                        about={thank.about}
                        img={thank.img}
                        github_url={thank.github_url}
                        about_url={thank.about_url}
                    />
                ))
            )}
        </section>
    );
};
