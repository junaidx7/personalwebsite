const BlockPara = ({ heading, largetext, body,body1 }) => {
  return (
    <section className="maxwidth-container-text sfc">
      <div>
        {heading && (
          <h5 id="section1" className="below-title-spacing ">
            {heading}
          </h5>
        )}

        {largetext && (
          <p className="lg text below-title-spacing ">{largetext}</p>
        )}

        {body && <p className="md subtext">{body}</p>}

        {body1 && <p className="md subtext top-lg">{body1}</p>}
      </div>
    </section>
  );
};

export default BlockPara;
