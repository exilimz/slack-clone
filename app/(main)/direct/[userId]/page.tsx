import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DirectMessagePage({
  params,
}: {
  params: { userId: string };
}) {
  // Mock user data - this would come from a database in a real app
  const users = [
    { id: "1", name: "John Doe", avatar: "/placeholder-user.jpg" },
    { id: "2", name: "Jane Smith", avatar: "/placeholder-user.jpg" },
    { id: "3", name: "Bob Johnson", avatar: "/placeholder-user.jpg" },
  ];

  const user = users.find((u) => u.id === params.userId) || {
    id: params.userId,
    name: "Unknown User",
    avatar: "",
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <Avatar className="mb-4 h-12 w-12">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Direct Message with {user.name}</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          This is the start of your conversation with {user.name}
        </p>
      </div>
    </div>
  );
} 