import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export interface ProtectedRouteProps {
  accessToken?: string;
  path: string;
  children: ReactNode;
}

export const ProtectedRoute = ({ accessToken, path, children }: ProtectedRouteProps) => {
  if (!accessToken) {
    return <Navigate to={path} replace />
  }

  return children;
}
