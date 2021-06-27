import React, {useState, useEffect} from 'react';

import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from "./routes/Home";
import {ClientContextProvider} from "./context/ClientContext";
import Landing from "./components/Landing";
import Login from "./components/Login";
import GetSysInfo from "./components/Sysinfo";

import {toast} from "react-toastify";

toast.configure();

const App = () => {
    const checkAuthenticated = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/verify", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.token
                }
            });

            const parseRes = await res.json();

            parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        checkAuthenticated();
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = boolean => {
        setIsAuthenticated(boolean);
    };


    return (
        <ClientContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route
                            exact path="/" render={props =>
                            !isAuthenticated ? (
                                <Landing {...props} />
                            ) : (
                                <Redirect to="/"/>
                            )
                        }
                        />
                        <Route
                            exact
                            path="/login"
                            render={props =>
                                !isAuthenticated ? (
                                    <Login {...props} setAuth={setAuth}/>
                                ) : (
                                    <Redirect to="/home"/>
                                )
                            }
                        />
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/sysinfo" component={GetSysInfo}/>
                    </Switch>
                </Router>
            </div>
        </ClientContextProvider>
    )
}

export default App;
