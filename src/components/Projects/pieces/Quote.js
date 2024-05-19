import quoteimg from "../quote-icon.svg"

const Quote = ({quote}) => {
  return (

    <section className="maxwidth-container-text sfc quoteblocksfc">

      <img className="quote-icon"  src={quoteimg} alt="" />

      <p className="lg white top-xl">{quote}</p>
      
    </section>

  );
};

export default Quote;
