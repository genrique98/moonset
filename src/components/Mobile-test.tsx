import { signal, computed } from "@preact/signals"
import { h, Fragment } from "preact"
import { useState } from "preact/hooks"
import HeaderLink from "./HeaderLink.astro";

const links = [
    { href: "/", text: "Overview" },
    { href: "/expertise", text: "Services"},
    { href: "/clients", text: "Clients" },
    { href: "/about", text: "Contact" },
    { href: "/blog", text: "Insights" }
];

export default function Mobile_test() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <header class="w-full h-28 border-0 border-blue-400 flex justify-center">
            <nav class="relative w-full justify-between items-center flex">
                    <div class="flex items-center justify-center">
                        <a class="flex flex-row items-center" href="/">
                            <img width={100} height={100} src="/duotone-moon-logo-2.png" alt="" class="h-[100px] w-[100px]"/>
                            <div class="flex flex-col items-left justify-center ml-2">
                                <h1 class="font-sans font-bold lg:text-8xl md:text-6xl sm:text-5xl text-5xl text-[#171738]">Moonset</h1>
                                {/* <img src="/moonset-logo.svg" alt="logo" class="h-[60px]"/> */}
                            </div>
                        </a>

                        {/* <!-- Mobile menu button --> */}
                        {/* <div class="flex lg:hidden md:hidden justify-end items-center">
                            <button onClick={toggleMenu} type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                <svg xmlns="http://www.w3.org/2000/svg" class={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}  fill="none" viewBox="0 0 24 24" stroke="#4343FE" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                        
                                <svg xmlns="http://www.w3.org/2000/svg" class={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'} `} fill="none" viewBox="0 0 24 24" stroke="#4343FE" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> */}
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                    <div class={`${isMenuOpen ? 'translate-x-0 opacity-100 block bg-gradient-to-r from-[#EEF2FF] via-[#EEF2FF] to-[#EEF2FF] border-b-8 border-[#4343FE]' : 'hidden '} lg:border-b-0 md:border-b-0 md:relative bg-transparent absolute inset-x-0 z-20 w-full px-0 py-4 transition-all duration-150 ease-in-out md:mt-0 md:p-0 md:top-0 md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center mt-72 rounded-b-lg `} >
                        <div class="flex flex-col md:flex-row md:mx-0 justify-center items-center rounded-xl lg:border-2  lg:border-[#171738] w-full lg:p-1">
                            {links.map((link) => (
                                // <HeaderLink class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href={link.href} slot="name">{link.text}</HeaderLink>
                                <div class="px-1 my-2 mx-2 font-bold text-[#171738] lg:text-sm md:text-sm sm:text-xs text-xs">
                                    <a class="my-4 md:my-0 transition-colors duration-300 transform hover:text-[#4343FE] md:my-0" href={link.href}>{link.text}</a>
                                </div>
                            ))}
                        </div>
                        
                        <div class={`${isMenuOpen ? 'hidden' : ''} ml-4 h-full flex items-center justify-end`} >
                            {/* <span class="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#171738] to-[#EDF0FF]"></span> */}
                            <span class="w-[50px] h-[50px] rounded-full bg-[#171738]"></span>
                        </div>

                        {/* <div class="flex justify-center ">
                            <a class="relative h-full text-gray-700 transition-colors duration-300 transform hover:text-gray-600" href="#">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#4343FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div> */}
                    </div>
                    <div class="flex lg:hidden md:hidden justify-end items-center">
                        <button onClick={toggleMenu} type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg xmlns="http://www.w3.org/2000/svg" class={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}  fill="none" viewBox="0 0 24 24" stroke="#4343FE" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                    
                            <svg xmlns="http://www.w3.org/2000/svg" class={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'} `} fill="none" viewBox="0 0 24 24" stroke="#4343FE" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
            </nav>
        </header>
    )
}

