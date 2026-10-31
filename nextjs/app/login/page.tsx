import type { Metadata } from "next";
import { Suspense } from "react";
import { GoogleSignInButton } from "./google-sign-in-button";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center p-4">
      <Suspense>
        <GoogleSignInButton />
      </Suspense>
    </main>
  );
}
