import React, { useState } from "react";
// import ReactModal from 'react-modal';
import arrow_right from "../../static/media/arrow.svg";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import UserProfile from "../../js/components/UserProfile";


const AUTH_URL = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "e1fbd36d01ee46249c7043c1aa6731c0";
const REDIRECT_URI = "http://localhost:3000/callback";
const SCOPES = ["user-read-private", "user-read-email"];

const Login = () => {
    const handleLogin = () => {
        const queryParams = new URLSearchParams({
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            scope: SCOPES.join(" "),
            response_type: "code",
        });

        const loginUrl = `${AUTH_URL}?${queryParams}`;
        window.location.replace(loginUrl);
    };

    // Check if the URL contains an authorization code after Spotify login
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
        axios
            .post("/api/login", { code })
            .then((response) => {
                console.log(response.data);
        })
        .catch((error) => {
            console.error("Error during API call:", error);
        });
        return <Redirect to="/callback" />;
    }

    return (
        <div className="login-button" onClick={handleLogin}>
            <p>Login with Spotify</p>
            <img src={arrow_right} alt="" className="arrow-right" />
        </div>
        
    );
};

export default Login;

// function LoginButton() {
    // const [isOpen, setIsOpen] = useState(false);
    // return (
    //     <div>
    //         <div className="login-button" onClick={() => setIsOpen(true)}>
    //             <p>Sign In to Spotify</p>
    //             <img src={arrow_right} alt="" className="arrow-right" />
    //         </div>
    //         <div>
    //             <ReactModal className="modal-size" 
    //                 isOpen={isOpen}
    //                 contentLabel="Example Modal"
    //                 onRequestClose={() => setIsOpen(false)}
    //             >
    //                 <div className="modal">
    //                     <form>
    //                         <label>Enter your name:
    //                             <input type="text" />
    //                         </label>
    //                     </form>
    //                     <form>
    //                         <label>Enter your name:
    //                             <input type="text" />
    //                         </label>
    //                     </form>
    //                 </div>
    //             </ReactModal>
    //         </div>
    //     </div>
    // );
// }
// 
// export default LoginButton;