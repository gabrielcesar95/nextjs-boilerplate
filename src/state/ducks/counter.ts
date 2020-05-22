import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
    increment: [],
    decrement: [],
    reset: [],
})

const INITIAL_STATE = 0

const increment = (state = INITIAL_STATE) => {
    state ++

    return state
}

const decrement = (state = INITIAL_STATE) => {
    state --

    return state
}

const reset = (state = INITIAL_STATE) => {
    return INITIAL_STATE
}

export default createReducer(INITIAL_STATE, {
    [Types.INCREMENT as string]: increment,
    [Types.DECREMENT as string]: decrement,
    [Types.RESET as string]: reset
})