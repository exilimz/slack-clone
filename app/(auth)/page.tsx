import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AuthPage() {
  // Mock user data - this would come from a database in a real app
  const users = [
    { id: "1", name: "John Doe", avatar: "/placeholder-user.jpg" },
    { id: "2", name: "Jane Smith", avatar: "/placeholder-user.jpg" },
    { id: "3", name: "Bob Johnson", avatar: "/placeholder-user.jpg" },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Slack Clone</h1>
        <p className="mt-2 text-zinc-400">Select a user to continue</p>
      </div>
      <div className="w-full max-w-md space-y-4 rounded-lg bg-zinc-900 p-6">
        {users.map((user) => (
          <Link key={user.id} href="/channel/general" className="block w-full">
            <Button
              variant="outline"
              className="flex w-full items-center justify-start gap-3 border-zinc-800 bg-zinc-900 px-4 py-6 text-left hover:bg-zinc-800"
            >
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-zinc-400">User ID: {user.id}</div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
} 