import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./style/authenticationForm.scss";
import PageWrapper from "../UI/PageWrapper";

import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username required")
        .min(6, "Username too short")
        .max(28, "Username too long!"),
      password: Yup.string()
        .required("Password required")
        .min(6, "Password too short")
        .max(28, "Password too long!"),
    }),

    onSubmit: async (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      const vals = { ...values };
      //chiamata fetch alla root signup
      await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        mode: "cors", //nemmeno coì supero i controlli cors..
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        body: JSON.stringify(vals),
      })
        // GESTISCO GLI ERRORI OPPURE LE RISPOSTE CHE NON ARRIVANO, NON SONO OK O NON VANNO BENE (>= 400)
        .catch((err) => {
          console.log(err);
          return;
        })
        .then((res) => {
          if (!res || !res.ok || res.status >= 400) {
            return;
          }
          //SE TUTTO E' OK:
          return res.json();
        })
        .then((data) => {
          if (!data) return;
          if (!data.loggedIn) {
            alert("Wrong username or password, please try again");
            actions.resetForm();
          }

          localStorage.setItem("user", JSON.stringify(data.username));
          console.log(
            "user logged: ",
            JSON.parse(localStorage.getItem("user"))
          );
          navigate("/Welcome"); // se l'utente è loggato correttamente
        });
    },
  });

  return (
    <PageWrapper>
      <div className="shape shape-one"></div>
      <div className="shape shape-two"></div>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <label className="form-title">
            <h1>Log in to your account</h1>
          </label>
          <div className="label-wrapper">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>

          <div className="label-wrapper">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="form-btn-wrapper">
            <button className="hover-active-class" type="submit">
              Login
            </button>
            <button
              type="button"
              className="hover-active-class"
              onClick={() => navigate("/auth/signup")}
            >
              Not registered yet? <br></br>Create a new Account
            </button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Login;
