<template>
  <div id="modal-backdrop" class="fixed my-10 z-50 inset-0 flex justify-center items-center ">
    <div id="modal" class="bg-white rounded-3xl flex flex-col justify-between m-4 w-full md:w-2/5 h-auto">
        <!-- Modal Header -->
        <header id="modal-header" class="px-4 py-6 items-center border-b-2 border-secondary-200 mb-6">
            <h1 class="text-gray-800 text-2xl">Sign in to your account</h1>
        </header>

        <!-- Modal Body -->
        <section id="modal-body" class="px-4 py-6">
            
            <div class="w-full relative group">
                <input type="email" name="email" id="email" v-model="form.email" required
                    class="rounded-2xl w-full p-3 peer text-sm my-1 shadow-md outline-none"
                />
                <label for="email" class="transform transition-all absolute top-0 left-0 h-full flex items-center 
                    pl-4 text-sm group-focus-within:text-md peer-focus:text-md group-focus-within:h-1/2 
                    peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full 
                    group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:pb-2 peer-valid:pb-2 
                    group-focus-within:top-1.5 peer-valid:top-1.5">Email or User name</label>
            </div>

            <div class="w-full relative group mt-8">
                <input type="password" name="password" id="password" v-model="form.password" required
                    class="rounded-2xl w-full p-3 peer text-sm my-1 shadow-md outline-none"
                />
                <label for="password" class="transform transition-all absolute top-0 left-0 h-full flex items-center 
                    pl-4 text-sm group-focus-within:text-md peer-focus:text-md group-focus-within:h-1/2 
                    peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full 
                    group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:pb-2 peer-valid:pb-2 
                    group-focus-within:top-1.5 peer-valid:top-1.5">Password</label>
            </div>
            <button @click="submit"
                type="button"
                class="rounded-2xl bg-primary-500 shadow-md p-3 mt-8 w-full text-white"
            >
                Login
            </button>

            <div class="flex justify-end">
                <p class="py-3 text-xs font-bold text-primary-500">
                    Forgot your password?
                </p>
            </div>

        </section>

    </div>
  </div>
</template>

<script lang="js">
import axios from 'axios';
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: "SignInModal",
    components: {
    },
    setup(){
        const form = reactive({
            email: '',
            password: ''
        })

        async function submit(){
            await axios.post('login', {
                    email: form.email,
                    password: form.password
                })
            .then(response => {
                console.log(response);
                if (response.data.status == true) {
                    localStorage.setItem('authtoken',response.data.authorisation.token);
                    location.reload();
                }
            })
            .catch(function (error) {
                console.log(error);

            });
        }

        return {
            form,
            submit
        }
    }
})
</script>