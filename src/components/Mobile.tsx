import { useState } from "react";

const links = [
	{ href: "/", text: "Overview" },
	{ href: "/services", text: "Services" },
	{ href: "/case-studies", text: "Clients" },
	{ href: "/about", text: "Contact" },
	{ href: "/blog", text: "Insights" },
];

export default function Mobile() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="flex h-28 w-full justify-center border-0 border-blue-400">
			<nav className="relative flex w-full items-center justify-between">
				<div className="flex items-center justify-center">
					<a className="flex flex-row items-center" href="/">
						<img
							width={100}
							height={100}
							src="/duotone-moon-logo-2.png"
							alt=""
							className="h-[100px] w-[100px]"
						/>
						<div className="items-left ml-2 flex flex-col justify-center">
							<h1 className="font-sans text-5xl font-bold text-brand-black sm:text-5xl md:text-6xl lg:text-8xl">
								Moonset
							</h1>
							{/* <img src="/moonset-logo.svg" alt="logo" className="h-[60px]"/> */}
						</div>
					</a>

					{/* <!-- Mobile menu button --> */}
					{/* <div className="flex lg:hidden md:hidden justify-end items-center">
                            <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}  fill="none" viewBox="0 0 24 24" stroke="#4343FE" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                        
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'} `} fill="none" viewBox="0 0 24 24" stroke="#4343FE" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> */}
				</div>

				{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
				<div
					className={`${isMenuOpen ? "block translate-x-0 border-b-8 border-[#4343FE] bg-gradient-to-r from-[#EEF2FF] via-[#EEF2FF] to-[#EEF2FF] opacity-100" : "hidden "} absolute inset-x-0 z-20 mt-72 w-full rounded-b-lg bg-transparent px-0 py-4 transition-all duration-150 ease-in-out md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:border-b-0 md:bg-transparent md:p-0 md:opacity-100 lg:border-b-0 `}
				>
					<div className="flex w-full flex-col items-center justify-center rounded-xl md:mx-0 md:flex-row  lg:border-2 lg:border-brand-black lg:p-1">
						{links.map((link) => (
							// <HeaderLink className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href={link.href} slot="name">{link.text}</HeaderLink>
							<div key={link.text} className="mx-2 my-2 px-1 text-xs font-bold text-brand-black sm:text-xs md:text-sm lg:text-sm">
								<a
									className="my-4 transform transition-colors duration-300 hover:text-[#4343FE] md:my-0 md:my-0"
									href={link.href}
								>
									{link.text}
								</a>
							</div>
						))}
					</div>

					<div
						className={`${isMenuOpen ? "hidden" : ""} ml-4 flex h-full items-center justify-end`}
					>
						{/* <span className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-brand-black to-[#EDF0FF]"></span> */}
						<span className="h-[50px] w-[50px] rounded-full bg-brand-black"></span>
					</div>

					{/* <div className="flex justify-center ">
                            <a className="relative h-full text-gray-700 transition-colors duration-300 transform hover:text-gray-600" href="#">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#4343FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div> */}
				</div>
				<div className="flex items-center justify-end md:hidden lg:hidden">
					<button
						onClick={toggleMenu}
						type="button"
						className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
						aria-label="toggle menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`h-6 w-6 ${isMenuOpen ? "hidden" : ""}`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="#4343FE"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 8h16M4 16h16"
							/>
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`h-6 w-6 ${isMenuOpen ? "" : "hidden"} `}
							fill="none"
							viewBox="0 0 24 24"
							stroke="#4343FE"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</nav>
		</header>
	);
}
