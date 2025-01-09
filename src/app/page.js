import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={`${styles.panel} ${styles.panelHero}`}>
          <h1>
            Lifecare Essendon{" "}
            <span className={styles.subheading}>
              Leaders in physiotherapy and sports medicine
            </span>
          </h1>
        </section>
        <section className={`${styles.panel} ${styles.panelIntro}`}>
          <div>
            <h2>
              We lead the way when it comes to range, quality and expertise.
            </h2>
          </div>
          <div>
            <Image
              className={styles.panelImage}
              src="/images/hero-rehabilitation@2x.jpg"
              alt="Young person receiving rehabilitation treatment by smiling physiotherapist"
              width={800}
              height={660}
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}
