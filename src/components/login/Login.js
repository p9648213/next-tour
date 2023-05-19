"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "@/store";
import Link from "next/link";
import Alert from "@/components/shared/Alert";
import LoginForm from "./LoginForm";

function Login({ isLogin }) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);

  const alert = useSelector((state) => state.alerts);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (loginSuccess) {
      const navigate = setTimeout(() => {
        router.replace("/");
      }, 2000);

      return () => {
        clearTimeout(navigate);
      };
    }
  }, [loginSuccess, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_INTERNAL}/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );

    const responseData = await response.json();

    if (responseData.status === "fail") {
      dispatch(
        showAlert({
          type: "error",
          message: responseData.message,
        })
      );
    } else {
      dispatch(
        showAlert({
          type: "success",
          message: "Logged in successfully",
        })
      );
      setLoginSuccess(true);
      router.refresh();
    }
  };

  const handleInputChange = (e) => {
    if (e.target.id === "email") {
      setFormValues((prev) => {
        const newEmail = { ...prev, email: e.target.value };
        return newEmail;
      });
    }
    if (e.target.id === "password") {
      setFormValues((prev) => {
        const newPassword = { ...prev, password: e.target.value };
        return newPassword;
      });
    }
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} message={alert.message} />}
      {isLogin && loginSuccess === false ? (
        <div>
          <h1>You are logged in</h1>
          <Link href="/" replace={true}>
            <h1>Go to home</h1>
          </Link>
        </div>
      ) : loginSuccess ? (
        <h1>You will be redirect to home page in 2 second</h1>
      ) : (
        <LoginForm
          formValues={formValues}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default Login;
