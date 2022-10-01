import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {I18nextProvider} from "react-i18next"
import i18next from "i18next"
import { Provider } from 'react-redux';
import store from './store';

import global_es from "./Lang/es/global.json"
import global_en from "./Lang/en/global.json"

i18next.init({

  interpolation: { escapeValue: false},
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
              <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <App />
    </Provider>
        </I18nextProvider>

  </React.StrictMode>
);
