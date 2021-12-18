import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase, { authService, firebaseInstance } from "../../fbase";
import "./LoginPage.css";

const LoginPage = () => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  const goToRegi = () => {
    navigate("/register");
  };

  const logInGoogle = async () => {
    let provider = new firebaseInstance.auth.GoogleAuthProvider();
    let data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div className="auth-wrapper">
      <img alt="loginPageImg" className="hoTalk" src="/images/hoTalk.png" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>This email field is required</p>}

        <label>Password</label>
        <input
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>This password field is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>Password must have at least 8 characters</p>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}

        <input type="submit" disabled={loading} />

        <div className="btnWrap">
          <button onClick={goToRegi} className="googleBtn">
            <Link className="btnBottom" to="/register">
              회원가입
            </Link>
          </button>
          <button onClick={logInGoogle} className="googleBtn btnBottom">
            google ID로 로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
