<template>
    <section class="py-6 mx-4">
    <div class="footer-bg rounded-[32px] p-6">
        <div class="p-4 flex flex-row justify-between">
            <div class="w-1/4">
                <NuxtLink to="/" class="flex flex-col">
                    <img src="/assets/images/footer-logo.svg" class="h-12 self-start" alt="logo" title="Go Home" />  
                </NuxtLink>
            </div>
            <div class="flex flex-row gap-4 items-center justify-center">
                 <p class="font-normal text-line-base text-[24px] text-">Building the future of Urban Logistics</p>
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