<template>

    <div class="group relative cursor-pointer">
        <div>
            <a class="inline-flex w-full justify-center uppercase text-sm font-bold mx-2" id="menu-button"
                aria-expanded="true" aria-haspopup="true">
                {{ textMenu }}
                <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                    data-slot="icon">
                    <path fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
                </svg>
            </a>
        </div>

        <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
    <Transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
        <div class="invisible absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-yellow-100 shadow-lg ring-1 ring-black/5 focus:outline-none group-hover:visible"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div v-for="d in data" :key="d.id" class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" -->
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600" role="menuitem" tabindex="-1"
                    id="menu-item-0">{{ d.name }}</a>
            </div>
        </div>
    </Transition>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DropdownMenu',
    props: {
        textMenu: {
            type: String,
            default: "Text"
        },
        data: Object
    }
})
</script>