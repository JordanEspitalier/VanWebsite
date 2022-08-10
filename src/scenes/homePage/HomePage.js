import Caroussel from '../../components/caroussel/Caroussel'
import { useState } from "react"

function HomePage(){

    let [pagePosition, setPagePosition] = useState(0)
    const logScroll = (e) => {
        console.log(window.scrollY)

    }
    window.addEventListener('scroll', logScroll)



            return (
                <div className="homePage">
                    <section className="first-section">
                        <div className='first-section_paragraph'>
                            <h1>ACCEUIL</h1>
                            <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h2>
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