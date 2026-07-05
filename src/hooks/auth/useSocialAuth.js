import { signInGithub, signInGoogle } from "@/src/services/auth/service";

export default function useSocialAuth() {
  return {
    signInGoogle,
    signInGithub,
  };
}