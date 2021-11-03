import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Profile from "./components/Profile";
import LeftSideBar from "./components/LeftSideBar";
import AllExercises from "./components/AllExercises";
import AddNewActivity from "./components/AddNewActivity";
import EditActivity from "./components/EditActivity";
// import Main from "./components/Main";
function App() {
  return (
    <>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/dashboard">
            <Main />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/allExercises">
            <AllExercises />
          </Route>
          <Route path="/addNewActivity">
            <AddNewActivity />
          </Route>
          <Route path="/editActivity">
            <EditActivity />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
