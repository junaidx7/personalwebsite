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
}) => {
    return (
        <section className="sfc fitisnide">

            <div className="pieces-div-text">
                {overline && <p className="sm bottom-lg">{overline}</p>}
                {heading && <h3 id="section1" className="bottom-lg">{heading}</h3>}
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
            </div>

            {ImageC && <img className="pieces-div-img image-radius" src={ImageC} alt="" />}
            {alttext && <p className="alttext">{alttext}</p>}

            <div className="pieces-div-text">
                {body5 && <p className="md subtext">{body5}</p>}
                {body6 && <p className="md subtext top-md">{body6}</p>}
            </div>

        </section>
    );
}

export default ContentBox;