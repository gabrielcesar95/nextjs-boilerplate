import {takeLatest, all, put} from 'redux-saga/effects'

import {Types, Creators} from '../ducks/counter'

export function * increment(){
    yield console.log('incrementando')
}

export function * decrement(){
    yield console.log('decrementando')
}

export default all([
    takeLatest(Types.INCREMENT as string, increment),
    takeLatest(Types.DECREMENT as string, decrement)
])