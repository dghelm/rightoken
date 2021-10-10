import Head from 'next/head';
import Link from 'next/link';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import {
  TrendingUpIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

import CommunityWidget from '../components/CommunityWidget';
import Footer from '../components/Footer';

const navigation = [
  { name: 'Artists', href: '/artist' },
  { name: 'Community', href: '/community' },
  { name: 'Marketplace', href: 'https://zora.co' },
];

const features = [
  {
    name: 'Exchange anywhere',
    description:
      'Rightoken is a place to mint, list, and view tokenized rights to music. But rightokens are fully owned by the tokenholder meaning they can be exchanged on any compatible marketplace as well.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Democratic & transparent',
    description:
      'No constraining contracts with bureaucratic record labels. Own your own work and support artists directly. All Rightoken code is open-source and belongs to the community.',
    icon: ScaleIcon,
  },
  {
    name: 'Comprehensible contracts',
    description:
      'The contracts that confer legal rights are written in plain English, so no legal team required. All legal backend is managed by Rightoken in-cloud or on-chain.',
    icon: LightBulbIcon,
  },
  {
    name: 'Build a portfolio',
    description:
      'Easily invest in a range of works with previously unprecedented access to an expanded and diversified portfolio.',
    icon: TrendingUpIcon,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rightoken</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Popover className="relative overflow-hidden bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <svg
                    className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>

                  <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                    <nav
                      className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <a href="/">
                            <span className="sr-only">Workflow</span>
                            <img
                              className="w-auto h-8 sm:h-10"
                              src="/rightoken-logo.png"
                            />
                          </a>
                          <div className="flex items-center -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                              <span className="sr-only">Open main menu</span>
                              <MenuIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="font-medium text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </Link>
                        ))}
                        <Link
                          href="/beta"
                          className="font-medium text-purple-600 hover:text-purple-500"
                        >
                          Beta test
                        </Link>
                      </div>
                    </nav>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                    >
                      <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center justify-between px-5 pt-4">
                          <div>
                            <a href="/">
                              <img
                                className="w-auto h-8"
                                src="/rightoken-logo.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                              <span className="sr-only">Close main menu</span>
                              <XIcon className="w-6 h-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <a
                          href="beta"
                          className="block w-full px-5 py-3 font-medium text-center text-purple-600 bg-gray-50 hover:bg-gray-100"
                        >
                          Beta test
                        </a>
                      </div>
                    </Popover.Panel>
                  </Transition>

                  <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:max-w-lg">
                        <span className="block xl:inline">
                          The stock market
                        </span>{' '}
                        <span className="block text-purple-600 xl:inline">
                          for music
                        </span>
                      </h1>
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Rightoken is a marketplace for legal rights to songs
                        powered by the Rightoken community and secured by
                        Ethereum. Sound recording copyrights and royalties are
                        transferred to tokenholders who can sell their shares on
                        any open market.
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                          <a
                            href="artist"
                            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                          >
                            For artists
                          </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <a
                            href="investor"
                            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-purple-700 bg-purple-100 border border-transparent rounded-md hover:bg-purple-200 md:py-4 md:text-lg md:px-10"
                          >
                            For investors
                          </a>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src="/musician.jpg"
                  alt=""
                />
              </div>
            </>
          )}
        </Popover>

        <div className="py-12">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base font-semibold tracking-wide text-purple-600 uppercase">
                Tokenized Rights
              </h2>
              <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                A key change in music
              </p>
              <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
                By tokenizing rights, artists fund their work and keep control
                of the profits. Investors can share in the gains after finding
                the next hit.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-purple-500 rounded-md">
                        <feature.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-5 sm:mt-12 sm:flex sm:justify-center lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="beta"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                >
                  Try it out
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <CommunityWidget />
        </div>
      </main>

      <Footer />
    </>
  );
}
