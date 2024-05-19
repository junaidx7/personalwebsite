
const ImageC = ({ImageC,alttext}) => {

    
    return ( 
        <section className="imageC ">
        <img className="img-fullwidth image-radius" src={ImageC} alt="" />
        {alttext && <p className="alttext">{alttext}</p>}
    </section>
     );


}
 
export default ImageC;

