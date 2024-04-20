import React from 'react';
import {HashLink} from 'react-router-hash-link';
import Contact from './Contact';

            function Header() {
                return (
                    <header>
                        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed w-full top-0 z-10">
                            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                                <a href="/" className="flex items-center">
                                    <img
                                        src="https://flowbite.com/docs/images/logo.svg"
                                        className="mr-3 h-6 sm:h-9"
                                        alt="Flowbite Logo"
                                    />
                                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                        Agora Cognito
                                    </span>
                                </a>
                                <div className="flex items-center lg:order-2">
                                    <HashLink
                                        to={"/login"}
                                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >
                                        Log in
                                    </HashLink>
                                    <HashLink
                                        to={"/register"}
                                        className="text-white bg-blue-600 hover:bg-primary-100 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-800 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >
                                        Get started
                                    </HashLink>
                                    <button
                                        data-collapse-toggle="mobile-menu-2"
                                        type="button"
                                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        aria-controls="mobile-menu-2"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            className="hidden w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                                    id="mobile-menu-2"
                                >
                                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                        <li>
                                            <HashLink
                                                to={"/#home"}
                                                className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                                aria-current="page"
                                            >
                                                Home
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to={"/#company"}
                                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Company
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to={"/#features"}
                                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Features
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to={"https://play.unity.com/mg/other/vr-meeting-room-1"}
                                                target='blank'
                                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                VR Meet
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to={"/#team"}
                                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Team
                                            </HashLink>
                                        </li>
                                        <li>
                                            <HashLink
                                                to={"/contact"}
                                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Contact
                                            </HashLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                );
            }
            export default Header;