<template>

    <nav class="fixed w-full z-40 border-gray-200 dark:bg-gray-900 dark:border-gray-700" :class="atTopOfPage ? '': 'bg-white'">
        
        <div class="max-w-screen-xl mx-auto p-4">
            <div class="relative hidden md:flex items-center justify-between">
                <router-link :to="{'name': '/'}" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://els.edu.my/themes/custom/osb5/logo.png" class="h-8" alt="Flowbite Logo" />
                </router-link>
                <button data-collapse-toggle="navbar-dropdown" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul
                        class="flex flex-wrap font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <router-link :to="{'name': '/'}"
                                class="block py-2 px-3 uppercase text-sm font-bold rounded"
                                aria-current="page">Home</router-link>
                        </li>
                      
                        <li>
                            <dropdown-menu class="block py-2 px-3 " :data="courses"  textMenu="Courses" />
                        </li>

                        <li>
                            <a href="#"
                                class="block py-2 px-3 uppercase text-sm font-bold rounded">About Els</a>
                        </li>
                    
                        <li>
                            <router-link :to="{'name': 'contact'}"
                                class="block py-2 px-3 uppercase text-sm font-bold rounded">Contact Us</router-link>
                        </li>

                        <li v-if="token">
                            <button class="bg-primary-500 rounded-full px-3 py-2">Apply Now</button>
                        </li>

                        <li v-else class="flex space-x-2">
                            <button @click="showLoginModal"  @close=closeLoginModal  class="bg-primary-500 rounded-md px-3 py-2">Login</button>
                            <button @click="showRegisterModal" @close=closeModal class="bg-primary-500 rounded-md px-3 py-2">Register</button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <sign-in-modal v-show="isLoginVisible"  @close="closeModal" />
    <sign-up-modal v-show="isRegisterVisible"  @close="closeModal" />
    
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import DropdownMenu from '../../DropdownMenu.vue';
import SignInModal from '../../SignInModal.vue';
import SignUpModal from '../../SignUpModal.vue';

let atTopOfPage = ref(true);
let token = ref(localStorage.getItem('authtoken'))

let courses = ref([])
        
async function getCourses() {
    await axios.get('courses').then(response => {
        if(response.data.status == true) {
            courses.value = response.data.courses;
        }
    })
}

function handleScroll(){
// when the user scrolls, check the pageYOffset
if(window.pageYOffset>30){
    // user is scrolled
    if(atTopOfPage.value) atTopOfPage.value = false;
}else{
    // user is at top of page
    if(!atTopOfPage.value) atTopOfPage.value = true;
}
}

onMounted( async() => {
document.addEventListener('touchstart', handleScroll, { passive: true });
document.addEventListener('scroll', handleScroll, {passive: true});

getCourses();


})

onUnmounted( async() => {
document.removeEventListener('scroll', handleScroll);
})

let isLoginVisible = ref(false)
let isRegisterVisible = ref(false)

function showLoginModal() {
    isLoginVisible.value = true;
}

function showRegisterModal() {
    isRegisterVisible.value = true;
}

function closeModal() {
    isRegisterVisible.value = false;
}

function closeLoginModal() {
    isLoginVisible.value = true;
}
</script>