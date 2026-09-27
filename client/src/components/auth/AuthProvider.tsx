
import { useMemo, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../hooks/useAuth";
import { useSessionId } from "../../hooks/useSessionId";
import type { AuthData } from "../../types/authTypes";

export const AuthProvider = () => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const navigate = useNavigate();
  useSessionId(setUser, setIsLoading)

  const value = useMemo<AuthData>(() => {
    const login = async (data: string) => {
      setUser(data);
      navigate("/home");
    };

    const logout = () => {
      setUser(null);
      navigate("/", { replace: true });
    };

    return { user, isLoading, login, logout };
  }, [user, isLoading, navigate]);
  return (
    <AuthContext.Provider value={value}>
      <Outlet/>
    </AuthContext.Provider>
  );
};