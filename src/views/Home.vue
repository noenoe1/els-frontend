<template>
    <div class="">
        <div class=" w-full">
            <home-carousel />
        </div>

        <top-courses />

        <home-about />

        <home-contact/>

    </div>

</template>

<script lang="js">
import { defineComponent } from 'vue';
import TopCourses from '@/components/TopCourses.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';
import HomeContact from '@/components/HomeContact.vue';
import HomeAbout from '@/components/HomeAbout.vue';

export default defineComponent({
    name: "HomeView",
    components: {
        TopCourses,
        HomeCarousel,
        HomeContact,
        HomeAbout
    },

})

</script>