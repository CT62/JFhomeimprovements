"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Add a spacer div to prevent content from going under navbar */}
            <div className="h-20"></div>
            
            {/* Add fixed top-0 and w-full to make navbar stick to top */}
            <nav className="fixed top-0 w-full bg-white border-2 border-x-0 border-t-0 border-red-500 shadow-md py-2 z-50">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-red-500 transition ease-in-out delay-300 duration-300 hover:text-white"
                                aria-controls="mobile-menu"
                                aria-expanded={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {mobileMenuOpen ? (
                                    <svg className="block size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center bold font-semibold rounded-md h-9">
                                <Image
                                    className="w-auto rounded-full border-2 border-red-500"
                                    src="/companylogo.png"
                                    alt="Your Company"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="hidden sm:block sm:ml-6 mt-1">
                                <div className="flex space-x-4">
                                    {['Home', 'Blog'].map((item, index) => (
                                        <Link key={index} href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}>
                                            <span className="relative group text-black border-red-400 px-3 py-2 text-sm font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1">
                                                {item}
                                                <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {['Home', 'Blog'].map((item, index) => (
                                <Link key={index} href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}>
                                    <span className="relative group text-black font-semibold block rounded-md px-3 py-2 text-base cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1">
                                        {item}
                                        <span className="absolute left-0 -bottom-1 w-full h-[4px] bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
