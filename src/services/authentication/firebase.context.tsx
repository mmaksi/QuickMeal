import { ReactNode, createContext, useEffect, useState } from "react";
import { emailSignIn } from "./firebase.service";
import { User } from "firebase/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
  isLoading: boolean;
  error: null;
  onLogin: (email: string, password: string) => Promise<void>;
}

export const AuthenticationContext = createContext({} as AuthContextType);

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await emailSignIn(email, password);
      setUser(user);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const initialValue = {
    isAuthenticated: !!user,
    user,
    isLoading,
    error,
    onLogin,
  };

  return (
    <AuthenticationContext.Provider value={initialValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
