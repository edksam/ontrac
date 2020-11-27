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


ReactDOM.render(
  <React.StrictMode>
    {/* <PDtracker /> */}
     <Container /> 

         {/* <StudentProfile />
    <InputForm />
    <ViewProfile /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
