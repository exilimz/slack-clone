import { redirect } from "next/navigation";

export default function MainPage() {
  // In a real application, we would redirect to the default channel
  // For now, we'll redirect to a placeholder channel
  redirect("/channel/general");
} 