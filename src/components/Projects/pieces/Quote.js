

const Quote = ({quote,quoteimg}) => {
  return (

    <section className="maxwidth-container-text sfc quoteblocksfc">

      <img className="quote-icon"  src={quoteimg} alt="" />

      <p className="lg top-xl">{quote}</p>
      
    </section>

  );
};

export default Quote;
