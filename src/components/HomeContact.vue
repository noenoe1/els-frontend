<template>

    <div class="w-full h-5/6 mt-20 pt-16">
        <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer bg-primary-400 flex h-[28rem]">
            <div class="text-left justify-center px-6 py-4 m-20">
                <h4 class="mb-3 text-2xl font-semibold uppercase tracking-tight text-white">Wait no more. Join us</h4>
                <p class="font-semibold text-md text-white mt-10">Contact ELS today to find out how our English programmes can help you achieve
                    your goals.</p>
                <button class="mt-10 bg-green-600 hover:bg-green-700 font-semibold text-white py-2 px-4 rounded-full">
                    Contact Us
                </button>
            </div>
            <div class="absolute right-0 -mt-16">

                <img class="transition ease-in-out delay-150 hover:scale-110" src="https://els.edu.my/sites/default/files/styles/webp/public/paragraph/image/2023-10/contact-us.png.webp?itok=rqwsnXo1" alt="Image"/>

            </div>

        </div>
    </div>

</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "HomeContact",
})
</script>
