
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from '../src/components/Navigation';
import Menu from '../src/components/Menu';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SkillEx</title>
				<meta name="description" content="SkillEx " />
				<link rel="icon" href="/LightBulbFAVICON.ico" />
			</Head>


			<h1>Skill Ex</h1>
      			<Menu />
			<Navigation />



		</div>
	);
}
