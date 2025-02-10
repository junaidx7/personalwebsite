import accover from '../image/images-casestudy/accounting/accounting.jpg';

const Imagegrid4 = ({ imgcover, halfleft, halfright }) => {
    return (

        <section className="imagegrid4-section">

            {imgcover && (
                <img
                    className="grid-fullwidth1 img-fullwidth image-radius"
                    src={imgcover}
                    alt=""
                />
            )}

            {halfleft && (
                <img
                    className="grid-halfwidth1 img-fullwidth image-radius"
                    src={halfleft}
                />
            )}

            {halfright && (
                <img
                    className="grid-halfwidth2 img-fullwidth image-radius"
                    src={halfright}
                />
            )}

        </section>

    );
}

export default Imagegrid4;