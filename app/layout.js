import "./globals.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/user";
import CartProvider from "./context/cart";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "bRead",
  description: "bRead",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />

        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
