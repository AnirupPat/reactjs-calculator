import { useSelector, useDispatch } from 'react-redux';
import classes from "./Calculator.module.css";
import Card from "./UI/Card/Card";
import Input from "./UI/Input/Input";
import VirtualKeyPad from "./VirtualKeyPad/VirtualKeyPad";

const numberInput = ['AC', '+/-', '%', '/', '7', 
'8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calculator = () => {
    const state = useSelector(state => state);
    console.log("calculator.js");
    console.log(state)

  return (
    <Card className={classes.calculator}>
      <Input value={state.calculatedValue > 0 ? state.calculatedValue:state.input} />
      <Card className={classes.virtualCard}>
      {numberInput.map(number =>   <VirtualKeyPad number={number} />) }
      </Card>
    </Card>
  );
};

export default Calculator;
