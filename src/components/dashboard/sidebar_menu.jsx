import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";

const SidebarMenu = [
    {
        title: "My Profile",
        path: "/dashboardPlayer/userProfile",
        icon: <FaUserAlt />,
        // cName: "nav-text"
    },
    {
        title: "Game History",
        path: "/dashboardPlayer/gameHistory",
        icon: <BiNotepad />,
        // cName: "nav-text"
    },
    // {
    //     title: "Game Room",
    //     path: "/dashboardPlayer/gameRoom",
    //     icon: <FaGamepad />,
    //     // cName: "nav-text"
    // },
    // {
    //     title: "Ranking",
    //     path: "/dashboardPlayer/ranking",
    //     icon: <FaCrown />,
    //     // cName: "nav-text"
    // }
]

export default SidebarMenu
