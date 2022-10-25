// create navbar component
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IUser } from 'src/interfaces';
import styles from 'styles/components/layout/layout.module.scss';

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  setInfoUser: (user: IUser) => any;
}

export const Layout: React.FC<Props> = ({
  children,
  title,
  pageDescription,
  setInfoUser
}) => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      router.push('/login');
    } catch (error) {
      console.log('benji -> handleLogout -> error', error.response.data);
    }
  };

  const handleGetProfile = async () => {
    try {
      const response = await axios.get('/api/profile');
      setInfoUser(response.data.data);
    } catch (error) {
      console.log('benji -> handleGetProfile -> error', error.response.data);
    }
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <img
              src="https://www.vincoed.com/assets/images/vinco-logo-md.png"
              alt="Home"
              className={styles.navbarLogo}
            />
          </a>
        </Link>
        <div className={styles.navbarOptions}>
          <button
            onClick={handleGetProfile}
            className={styles.btn + ' ' + styles.btnPrimary}
          >
            Get Profile
          </button>
          <button
            onClick={handleLogout}
            className={styles.btn + ' ' + styles.btnInfo}
          >
            Logout
          </button>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};
