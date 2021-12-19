import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import firebase from "./fbase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/user_action";

const AppRouter = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);

      if (user) {
        navigate("/chat");
        dispatch(setUser(user));
      } else {
        navigate("/");
      }
    });
  }, []);

  // if (isLoading) {
  //   return <div>...loading</div>;
  // } else {
  return (
    <Routes>
      <Route path="/chat/*" element={<ChatPage />}></Route>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/register/*" element={<RegisterPage />}></Route>
    </Routes>
  );
  // }
};

export default AppRouter;
