import Link from "next/link";
import  styles  from "./footer.module.css";
import Image from "next/image";

export default function (){
  return(
    <footer className={styles.footer}>
      
     {/*} <nav className={styles.nav}>
      <Link className={styles.logo} href={'/home'}>Nerdflix</Link>
    </nav>*/}
      <p><span>NERDFLIX</span> © 2024 </p>
      
    </footer>
  );
};