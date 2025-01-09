"use client";
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.footer} `}>
      <div className={styles.footerWrapper}>
        {/* LS note: Normally would put this navigation into it's own component, especially since it's referenced in footer too. Though just copying and pasting for efficiency in this task. */}
        <ul className={styles.nav}>
          <li>
            <Link className={styles.navItem} href="/play">
              Play some videos!
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/play">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/play">
              Play some videos!
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/play">
              Services
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/play">
              Team
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/play">
              Play some videos!
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
