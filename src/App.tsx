import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import cityApi from "api/cityApi";
import studentApi from "api/studentApi";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "features/auth/pages/LoginPage";
import { AdminLayout } from "components/Layout";
import PrivateRoute from "components/Common/PrivateRoute";
import NotFound from "components/Common/NotFound";


function App() {
  const [city, setCities] = useState({});
  useEffect(() => {
    cityApi.getAll().then(res => {
      //console.log(res);
      setCities(res.data);
    });
  }, []);

  console.log(city);
  // useEffect(() => {
  //   studentApi.getAll().then(res => console.log(res))
  // })
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminLayout />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
