import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Nodemailer from "next-auth/providers/nodemailer";

import { db } from "./db";
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub,
    Nodemailer({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,
    // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
  }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      return session;
    },
  },
});
