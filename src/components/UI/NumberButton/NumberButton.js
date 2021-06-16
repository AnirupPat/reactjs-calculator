import { useState } from "react";
import classes from "./NumberButton.module.css";
import { useSelector, useDispatch } from 'react-redux';

const NumberButton = (props) => {
    const dispatch = useDispatch();
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const buttonClickHandler = (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML);
    dispatch({type: 'add', value: event.target.innerHTML});
    setButtonHighlighted(true);
    setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);
  };

  const numberClass = `${classes.button} ${props.className} ${
    buttonHighlighted ? classes.bump : ""
  }`;
  return (
    <button onClick={buttonClickHandler} className={numberClass}>
      {props.number}
    </button>
  );
};

export default NumberButton;
