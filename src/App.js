import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/Profile/profile";
import Score from "./pages/Score/Score";
import Games from "./pages/Games/games";
import MultiplierPlayer1 from "./pages/Multiplier/player1";
import MultiplierPlayer2 from "./pages/Multiplier/player2";
import ChangePassword from "./pages/change_Password";
import React from 'react'
import { connect, useSelector } from 'react-redux'

// admin dashboard
import CreatePostAdmin from "./pages/admindashboard/CreatePostAdmin";
import EditPostAdmin from "./pages/admindashboard/EditPostAdmin";
import HomeAdmin from "./pages/admindashboard/HomeAdmin";
import PostDetailAdmin from "./pages/admindashboard/PostDetailAdmin";

// user dashboard
import DashboardRouter from "./pages/user_dashboard/dashboard_router";
// import Rangking from "./pages/user_dashboard/ranking";
// import UserProfile from "./pages/user_dashboard/user_profile";
// import GameHistory from "./pages/user_dashboard/game_history";
// import GameRoom from "./pages/user_dashboard/game_room";
// import HomeUser from "./pages/userdashboard/HomeUser";
// import PostDetailUser from "./pages/userdashboard/PostDetailUser";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/score" component={Score} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/multiplier/player1" component={MultiplierPlayer1} />
          <Route exact path="/multiplier/player2" component={MultiplierPlayer2} />
          <Route path="/changePassword" component={ChangePassword} />

          {/* admin */}
          <Route path="/admin" exact component={HomeAdmin}></Route>
          <Route path="/admin/add" component={CreatePostAdmin}></Route>
          <Route path="/admin/edit/:id" component={EditPostAdmin}></Route>
          <Route path="/admin/post/:id" component={PostDetailAdmin}></Route>

          {/* user */}
          <Route path="/dashboardPlayer" component={DashboardRouter}></Route>
          {/* <Route path="/dashboardPlayer/post/:id" component={PostDetailUser}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

// Class Component
class redux  extends React.Component {
  async componentDidMount() {
    console.log(this.props)
    this.props.ChangeLoginStatus()
    this.props.ChangeUserData({ name: ''})
  }

  componentDidUpdate() {
    console.log(this.props.StoreData.UserReducer)
  }

  render() {
    return('app')
  }
  
}

const mapStateToProps = (state) => {
  return {
    StoreData: state
  }
}

const mapdispatchToStore = (dispatch) => {
  return {
    ChangeLoginStatus: () => {
      dispatch({
        type: 'CHANGE_LOGIN_STATUS',
        value: true
      })
    },
    ChangeUserData: (NewValue) => {
      dispatch({
        type: 'CHANGE_USER_DATA',
        value: NewValue
      })
    },
    
  }
}
export default connect(mapStateToProps, mapdispatchToStore) (App);
