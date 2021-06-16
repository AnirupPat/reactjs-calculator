import { useRef } from 'react';
import classes from "./Calculator.module.css";
import Card from "./UI/Card/Card";
import Input from "./UI/Input/Input";
import VirtualKeyPad from "./VirtualKeyPad/VirtualKeyPad";

const numberInput = ['AC', '+/-', '%', '/', '7', 
'8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calculator = () => {
    const inputRef = useRef();
    const inputChangeHandler = (event) => {
        console.log(event.target.value);
    }
  return (
    <Card className={classes.calculator}>
      <Input ref={inputRef} type="number" onChange={inputChangeHandler} />
      <Card className={classes.virtualCard}>
      {numberInput.map(number =>   <VirtualKeyPad number={number} />) }
      </Card>
    </Card>
  );
};

export default Calculator;
