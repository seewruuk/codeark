'use client'

import {useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import pages from "@/constans/pages";

const navigation = pages;

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 w-screen z-50 h-screen max-lg:z-10 pointer-events-none">


                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8 max-lg:py-10 py-14">


                    <div className="flex flex-1 justify-start">
                        <div className="hidden lg:flex lg:gap-x-12 pointer-events-auto">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href}
                                   className="text-sm font-base leading-6 text-white opacity-50 hover:opacity-100 transition-all">
                                    {item.name}
                                </a>
                            ))}
                        </div>


                        <div className="flex lg:hidden pointer-events-auto">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2 text-white bg-sky-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                            </button>
                        </div>
                    </div>



                </nav>


                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10"/>
                    <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-black px-8 py-10">

                        <div className="flex items-center justify-between">
                            <div className="flex flex-1 justify-start">
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-xl p-2 text-white bg-sky-500"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                                </button>
                            </div>
                        </div>
                        <div className="mt-20 space-y-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block  rounded-lg px-3 py-2 text-[21px] font-base leading-7 text-white hover:bg-black"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </DialogPanel>
                </Dialog>

        </header>
    )
}