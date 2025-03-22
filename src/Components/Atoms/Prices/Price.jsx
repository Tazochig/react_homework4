import "./Price.css";
import Button from "../Button/Button";

function Price({first, last}) {
  return (
    <>
      <div className="Price_button">
        <div className="Price">
          <h1 className="Price_h1">${first}</h1>
          <span className="Price_span">${last}</span>
        </div>
        <Button />
      </div>
    </>
  );
}
export default Price;
