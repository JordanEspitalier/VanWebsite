import RealisationCard from "../../components/cards/RealisationCard";




function Realisations(){
    return (
        <div className="realisations">
            <h1>REALISATIONS</h1>
            <section className="realisation-card_section">
                <RealisationCard />
                <RealisationCard />
                <RealisationCard />
                <RealisationCard />
            </section>
        </div>
    )

    
};

export default Realisations;