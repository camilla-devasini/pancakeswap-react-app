import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "./../../context/AccountContext";

import * as Yup from "yup";

const SignUp = () => {
  const navigate = useNavigate();
  // const { setUser } = useContext(AccountContext);
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
      alert(JSON.stringify(values, null, 2));
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
          // setUser({ ...data }); //salvo il login come state, questo valore (inizialmente loggedin: null) è condiviso tramite useContext
          navigate("/welcome"); // se l'utente è loggato correttamente torna alla home
          console.log(data);
        });
    },
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "20%" }}
      onSubmit={formik.handleSubmit}
    >
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

      <button type="submit">Sign Up</button>
      <button onClick={() => navigate("/")}>Back Home</button>
    </form>
  );
};

export default SignUp;
