<template>
    <section class=" py-6 mx-4">
        <div class="busReg rounded-[32px] flex flex-row justify-between p-6">
            <div class="w-2/5 p-4 flex flex-col justify-between">
                <h1 class="clash font-extrabold text-5xl text-white w-[71%]">Business Registration </h1>
                <div class="">
                    <p class="text-sm text-white">The future of Urban Logistics</p>
                </div>
            </div>
            <div class="w-2/5 bg-white rounded-[32px] ">
                <div class="flex flex-col text-center rounded-t-[32px] bg-primary-theme p-6 justify-center items-center space-y-4">
                    <h3 class="clash font-extrabold text-5xl text-white ">Partner!!!</h3>
                    <p class="font-ba font-normal text-[14px] text-white w-[45%] ">We exist because of you. We want to make sure your business never has a logistical breakdown ever again, but it takes 2 to tango. Let’s Tango.</p>
                </div>
                <form action="" class="px-[24px] py-[20px]">
                    <div class="relative mt-[16px] font-ba  text-secondary-theme">
                        <input type="text" id="name" name="name" class="border border-stroke-base border-300 text-gray-900 italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Enter your full name">
                    </div>
                    <div class="relative mt-[16px] font-ba  text-secondary-theme">
                        <input type="text" id="name" name="name" class="border border-stroke-base border-300 text-gray-900 italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Enter your business name">
                    </div>
    
                    <div class="relative mt-[16px] font-ba  text-secondary-theme">
                        <input type="email" id="email" name="email" class="border border-stroke-base border-300 text-gray-900 italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Enter your email address">
                    </div>
                    <div class="relative mt-[16px] font-ba  text-secondary-theme">
                        <input type="tel" id="phoneNo" name="phoneNo" class="border border-stroke-base border-300 text-gray-900 italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Enter your phone number">
                    </div>
    
                    <div class="relative mt-[16px] font-ba  text-secondary-theme">
                        <select name="state" id="state" class="border border-stroke-base border-300 text-gray-900 italic text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4">
                            <option value="">Select State</option>
                            <option value="2">FCT</option>
                        </select>
                    </div>
                    <button class="bg-primary-theme btn w-full px-8 py-3 rounded-[12px] mt-[16px] text-white font-ba">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </section>
    </template>
    