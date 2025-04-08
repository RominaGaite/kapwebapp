import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/iniciarsesion', // tu pantalla de login personalizada
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // redirige siempre a esta ruta después del login
      return `${baseUrl}/abrir-para-denunciar`;
    },
  },
};

export default NextAuth(authOptions);
