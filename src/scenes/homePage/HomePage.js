import Caroussel from '../../components/caroussel/Caroussel'
import { useState } from "react"

function HomePage(){

    let [pagePosition, setPagePosition] = useState(0)
    const logScroll = (e) => {
        console.log(window.scrollY)

    }
    //window.addEventListener('scroll', logScroll)



            return (
                <div className="homePage">
                    <section className="first-section">
                        <div className='first-section_paragraph'>
                            <h1>AMENAGEMENT <br/> <span>AUTHENTIQUE</span> <br/> ECOLOGIQUE</h1>
                            <p>Enfin un aménagement à la hauteur de votre voyage !
Oublions le camping-car traditionnel, basique, plastique et impersonnel. Aujourd’hui offrez-vous la liberté de vous sentir comme chez vous. </p>
                        </div>
                        <div className='caroussel-section'>
                            <Caroussel />
                        </div>
                    </section>
                    <section className='second-section'>
                        <p>deuxième partie</p>
                    </section>
                    <section className='third-section'>
                        <p>troisième partie</p>
                    </section>
                </div>
            )


    
};

export default HomePage;