import accover from '../acc.png'

const Imagegrid4 = ({ imgcover, halfleft, halfright }) => {
    return (
        <section className="imagegrid4-section right-xl left-xl image-radius">
            {imgcover && <img className="grid-fullwidth1 img-fullwidth image-radius" src={imgcover} alt="" />}
            {halfleft && <img className="grid-halfwidth1 img-fullwidth image-radius" src={halfleft} alt="" />}
            {halfright && <img className="grid-halfwidth2 img-fullwidth bottom-2xl image-radius" src={halfright} alt="" />}
        </section>
    );
}
 
export default Imagegrid4;