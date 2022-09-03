import { Outlet, Navigate } from "react-router-dom";

const PrivateRouting = ({ auth}) => {
  return auth ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRouting;
