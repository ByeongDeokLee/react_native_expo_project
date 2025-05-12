import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: string;
};

type UserContextType = {
  user: User | null;
  login: (id: string) => void;
  logout: () => void;
  loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const saveId = await AsyncStorage.getItem("userId");
      if (saveId) {
        setUser({ id: saveId });
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (id: string) => {
    setUser({ id });
    await AsyncStorage.setItem("userId", id);
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("userId");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
