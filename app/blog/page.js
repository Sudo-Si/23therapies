import Image from "next/image";
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
          sizes="100vh"
          fill
          style={{
            objectFit: "cover",
          }}
          />
        </div>
    <h1 className={styles.bgHeader}>23therapies</h1>
      <h2 className={styles.bgText}>
        Price List
      </h2>
     < div className={styles.servicesContainer}>  
    
     <table className={styles.table}>
     <caption className={styles.bgText2}>Massage</caption>
  <tr>
    <th>Duration (Minutes)</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>30</td>
    <td>$65</td>
  </tr>
  <tr>
    <td>45</td>
    <td>$75</td>
  </tr>
  <tr>
    <td>60</td>
    <td>$95</td>
  </tr>
  <tr>
    <td>75</td>
    <td>$120</td>
  </tr>
  <tr>
    <td>90</td>
    <td>$145</td>
  </tr>
  <tr>
    <td >ADD ON : LED Phototherapy For the Body</td>
    <td >$50</td>
  </tr>
  <tr>
    
  </tr>
</table>
     <table className={styles.table}>
      
     <caption className={styles.bgText2}>Acupuncture</caption>
     <tr>
    <th>Treatment</th>
    <th>Duration(Minutes)</th>
    <th>Price /ACC</th>
    <th>Standard Price</th>
  </tr>
  <tr>
    
    <td>Acupuncture Treatment</td>
    <td>30</td>
    <td>$65</td>
  </tr>
  <tr>
    <td>Acupuncture Treatment</td>
    <td>45</td>
    <td>$20</td>
    <td>$75</td>
  </tr>
  <tr>
    <td>Acupuncture Treatment</td>
    <td>60</td>
    <td>$40</td>
    <td>$95</td>
  </tr>
  <tr>
    <td>Standard Ear Seeds Only</td>
    <td>30</td>
    <td></td>
    <td>$20</td>
  </tr>
  <tr>
    <td>Jewellery Ear Seeds Only</td>
    <td>30</td>
    <td></td>
    <td>$30</td>
  </tr>
  <tr>
    <td>Consultation Appointment - Including Ear Seeds</td>
    <td>30</td>
    <td></td>
    <td>$45</td>
  </tr>
  <tr>
    <td>Herbal Formula Consultation</td>
    <td>30</td>
    <td>* additional charge for herbal formula prescription</td>
    <td>$65</td>
  </tr>
  <tr>
    <td>ADD ON Phototherapy for Body</td>
    <td>20</td>
    <td></td>
    <td>$50</td>
  </tr>
  <th><strong>Cosmetic Acupuncture</strong></th>
  <tr>
    
    <td>Individual Treatment</td>
    <td>60</td>
    <td></td>
    <td>$125</td>
  </tr>
  <tr>
    <td>Individual Treatment with LED Phototherapy Boost</td>
    <td>75</td>
    <td></td>
    <td>$175</td>
  </tr>
  <tr>
    <td>Weekly with LED Phototherapy Boost (2 treatments a week)</td>
    <td>75</td>
    <td></td>
    <td>$350</td>
  </tr>
  <tr>
    <td>6 Treatment Package (2 treatments per week)</td>
    <td>75</td>
    <td></td>
    <td>$740</td>
  </tr>
  <tr>
    <td>6 treatment Package with LED Phototherapy Boost ( 2 treatments per week)</td>
    <td>60</td>
    <td></td>
    <td>$840</td>
  </tr>
</table>
      </div>
     < div className={styles.servicesContainer}>  
    
     <table className={styles.table}>
     <caption className={styles.bgText2}>Massage</caption>
  <tr>
    <th>Duration (Minutes)</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>30</td>
    <td>$65</td>
  </tr>
  <tr>
    <td>45</td>
    <td>$75</td>
  </tr>
  <tr>
    <td>60</td>
    <td>$95</td>
  </tr>
  <tr>
    <td>75</td>
    <td>$120</td>
  </tr>
  <tr>
    <td>90</td>
    <td>$145</td>
  </tr>
  <tr>
    <td >ADD ON : LED Phototherapy For the Body</td>
    <td >$50</td>
  </tr>
  <tr>
    
  </tr>
</table>
     <table className={styles.table}>
      
     <caption className={styles.bgText2}>Acupuncture</caption>
     <tr>
    <th>Treatment</th>
    <th>Duration(Minutes)</th>
    <th>Price /ACC</th>
    <th>Standard Price</th>
  </tr>
  <tr>
    
    <td>Acupuncture Treatment</td>
    <td>30</td>
    <td>$65</td>
  </tr>
  <tr>
    <td>Acupuncture Treatment</td>
    <td>45</td>
    <td>$20</td>
    <td>$75</td>
  </tr>
  <tr>
    <td>Acupuncture Treatment</td>
    <td>60</td>
    <td>$40</td>
    <td>$95</td>
  </tr>
  <tr>
    <td>Standard Ear Seeds Only</td>
    <td>30</td>
    <td></td>
    <td>$20</td>
  </tr>
  <tr>
    <td>Jewellery Ear Seeds Only</td>
    <td>30</td>
    <td></td>
    <td>$30</td>
  </tr>
  <tr>
    <td>Consultation Appointment - Including Ear Seeds</td>
    <td>30</td>
    <td></td>
    <td>$45</td>
  </tr>
  <tr>
    <td>Herbal Formula Consultation</td>
    <td>30</td>
    <td>* additional charge for herbal formula prescription</td>
    <td>$65</td>
  </tr>
  <tr>
    <td>ADD ON Phototherapy for Body</td>
    <td>20</td>
    <td></td>
    <td>$50</td>
  </tr>
  <th><strong>Cosmetic Acupuncture</strong></th>
  <tr>
    
    <td>Individual Treatment</td>
    <td>60</td>
    <td></td>
    <td>$125</td>
  </tr>
  <tr>
    <td>Individual Treatment with LED Phototherapy Boost</td>
    <td>75</td>
    <td></td>
    <td>$175</td>
  </tr>
  <tr>
    <td>Weekly with LED Phototherapy Boost (2 treatments a week)</td>
    <td>75</td>
    <td></td>
    <td>$350</td>
  </tr>
  <tr>
    <td>6 Treatment Package (2 treatments per week)</td>
    <td>75</td>
    <td></td>
    <td>$740</td>
  </tr>
  <tr>
    <td>6 treatment Package with LED Phototherapy Boost ( 2 treatments per week)</td>
    <td>60</td>
    <td></td>
    <td>$840</td>
  </tr>
</table>
      </div>
    


      </>
  );
}
