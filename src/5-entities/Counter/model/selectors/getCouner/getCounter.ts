import { StateSchema } from '1-app/providers/StoreProvider/config/StateSchema';

// весь стэйт
export const getCounter = (state: StateSchema) => state.counter;
