<template>
    <div class="mt-16 container mx-auto max-w-6xl">
    
        <div class="m-10 mx-auto w-full">
            <div class="grid grid-cols-10">
                <div class="col-span-full lg:col-span-5 px-4 space-y-4 mx-12">
                    <div>
                        <label for="name" class="text-md flex justify-start mb-4 font-semibold text-gray-500">Enter your name</label>
                        <input-ui id="name" ref="name"  type="text" v-model:value="form.name"  />
                    </div>

                    <div>
                        <label for="email" class="text-md flex justify-start mb-4 font-semibold text-gray-500">Enter your email</label>
                        <input-ui id="email" ref="email" type="text" v-model:value="form.email" />
                    </div>

                    <div>
                        <label for="message" class="text-md flex justify-start mb-4 font-semibold text-gray-500">Enter your message</label>
                        <text-area-ui id="message" ref="message" type="text" v-model:value="form.message"  />
                    </div>

                    <div class="sm:mb-4">
                        <button-loading :isLoading="loading" @click="isSubmitting" class="text-white" bgColor="bg-orange-500 mb-4 hover:bg-orange-900">Submit</button-loading>
                    </div>
                </div>

                <div class="col-span-full lg:col-span-5 me-12">
                    <div class="">
                        <open-street-map />
                    </div>
                </div>
            </div>
        </div>
            
    </div>
</template>

<script lang="js">
import { defineComponent, ref, reactive } from 'vue'
import InputUi from '@/components/InputUi.vue'
import ButtonLoading from '@/components/ButtonLoading.vue'
import TextAreaUi from '@/components/TextAreaUi.vue'
import OpenStreetMap from '@/components/OpenStreetMap.vue'

export default defineComponent({
    name: "ConnectView",
    components: {
        InputUi,
        ButtonLoading,
        TextAreaUi,
        OpenStreetMap
    },
    setup() {
        let loading = ref(false)
        const form = reactive({
            name: '',
            email: '',
            message: ''
        });
    
        function isSubmitting() {
            loading.value = !loading.value;
            console.log(form);
           
        }

        return {
            isSubmitting,
            loading,
            form
        }
    }
})
</script>
