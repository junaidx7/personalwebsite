import { useEffect } from "react";
import seeReveal from '../../js/seeReveal'


const See = () => {

    useEffect(() => {
       
        seeReveal();

    }, []);

    return (

        <section id="see-section" >

            <p  className="maxwidth-container" id="see-paragraph"></p>

        </section>

    );
}

export default See;