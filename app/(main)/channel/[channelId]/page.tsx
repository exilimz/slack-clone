import { Hash } from "lucide-react";

export default function ChannelPage({
  params,
}: {
  params: { channelId: string };
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
          <Hash className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">Welcome to #{params.channelId}</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          This is the start of the #{params.channelId} channel
        </p>
      </div>
    </div>
  );
} 