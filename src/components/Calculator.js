import classes from "./Calculator.module.css";
import Card from "./UI/Card/Card";
import Input from "./UI/Input/Input";
import VirtualKeyPad from "./VirtualKeyPad/VirtualKeyPad";

const numberInput = ['AC', '+/-', '%', '/', '7', 
'8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calculator = () => {
  return (
    <Card className={classes.calculator}>
      <Input />
      <Card className={classes.virtualCard}>
      {numberInput.map(number =>   <VirtualKeyPad number={number} />) }
      </Card>
    </Card>
  );
};

export default Calculator;
