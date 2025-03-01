import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import ChannelList from "./channel-list";
import DirectMessagesList from "./direct-messages-list";

export default function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-40 flex h-full w-60 flex-col bg-zinc-950 text-white">
      <div className="flex h-14 items-center px-4 font-semibold">
        <Link href="/" className="text-xl">Slack Clone</Link>
      </div>
      <Separator className="bg-zinc-800" />
      <div className="flex-1 overflow-y-auto p-3">
        <div className="mb-2">
          <div className="flex items-center justify-between px-2 py-2">
            <h2 className="text-sm font-semibold text-zinc-400">Channels</h2>
            <Button variant="ghost" size="icon" className="h-5 w-5 text-zinc-400 hover:text-white">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
          <ChannelList />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between px-2 py-2">
            <h2 className="text-sm font-semibold text-zinc-400">Direct Messages</h2>
            <Button variant="ghost" size="icon" className="h-5 w-5 text-zinc-400 hover:text-white">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
          <DirectMessagesList />
        </div>
      </div>
    </div>
  );
} 