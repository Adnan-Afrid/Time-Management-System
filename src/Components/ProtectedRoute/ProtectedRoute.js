import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  const userData = useSelector((state) => state.loginReducer);
  console.log("loggedIn status in ProtectedRoute", userData.loggedIn)
  return (
    <Route
      {...rest}
      render={props => {
        if (userData.loggedIn) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
