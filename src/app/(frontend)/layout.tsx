/*
 * Nested layout component for app/(frontend).
 * ------------------------------------------------------------------------------
 *
 */

import '@/styles/styles.scss';

import type { Metadata } from 'next';
import { SanityLive } from '@/sanity/lib/live';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Nav />
			<main role="main" id="main-content" tabIndex={-1}>
				{children}
				<SanityLive />
			</main>
		</>
	);
}
