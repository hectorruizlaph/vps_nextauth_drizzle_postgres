"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignOutBtnCustom() {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}
