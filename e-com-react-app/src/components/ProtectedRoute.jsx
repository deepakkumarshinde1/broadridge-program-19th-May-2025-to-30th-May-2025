import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLoginDetails } from "./common/auth";

function ProtectedRoute() {
  let [isLogin] = useState(getLoginDetails());
  return <>{isLogin ? <Outlet /> : <Navigate to="/" replace />}</>;
}

export default ProtectedRoute;
