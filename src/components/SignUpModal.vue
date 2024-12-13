<template>
    <div id="modal-backdrop" class="fixed my-10 z-50 inset-0 flex justify-center items-center ">
      <div id="modal" class="bg-white rounded-3xl flex flex-col justify-between m-4 w-full md:w-2/5 h-auto">
          <!-- Modal Header -->
          <header id="modal-header" class="px-4 py-6 items-center border-b-2 border-secondary-200 mb-6">
              <h1 class="text-gray-800 text-2xl">Sign Up</h1>
          </header>
  
          <!-- Modal Body -->
          <section id="modal-body" class="px-4 py-6">
                <div class="w-full relative group">
                  <input type="text" name="name" id="name" v-model="form.name" required
                      class="rounded-2xl w-full p-3 peer text-sm my-1 shadow-md outline-none"
                  />
                  <label for="name" class="transform transition-all absolute top-0 left-0 h-full flex items-center 
                      pl-4 text-sm group-focus-within:text-md peer-focus:text-md group-focus-within:h-1/2 
                      peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full 
                      group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:pb-2 peer-valid:pb-2 
                      group-focus-within:top-1.5 peer-valid:top-1.5">User name</label>
                </div>
              
                <div class="w-full relative group mt-8">
                    <input type="text" name="email" id="email" required v-model="form.email"
                        class="rounded-2xl w-full p-3 peer text-sm my-1 shadow-md outline-none"
                    />
                    <label for="email" class="transform transition-all absolute top-0 left-0 h-full flex items-center 
                        pl-4 text-sm group-focus-within:text-md peer-focus:text-md group-focus-within:h-1/2 
                        peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full 
                        group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:pb-2 peer-valid:pb-2 
                        group-focus-within:top-1.5 peer-valid:top-1.5">Email</label>
                </div>
  
                <div class="w-full relative group mt-8">
                    <input type="text" name="password" id="password" required v-model="form.password"
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
                  Register
                </button>
  
              <div class="flex justify-end">
                  <p @click="close" class="py-3 text-xs font-bold text-primary-500">
                      Cancel
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
      name: "SignUpModal",
      components: {
      },
      setup() {
        const form = reactive({
            name: '',
            email: '',
            password: '',
            isAdmin: '0'
        })

        async function submit(){
            await axios.post('register', {
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    isAdmin: form.isAdmin
                })
            .then(response => {
                console.log(response);
                if (response.status == 200) {
                    alert(response.data.message);
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