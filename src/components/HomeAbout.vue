<template>

        <div class="pt-16 bg-white flex h-[28rem]">
            <div class="text-left justify-center px-6 py-4 m-20 w-1/3">
                <h4 class="mb-3 text-2xl font-semibold uppercase tracking-tight text-gray-900">About us</h4>
                <p class="font-semibold text-md text-gray-900 mt-10">
                    We aim to provide top-quality English language education, equipping students with the 
                    skills, knowledge, and confidence to excel in their academic, professional, and personal 
                    pursuits. 
                </p>
                <button class="mt-10 bg-green-600 hover:bg-green-700 font-semibold text-white py-2 px-4 rounded-full">
                    Discover More
                </button>
            </div>

            <img class="absolute right-0 transition ease-in-out delay-150 hover:scale-110 w-1/2 h-1/2" src="https://els.edu.my/sites/default/files/styles/webp/public/paragraph/image/2024-01/home-about-img_compressed.png.webp?itok=FVU6Hyv7" alt="Image"/>

        </div>

</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "HomeAbout",
})
</script>
