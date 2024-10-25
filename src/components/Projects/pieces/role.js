const Role = ({ title1, sub1, title2, sub2, title3, sub3, title4, sub4 }) => {
    return (
      <section className="role-section maxwidth-container-text sfc">
        <div className="project-details-div ">
          {title1 && sub1 && (
            <div>
              <p className="sm w400 realprimarylight">{title1}</p>
              <p className="md  w400">{sub1}</p>
            </div>
          )}
  
          {title2 && sub2 && (
            <div>
              <p className="sm w400 realprimarylight">{title2}</p>
              <p className="md w400">{sub2}</p>
            </div>
          )}
  
          {title3 && sub3 && (
            <div>
              <p className="sm w400 realprimarylight">{title3}</p>
              <p className="md w400">{sub3}</p>
            </div>
          )}
  
          {title4 && sub4 && (
            <div>
              <p className="sm w400 realprimarylight">{title4}</p>
              <p className="md w400">{sub4}</p>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default Role;
  