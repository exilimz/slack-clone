import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useParams } from "next/navigation";

// Define the Channel type
export type Channel = {
  id: string;
  name: string;
  description?: string;
  isPrivate: boolean;
  createdAt: Date;
  ownerId: string;
};

// Define the context type
type ChannelContextType = {
  currentChannel: Channel | null;
  setCurrentChannel: (channel: Channel | null) => void;
  channels: Channel[];
  setChannels: (channels: Channel[]) => void;
  isLoading: boolean;
};

// Create the context with default values
const ChannelContext = createContext<ChannelContextType | undefined>(undefined);

// Create the provider component
export function ChannelProvider({ children }: { children: ReactNode }) {
  const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  // In a real implementation, we would fetch the channels data here
  // For now, we'll just simulate loading and then set mock channels
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        // This would be replaced with a real API call
        // For now, we'll just simulate a delay and set mock channels
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Mock channels data - in a real app, this would come from an API
        const mockChannels: Channel[] = [
          {
            id: "channel_1",
            name: "general",
            description: "General discussion",
            isPrivate: false,
            createdAt: new Date(),
            ownerId: "user_1",
          },
          {
            id: "channel_2",
            name: "random",
            description: "Random stuff",
            isPrivate: false,
            createdAt: new Date(),
            ownerId: "user_1",
          },
          {
            id: "channel_3",
            name: "announcements",
            description: "Important announcements",
            isPrivate: false,
            createdAt: new Date(),
            ownerId: "user_1",
          },
        ];
        
        setChannels(mockChannels);
        
        // If we have a channelId in the URL, set the current channel
        if (params?.channelId) {
          const channelId = params.channelId as string;
          const channel = mockChannels.find((c) => c.id === channelId);
          if (channel) {
            setCurrentChannel(channel);
          }
        }
      } catch (error) {
        console.error("Failed to fetch channels:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChannels();
  }, [params]);

  return (
    <ChannelContext.Provider 
      value={{ 
        currentChannel, 
        setCurrentChannel, 
        channels, 
        setChannels, 
        isLoading 
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}

// Create a hook to use the channel context
export function useChannelContext() {
  const context = useContext(ChannelContext);
  
  if (context === undefined) {
    throw new Error("useChannelContext must be used within a ChannelProvider");
  }
  
  return context;
} 