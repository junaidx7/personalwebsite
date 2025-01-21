const Title2col = ({heading,body}) => {
    return ( 
        <section className="maxwidth-container-text sfc">
     
            <h5 className="below-title-spacing">{heading}</h5>
            <p className="md twocol-para subtext">{body}</p>
        </section>
     );
}
 
export default Title2col;

