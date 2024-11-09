const ImageCexplanation = ({ image, title, explanation, alttext }) => {
  return (
    <section className="imageC">

      <div className="maxwidth-container-text center ">

        

        {title && <p className="w400 bottom-md">{title}</p>}
        {explanation && <p className="bottom-xl">{explanation}</p>}


      </div>



      <img className="top-md img-fullwidth image-radius" src={image} alt="" />
      {alttext && <p className="alttext top-md">{alttext}</p>}


    </section>
  );
};

export default ImageCexplanation;
