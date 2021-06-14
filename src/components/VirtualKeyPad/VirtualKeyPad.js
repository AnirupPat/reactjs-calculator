import classes from "./VirtualKeyPad.module.css";
import NumberButton from "../UI/NumberButton/NumberButton";

const VirtualKeyPad = (props) => {
  return <NumberButton number={props.number} />;
};

export default VirtualKeyPad;
