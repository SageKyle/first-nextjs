import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layouts';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[This is Saje checking out Next.js]</p>
				<p>This is the first project I'm working on with Next.</p>
				<p>
					It's a bit weird, but at the same time, it's very fluid, easy to learn
					and 'sweet', probably because I already know React.
				</p>
				<Link href="/posts/first-post">Check out my first post</Link>
			</section>
		</Layout>
	);
}
