const Title2col = ({heading,body}) => {
    return ( 
        <section className="maxwidth-container-text sfc">
     
            <h4 className="below-title-spacing">{heading}</h4>
            <p className="md twocol-para subtext">{body}</p>
        </section>
     );
}
 
export default Title2col;

