import {Route} from "react-router-dom";
import React from "react";
import routes from "./router.config"

const AppRoutes = () => {
    const currentRoutes = routes.map((route, index) => {
        return <Route {...route} key={index}/>;
    });
    return <>{currentRoutes}</>;
};

export default AppRoutes;