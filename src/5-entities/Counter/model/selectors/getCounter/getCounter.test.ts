import { StateSchema } from '1-app/providers/StoreProvider/config/StateSchema';
import { getCounter } from '5-entities/Counter/model/selectors/getCounter/getCounter';

describe('getCounter', () => {
    test('should return counter', () => {
        const state: StateSchema = {
            counter: { value: 10 },
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
