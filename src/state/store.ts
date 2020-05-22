import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { WithSagaTaskStore } from '../interfaces';
import reducers from './ducks'
import sagas from './sagas'

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(): WithSagaTaskStore {
  const sagaMiddleware = createSagaMiddleware();
  const store: WithSagaTaskStore = createStore(
    reducers,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(sagas);

  return store;
}

export default configureStore;
