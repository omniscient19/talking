import React from "react";
import SignUpFormUp from "./SignUpForm";

const Log = (props) => {
  const [SignUpModal, setSignUpModal] = useState(props.signup);
  const [SignInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignInModal(false);
      setSignUpModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="from-container">
        <ul>
          <li
            onclick={handleModals}
            id="register"
            className={SignUpModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onclick={handleModals}
            id="login"
            className={SignUInModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {SignUpModal && <SignUpFormUp />}
        {SignInModal && <SignInFormUp />}
      </div>
    </div>
  );
};
export default log;
