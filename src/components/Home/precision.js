import { useEffect } from "react";
import initReveal from '../../js/reveal'


const Precision = () => {

    useEffect(() => {
       
        initReveal();

    }, []);

    return (

        <section id="precision-section" className="maxwidth-container section-gap">

            <p id="precision-paragraph" className="animatedparagraph"></p>

        </section>

    );
}

export default Precision;