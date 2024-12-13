<template>
  <footer class="footer-1 bg-gray-100 pt-20 sm:py-12">
    <div class="container mx-auto px-4">

      <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
          <h5 class="text-xl font-bold mb-6">Support</h5>
          <ul class="list-none footer-links">
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Our COVID-19 Response</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cancellation options</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Safety information</a>
            </li>
          </ul>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 class="text-xl font-bold mb-6">Company</h5>
          <ul class="list-none footer-links">
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About us</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Community Blog</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Careers</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 class="text-xl font-bold mb-6">Contact</h5>
          <ul class="list-none footer-links">
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Partnerships</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">FAQ</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Get in touch</a>
            </li>
          </ul>
        </div>
        <div class="px-4 mt-4 w-1/4 sm:mx-auto xl:mt-0 xl:ml-auto">
          <text-label>Subscribe to see secret deals prices drop the moment you sign up!</text-label>
          <div class=" mt-3 w-full flex">
              <input type="text" class=" text-gray-600 p-2  rounded-l-lg" placeholder="john@mail.com"/>
              <button class=" p-2 bg-indigo-400  rounded-r-lg hover: bg-indigo-300" type="button">Subscribe</button>
          </div>
        </div>
      </div>

      <div class="sm:flex sm:flex-wrap justify-between sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
        <text-label> © Copyright Traveler 2022 </text-label>

        <div class="flex">
          <img width="278" height="30" src="https://modtel.travelerwp.com/wp-content/uploads/2022/06/Frame-3182.svg" class="attachment-large size-large" alt="" loading="lazy" />
        </div>
      </div>
        
    </div>
  </footer>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import TextLabel from '@/components/TextLabel.vue';

export default defineComponent({
  name: "FooterSection",
  components: {
    TextLabel,
  }

})
</script>