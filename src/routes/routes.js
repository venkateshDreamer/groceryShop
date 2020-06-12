import React, { lazy,Suspense, } from "react";
import { Switch, Route,Redirect  } from "react-router-dom";
import Layout from "components/Layout";
import Auth from 'config/auth';

const Home = lazy(() => import("pages/Dashboard"));
const Brand = lazy(() => import("pages/Brand"));
const Category = lazy(() => import("pages/Category"))
const Products = lazy(() => import("pages/Product"))
const Options = lazy(() => import("pages/Option"))
const User = lazy(() => import("pages/User"))
// Authentication Routes 
const Login = lazy(() => import("pages/Auth/Login"))
console.log( Auth.getAuth())
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

const Routes = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Layout>
            <PrivateRoute path="/dashboard" exact component={Home} />
            <PrivateRoute path="/master/brand" exact component={Brand} />
            <PrivateRoute path="/master/category" exact component={Category} />
            <PrivateRoute path="/master/product" exact component={Products} />
            <PrivateRoute path="/master/options" exact component={Options} />
            <PrivateRoute path="/master/user" exact component={User} />
          </Layout>
          <Route path="*" render={() => (<Redirect to="/login" />)}/>
        </Switch>
      </Suspense>

    </>
  );
};
export default Routes;

//<Route path="/" exact component={Login} />