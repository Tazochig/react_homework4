import "./About.css";

function About({ Name, About, ccal, protein, fat, carbs, celsius, cecxli, xorbali, fotoli }) {
  return (
    <>
      <div className="About">
        <div>
          <div className="All">
            <div className="tavi">
              <p className="Heading">{Name}</p>
              <div className="pics">
                <img src={fotoli} alt="" />
                <img src={cecxli} alt="" />
                <img src={xorbali} alt="" />
              </div>
            </div>
            <p className="about">{About}</p>
            <div className="value">
              <p className="nutrition">{ccal} Cal</p>
              <p className="nutrition">
                P/F/C: {protein}/{fat}/{carbs}
              </p>
              <p className="nutrition">{celsius} °C</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
