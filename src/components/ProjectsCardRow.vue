<template>
<div class="vstack lg:hstack px-3">
    <div class="vstack align-start unhidden lg:hidden py-28 w-full">
        <h5 class="small-header">Proven and tested</h5>
        <h1 class="large-title title-color">Projects</h1>
        <h3 class="small-content w-224">Having all these skills wouldn't be much of a use if they weren't applied.</h3>
    </div>
    <div class="spacer hstack">
            <div class="align-self-stretch grid grid-cols-1 lg:grid-cols-2 gap-8">
                <CustomCardWebsite title="NOSSAFLEX" content="I helped found a company alongside three other international
            developers. Our end goal? To unify all analog photographers." text="Our Website" link="https://nossaflex.io" />
                <CustomCardWebsite title="Duomo" content="The latest breakthrough in frontend web development, a quick way to build UI from scratch with close to no CSS." text="Github" link="https://github.com/zaydek/duomo" />
                <CustomCard title="Competitions" content="A list of competitions and events I've participated in or organised." link="/competition" text="Learn More" />
                <!--router-link to="/colorizer" class="vstack router-link"-->
                <CustomCard title="Colorizer" content="You like history? I do too, but I prefer to see it in color.
            It's a long process but almost always worth the time." link="/colorizer" text="Learn More" />
                <CustomCardWebsite title="DHAP Website" content="Dunman High Asean Plus website, designed and coded by yours truly. Made with Vue.js and Duomo, hosted on Netlify. Currently Work in Progress." text="Our Website" link="https://agitated-easley-4e8db6.netlify.app/" />
                <CustomCard title="WiseGo" content="2021 Fintech Internship a Work in Progress. Dabbling in Vue.js and Bootstrap." />
                <!--/router-link-->
            </div>
            <div class="spacer"></div>
    </div>
    <div class="text-right vstack align-end hidden lg-auto lg:unhidden py-28">
        <h5 class="small-header">Proven and tested</h5>
        <h1 class="large-title title-color">Projects</h1>
        <h3 class="small-content w-224">Having all these skills wouldn't be much of a use if they weren't applied.</h3>
    </div>

</div>
</template>

<script>
import CustomCardWebsite from './CustomCardWebsite'
import CustomCard from './CustomCard.vue'
export default {
    components: {
        CustomCard,
        CustomCardWebsite
    }
}
</script>

<style scoped>
.small-header {
    font-weight: 300;
    font-size: 10px;
}

.large-title {
    font-weight: 400;

}

.small-content {
    font-weight: 300;
    font-size: 15px;
}
</style>
