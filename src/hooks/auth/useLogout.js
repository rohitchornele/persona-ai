"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/src/services/auth/service";

export function useLogout() {
  const router = useRouter();

  const logout = async (redirectTo = "/") => {
    const { error } = await signOut();

    if (error) {
      console.error("Logout failed:", error);
      return { error };
    }

    router.push(redirectTo);
    router.refresh();

    return { error: null };
  };

  return { logout };
}