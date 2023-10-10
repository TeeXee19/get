<template>
<section class="py-6">
    <div class="hero py-8">
        <div class="ml-[100px] w-[500px] h-[382px] bg-white border border-gray-200 rounded-[32px] shadow">
            <div class="sm:hidden">
                <select id="tabs" class="bg-white border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option>Statistics</option>
                    <option>Services</option>
                    <option>FAQ</option>
                </select>
            </div>
            <ul class="hidden text-xl font-ba font-bold font-lg text-center text-black-500 divide-x divide-gray-100 rounded-[32px] sm:flex bg-white" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li class="w-full rounded-tl-[32px]">
                    <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="flex items-center w-full justify-center space-x-2 px-4 py-2 rounded-tl-lg bg-white hover:bg-gray-100 focus:outline-none rounded-tl-[32px] ">
                        <img src="/assets/images/hand-icon.svg" alt="">
                        <span>LETs GET</span>
                    </button>
                </li>
                <li class="w-full rounded-tr-[32px]">
                    <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="flex items-center w-full justify-center space-x-2 px-4 py-2 bg-white hover:bg-gray-100 focus:outline-none rounded-tr-[32px]">
                        <img src="/assets/images/bicycle.svg" alt="">
                        <span class="text-secondary-theme">Go GET</span>
                    </button>
                </li>
            </ul>
            <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
                <div class="bg-white rounded-lg md:p-8" id="stats" role="tabpanel">
                    <h4 class="text-black-500 text-[32px] font-extrabold clash">Request a delivery now.</h4>
                    <form action="">
                        <div class="relative mt-[16px] font-ba italic text-secondary-theme">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <img src="/assets/images/location-icon.svg" alt="">
                            </div>
                            <input type="text" id="input-group-1" class="border border-stroke-base border-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Enter an address for pickup">
                        </div>

                        <div class="relative mt-[16px] font-ba italic text-secondary-theme">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <img src="/assets/images/location-icon.svg" alt="">
                            </div>
                            <input type="text" id="input-group-1" class="border border-stroke-base border-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Enter an address for drop-off">
                        </div>
                        <div class="flex mt-[32px] font-ba justify-between">
                            <button class="bg-primary-theme btn px-8 py-3 rounded-[12px] text-white " type="button">Request a Delivery</button>
                            <button class="bg-white border btn px-8 py-3 rounded-[12px] text-secondary-theme " type="button">Schedule a Delivery</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
        <div class="ml-[100px] p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="64" viewBox="0 0 146 64" fill="none">
                <path d="M43.4941 45.84C50.3565 45.84 55.2703 42.64 57.2189 38.8H57.5578V46.72C57.5578 54.08 55.5245 56.32 47.3066 56.32C38.8345 56.32 36.7165 54.48 36.7165 49.04H27.6513C27.6513 58.64 35.1068 64 47.0524 64C59.3369 64 66.6229 58.48 66.6229 46.72V9.84H58.2356V16.4H57.8967C55.8634 11.76 50.6107 9.04 43.833 9.04C31.9721 9.04 25.4486 16.24 25.4486 27.44C25.4486 38.64 31.8874 45.84 43.4941 45.84ZM34.5984 27.44C34.5984 19.28 38.072 16.4 45.951 16.4C52.9829 16.4 57.5578 19.52 57.5578 26.16V28.64C57.5578 35.36 52.9829 38.48 46.1205 38.48C38.1567 38.48 34.5984 35.6 34.5984 27.44Z" fill="white" />
                <path d="M93.9355 50.4C105.288 50.4 112.828 45.12 112.828 36.96V36.24H103.763V36.88C103.763 40.48 101.052 42.72 94.0202 42.72C85.2093 42.72 82.4135 39.04 82.0746 31.76H112.659C112.913 30.56 113.167 28.4 113.167 26.32C113.167 15.44 105.203 9.04 93.8508 9.04C81.3121 9.04 73.5178 17.36 73.5178 29.68C73.5178 42.08 80.0413 50.4 93.9355 50.4ZM93.6813 16.32C100.883 16.32 104.78 19.2 104.441 26H82.1593C82.6676 19.84 85.7176 16.32 93.6813 16.32Z" fill="white" />
                <path d="M137.677 49.6C140.557 49.6 143.438 49.28 145.217 48.88V41.84H140.049C134.373 41.84 132.509 41.12 132.509 36.96V17.04H145.217V9.84H132.509V0H125.477L123.528 9.84H116.327V17.04H123.359V37.36C123.359 46.32 128.273 49.6 137.677 49.6Z" fill="white" />
                <path d="M13.2489 27.92C13.2489 18.8456 17.5311 12.3971 25.1945 10.2761V13.6008C20.4222 15.1833 16.9766 19.1928 16.9766 27.92C16.9766 36.4112 20.4467 40.4554 25.1945 42.1228V45.5083C17.5674 43.3322 13.2489 36.9165 13.2489 27.92Z" fill="white" />
                <path d="M0.54068 27.92C0.54068 18.8457 4.82295 12.3971 12.4863 10.2762V13.6008C7.71402 15.1834 4.2684 19.1928 4.2684 27.92C4.2684 36.4112 7.73848 40.4554 12.4863 42.1228V45.5083C4.8592 43.3322 0.54068 36.9166 0.54068 27.92Z" fill="white" />
            </svg>
        </div>
    </div>
</section>
<section class="py-6 mx-4 px-6">
    <div class="grid grid-cols-2 py-6 gap-4 place-items-center justify-center">
        <div class="parcel w-[632px] h-[600px] p-6">
            <span class="text-secondary-theme font-extrabold clash text-[32px] leading-2 mb-0">got a </span>
            <p class="text-primary-theme font-extrabold clash text-[48px] leading-sm">

                Larger Parcel</p>
            <p class="font-ba normal text-[16px] w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, minima accusamus dolorum ullam at eligendi placeat, voluptas nostrum earum, fugiat molestiae atque sit dolore perferendis dicta accusantium aut ipsum enim?</p>
            <button class="bg-primary-theme btn px-8 py-3 rounded-[12px] text-white mt-8" type="button">Request Pickup</button>
        </div>
        <div class="hirecar  w-[632px] h-[600px] p-6">
            <span class="text-secondary-theme font-extrabold clash text-[32px] mb-0">hire a </span>
            <p class="text-primary-theme font-extrabold clash text-[48px]">Get Car</p>
            <p class="font-ba normal text-[16px] w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, minima accusamus dolorum ullam at eligendi placeat, voluptas nostrum earum, fugiat molestiae atque sit dolore perferendis dicta accusantium aut ipsum enim?</p>
            <button class="bg-primary-theme btn px-8 py-3 rounded-[12px] text-white mt-8" type="button">Hire a Vehicle</button>
        </div>
    </div>
</section>
<section class="py-6 mx-4">
    <div class="bg-line-base rounded-[32px] flex flex-row justify-between p-6">
        <div class="w-1/4 p-4 h-fit self-end">
            <h1 class="clash font-extrabold text-5xl text-white">Our Services</h1>
        </div>
        <div class="w-2/4 grid grid-cols-2 gap-4">
            <div class="bg-white rounded-[40px] px-10 py-12">
                <h4 class="clash font-bold text-[24px] w-1/4 text-textMain-base">Parcel Delivery</h4>
                <button class="bg-primary-theme btn px-8 py-3 rounded-[12px] text-white mt-8 w-[75%]" type="button">Learn more</button>
            </div>
            <div class="bg-white rounded-[40px] px-10 py-12">
                <h4 class="clash font-bold text-[24px] w-1/4 text-textMain-base">Food Delivery</h4>
                <button class="bg-primary-theme btn px-8 py-3 rounded-[12px] text-white mt-8 w-[75%]" type="button">Learn more</button>
            </div>
            <div class="bg-white rounded-[40px] px-10 py-12">
                <h4 class="clash font-bold text-[24px] w-1/4 text-textMain-base">Parcel Delivery</h4>
                <button class="bg-primary-theme btn px-8 py-3 rounded-[12px] text-white mt-8 w-[75%]" type="button">Learn more</button>
            </div>
            <div class="bg-white rounded-[40px] px-10 py-12">
                <h4 class="clash font-bold text-[24px] w-1/4 text-textMain-base">Parcel Delivery</h4>
                <button class="bg-primary-theme btn px-8 py-3 rounded-[12px] text-white mt-8 w-[75%]" type="button">Learn more</button>
            </div>
        </div>
    </div>
</section>

<section class="py-6 mx-4">
    <div class="partner-bg rounded-[32px] flex flex-row justify-between p-6">
        <div class="w-2/5 p-4 flex flex-col justify-between">
            <h1 class="clash font-extrabold text-5xl text-primary-theme w-[71%]">We want to partner with you</h1>
            <div class="self-end">
                <h1 class="clash font-extrabold text-4xl text-line-base ">Do you own a fleet of dispatch carriers?</h1>
                <p class="text-sm"> Lorem ipsum dolor sit amet consectetur. Pellentesque turpis volutpat sagittis nunc egestas tellus nibh sed praesent. Lectus sed mattis pharetra sit sapien at condimentum. </p>
            </div>
        </div>
        <div class="w-2/5 ">
            <form action="">
                <div class="relative mt-[16px] font-ba  text-secondary-theme">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <img src="/assets/images/bag-icon.svg" alt="">
                    </div>
                    <input type="text" id="name" name="name" class="border border-stroke-base border-300 text-gray-900 italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4" placeholder="Your name or name of organization">
                </div>

                <div class="relative mt-[16px] font-ba  text-secondary-theme">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <img src="/assets/images/email-icon.svg" alt="">
                    </div>
                    <input type="email" id="email" name="email" class="border border-stroke-base border-300 text-gray-900 italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4" placeholder="Enter your email address">
                </div>
                <div class="relative mt-[16px] font-ba  text-secondary-theme">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <img src="/assets/images/phone-icon.svg" alt="">
                    </div>
                    <input type="tel" id="phoneNo" name="phoneNo" class="border border-stroke-base border-300 text-gray-900 italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4" placeholder="Enter your phone number">
                </div>
                <div class="relative mt-[16px]  text-secondary-theme">
                    <label for="fleet" class="text-textMain-base font-bold text-[12px] font-rhd">What is the size of your fleet?</label>
                    <input type="text" id="fleet" name="fleet" class="border border-stroke-base border-300 text-gray-900 font-ba italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Just type in the number of motorcycles you have">
                </div>

                <div class="relative mt-[16px]  text-secondary-theme">
                    <label for="location" class="text-textMain-base font-bold text-[12px]">Where is your fleet located? <span class="font-normal">City, Country</span></label>
                    <input type="text" id="location" name="location" class="border border-stroke-base border-300 text-gray-900 font-ba italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Just type in the city and country">
                </div>
                <button class="bg-primary-theme btn w-full px-8 py-3 rounded-[12px] mt-[16px] text-white font-ba">
                    Request pickup
                </button>
                <h3 class="text-center text-line-base font-bold text-[12px] mt-2 font-rhd">We will get back to within 48 hours.</h3>
            </form>
        </div>
    </div>
</section>

<section class="py-6 mx-4">
    <div class="footer-bg rounded-[32px] p-6">
        <div class="p-4 flex flex-row justify-between">
            <div class="w-1/4">
                <NuxtLink to="/" class="flex flex-col">
                    <img src="/assets/images/footer-logo.svg" class="h-12 self-start" alt="logo" title="Go Home" />
                    <p class="font-normal text-line-base text-[12px] italic">Building the future of Urban Logistics</p>
                </NuxtLink>
            </div>
            <div class="flex flex-row gap-4 items-center justify-center">
                <NuxtLink to="/" class="flex flex-row border-2 py-4 px-2 rounded-[12px] border-line-base items-center">
                    <img src="/assets/images/appstore-icon.svg" class="h-8 mr-2" alt="logo" title="Go Home" />
                    <p class="flex flex-col">
                        App Store
                        <span class="font-rhd text-[10px]">Coming soon</span>
                    </p> 
                </NuxtLink>
                <NuxtLink to="/" class="flex flex-row border-2 py-4 px-2 rounded-[12px] border-line-base items-center">
                    <img src="/assets/images/playstore-icon.svg" class="h-8 mr-2" alt="logo" title="Go Home" />
                    <p class="flex flex-col">
                        Play Store
                        <span class="font-rhd text-[10px]">Coming soon</span>
                    </p> 
                </NuxtLink>
            </div>
        </div>
        <hr class="bg-line-base border-1 border-line-base">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
            <div>
                <h2 class="mb-2 font-ba font-bold text-line-base">Services</h2>
                <ul class="text-grayTheme-500 space-y-4 font-ba text-sm font-normal">
                    <li class="">
                        <NuxtLink to="/riders" class=" hover:underline">Riders</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/cars" class="hover:underline">GET Cars</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/fleet" class="hover:underline">Fleet</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/business" class="hover:underline">Businesses</NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-2 font-ba font-bold text-line-base">Support</h2>
                <ul class="text-grayTheme-500 space-y-4 font-ba text-sm  font-normal">
                    <li class="">
                        <NuxtLink to="/tracking" class="hover:underline">Track Delivery</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/report" class="hover:underline">Report a Case</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/tos" class="hover:underline">Terms of Service</NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-2 font-ba font-bold text-line-base">Get</h2>
                <ul class="text-grayTheme-500 space-y-4 font-ba text-sm  font-normal">
                    <li class="">
                        <NuxtLink to="/about" class="hover:underline">About GET</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/team" class="hover:underline">The Team</NuxtLink>
                    </li>
                    <li class="">
                        <NuxtLink to="/investment" class="hover:underline">Investment</NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-2 font-ba font-bold text-line-base">Contact</h2>
                <ul class="text-grayTheme-500 space-y-4 font-ba text-sm  font-normal">
                    <li class="font-ba">
                        <NuxtLink to="/about" class="hover:underline">Send Us a Message</NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <NuxtLink to="https://facebook.com" class="hover:text-gray-900 dark:hover:text-white">
                  <img src="/assets/images/facebook.svg">
              </NuxtLink>
              <NuxtLink to="https://twitter.com" class="hover:text-gray-900 dark:hover:text-white">
                <img src="/assets/images/twitter-icon.svg">
              </NuxtLink>
              <NuxtLink to="https://youtube.com" class="hover:text-gray-900 dark:hover:text-white">
                <img src="/assets/images/insta-icon.svg">
              </NuxtLink>
          </div>
            </div>
         </div>
    </div>
</section>
</template>
