import "./Bilboard.css";
import icon from "/src/assets/Images/Info_Icon.png";



function Bilboard({ Food }) {
  return (
    <>
      <div className="Food">
        <img src={Food} alt="" />
        <img src={icon} alt=""  className="About_button"/>
      </div>
    </>
  );
}
export default Bilboard;
