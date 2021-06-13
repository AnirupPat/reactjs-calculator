import classes from './Calculator.module.css';
import Card from './UI/Card/Card';
import Input from './UI/Input/Input';

const Calculator = () => {
    return (
        <Card className={classes.calculator}>
            <Input />
        </Card>
    );
}

export default Calculator;