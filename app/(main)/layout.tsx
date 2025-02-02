import NavBar from "~/shared/ui/nav-bar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <NavBar />
    </div>
  );
}
