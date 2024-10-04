import '@/style/globals.css';

export const metadata = {
  title: 'ed1t0rs',
  description: 'Photo Selling Website',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;