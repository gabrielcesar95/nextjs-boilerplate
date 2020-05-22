import {all} from 'redux-saga/effects'

import counterSagas from './counter'

function * sagas(){
    return yield all([counterSagas])
}

export default sagas