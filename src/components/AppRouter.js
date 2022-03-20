import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { PhoneContext } from "../contexts/PhoneContext";
import Dashboard from './Dashboard';
import { PhoneDetails } from './PhoneDetails';

export const AppRouter = () => {

    const [selectedPhone, setSelectedPhone] = useState();

    return (
        <Router>

            <PhoneContext.Provider value={{selectedPhone, setSelectedPhone}}>
                <div>
                    <Routes>
                        <Route exact path="/" element={ <Dashboard /> }></Route>
                        <Route exact path="/details" element={ <PhoneDetails /> }></Route>
                    </Routes>
                </div>
            </PhoneContext.Provider>
        </Router>
    );
}