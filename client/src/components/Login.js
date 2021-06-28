//This file is for the login page

//imports
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const { username, password } = inputs;

    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    //function triggering when submit button is hit
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, password };
            const response = await fetch(
                "http://localhost:5000/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json();

            if (parseRes.access_token) {
                localStorage.setItem("token", parseRes.access_token);
                setAuth(true);
                toast.success("Logged in Successfully");
            } else {
                setAuth(false);
                toast.error(parseRes.msg);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="mt-5 text-center">Login</h1>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <label htmlFor="pwd">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <button className="btn btn-success btn-block">Submit</button>
            </form>
        </Fragment>
    );
};

export default Login;
