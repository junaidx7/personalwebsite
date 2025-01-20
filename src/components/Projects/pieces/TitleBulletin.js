const TitleBulletin = ({ heading, body, bulletin, overline }) => {
  return (
    <section className="pieces-div-text sfc">
      <div>
        {overline && <p className="sm">{overline}</p>}
        <h4 id="section1" className="below-title-spacing">
          {heading}
        </h4>

        <p className="">{body}</p>

        <ul className="top-lg">
          {bulletin.map((item, i) => (
            <li className="md left-lg" key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TitleBulletin;

