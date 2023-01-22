import Link from "next/link";
import Image from "next/image";
import conferencePic from "../../images/media-image-1.jpg";
import styles from "./conference.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        {/* <Image
          src={conferencePic}
          alt="Conference Pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        /> */
        <h1 className={styles.bgHeader}>Bookings</h1>}
      </div>
      
      <div className={styles.cntnr}>
         <iframe id='cliniko-4239239' src='https://23therapies.au3.cliniko.com/bookings?embedded=true' frameborder='0' scrolling='auto' width='80%' height='1000'></iframe>
  
      </div>
          
    </>
  );
}
