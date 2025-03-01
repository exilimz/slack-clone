import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DirectMessagePageProps {
  params: {
    userId: string;
  };
}

export default function DirectMessagePage({ params }: DirectMessagePageProps) {
  const { userId } = params;
  
  // Mock user data - this would come from a database in a real app
  const users = [
    { id: "1", name: "John Doe", avatar: "/placeholder-user.jpg", status: "online" },
    { id: "2", name: "Jane Smith", avatar: "/placeholder-user.jpg", status: "offline" },
    { id: "3", name: "Bob Johnson", avatar: "/placeholder-user.jpg", status: "away" },
  ];

  const user = users.find((u) => u.id === userId) || {
    id: userId,
    name: "Unknown User",
    avatar: "",
    status: "offline"
  };

  return (
    <div className="flex h-full flex-col">
      {/* DM header will be added in a future step */}
      <div className="border-b border-zinc-200 p-4 dark:border-zinc-700">
        <div className="flex items-center">
          <Avatar className="mr-2 h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold">{user.name}</h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {user.status === "online" ? "Active now" : user.status === "away" ? "Away" : "Offline"}
            </p>
          </div>
        </div>
      </div>
      
      {/* Message list will be added in a future step */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Avatar className="mb-4 h-12 w-12">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold">Direct Message with {user.name}</h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            This is the start of your conversation with {user.name}
          </p>
        </div>
      </div>
      
      {/* Message input will be added in a future step */}
      <div className="border-t border-zinc-200 p-4 dark:border-zinc-700">
        <div className="rounded-md border border-zinc-300 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-800">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Message input will be added here
          </p>
        </div>
      </div>
    </div>
  );
} 