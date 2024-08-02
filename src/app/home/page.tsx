"use client"

import Image from "next/image";
import styles from "./home.module.css";
import SpacingGrid from "@/app/components/grid/grid";

export default function Home() {
  return (
    <main className={styles.main}>
      <SpacingGrid />
    </main>
  );
}
