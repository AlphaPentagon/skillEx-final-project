import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from '../src/components/Navigation';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Skillex</title>
				<meta name='description' content='Skill Ex ' />
				<link rel='icon' href='/LightBulbFAVICON.ico' />
			</Head>
			<Navigation />

			<h1>Skill Ex</h1>
		</div>
	);
}
