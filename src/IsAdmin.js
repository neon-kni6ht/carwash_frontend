import React from 'react';

import {Navigate} from "react-router";
import Cookies from "js-cookie";

export default function IsAdmin({child}) {
    let token = Cookies.get('access_token');
    if (token) {
        let roles = JSON.parse(token).userRoles;
        let isAdmin = false;
        for (let role of roles) {
            if (role.authority == "ADMIN") {
                isAdmin = true
                break;
            }
        }
        return isAdmin ?
            child :
            <Navigate Navigate to="/forbidden" replace/>
    }
    else
        return <Navigate Navigate to="/signin" replace/>
}


