import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";

const Side_Menu_Proto = [
    {
        title: "My Profile",
        path: "/dashboard/userProfile",
        icon: <FaUserAlt />,
        // cName: "nav-text"
    },
    {
        title: "Game History",
        path: "/dashboard/gameHistory",
        icon: <BiNotepad />,
        // cName: "nav-text"
    },
    {
        title: "Game Room",
        path: "/dashboard/gameRoom",
        icon: <FaGamepad />,
        // cName: "nav-text"
    },
    {
        title: "Ranking",
        path: "/dashboard/ranking",
        icon: <FaCrown />,
        // cName: "nav-text"
    }
]

export default Side_Menu_Proto
