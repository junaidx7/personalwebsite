const ImageCexplanation = ({ image, title, explanation, alttext }) => {
  return (
    <section className="imageC">
      
      {title && <p className="md white w400 max800 bottom-md">{title}</p>}
      {explanation && <p className="md subtext max800 bottom-lg">{explanation}</p>}

      
      
      <img className="img-fullwidth image-radius" src={image} alt="" />
      {alttext && <p className="alttext">{alttext}</p>}
    </section>
  );
};

export default ImageCexplanation;
