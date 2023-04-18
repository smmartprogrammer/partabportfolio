import './globals.css';
import Navbar from './navbar/page';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="w-[80%]"> {children}</div>
          <div className="w-[20%] ">
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}