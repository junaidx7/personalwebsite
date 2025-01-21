const Skills = () => {
  return (
    <section className="skills-section section-gap">
      <h4 className="mgb10">Skills & Expertise</h4>

      <div className="stickyContainer mgb10">
        <div className="stickynote yellowSticky rotateleft">
          <p className="lg">Design</p>
          <p className="md">
            Wireframing, Rapid Prototyping, Responsive design, Design Systems,
            Visual Design, Interaction Design, Illustration, Animation, Agile &
            lean UX
          </p>
        </div>

        <div className="stickynote redSticky">
          <p className="lg">Research</p>
          <p className="md">
            User Research, Usability Testing, Customer Journey Mapping,
            Personas, Storyboarding, Affinity Diagrams, Workshopping,
            Information Architecture
          </p>
        </div>

        <div className="stickynote blueSticky rotateright">
          <p className="lg">Toolkit</p>
          <p className="md">
            Figma, Adobe XD, Adobe CC (Illustrator, Photoshop, Indesign),
            HTML, CSS, React js
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
