import { Open_Sans } from "@next/font/google";
import Link from "next/link";

// These styles apply to every route in the application
import "./global.css";
import styles from "./rootStyle.module.css";

const inter = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <header className={styles.nav}>
          <div><h1>
            <Link className={styles.homeLink} href={"/home"}>
             23therapies
            </Link>
          </h1></div>
          
          <h3>
            <Link className={styles.menuBarLinks} href="/blog">
              Price List
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/settings">
             Treatments
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/conference">
              Bookings
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}
