import Footer from "@/components/client/footer";
import Navbar from "@/components/client/navbar";

export default async function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}
