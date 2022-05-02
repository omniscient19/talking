import React from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = (e) => {
    e.preventdefault();
    const emailError = document.querySelector("email, error");
    const passwordError = document.querySelector("password, error");
    axios({
      methode: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      widhtCredentials: true,
      data: {
        email: email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          emailError.innertHTML = res.data.errors.email;
          passwordError.innertHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail("e.target.value")}
        value={email}
      />
      <div className="email.error"></div>
      <br />
      <label htmlFor="password"></label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword("e.target.value")}
        value={email}
      />
      <div className="password.error"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};
export default SignInForm;
