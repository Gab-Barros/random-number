import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/dinamic-page">Página Dinâmica</Link>
          </li>
          <li>
            <Link href="/static-page">Página Estática</Link>
          </li>
        </ul>
      </nav>
      <h1>Weather app</h1>
    </div>
  );
}
