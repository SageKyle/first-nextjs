import Layouts from 'components/Layouts';
import Head from 'next/head';
// import Link from 'next/link';

export default function FirstPost() {
	return (
		<Layouts>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>This is a first post</h1>
			<p>
				You can create a "hybrid" Next.js app by using Static Generation for
				most pages and using Server-side Rendering for others.
			</p>
			{/* <Link href="/">Back Home</Link> */}
		</Layouts>
	);
}
