import { baseApi } from "@/config/baseApi";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log({ credentials });
        try {
          const res = await fetch(`${baseApi}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const data = await res.json();

          if (res.ok && data?.data?.user) {
            return {
              ...data.data.user,
              token: data.data.token,
            };
          }
          return null;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  sesssion: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;
        token.image = user?.avatar;
        token.token = user?.token;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user = {
        id: token.id,
        role: token.role,
        name: token.name,
        email: token.email,
        image: token?.image,
        token: token?.token,
      };
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
};
