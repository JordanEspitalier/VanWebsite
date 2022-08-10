import { useState } from "react"
import { CarousselData } from "./CarousselData"


function Caroussel() {

    const arrTest = [1, 2, 3]
    const length = arrTest.length
    let [current, setCurrent] = useState(0)


    const goLeft = ()=>{

        if(current === 0) setCurrent(length - 1);
        else setCurrent(current - 1)

    }

    const goRight = ()=>{
 
        if(current === length - 1) setCurrent(0)
        else setCurrent(current + 1)

    }

  return (
    <section className="Caroussel">
        {CarousselData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && 
              <img src={slide.image} alt='travel image' className='slide-image' />
            }
          </div>
        );
      })}
        <div className="goLeft" onClick={goLeft}></div>
        <div className="goRight" onClick={goRight}></div>
    </section>
  )
}

export default Caroussel