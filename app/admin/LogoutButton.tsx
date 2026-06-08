"use client";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();
  async function logout() {
    await createClient().auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }
  return (
    <button onClick={logout}
      className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-red-400">
      <LogOut className="h-3.5 w-3.5" /> Sair
    </button>
  );
}
