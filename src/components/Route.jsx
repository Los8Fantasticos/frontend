import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => {
  const redirection = btoa(rest.location.pathname + rest.location.search);

  return (
    <Route {...rest} render={(props) => (
      localStorage.getItem("user") ?
        <Layout><Component {...props} /></Layout> :
        <Redirect to={{pathname: "/Login", search: `from=${redirection}`, state: {from: props.location}}} />
    )} />
  );
};

export const AppRoute = ({component: Component, layout: Layout, ...rest}) => {
  return (
    <Route {...rest} render={(props) =>
      <Layout><Component {...props} /></Layout>
    }/>
  );
};