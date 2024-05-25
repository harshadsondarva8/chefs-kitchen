import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HashLoader from "react-spinners/HashLoader";

import { Contact, Mein, Error, Home, Menu, Ourstory } from "./pages";
import Styles from "./styles";

const App = () => {
  const [loading, setloading] = useState(false);

  // *** screen-loader
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <Styles>
      {loading ? (
        <div className="preloader">
          <HashLoader size={50} color="#b09165" loading={loading} />
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Mein />}>
                <Route index element={<Home />} />
                <Route path="menu/CompanyProfile" element={<Menu />} />
                <Route path="ourstory" element={<Ourstory />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </Styles>
  );
};
export default App;
