import { countersActions, countersReducer } from '5-entities/Counter/model/slice/counterSlice';
import { CounterSchema } from '5-entities/Counter/model/types/counterSchema';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(countersReducer(state, countersActions.decrement())).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(countersReducer(state, countersActions.increment())).toEqual({ value: 11 });
    });

    test('empty', () => {
        const state: CounterSchema = undefined;
        expect(countersReducer(state, countersActions.increment())).toEqual({ value: 1 });
    });
});
