import RealisationCard from "../../components/cards/RealisationCard";




function Realisations(){
    return (
        <div className="realisations">
            <section className="realisation-card_section">
                <div className="realisation-card_container">
                    <RealisationCard />
                </div>
                <div className="realisation-card_container-mod">
                    <RealisationCard />
                </div>
                <div className="realisation-card_container">
                    <RealisationCard />
                </div>
                <div className="realisation-card_container-mod">
                    <RealisationCard />
                </div>
            </section>
        </div>
    )

    
};

export default Realisations;