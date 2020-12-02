<template>
    <div class="vstack lg:hstack px-3">
        <div class="vstack align-start w-448 lg:w-auto py-28 w-full">
            <h5 class="small-header">Icing on the cake</h5>
            <h1 class="large-title title-color">Hobbies</h1>
            <h3 class="small-content">All work and no play makes Jack a dull boy.</h3>
        </div>
        <div class="spacer"></div>
        <div class="spacer">
            <div class="vstack">
                <div class="vstack lg:hstack">
                    <CustomCard title="Analog Photography" content="Yep, that's what I do as a hobby. Plain ole' digital just
        wasn't giving me enough kicks. Film never dies." link="/photos" text="Learn More" />
                    <CustomCard title="Flight Simulators" content="Once you have tasted flight, you will forever walk the earth
        with your eyes turned skyward, for there you have been, and there you will always long to return." />
                </div>
                <div class="vstack lg:hstack w-full">
                    <div class="spacer"></div>
                    <CustomCard title="Unreal Engine Render" content="Original hyper-realistic renders created by me using Epic Games' Unreal Engine." link="/unrealengine" text="Learn More" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomCard from './CustomCard'
export default {
    components: {
        CustomCard
    }
}
</script>

<style scoped>
.small-header {
  font-weight: 300;
  font-size: 15px;
  opacity: 75%;
}

.large-title {
  font-weight: 400;
  
}

.small-content {
  font-weight: 300;
  font-size: 15px;
}
</style>