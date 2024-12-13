<template>
    <div style="height: 450px; width: 550px">
        <l-map ref="map" v-model:zoom="zoom" :center="[16.871311, 96.199379]"
            @move="log('move')">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap" />
                <l-marker :lat-lng="[16.871311, 96.199379]" :draggable=true></l-marker>
        </l-map>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default defineComponent({
    name: 'OpenStreetMap',
    components: {
        LMap,
        LTileLayer,
        LMarker    
    },
    setup() {
        return {
            zoom:7,
  
        }
    },
    methods: {
        log(a) {
            console.log(a);
        }
    }
})
</script>
