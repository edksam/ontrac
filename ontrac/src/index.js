<<<<<<< HEAD
import React from 'react';
import Main from './components/main'
import ReactDOM from 'react-dom';
import './main.css'
<<<<<<< HEAD
import './index.css';
=======



>>>>>>> zubedauk-main
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PDTracker from './components/PDtracker';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StudentProfile from "./components/StudentProfile"
import {InputForm} from "./components/InputForm";
import ViewProfile from "./components/ViewProfile"
import "bootstrap/dist/css/bootstrap.min.css";
// import main from "./components/main.jsx"
 import Container from "./components/main.jsx";

>>>>>>> e3b5198dc88c463c9eb89e1068320966cfa8d5ae

ReactDOM.render(

  <React.StrictMode>
<<<<<<< HEAD
    <Main />
    {/* <PDTracker/> */}
  </React.StrictMode>,
  document.getElementById('root')
=======
    {/* <PDtracker /> */}
     <Container /> 

         {/* <StudentProfile />
    <InputForm />
    <ViewProfile /> */}
  </React.StrictMode>,
  document.getElementById("root")
>>>>>>> e3b5198dc88c463c9eb89e1068320966cfa8d5ae
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
