"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/src/lib/auth-client";

export default function LaunchChatButton({
  className = "",
  children,
  onClickComplete,
}) {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  function handleClick() {
    if (isPending) return;

    if (!session) {
      onClickComplete?.();
      router.push("/signin");
      return;
    }

    onClickComplete?.();
    router.push("/chat");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      className={className}
    >
      {children ?? (session ? "Open Chat" : "Get Started")}
    </button>
  );
}