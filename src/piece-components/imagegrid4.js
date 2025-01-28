import accover from '../image/images-casestudy/accounting/accounting.jpg';

const Imagegrid4 = ({ imgcover, halfleft, halfright }) => {
    return (

        <section className="imagegrid4-section">

            <img
                className="grid-fullwidth1 img-fullwidth image-radius"
                src={imgcover || "https://placehold.co/3000x2000"}
                alt=""

            />

            <img
                className="grid-halfwidth1 img-fullwidth image-radius"
                src={halfleft || "https://placehold.co/1000x1000"}
            />

            <img
                className="grid-halfwidth2 img-fullwidth image-radius"
                src={halfright || "https://placehold.co/1000x1000"}
            />

        </section>

    );
}

export default Imagegrid4;