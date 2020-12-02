<template>
    <div class="vstack">
        <div class="container">
            <div class="hstack mt-48 w-full mb-48 px-3">
                <div><router-link to="/" class="underline text-universal">Home</router-link> // <router-link to="unrealengine" class="underline text-universal">Unreal Engine</router-link></div>
                <div class="spacer"></div>
            </div>
            <div class="vstack mb-96 align-start w-full px-3">
                <h1 class="large-title">Unreal Engine Renders</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Rig: GTX 1060 6GB VRAM, 16GB RAM, i5 Intel 7th Gen</h3>
                <h3 class="small-content">Textures: Quixel Megascans</h3>
            </div>
        </div>
        <div class="align-self-stretch grid gap-8 px-8 sm:p-8 grid-template" >
            <div style="--aspect-ratio: 16 / 9" class="w-full">
                <img class="shadow-sm" src="../static/Render1.jpg">
            </div>
            <div style="--aspect-ratio: 16 / 9" class="w-full">
                <img class="shadow-sm" src="../static/Render2.jpg">
            </div>
        </div>
        <hr style="width:100%; text-align:left; margin-left:0 color:#2c3e50;" class="mt-28">
        <CustomFooter />
    </div>
</template>

<script>
import CustomFooter from '../components/CustomFooter.vue'
export default {
    components: {
      CustomFooter
    }
}
</script>

<style scoped>
.grid-template {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

@media only screen and (min-width: 448px) {
  .grid-template {
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  }
}

img {
	object-fit: cover;
}

.large-title {
  font-weight: 400;
  
}

.small-content {
  font-weight: 300;
  font-size: 15px;
}

.underline {
  text-decoration: underline;
  color: #2c3e50;
}
</style>