import avatar from 'images/avatar.jpg';
import avatar2 from 'images/profile.png';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from 'styles/utils.module.css';
import styles from './layouts.module.css';

const name = 'Paul Saje';
export const siteTitle = 'Checking Out Next.js';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Trying out NextJS for the first time by building a blog"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src={avatar}
							className={`${utilStyles.borderCircle} ${utilStyles.imgStyles}`}
							height={150}
							width={150}
							alt=""
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<Image
								priority
								src={avatar2}
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt=""
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/about" className={utilStyles.colorInherit}>
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">← Back to home</Link>
				</div>
			)}
		</div>
	);
}
