import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./reset.component.styles.scss";
import { auth } from "../utils/Firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

import { sendPasswordResetEmail } from "firebase/auth";
const ResetFormEmailPassword = () => {
  const [email, setMail] = useState();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/reset");
    console.log("user", user);
  }, [loading, navigate, user]);

  return (
    <div className="forgot-password">
      <div className="forgot-container">
        <input
          type="text"
          className="reset-input"
          value={email}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Vui lòng nhập địa chỉ email của bạn?"
        />
        <button
          className="reset_button_container"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Khôi phục mật khẩu
        </button>
        <div className="link_resgister_account">
          Bạn đã có tài khoản? <Link to="/sign-up">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetFormEmailPassword;
