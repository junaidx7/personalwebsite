const TitleBulletin = ({ heading,body, bulletin,overline}) => {
  return (
    <section className="maxwidth-container-text sfc">
      <div>
      {overline && <p className="overline-heading">{overline}</p>}
        <h5 id="section1" className="below-title-spacing">
          {heading}
        </h5>

        <p className="md subtext">{body}</p>

        <ul className="top-md">
          {bulletin.map((item, i) => (
            <li className="md" key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TitleBulletin;

 