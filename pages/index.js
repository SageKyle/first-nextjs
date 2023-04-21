import Layout, { siteTitle } from 'components/Layouts';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from 'styles/utils.module.css';

import { getSortedPostsData } from 'lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
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
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								{title}
								<br />
								{id}
								<br />
								{date}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
