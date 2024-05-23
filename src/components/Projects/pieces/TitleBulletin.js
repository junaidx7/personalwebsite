const TitleBulletin = ({ heading,body, bulletin }) => {
  return (
    <section className="maxwidth-container-text sfc">
      <div>
        <h4 id="section1" className="below-title-spacing primarylight">
          {heading}
        </h4>

        <p className="md subtext">{body}</p>

        <ul>
          {bulletin.map((item, i) => (
            <li className="md subtext top-md" key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TitleBulletin;

 