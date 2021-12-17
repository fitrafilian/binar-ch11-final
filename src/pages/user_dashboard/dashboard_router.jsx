import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavSidebar from '../../components/dashboard/nav_sidebar';
import Home from '../home';

import GameHistory from './game_history';
import GameRoom from './game_room';
import Rangking from './ranking';
import UserProfile from './user_profile';

import "./dashboard_router.css"

const DashboardRouter = () => {
    return(
        <div id="dashboard">
            <NavSidebar />
            <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    <Route path="/dashboardPlayer/userProfile" component={UserProfile} />
                    <Route path="/dashboardPlayer/ranking" component={Rangking} />
                    <Route path="/dashboardPlayer/gameRoom" component={GameRoom} />
                    <Route path="/dashboardPlayer/gameHistory" component={GameHistory} />
                </Switch>
        </div>
    )
}

export default DashboardRouter
