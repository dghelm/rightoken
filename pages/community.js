import Head from 'next/head'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Header from '../components/Header'
import CommunityWidget from '../components/CommunityWidget'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<>
			<Head>
				<title>Rightoken</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header />

				<div className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="lg:text-center">
							<h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Community</h2>
							<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								Companies aren&apos;t very punk rock.
							</p>
							<div className="mt-8 w-full text-center flex items-center justify-center">
								<img
									className="h-auto max-w-xl rounded-md"
									src="/john-brown-tile.png"
									alt="john brown community"
								/>
							</div>
							<p className="mt-6 max-w-2xl text-xl text-gray-500 lg:mx-auto">
								Rightoken is a community-first project built collaboratively by developers, artists, and music investors around the world.
							</p>
						</div>

						<div className="mt-16" id="widget">
							<CommunityWidget />
						</div>
					</div>
				</div>

			</main>

			<Footer />
		</>
	)
}
