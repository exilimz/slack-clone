import { redirect } from "next/navigation";

export default function MainPage() {
  // Redirect to the default channel in the workspace
  // In a real application, this could be determined by user preferences or most active channel
  redirect("/channel/general");
} 