import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/Callback.scss";

const Callback = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/");
        }, 3000);
    }, [history]);

    return (
        <div className="success-login">
            <h1>Successfully Logged In!</h1>
            <p>Redirecting back to the login page...</p>
        </div>
    );
};

export default Callback;
