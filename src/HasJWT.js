import React from 'react';

import {Navigate} from "react-router";
import Cookies from "js-cookie";

export default function hasJWT({child}) {
let hasToken = Cookies.get('access_token')
    return  hasToken ?
        child :
        <Navigate Navigate to="/signin" replace/>

}


