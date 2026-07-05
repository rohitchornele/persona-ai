import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "@/src/services/auth/service";


export default function useLogin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function onSubmit(values) {
    await signIn(values, {
      onRequest: () => setLoading(true),

      onResponse: () => setLoading(false),

      onSuccess: () => {
        toast.success("Welcome back 👋");
        router.replace("/chat");
      },

      onError: (ctx) => {
        toast.error(ctx.error.message);
      },
    });
  }

  return {
    loading,
    onSubmit,
  };
}