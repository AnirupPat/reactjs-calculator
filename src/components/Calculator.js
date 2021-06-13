import classes from "./Calculator.module.css";
import Card from "./UI/Card/Card";
import Input from "./UI/Input/Input";
import VirtualKeyPad from "./VirtualKeyPad/VirtualKeyPad";

const Calculator = () => {
  return (
    <Card className={classes.calculator}>
      <Input />
      <VirtualKeyPad />
    </Card>
  );
};

export default Calculator;
