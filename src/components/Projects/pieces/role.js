const  Role = ({role, duration, team}) => {
    return (
        <section className="role-section maxwidth-container-text sfc">


            <div className="project-details-div bottom-2xl">
                <div>
                    <p className="xs-title primary">ROLE</p>
                    <p className="sm white">{role}</p>
                </div>

                <div>
                    <p className="xs-title primary">DURATION</p>
                    <p className="sm white">{duration}</p>
                </div>

                <div>
                    <p className="xs-title primary">TEAM</p>
                    <p className="sm white">{team}</p>
                </div>


            </div>




            
        </section>
    );
}

export default Role;