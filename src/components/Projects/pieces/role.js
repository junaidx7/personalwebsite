const Role = ({ title1, sub1, title2, sub2, title3, sub3, title4, sub4 }) => {
    return (
      <section className="role-section maxwidth-container-text sfc">
        <div className="project-details-div bottom-2xl">
          {title1 && sub1 && (
            <div>
              <p className="xs-title primary">{title1}</p>
              <p className="sm white">{sub1}</p>
            </div>
          )}
  
          {title2 && sub2 && (
            <div>
              <p className="xs-title primary">{title2}</p>
              <p className="sm white">{sub2}</p>
            </div>
          )}
  
          {title3 && sub3 && (
            <div>
              <p className="xs-title primary">{title3}</p>
              <p className="sm white">{sub3}</p>
            </div>
          )}
  
          {title4 && sub4 && (
            <div>
              <p className="xs-title primary">{title4}</p>
              <p className="sm white">{sub4}</p>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default Role;
  