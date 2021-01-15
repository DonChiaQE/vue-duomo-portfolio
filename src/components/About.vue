<template>
<div class="vstack lg:hstack lg:space-40 py-48">
    <div class="vstack sm:hstack sm:space-48">
        <img src="../static/Headshot.webp" alt="Avatar" class="w-320 h-320 sm:h-224 sm:w-224 rounded-10">
        <div class="vstack w-384 py-48 sm:h-320 sm:w-320">
            <div class="text-24 text-center">Don, 17, Singapore</div>
            <div class="text-center">Student | Indie App and Web Developer | Photographer | Musician | Colorizer | UI/UX Designer</div>
        </div>
    </div>
    <div class="w-384 py-48 sm:py-0 sm:h-224 hstack">
        <div class="type-wrap visible">
            <span id="typed2" class="visible" style="opacity: 100% !important;" />
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
span {
    color: #67E0BA;
}

.text-24 {
    font-weight: 500;
    font-size: 24px;
}

.typing {
    color: #000000 !important;
    opacity: 100% !important;
    font-size: 38px;
    text-align: center;
}
</style>
