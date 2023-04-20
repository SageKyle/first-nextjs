import LayoutStyle from 'components/layouts.module.css';
import avatar from 'images/avatar.jpg';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/utils.module.css';

export default function about() {
	return (
		<>
			<Head>
				<title>About Me</title>
				<meta name="description" content="A little intro about me" />
			</Head>
			<main className={`${LayoutStyle.aboutContainer}`}>
				<header className={LayoutStyle.header}>
					<Image
						src={avatar}
						width={150}
						height={150}
						className={`${styles.borderCircle} ${styles.imgStyles}`}
					/>
					<h1 className={styles.headingXl}>Paul Saje</h1>
					<cite>Frontend Web Developer</cite>
				</header>
				<p className={styles.centerP}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam.
					Officia reprehenderit maiores ducimus excepturi fugiat, quam id
					dolorum impedit unde aliquid odit repellat reiciendis aperiam porro
					at! Iusto impedit quam perspiciatis nemo magnam earum vitae unde quasi
					animi velit?
				</p>
				<Link href={'/'}>Home</Link>
			</main>
		</>
	);
}
