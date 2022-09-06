import { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { LoadingMessage } from './component/common/message';

import './language/config';
import { LanguageSelector } from './component';

const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
);

root.render(
      <Suspense fallback={<LoadingMessage/>} >
            <Provider store={store}>
                  
                  <LanguageSelector>
                        <App/>
                  </LanguageSelector>                        

                  {/* for alert */}
                  <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                  />
            </Provider>
      </Suspense>
);