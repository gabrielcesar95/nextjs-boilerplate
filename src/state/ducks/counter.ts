import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
    increment: [],
    decrement: [],
    reset: [],
})

const COUNTER = 0

const increment = (state = COUNTER): number => {
    state++

    return state
}

const decrement = (state = COUNTER): number => {
    state--

    return state
}

const reset = (): number => {
    return COUNTER
}

export default createReducer(COUNTER, {
    [Types.INCREMENT as string]: increment,
    [Types.DECREMENT as string]: decrement,
    [Types.RESET as string]: reset
})