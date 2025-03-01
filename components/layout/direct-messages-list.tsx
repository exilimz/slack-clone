import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// This is a placeholder component that will be updated with real data in a later step
export default function DirectMessagesList() {
  // Mock data for direct messages
  const directMessages = [
    { id: "1", name: "John Doe", avatar: "/placeholder-user.jpg", status: "online" },
    { id: "2", name: "Jane Smith", avatar: "/placeholder-user.jpg", status: "offline" },
    { id: "3", name: "Bob Johnson", avatar: "/placeholder-user.jpg", status: "online" },
  ];

  return (
    <div className="space-y-1">
      {directMessages.map((user) => (
        <Link
          key={user.id}
          href={`/direct/${user.id}`}
          className="flex items-center rounded-md px-2 py-1.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
        >
          <div className="relative mr-2">
            <Avatar className="h-5 w-5">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <span
              className={`absolute bottom-0 right-0 h-2 w-2 rounded-full border border-zinc-950 ${
                user.status === "online" ? "bg-green-500" : "bg-zinc-500"
              }`}
            />
          </div>
          {user.name}
        </Link>
      ))}
    </div>
  );
} 