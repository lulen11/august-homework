"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link href="/">
          <Logo className={styles.logo} />
        </Link>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* LS note: Normally would reference icon from library but just using this for efficiency now. */}
          ☰
        </button>
        <div
          className={`${styles.headerContent} ${
            isMenuOpen ? styles.menuOpen : ""
          }`}
        >
          {/* LS note: Normally would put this navigation into it's own component, especially since it's referenced in footer too. Though just copying and pasting for efficiency in this task. */}
          <ul className={styles.nav}>
            <li>
              <Link className={styles.navItem} href="#">
                About
              </Link>
            </li>
            <li>
              <Link className={styles.navItem} href="#">
                Services
              </Link>
            </li>
            <li>
              <Link className={styles.navItem} href="#">
                Team
              </Link>
            </li>
            <li>
              <Link className={styles.navItem} href="#">
                News
              </Link>
            </li>
            <li>
              <Link className={styles.navItem} href="#">
                Contact
              </Link>
            </li>
          </ul>
          <Button text="Book a session" />
        </div>
      </div>
    </header>
  );
}
