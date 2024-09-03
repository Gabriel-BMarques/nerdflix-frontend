import Link from "next/link";
import  styles  from "./header.module.css";

export default function (){
  return(
    <header className={styles.header}>
      <Link className={styles.logo} href={'/home'}>Nerdflix</Link>
      <nav className={styles.nav}>
        <Link className={styles.menu} href={'/movies'}>Filmes</Link>        
      </nav>
    </header>
  );
};