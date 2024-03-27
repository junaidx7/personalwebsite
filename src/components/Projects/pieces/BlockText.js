

const BlockText = ({ title, content }) => {

    return (

        <section className="maxwidth-container-text sfc">

            
            <h4 className="gone">{title}</h4>

            <p className="lg white top-xl">{content}</p>

        </section>

    );
}

export default BlockText;