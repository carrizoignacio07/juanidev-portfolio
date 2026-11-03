import { ThanksCard } from '../components/ThanksCard.jsx';
import { useContext } from 'react';
import { ThanksContext } from '../context/ThanksContext.jsx';

export const ThanksPage = () => {
    const { thanks, loading } = useContext(ThanksContext);
    console.log(thanks);
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
