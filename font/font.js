import { Fira_Sans, Noto_Sans } from 'next/font/google';

export const noto_sans = Noto_Sans({ subsets: ['latin'] });
export const firaSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-fira-sans",
  subsets: ["latin"],
});
