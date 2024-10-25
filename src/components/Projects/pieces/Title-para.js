const TitlePara = ({
  heading,
  body,
  body1,
  body2,
  body3,
  body4,
  overline,
  ImageC,
  link,
  linktext,
  alttext,
}) => {
  return (
    <section className="maxwidth-container-text sfc">
      <div>
        {overline && <p className="overline-heading bottom-md">{overline}</p>}

        {heading && (
          <h4 id="section1" className=" bottom-lg">
            {heading}
          </h4>
        )}

        {body && <p className="md subtext">{body}</p>}

        {link && <a className="md" href={link}>{linktext}</a>}

        <img className="img-fullwidth image-radius" src={ImageC} alt="" />
        {alttext && <p className="alttext">{alttext}</p>}

        {body1 && <p className="md subtext">{body1}</p>}

        {body2 && <p className="md subtext top-md">{body2}</p>}
        
        {body3 && <p className="md subtext top-md">{body3}</p>}

        {body4 && <p className="md subtext top-md">{body4}</p>}

      </div>
    </section>
  );
};

export default TitlePara;
