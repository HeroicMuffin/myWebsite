import React from "react";
import Contact from "../Contact";
import Home from "../Home";
import Projects from "../Projects";

const routes = [
    {
        title:"Home",
        url:"/",
        component:Home
    },
    {
        title:"Projects",
        url:"/projects",
        component:Projects
    },
    {
        title:"Contact",
        url:"/contact",
        component:Contact
    },
];
export default routes