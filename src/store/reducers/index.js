/**
 * корневой редьюсер
 * хранение и обновление стейта
*/

import { combineReducers } from 'redux';
import { inputReduser } from './input';

export const rootReducer = combineReducers({
    input: inputReduser,
});
