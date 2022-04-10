import Head from 'next/head';
import * as React from 'react';
import styles from '../styles/Home.module.css';
import { Navbar, ContentHeader, PreApprovalForm, Footer } from '../component';


const Home = () => {

  const [progressStatus, setProgressstatus] = React.useState(false);
  const [progressCompleted, setProgressCompleted] = React.useState(false);
  
  return (
    <div>
      <Head>
      <title>My Rent</title>
      <meta name="description" content="Provides house rent loans.." />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <Navbar />
        <div className={styles.container}>
          <ContentHeader progressStatus={progressStatus} progressCompleted={progressCompleted}/>
          <PreApprovalForm progressCompleted={progressCompleted} setProgressstatus={setProgressstatus} setProgressCompleted={setProgressCompleted}/>
          <Footer />
        </div>
      </main>
    </div>
  )
}
export default Home;