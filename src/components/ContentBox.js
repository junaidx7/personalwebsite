const ContentBox = ({
    overline,
    heading,
    blockText,
    body1,
    body2,
    bulletin,
    body3,
    body4,
    body5,
    body6,
    ImageC,
    alttext,
    showborder,
}) => {

    showborder = false;


    return (
        <section className="sfc fitisnide">

            <div className={showborder ? "border-red" : "" + "contentbox-container"}>


                {(overline || heading || blockText || body1 || body2 || bulletin || body3 || body4) && (<div className="pieces-div-text">
                        {overline && <p className="sm bottom-lg">{overline}</p>}
                        {heading && <h4 id="section1" className="bottom-lg">{heading}</h4>}
                        {blockText && <h4 className="blockpara">{blockText}</h4>}
                        {body1 && <p className="md subtext">{body1}</p>}
                        {body2 && <p className="md subtext top-md">{body2}</p>}
                        {bulletin && bulletin.length > 0 && (
                            <ul className="top-lg">
                                {bulletin.map((item, i) => (
                                    <li className="md left-lg" key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {body3 && <p className="md subtext top-md">{body3}</p>}
                        {body4 && <p className="md subtext top-md">{body4}</p>}
                    </div>)}

                {(ImageC || alttext) && (
                    <div>
                        {ImageC && <img className="pieces-div-img image-radius" src={ImageC} alt="" />}
                        {alttext && <p className="sm top-md">{alttext}</p>}
                    </div>
                )}


                {(body5 || body6) && (<div className="pieces-div-text">
                    {body5 && <p className="md subtext">{body5}</p>}
                    {body6 && <p className="md subtext top-md">{body6}</p>}
                </div>)}

            </div>


        </section>
    );
}

export default ContentBox;