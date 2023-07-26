import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = ({ accessToken }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log("accessToken:", accessToken);
        if (accessToken) {
        // Fetch user data from Spotify API
        axios
            .get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            })
            .then((response) => {
            setUserData(response.data);
            })
            .catch((error) => {
            console.error("Error fetching user data:", error);
            });
        }
    }, [accessToken]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h2>Hello, {userData.display_name || userData.id}!</h2>
        {/* You can display other user data here */}
        </div>
    );
};

export default UserProfile;