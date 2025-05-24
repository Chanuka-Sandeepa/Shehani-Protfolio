import './globals.css';

export const metadata = {
  title: 'Shehani Portfolio',
  description: 'Personal portfolio of Shehani',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
