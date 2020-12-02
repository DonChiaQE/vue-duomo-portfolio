<template>
<div class="container">
    <div class="hstack mt-48 w-full mb-48 px-3">
        <div>
            <router-link to="/" class="underline text-universal">Home</router-link> // <router-link to="competition" class="underline text-universal">Competitions</router-link>
        </div>
        <div class="spacer"></div>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">National Robotic Challenge 2018</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">1st Place Presentation and 1st Place Content Award</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">National Air Race 2018</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">1st Place</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">National Air Race 2019</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">2nd Place</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Google Code-In 2019</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Participation</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Apple WWDC Scholarship 2020</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Participation</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Cyberthon 2020</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Participation</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Microsoft Imagine Cup 2020</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Finalists</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Amazon Build-on 2020</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Top 40</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Hacktober 2020</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Participation</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Dunman High Asean Plus 2020</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Organising Committee</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Splash Awards 2020</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Participation</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">AI v. Covid Ideation Challenge 2020</h1>
        <hr style="width:50%; text-align:left; margin-left:0 border-color:#F6F5F1;">
        <h3 class="small-content">Participation</h3>
    </div>
    <div class="hstack mt-48 w-full mb-48 px-3">
        <div>
            <router-link to="/" class="underline text-universal">Home</router-link> // <router-link to="colorizer" class="underline text-universal">Colorizer</router-link>
        </div>
        <div class="spacer"></div>
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
.large-title {
    font-weight: 400;

}

.small-content {
    font-weight: 300;
    font-size: 15px;
}
</style>
