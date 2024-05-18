import React from 'react';
import { logo } from '../assets';

const Footer = () => {
    return (
        <section className="py-10 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img className="w-auto h-9" src={logo} alt="" />
                        <p className="text-base leading-relaxed text-dimWhite mt-7">
                            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <div>
                            <p className="text-sm font-semibold tracking-widest text-white uppercase">Sections</p>
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section One</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section Two</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section Tree</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                    <div>
                            <p className="text-sm font-semibold tracking-widest text-white uppercase">Sections</p>
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section One</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section Two</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section Tree</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                    <div>
                            <p className="text-sm font-semibold tracking-widest text-white uppercase">Sections</p>
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section One</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section Two</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section Tree</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                    <div>
                            <p className="text-sm font-semibold tracking-widest text-white uppercase">Sections</p>
                            <ul className="mt-6 space-y-4">
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section One</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section Two</a>
                                </li>
                                <li>
                                    <a href="#" className="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400">Section Tree</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
