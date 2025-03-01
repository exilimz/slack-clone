import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useParams } from "next/navigation";
import { User } from "./user-context";

// Define the DirectMessage type
export type DirectMessageUser = {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage?: string;
  lastMessageTime?: Date;
  unreadCount?: number;
};

// Define the context type
type DirectMessageContextType = {
  currentDirectMessageUser: DirectMessageUser | null;
  setCurrentDirectMessageUser: (user: DirectMessageUser | null) => void;
  directMessageUsers: DirectMessageUser[];
  setDirectMessageUsers: (users: DirectMessageUser[]) => void;
  isLoading: boolean;
};

// Create the context with default values
const DirectMessageContext = createContext<DirectMessageContextType | undefined>(undefined);

// Create the provider component
export function DirectMessageProvider({ children }: { children: ReactNode }) {
  const [currentDirectMessageUser, setCurrentDirectMessageUser] = useState<DirectMessageUser | null>(null);
  const [directMessageUsers, setDirectMessageUsers] = useState<DirectMessageUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  // In a real implementation, we would fetch the direct message users data here
  // For now, we'll just simulate loading and then set mock users
  useEffect(() => {
    const fetchDirectMessageUsers = async () => {
      try {
        // This would be replaced with a real API call
        // For now, we'll just simulate a delay and set mock users
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Mock direct message users data - in a real app, this would come from an API
        const mockDirectMessageUsers: DirectMessageUser[] = [
          {
            id: "user_2",
            name: "Jane Smith",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
            lastMessage: "Hey, how's it going?",
            lastMessageTime: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
            unreadCount: 2,
          },
          {
            id: "user_3",
            name: "John Doe",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
            lastMessage: "Can you check the latest PR?",
            lastMessageTime: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
            unreadCount: 0,
          },
          {
            id: "user_4",
            name: "Alice Johnson",
            avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
            lastMessage: "Thanks for your help!",
            lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
            unreadCount: 0,
          },
        ];
        
        setDirectMessageUsers(mockDirectMessageUsers);
        
        // If we have a userId in the URL, set the current direct message user
        if (params?.userId) {
          const userId = params.userId as string;
          const user = mockDirectMessageUsers.find((u) => u.id === userId);
          if (user) {
            setCurrentDirectMessageUser(user);
          }
        }
      } catch (error) {
        console.error("Failed to fetch direct message users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDirectMessageUsers();
  }, [params]);

  return (
    <DirectMessageContext.Provider 
      value={{ 
        currentDirectMessageUser, 
        setCurrentDirectMessageUser, 
        directMessageUsers, 
        setDirectMessageUsers, 
        isLoading 
      }}
    >
      {children}
    </DirectMessageContext.Provider>
  );
}

// Create a hook to use the direct message context
export function useDirectMessageContext() {
  const context = useContext(DirectMessageContext);
  
  if (context === undefined) {
    throw new Error("useDirectMessageContext must be used within a DirectMessageProvider");
  }
  
  return context;
} 