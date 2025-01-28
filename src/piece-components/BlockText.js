

const BlockText = ({ title, content }) => {

    return (

        <section className="sfc pieces-div-text">


            <h5 className="gone">{title}</h5>

            <h4 className="blockpara top-xl">{content}</h4>

        </section>

    );
}

export default BlockText;