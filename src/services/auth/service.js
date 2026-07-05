import { authClient } from "@/src/lib/auth-client";

export async function signIn(values, fetchOptions) {
  return authClient.signIn.email({
    ...values,
    fetchOptions,
  });
}

export async function signUp(values, fetchOptions) {
  return authClient.signUp.email({
    ...values,
    fetchOptions,
  });
}

export async function signInGoogle() {
  return authClient.signIn.social({
    provider: "google",
    callbackURL: "/chat",
  });
}

export async function signInGithub() {
  return authClient.signIn.social({
    provider: "github",
    callbackURL: "/chat",
  });
}

export async function signOut() {
  return authClient.signOut();
}