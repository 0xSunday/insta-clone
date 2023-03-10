import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here a
  ],
  secret: "IamVeryHandsome",

  pages: {
    signIn: "/auth/signin",
  },
  // theme: {
  //   logo: "https://links.papaeact.com/sq8",
  //   brandColor: "#F13287",
  //   colorScheme: "auto",
  // },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
};
export default NextAuth(authOptions);
