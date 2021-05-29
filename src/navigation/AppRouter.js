import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import DinamicPage from "../pages/DinamicPage";
import Home from "../pages/Home";
import { paths } from "./paths";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {
            paths.map( route => (
              <Route 
                exact
                key={route.id}
                path={route.route} 
                component={ () => <DinamicPage {...route} />} 
              />
            ))
          }
          <Redirect to="/" />
        </Switch>
    </Router>
  );
}

export default AppRouter