<template>
<div class="container">
    <div class="hstack mt-48 w-full mb-48 px-3">
        <div>
            <router-link to="/" class="underline text-universal">Home</router-link> // <router-link to="colorizer" class="underline text-universal">Colorizer</router-link>
        </div>
        <div class="spacer"></div>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <h1 class="large-title">Restoration and Colorization</h1>
        <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
        <h3 class="small-content">Tools: Photoshop and Lightroom</h3>
    </div>
    <div class="vstack mb-96 align-start w-full px-3">
        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization1.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">American Soldier, Circa. 1940s</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 1-2 hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization2.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">WWI Australian Soldier</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 2-3hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization3.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">Rachmaninov</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 1-2 hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization4.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">The Red Baron</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 2-3 hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization5.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">Family Gathering</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;" >
                <h3 class="small-content">Time to complete: 6-8 hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization6.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">Creators of Pong</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 4-6 hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization7.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">Bela Bartok</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 1-2 hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization8.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">Apollo 12</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 2-3 hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization9.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">WWII Soldier, 1943</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 1-2 hours</h3>
            </div>
        </div>

        <div class="vstack lg:hstack align-start">
            <img src="../static/Colorization10.webp" alt=" " class="shadow-sm my-28 image">
            <div class="spacer"></div>
            <div class="spacer">
                <h1 class="large-title">Audie Murphy</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Time to complete: 4-6 hours</h3>
            </div>
        </div>

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
import CustomFooter from '../components/CustomFooter';
export default {
    components: {
        CustomFooter
    }
}
</script>

<style scoped>
.image {
    width: 100%;
    height: 100%;
}

@media only screen and (min-width: 991px) {
    .image {
        width: 50%;
        height: 50%;
    }
}

.underline {
    text-decoration: underline;
    color: #2c3e50;
}

.large-title {
    font-weight: 400;

}

.small-content {
    font-weight: 300;
    font-size: 15px;
}
</style>
