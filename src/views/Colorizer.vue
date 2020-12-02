<template>
    <div class="container">
        <div class="hstack mt-48 w-full mb-48 px-3">
            <div><router-link to="/" class="underline text-universal">Home</router-link> // <router-link to="colorizer" class="underline text-universal">Colorizer</router-link></div>
            <div class="spacer"></div>
        </div>
        <div class="vstack mb-96 align-start w-full px-3">
                <h1 class="large-title">Restoration and Colorization</h1>
                <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                <h3 class="small-content">Tools: Photoshop and Lightroom</h3>
            </div>
        <div class="vstack mb-96 align-start w-full px-3">
            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization1.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization2.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization3.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization4.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization5.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization6.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization7.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization8.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm my-28 image" src="../static/Colorization9.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

            <div class="vstack lg:hstack align-start">
                <img class="shadow-sm mt-28 image" src="../static/Colorization10.jpg">
                <div class="spacer"></div>
                <div class="spacer">
                    <h1 class="large-title">Placeholder 1</h1>
                    <hr style="width:50%; text-align:left; margin-left:0 color:#2c3e50;">
                    <h3 class="small-content">Lorem Ipsum description</h3>
                </div>
            </div>

        </div>
        <div class="hstack mt-48 w-full mb-48 px-3">
            <div><router-link to="/" class="underline text-universal">Home</router-link> // <router-link to="colorizer" class="underline text-universal">Colorizer</router-link></div>
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
