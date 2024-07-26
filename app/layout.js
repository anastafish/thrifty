import "./globals.css";
import Nav from "@/components/Nav";
import {Providers} from "./providers";

export const metadata = {
  title: "Thrifty",
  description: "Thrifty - Your Closet's Second Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
        <body className="flex flex-col items-center gap-5">
          <Providers>
            <Nav />
            {children}
          </Providers>
          </body>
      </html>
  );
}
