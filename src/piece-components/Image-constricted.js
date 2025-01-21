
const ImageC = ({ ImageC, alttext }) => {


    return (
        <section className="">
            <img className=" pieces-div-img  image-radius right-xl left-xl" src={ImageC} alt="" />
            {alttext && <p className="sm top-md">{alttext}</p>}
        </section>
    );


}

export default ImageC;

