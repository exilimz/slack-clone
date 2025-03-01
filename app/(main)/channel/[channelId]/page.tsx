import { Hash } from "lucide-react";

interface ChannelPageProps {
  params: {
    channelId: string;
  };
}

export default function ChannelPage({ params }: ChannelPageProps) {
  const { channelId } = params;
  
  return (
    <div className="flex h-full flex-col">
      {/* Channel header will be added in a future step */}
      <div className="border-b border-zinc-200 p-4 dark:border-zinc-700">
        <div className="flex items-center">
          <div className="mr-2 rounded-md bg-zinc-100 p-1 dark:bg-zinc-800">
            <Hash className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-semibold">#{channelId}</h1>
        </div>
      </div>
      
      {/* Message list will be added in a future step */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
            <Hash className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">Welcome to #{channelId}</h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            This is the start of the #{channelId} channel
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