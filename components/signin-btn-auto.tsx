"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignInBtnAuto() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign In</Button>
    </>
  );
}
