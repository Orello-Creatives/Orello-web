import { Navigate } from "react-router";
import { isLoggedIn } from "../auth";

export default function RequireAuth({ children }) {
  if (!isLoggedIn()) return <Navigate to="/admin/login" replace />;
  return children;
}
