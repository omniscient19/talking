import React from "react";
/*import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";
*/
const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <log signin={false} signup={true} />
        <div className="img-container">
          <img src="./img/log.svg" alt="img-log" />
        </div>
      </div>
    </div>
  );
};
export default Profil;
