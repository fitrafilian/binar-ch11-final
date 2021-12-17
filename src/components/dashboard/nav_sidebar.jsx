import React from 'react'
import { Link } from 'react-router-dom'

import SidebarMenu from './sidebar_menu'
// import Side_Menu_Proto from './side_menu_proto'

import "./sidebar.css"

const NavSidebar = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-white px-5">
                {/* <span class="navbar-brand mb-0 h1">Navbar</span> */}
                 <Link to="/" id="homepage-link" className="nav-link link">
                    <i className="text-dark fas fa-angle-left fa-lg" />
                    <h4>Homepage</h4>
                </Link>
                <h4 className="text-dark text-uppercase">Dashboard</h4>
            </nav> 

            <div className="sidebar">
            {
                SidebarMenu.map((val, key) => {
                    return (
                            <Link to={val.path} className="sidebar-menu link" key={key}>
                                {/* <span className="fas fa-user" /> */}
                                {val.icon}
                                <span>{val.title}</span>
                            </Link>
                    )
                })
            }
            </div>

            {/* <div className="sidebar">
                <div className="sidebar-menu">
                    <span className="fas fa-user" />
                    <p>My Profile</p>
                </div>
                <div className="sidebar-menu">
                    <span className="fas fa-crown" />
                    <p>Top Ranking</p>
                </div>
                <div className="sidebar-menu">
                    <span className="fas fa-user" />
                    <p>Game History</p>
                </div>
                <div className="sidebar-menu">
                    <span className="fas fa-user" />
                    <p>Game Room</p>
                </div>
            </div> */}
        </header>
    )
}

export default NavSidebar
