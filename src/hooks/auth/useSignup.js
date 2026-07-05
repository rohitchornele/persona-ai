import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signUp } from "@/src/services/auth/service.js";


export default function useSignup() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function onSubmit(values) {
    await signUp(values, {
      onRequest: () => setLoading(true),

      onResponse: () => setLoading(false),

      onSuccess: () => {
        toast.success("Account created!");
        router.push("/chat");
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