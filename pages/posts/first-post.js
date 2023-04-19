import Head from 'next/head';
import Link from 'next/link';
import Layouts from '../../components/Layouts';

export default function FirstPost() {
	return (
		<Layouts>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>This is a first post</h1>
			<Link href="/">Back Home</Link>
		</Layouts>
	);
}