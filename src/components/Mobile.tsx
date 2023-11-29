import { signal, computed } from "@preact/signals"
import { h, Fragment } from "preact"
import { useState } from "preact/hooks"
import HeaderLink from "./HeaderLink.astro";

const links = [
    { href: "/", text: "Solutions" },
    { href: "/expertise", text: "Expertise"},
    { href: "/clients", text: "Clients" },
    { href: "/about", text: "Contact" },
    { href: "/blog", text: "Insights" }
];

export default function Mobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <>
            <nav class="relative bg-white shadow dark:bg-gray-800">
                <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div class="flex items-center justify-between">
                        <a href="#">
                            <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/>
                        </a>

                        {/* <!-- Mobile menu button --> */}
                        <div class="flex lg:hidden md:hidden">
                            <button onClick={toggleMenu} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg xmlns="http://www.w3.org/2000/svg" class={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                        
                                <svg xmlns="http://www.w3.org/2000/svg" class={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'} `} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                    <div class={`${isMenuOpen ? 'translate-x-0 opacity-100 block' : 'hidden'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`} >
                        <div class="flex flex-col md:flex-row md:mx-6 border-2 border-red-400 rounded-lg">
                            {links.map((link) => (
                                // <HeaderLink class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href={link.href} slot="name">{link.text}</HeaderLink>
                                <a class="my-4 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href={link.href}>{link.text}</a>
                            ))}

                        </div>

                        <div class="flex justify-center md:block">
                            <a class="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

