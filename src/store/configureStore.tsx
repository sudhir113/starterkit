import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
// import rootSagas from 'sagas/rootSaga';

function * authFailureSaga(){
      console.log('auth failure');
}


// Create sagas middleware
const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers =
//   (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       trace: true,
//       traceLimit: 100,
//     })) ||
//   compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  // Running sagas
  sagaMiddleware.run(authFailureSaga);
  return store;
}