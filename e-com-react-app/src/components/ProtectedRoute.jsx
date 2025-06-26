import { forwardRef, useImperativeHandle, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLoginDetails } from "./common/auth";

function ProtectedRoute(props, ref) {
  let [isLogin, setLogin] = useState(getLoginDetails());

  useImperativeHandle(ref, () => {
    return {
      loginStatus: isLogin,
      resetLogin() {
        setLogin(null);
      },
    };
  });

  return <>{isLogin ? <Outlet /> : <Navigate to="/" replace />}</>;
}

export default forwardRef(ProtectedRoute);
