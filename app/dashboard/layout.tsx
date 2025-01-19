import { ReactNode } from "react";
import { Noto_Sans } from 'next/font/google';

const noto_sans = Noto_Sans({ subsets: ['latin'] });

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${noto_sans.className} h-screen`}>
      {children}
    </div>
  )
}