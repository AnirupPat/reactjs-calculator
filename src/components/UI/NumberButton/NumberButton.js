import { useState } from "react";
import classes from "./NumberButton.module.css";

const NumberButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const buttonClickHandler = (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML);
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
