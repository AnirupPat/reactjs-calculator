import classes from './NumberButton.module.css';

const NumberButton = (props) => {
    const numberClass = `${classes.button} ${props.className}`
    return (
        <button className={numberClass}>{props.number}</button>
    );
}

export default NumberButton;