const BlockPara = ({ heading, largetext, body,body1 }) => {
  return (
    <section className="maxwidth-container-text sfc">
      <div>
        {heading && (
          <h4 id="section1" className="below-title-spacing primarylight">
            {heading}
          </h4>
        )}

        {largetext && (
          <p className="lg text below-title-spacing primarylight">{largetext}</p>
        )}

        {body && <p className="md subtext">{body}</p>}

        {body1 && <p className="md subtext top-lg">{body1}</p>}
      </div>
    </section>
  );
};

export default BlockPara;
