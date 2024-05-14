import React from 'react';
import { logo } from '../assets';

const footer = () => {
  return (
    <section class="py-10 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img class="w-auto h-9" src={logo} alt="" />

                <p class="text-base leading-relaxed text-dimWhite mt-7">A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>

               
            </div>
            <div className="flex"></div>
            <div>
                <p class="text-sm font-semibold tracking-widest text-white uppercase">Sections</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Home </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section One </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section Two </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section Tree </a>
                    </li>
                </ul>
            </div>

            <div>
                
            <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Home </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section One </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section Two </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section Tree </a>
                    </li>
                </ul>
            </div>
            <div>
                
            <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Home </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section One </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section Two </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-dimWhite transition-all duration-200 hover:text-fuchsia-400 focus:text-fuchsia-400"> Section Tree </a>
                    </li>
                </ul>
            </div>
        </div>
       
       

        
    </div>
</section>

  )
}

export default footer