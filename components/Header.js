import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
	MenuIcon,
	XIcon,
} from '@heroicons/react/outline'

export default function Header(props) {
	const navigation = [
		{ name: 'Artists', href: '/artist' },
		{ name: 'Community', href: '/community' },
		{ name: 'Marketplace', href: 'https://zora.co' },
	]

	return (
		<Popover className="relative bg-white">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
							<div className="flex justify-start lg:w-0 lg:flex-1">
								<a href="/">
									<span className="sr-only">Workflow</span>
									<img
										className="h-8 w-auto sm:h-10"
										src="/rightoken-logo.png"
										alt=""
									/>
								</a>
							</div>
							<div className="-mr-2 -my-2 md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
									<span className="sr-only">Open menu</span>
									<MenuIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
							<Popover.Group as="nav" className="hidden md:flex space-x-10">

								{navigation.map((item) => (
									<a key={item.name} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
										{item.name}
									</a>
								))}

							</Popover.Group>
							<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
								<a href="/beta" className="whitespace-nowrap text-base font-medium text-purple-600 hover:text-purple-500">
									Beta test
								</a>
							</div>
						</div>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							static
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
								<div className="pt-5 pb-6 px-5">
									<div className="flex items-center justify-between">
										<div>
											<a href="/">
												<img
													className="h-8 w-auto"
													src="rightoken-logo.png"
													alt="Workflow"
												/>
											</a>
										</div>
										<div className="-mr-2">
											<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
												<span className="sr-only">Close menu</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
								</div>
								<div className="py-6 px-5 space-y-6">
								<div className="grid grid-cols-2 gap-y-4 gap-x-8">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="text-base font-medium text-gray-900 hover:text-gray-700"
											>
												{item.name}
											</a>
										))}
									</div>
									<div>
										<a
											href="/beta"
											className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
										>
											Beta test
										</a>
									</div>
								</div>
								</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	)
}