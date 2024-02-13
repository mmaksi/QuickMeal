import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import {
  auth,
  emailSignIn,
  emailSignup,
  signOutUser,
} from "./firebase.service";
import { User } from "firebase/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
  isLoading: boolean;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  onLogin: (email: string, password: string) => Promise<void>;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string
  ) => Promise<void>;
  onLogout: () => void;
}

export const AuthenticationContext = createContext({} as AuthContextType);

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    const response = await emailSignIn(email, password);
    if (typeof response !== "string") {
      setUser(response);
    } else {
      setError("Invalid credentials. Please, try again.");
    }
    setIsLoading(false);
  };

  const onRegister = async (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    setIsLoading(true);
    const response = await emailSignup(email, password, repeatedPassword);
    if (typeof response === "string") {
      if (response === "Passwords don't match. Please try again.") {
        setError(response);
      } else if (response.includes("auth/email-already-in-use")) {
        setError("Email already in use. Login instead.");
      } else {
        setError("Invalid email or password. Please, try again.");
      }
    } else {
      setUser(response);
    }
    setIsLoading(false);
  };

  const onLogout = () => {
    setUser(null);
    signOutUser();
  };

  const initialValue = {
    isAuthenticated: !!user,
    user,
    isLoading,
    error,
    setError,
    onLogin,
    onRegister,
    onLogout,
  };

  return (
    <AuthenticationContext.Provider value={initialValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
