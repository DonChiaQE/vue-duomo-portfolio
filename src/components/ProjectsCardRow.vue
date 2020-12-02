<template>
    <div class="vstack lg:hstack px-3">
        <div class="vstack align-start show lg:hide py-28 w-full">
            <h5 class="small-header">Proven and tested</h5>
            <h1 class="large-title">Projects</h1>
            <h3 class="small-content">Having all these skills wouldn't be much of a use if they weren't applied.</h3>
        </div>
        <div class="spacer">
            <div class="vstack">
                <div class="vstack lg:hstack">
                    <CustomCard title="NOSSAFLEX" content="I helped found a company alongside three other international
            developers. Our end goal? To unify all analog photographers." />

                    <CustomCard title="Duomo" content="The latest breakthrough in frontend web development, a quick way to build UI from scratch with close to no CSS." />
                </div>
                <div class="vstack lg:hstack w-full">
                    <CustomCard title="Competitions" content="A list of competitions and events I've participated in or organised." />
                    <div class="spacer"></div>
                </div>
            </div>
        </div>
        <div class="spacer"></div>
        <div class="text-right vstack align-end hide lg:show py-28">
            <h5 class="small-header">Proven and tested</h5>
            <h1 class="large-title">Projects</h1>
            <h3 class="small-content">Having all these skills wouldn't be much of a use if they weren't applied.</h3>
        </div>
    </div>
</template>

<script>
import CustomCard from './CustomCard.vue'
export default {
    components: {
        CustomCard,
    }
}
</script>

<style scoped>
.small-header {
  font-weight: 200;
  font-size: 10px;
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