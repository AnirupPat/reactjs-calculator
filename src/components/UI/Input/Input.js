import classes from "./Input.module.css";

const Input = (props) => {
  return <input onChange={props.onChange} type={props.type} className={classes.input} />;
};

export default Input;
