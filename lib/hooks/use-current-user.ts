import { useUserContext, User } from "../context/user-context";

/**
 * A hook to access the current user from the UserContext
 * 
 * @returns An object containing the current user, loading state, and a function to set the user
 */
export function useCurrentUser(): {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
} {
  const { user, isLoading, setUser } = useUserContext();
  
  return {
    user,
    isLoading,
    setUser,
  };
}

/**
 * A hook to check if the user is authenticated
 * 
 * @returns A boolean indicating if the user is authenticated
 */
export function useIsAuthenticated(): boolean {
  const { user, isLoading } = useUserContext();
  
  // If still loading, consider not authenticated
  if (isLoading) {
    return false;
  }
  
  return !!user;
} 