const ImageCexplanation = ({ image, title, explanation, alttext }) => {
  return (
    <section className="sfc fitisnide">

      

      <div>
      <img className="pieces-div-img image-radius" src={image} alt="" />
      {alttext && <p className="alttext top-md">{alttext}</p>}

    

        {title && <p className=" pieces-div-text w400 bottom-md">{title}</p>}
        {explanation && <p className=" pieces-div-text bottom-xl">{explanation}</p>}


      </div>


    
      



    </section>
  );
};

export default ImageCexplanation;
