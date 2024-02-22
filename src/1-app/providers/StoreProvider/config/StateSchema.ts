import { LoginSchema } from '4-features/AuthByUserName';
import { CounterSchema } from '5-entities/Counter';
import { UserSchema } from '5-entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user?: UserSchema;
    login?: LoginSchema;
}
