import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import Modal from "./components/modals/Modal";

const font = Nunito({
  subsets: ["latin"],
});
export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
