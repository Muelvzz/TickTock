import { createContext, useContext } from "react";
import type { AuthData } from "../types/authTypes";

export const AuthContext = createContext<AuthData | null>(null);
export const useAuth = () => { return useContext(AuthContext) }