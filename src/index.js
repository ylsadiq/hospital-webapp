import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from "./i18n";
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { Suspense, lazy } from 'react';
import FullLoading from './Pages/Shared/FullScreenLoding/FullLoading';
const Componets = lazy(() => import('./App'));
 // Create a client
 const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<FullLoading />}>
            <App/>
      </Suspense>
    </I18nextProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
