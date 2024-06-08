export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/** Sidebar */}
      <h1>SIDEBAR</h1>
      {children}
    </main>
  );
}
