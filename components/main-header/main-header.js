import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './main-header.module.css';
import logoImg from '@/assets/logo.png';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} priority alt='A plate whit foot on it' />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/meals'>
              Discovery
            </NavLink>
          </li>
          <li>
            <NavLink href="/community" >Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}
