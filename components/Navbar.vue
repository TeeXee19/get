<template>
    <nav id="navigation" class="bg-primary-theme md:bg-white custom-container py-4 sm:px-0 md:px-0 md:py-2 sticky top-0 z-40 font-body shadow-card hover:shadow-cardhover transition-all duration-500 h-fit border-b border-200">
        <div class="flex gap-8 items-center justify-between flex-wrap p-2 pt-0 pb-0 max-w-7xl mx-auto">
    
            <NuxtLink to="/" class="flex items-center flex-no-shrink">
                <img src="/assets/images/Logo.svg" class="h-6" alt="logo" title="Go Home" />
            </NuxtLink>
    
            <div class="block md:hidden">
                <button type="button" class="inline-flex items-center justify-center border p-1 rounded text-grayTheme-400 border-400 hover:border-white focus:border-white hover:text-white focus:text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" @click="toggleVisibility">
                    <span class="sr-only">Open main menu</span>
    
                    <svg v-if="!isVisible" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
    
                    <svg v-if="isVisible" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div :class="{ hidden: !isVisible }" class="text-lg font-medium text-grayTheme-gray-600 gap-8 md:flex md:items-center md:w-auto md:ml-10 justify-between bg-primary-theme md:bg-white">
                <div class="flex gap-4 font-medium p-4 pb-0 md:p-0 mt-4 flex-col md:flex-row md:mt-0 ">    
                    <NuxtLink to="/about" class="border rounded-lg border-black-700 block cursor-pointer text-sm lg:text-base pb-2 p-2">
                        About GET
                    </NuxtLink>
                    <NuxtLink to="/business" class="border rounded-lg border-black-700 block cursor-pointer text-sm lg:text-base pb-2 p-2">
                        Business
                    </NuxtLink>
                    <NuxtLink to="/track" class="border rounded-lg border-black-700 block cursor-pointer text-sm lg:text-base pb-2 p-2">
                        Track
                    </NuxtLink>
                    <NuxtLink to="/report" class="border rounded-lg border-black-700 block cursor-pointer text-sm lg:text-base pb-2 p-2">
                        Report
                    </NuxtLink>
    
                </div>
            </div>
    
        </div>
    </nav>
    </template>
    
    <script lang="ts" setup>
    // import { ref, onMounted } from "@nuxtjs/composition-api";
    const isVisible = ref(false);
    const toggleVisibility = () => {
        isVisible.value = !isVisible.value;
    };
    
    </script>
    