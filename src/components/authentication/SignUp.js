import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./style/authenticationForm.scss";
import PageWrapper from "../UI/PageWrapper";

import * as Yup from "yup";

const SignUp = () => {
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

    onSubmit: async (values) => {
      const vals = { ...values };
      //chiamata fetch alla root signup
      await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        mode: "cors", //nemmeno coì supero i controlli cors..
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
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
          if (data.status === "Username taken") {
            alert(
              "This username already exists, please choose another username"
            );
            console.log(data);
          }
          if (data.loggedIn === true) {
            alert("Your account has been created");
            console.log(data);
            navigate("/auth/login");
          }
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
            <h1>Create a new account</h1>
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
              Sign Up
            </button>
            <button
              type="button"
              className="hover-active-class"
              onClick={() => navigate("/")}
            >
              Back Home
            </button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default SignUp;
