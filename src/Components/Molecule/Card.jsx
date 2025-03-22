import "./Card.css";
import About from "../Atoms/About/About";
import Price from "../Atoms/Prices/Price";
import Bilboard from "../Atoms/Bilboard/Bilboard";
import pizza from "../../assets/Images/Pizza Photo.svg";
import hot from "/src/assets/Images/Hot Icon.png";
import Organic from "/src/assets/Images/Organic Icon.png";
import Wheat from "/src/assets/Images/Wheat Icon.png";
import Pasta from "/src/assets/Images/Tortellini Photo.jpg";
import Cake from "/src/assets/Images/Strawberry cake Photo.png";

function Card() {
  return (
    <>
      <div className="Card">
        <Bilboard Food={pizza} />
        <div className="Lower">
          <About
            cecxli={hot}
            xorbali={Wheat}
            Name="Pepperoni Pizza"
            About="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
            ccal="265"
            protein="12"
            fat="10"
            carbs="31"
            celsius="53.8"
          />
          <Price first="23.90" last="29.90" />
        </div>
      </div>
      <div className="Card">
        <Bilboard Food={Pasta} />
        <div className="Lower">
          <About
            cecxli={hot}
            xorbali={Wheat}
            fotoli={Organic}
            Name="Tortellini"
            About="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
            ccal="270"
            protein="18"
            fat="4"
            carbs="41"
            celsius="42.4"
          />
          <Price first="17.90" last="22.90" />
        </div>
      </div>
      <div className="Card">
        <Bilboard Food={Cake} />
        <div className="Lower">
          <About
            xorbali={Wheat}
            Name="Strawberry Cake"
            About="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
            ccal="346"
            protein="6"
            fat="14"
            carbs="49"
            celsius="13.9"
          />
          <Price first="13.90" last="18.90" />
        </div>
      </div>
    </>
  );
}
export default Card;
