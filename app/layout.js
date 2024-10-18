import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Global/Navbar';
import Footer from '@/components/Global/Footer';
import Whatsapp from '@/components/Global/Whatsapp';
import Tawk from '@/components/Tawk/Tawk';



const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Custom Boxes Wholesale - Manufacturer and Supplier in USA',
  description: 'PrintPro Packaging is a leading company that prints and packages custom boxes for Retail, CBD, Cosmetics, Food, Gifts, etc in USA. Get free Quote!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <Whatsapp/>
        <Tawk/>
        {children}
        <Footer />
      </body>
    </html>
  );
}