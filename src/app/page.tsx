import SignUp from "@/components/Signup/SignUp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.signup__section}>
        <div className={styles.content}>
          <h1 className="title"> Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className={styles.form__wrapper}>
          <p className={styles.trail__Info}> <span>Try it free 7 days</span> then $20/mo. thereafter</p>
          <SignUp/>
        </div>
      </section>
    </main>
  );
}
