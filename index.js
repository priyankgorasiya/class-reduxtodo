import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import App from './components/App';
// import rootReducer from './reducers';

// import './index.css';
// import ItemsList from './component/ItemsList';
// const store = createStore(rootReducer);

// ReactDOM.render(
//     <Provider store={ store }>
//         <App />
//         <hr/>
//         <ItemsList />
//     </Provider>, 
//     document.getElementById('root')
// );