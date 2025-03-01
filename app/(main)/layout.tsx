import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  // In a future step, we'll wrap this with context providers:
  // - UserContext: To provide the current user information
  // - ChannelContext: To provide channel-related state
  // - DirectMessageContext: To provide direct message state
  
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-60 flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
} 