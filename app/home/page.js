import Image from "next/image";
import ourStoryPic from "../../images/home-image-1.jpg";
import uni from "../../images/23unilome.jpg"
import styles from "./home.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={uni}
          alt="Out story pic"
          placeholder="blur"
          quality={100}
          sizes="80vh"
          fill
          style={{
            objectFit: "fill",
          }}
        />
        <Image 
        src={uni}/>
      </div>
      <h1 className={styles.bgHeader}>Welcome to 23therapies</h1>
      <p className={styles.bgText}>
      Massage | Beauty | Skin | Acupuncture
      </p>
      {/* <iframe id='cliniko-4239239' src='https://23therapies.au3.cliniko.com/bookings?embedded=true' frameborder='0' scrolling='auto' width='80%' height='1000' style='pointer-events: auto;'></iframe> */}
    </>
  );
}
