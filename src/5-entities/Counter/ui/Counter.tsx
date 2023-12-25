import { Button } from '6-shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { countersActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const increment = () => {
        dispatch(countersActions.increment());
    };

    const decrement = () => {
        dispatch(countersActions.decrement());
    };

    return (
        <div>
            <h1>{value}</h1>
            <Button
                onClick={increment}
            >
                increment
            </Button>
            <Button
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
