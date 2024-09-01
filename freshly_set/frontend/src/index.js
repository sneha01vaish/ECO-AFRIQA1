import React from 'react';
import ReactDOM from 'react-dom/client';
import "./tailwind.css";
import './index.css';
import App from './App';
import { PageContextProvider } from './components/context/PageContext';
import { BlogsContextProvider } from './components/context/BlogsContext';
// import reportWebVitals from './reportWebVitals';
// import './styles/tailwind.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageContextProvider>
      <BlogsContextProvider>
        <App />
      </BlogsContextProvider>
    </PageContextProvider>
  </React.StrictMode>
);
