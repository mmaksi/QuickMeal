import { ReactNode, createContext, useEffect, useState } from "react";
import { emailSignIn } from "./firebase.service";
import { User } from "firebase/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
  isLoading: boolean;
  error: string;
  onLogin: (email: string, password: string) => Promise<void>;
}

export const AuthenticationContext = createContext({} as AuthContextType);

interface Props {
  children: ReactNode;
}

const errors = [
  "auth/invalid-email",
  "auth/missing-password",
  "auth/missing-password",
  "auth/invalid-credential",
];

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    const response = await emailSignIn(email, password);
    if (typeof response !== "string") {
      setUser(response);
    } else {
      for (let error of errors) {
        if (response.includes(error)) {
          setError("Invalid credentials. Please, try again.");
        }
      }
    }
    setIsLoading(false);
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
