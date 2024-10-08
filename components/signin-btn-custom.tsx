"use client";

import { OAuthProviderType } from "next-auth/providers";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SigninBtnCustom({
  provider,
}: {
  provider: { id: OAuthProviderType; name: string };
}) {
  return (
    <Button onClick={() => signIn(provider.id)}>
      Sign in with {provider.name}
    </Button>
  );
}
