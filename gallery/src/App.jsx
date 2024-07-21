import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getData, getUsers } from "./store/actions/actions";
import Loading from "./components/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";
import CarPage from "./components/carPage";

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.carData);

  useEffect(() => {
    dispatch(getData());
    dispatch(getUsers());
  }, [dispatch]);

  if (data === null) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/carPage">
          <CarPage />
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}
