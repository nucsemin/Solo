import { StateSchema } from '1-app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from '5-entities/Counter/model/selectors/getCounterValue/getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state: StateSchema = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});
