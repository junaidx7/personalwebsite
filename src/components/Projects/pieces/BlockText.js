

const BlockText = ({ title, content }) => {

    return (

        <section className="maxwidth-container-text sfc">

            
            <h5 className="gone">{title}</h5>

            <p className="lg top-xl">{content}</p>

        </section>

    );
}

export default BlockText;