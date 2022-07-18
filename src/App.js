import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {PrivateRoute, AppRoute} from "./components/Route";
import {LayoutFull, LayoutLess} from "./components/Layout";
import * as Pages from "./pages";

export function App () {
  // let user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <Switch>
        {/* Rutas publicas del sitio */}
        <AppRoute path="/LoginForm" component={Pages.LoginForm} layout={LayoutLess}/>
        <AppRoute path="/Usuarios" component={Pages.Usuarios} layout={LayoutFull}/>
        <AppRoute path="/Privilegios" component={Pages.Privilegios} layout={LayoutFull} />
        <AppRoute path="/Inicio" component={Pages.Home} layout={LayoutFull} />
        <AppRoute path="/SignUpForm" component={Pages.SignUpForm} layout={LayoutLess} />
        {/* Rutas privadas del sitio */}
        {/* <PrivateRoute exact path="/Dashboard" component={Pages.Dashboard} layout={LayoutFull} />
        <PrivateRoute path="/Usuarios" component={Pages.Usuarios} layout={LayoutFull}/>
        <PrivateRoute exact path="/Privilegios" component={Pages.Privilegios} layout={LayoutFull} />
        <PrivateRoute exact path="/Inicio" component={Pages.Home} layout={LayoutFull} /> */}
        <Redirect from="/" to="/LoginForm" />
      </Switch>
    </Router>
  );
};