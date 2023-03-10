import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import axios from 'axios';

console.log(process.env);

export default NextAuth({
  secret: 'therock',
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GoogleProvider({
      authorization: {
        params: {
          scope:
            'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/analytics.readonly',
        },
      },
      clientId: process.env?.GOOGLE_ID ?? '',
      clientSecret: process.env?.GOOGLE_SECRET ?? '',
    }),
  ],
  callbacks: {
    // @TODO user info should be saved in the D
    // async signIn({ account, profile, user }) {
    // try {
    //   const resp = await axios.post(`${process.env.API_URL}/users/login`, {
    //     user: profile,
    //     provider: account,
    //   });
    //   // @ts-ignore
    //   user.userId = resp.data.id;
    //   // @ts-ignore
    //   user.accessToken = resp.data.accessToken;
    //   return true; // Do different verification for other providers that don't have `email_verified`
    // } catch (err) {
    //   return false;
    // }
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   if (account && user) {
    //     return {
    //       ...token,
    //       // @ts-ignore
    //       userId: user.userId,
    //       // @ts-ignore
    //       accessToken: user.accessToken,
    //     };
    //   }
    //
    //   return token;
    // },
    async session({ session, token }) {
      return {
        ...session,
        // @ts-ignore
        userId: token.userId,
        // @ts-ignore
        accessToken: token.accessToken,
      };
    },
  },
});
