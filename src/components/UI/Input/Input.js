import classes from "./Input.module.css";

const Input = (props) => {
  return <input value={props.value} className={classes.input} />;
};

export default Input;
