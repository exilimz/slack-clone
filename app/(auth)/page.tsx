import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AuthPage() {
  // Mock user data - this would be replaced with real authentication in a production app
  const users = [
    { 
      id: "1", 
      name: "John Doe", 
      avatar: "/placeholder-user.jpg", 
      role: "Developer" 
    },
    { 
      id: "2", 
      name: "Jane Smith", 
      avatar: "/placeholder-user.jpg", 
      role: "Designer" 
    },
    { 
      id: "3", 
      name: "Bob Johnson", 
      avatar: "/placeholder-user.jpg", 
      role: "Product Manager" 
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Slack Clone</h1>
        <p className="mt-2 text-zinc-400">Select a user to continue to the workspace</p>
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
              <div className="flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-zinc-400">{user.role}</div>
              </div>
              <div className="text-xs text-zinc-500">
                User ID: {user.id}
              </div>
            </Button>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs text-zinc-500">
        In a real application, this would be replaced with proper authentication
      </p>
    </div>
  );
} 