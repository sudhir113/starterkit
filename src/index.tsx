import  { lazy ,Suspense} from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./components/App'));
const container = document.getElementById("root");
const store = configureStore();
const root = createRoot(container!);
root.render( <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,);


serviceWorker.register();


