<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const slides = [
    { id: '1', title1: 'Learn English at', title2: 'Els Malaysia', content: 'Language excellence for academic and career success.', imageName: 'HEP%20Desktop_1.jpg.webp?itok=omfe0hh6' },
    { id: '2', title1: 'Holiday English', title2: 'Programme', content: 'Study English, meet new friends and discover Malaysia with ELS.', imageName: 'Group%201744_1.jpg.webp?itok=9hFMTgDC' },
    { id: '3', title1: 'Newly Reopened', title2: 'ELS Subang Jaya', content: 'Contact us or visit the centre today.', imageName: 'young-woman-walking-with-relaxed-expression-fine-day%201%20%281%29.jpg.webp?itok=3lT6Z36P' },
]

</script>

<template>
    <Carousel :autoplay="4000">
        <Slide v-for="slide in slides" :key="slide.id" style="width: 100%;">
            <img alt="Placeholder" class="relative w-screen h-screen object-cover"
                :src="'https://els.edu.my/sites/default/files/styles/webp/public/slideshow/' + slide.imageName" />
            <div class="absolute text-left left-20">
                <p class="text-2xl font-bold uppercase">{{ slide.title1 }} <br> {{ slide.title2 }}</p>
                <p class="text-md font-medium mt-6">{{ slide.content }}</p>
            </div>

            <Pagination class="absolute bottom-10 left-10" />

        </Slide>
    </Carousel>
</template>

<style>
.carousel__pagination-button {
    background-color: black;
}
</style>