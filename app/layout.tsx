import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تندیس نگاران سرو ماندگار | به‌زودی',
  description: 'وب‌سایت رسمی تندیس نگاران سرو ماندگار؛ طراحی و ساخت لوح تقدیر، تندیس و هدایای سازمانی خاص.',
  keywords: ['تندیس', 'لوح تقدیر', 'هدایای سازمانی', 'تندیس نگاران سرو ماندگار'],
  openGraph: {
    title: 'تندیس نگاران سرو ماندگار | به‌زودی',
    description: 'هنرِ ماندگار کردن افتخار',
    type: 'website',
    locale: 'fa_IR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
