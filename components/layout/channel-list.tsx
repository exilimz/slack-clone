import Link from "next/link";
import { Hash } from "lucide-react";

// This is a placeholder component that will be updated with real data in a later step
export default function ChannelList() {
  // Mock data for channels
  const channels = [
    { id: "general", name: "general" },
    { id: "random", name: "random" },
    { id: "announcements", name: "announcements" },
  ];

  return (
    <div className="space-y-1">
      {channels.map((channel) => (
        <Link
          key={channel.id}
          href={`/channel/${channel.id}`}
          className="flex items-center rounded-md px-2 py-1.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
        >
          <Hash className="mr-2 h-4 w-4" />
          {channel.name}
        </Link>
      ))}
    </div>
  );
} 