import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Box, Grid, Button } from '@mui/material';
import p1 from "../../public/images/1.png"

const products = [
    { name: 'Job Tracker', href: '#', icon: ChartPieIcon },
    { name: 'Contact Tracker',href: '#', icon: CursorArrowRaysIcon },
    { name: 'Interview Tracker', href: '#', icon: FingerPrintIcon },
    { name: 'Job Search Metrics',href: '#', icon: SquaresPlusIcon },
    { name: 'Resume Checker',href: '#', icon: ArrowPathIcon },
]

export default function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
        <>
         <section id="navbar">
                <header className="bg-white">
                    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5 text-4xl font-semibold">
                            Trackify
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Home
                            </a>
                            <a href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
                                Job Tracker
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                AI Resume Builder
                            </a>
                        </PopoverGroup>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="/signin" className="text-sm mt-2 font-semibold leading-6 text-gray-900">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a href="/signup" className="text-sm font-semibold leading-6  rounded-lg p-2 ml-4 bg-customColor text-white">
                                Sign up for free 
                            </a>
                            
                        </div>
                    </nav>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-10" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                    <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                           Home
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                           Job Tracker
                                        </a>
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            AI Resume Builder
                                        </a>
                                       
                                        {/* <Disclosure as="div" className="-mx-3">
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-cutsomColor text-gray-900 hover:bg-gray-50">
                                                All Features
                                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...products,].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure> */}
                                        
                                    </div>
                                    <div>
                                        <a
                                            href="/signin"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                        <a
                                            href="/signup"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 inline-block rounded-lg p-2  bg-customColor text-white "
                                        >
                                            Sign up for free
                                        </a>
                                        {/* <a className=" rounded-lg p-2  bg-customColor text-white">
                                    Sign up for free
                                </a> */}
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>
                <Box sx={{ flexGrow: 1 }} className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
            <div className="p-10 sm:p-20">
                <p className="text-2xl sm:text-4xl text-[#190445CC]">Less Hassle,</p>
                <p className="text-4xl sm:text-7xl !important text-color2 font-[800]  leading-tight">More Interviews</p>
                <p className="text-2xl mt-3 mb-3 text-[#190445CC]">
                    Manage your job search in one place—log applications, check their status, and get reminders for interviews. Simplify your career journey today!
                </p>
                <button className="rounded-lg p-2 mt-2 bg-customColor text-white">
                    Sign up for free
                </button>
            </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <div className="p-6 sm:p-24">
                <img src={p1} className="w-full h-auto" alt="Job Search" />
            </div>
        </Grid>
    </Grid>
</Box>

            </section>
        </>
    )
}