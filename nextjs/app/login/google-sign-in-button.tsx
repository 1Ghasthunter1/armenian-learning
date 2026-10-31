"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/src/lib/auth-client";

function errorMessage(code: string | null) {
  if (!code) return null;
  return code === "signup_disabled"
    ? "This Google account doesn't have access."
    : "Sign-in failed. Please try again.";
}

export function GoogleSignInButton() {
  const redirectError = useSearchParams().get("error");
  const [requestFailed, setRequestFailed] = useState(false);
  const [pending, setPending] = useState(false);

  async function signIn() {
    setPending(true);
    setRequestFailed(false);
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
      errorCallbackURL: "/login",
    });
    // On success the browser is already navigating to Google.
    if (error) {
      setRequestFailed(true);
      setPending(false);
    }
  }

  const message = requestFailed
    ? errorMessage("request_failed")
    : errorMessage(redirectError);

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <button
        type="button"
        onClick={signIn}
        disabled={pending}
        className="flex w-full cursor-pointer items-center justify-center gap-3 border-2 border-ink bg-white px-6 py-3 font-bold transition-colors hover:bg-paper-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-wait disabled:opacity-60"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0">
          <path
            fill="#4285F4"
            d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81Z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.96-1.07 7.94-2.92l-3.88-3c-1.07.72-2.45 1.15-4.06 1.15-3.13 0-5.77-2.11-6.72-4.95H1.27v3.1A12 12 0 0 0 12 24Z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.28a7.2 7.2 0 0 1 0-4.56v-3.1H1.27a12 12 0 0 0 0 10.76l4.01-3.1Z"
          />
          <path
            fill="#EA4335"
            d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.53 11.53 0 0 0 12 0 12 12 0 0 0 1.27 6.62l4.01 3.1C6.23 6.88 8.87 4.77 12 4.77Z"
          />
        </svg>
        Sign in with Google
      </button>
      {message && (
        <p role="alert" className="text-center text-sm">
          {message}
        </p>
      )}
    </div>
  );
}
