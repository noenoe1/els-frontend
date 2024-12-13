<template>
    <p class="font-medium" :class="[textColor,fontSize]">
        <slot></slot>
    </p>
</template>

<script lang='js'>
export default {
    name : 'TextLabel',
    props: {
        textColor : {
            type: String,               
            default: 'text-gray-800',            
        },
        fontSize : {
            type: String,
            default: 'text-sm'
        }    
    }
}
</script>
