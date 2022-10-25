import { timeStampToDate } from 'helpers/auth';
import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { Layout } from 'src/components/layout';
import styles from 'styles/pages/home.module.scss';

interface IProps {
  title: string;
  dataUser: any;
}

const Home: NextPage = ({ title }: IProps) => {
  const [dataLogin, setDataLogin] = useState(null);
  const handleGetProfile = async user => {
    setDataLogin(user);
  };

  return (
    <>
      <Layout
        title={'Profile'}
        pageDescription="Profile page"
        setInfoUser={handleGetProfile}
      >
        <div data-testid="home-test-id" className={styles.container}>
          {dataLogin && (
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={dataLogin.avatar} alt="Avatar" />
              </div>
              <div className={styles.description}>
                <h6
                  className={styles.primaryText}
                >{`${dataLogin.name} ${dataLogin.firstName}`}</h6>
                <h6 className={styles.secondaryText}>{dataLogin.email}</h6>
                <h6 className={styles.secondaryText}>Role: {dataLogin.role}</h6>
                <h6 className={styles.secondaryText}>
                  Created: {timeStampToDate(dataLogin.createdAt)}
                </h6>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = _context => {
  return {
    props: { title: 'Profile' },
  };
};

export default Home;
