import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the User type
export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
};

// Define the context type
type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
};

// Create the context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create the provider component
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // In a real implementation, we would fetch the user data here
  // For now, we'll just simulate loading and then set a mock user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // This would be replaced with a real API call
        // For now, we'll just simulate a delay and set a mock user
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Mock user data - in a real app, this would come from an API
        const mockUser: User = {
          id: "user_1",
          name: "Demo User",
          email: "demo@example.com",
          avatarUrl: "https://github.com/shadcn.png",
        };
        
        setUser(mockUser);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

// Create a hook to use the user context
export function useUserContext() {
  const context = useContext(UserContext);
  
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  
  return context;
} 