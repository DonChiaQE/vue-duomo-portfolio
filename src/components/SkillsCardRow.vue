<template>
<div class="vstack lg:hstack px-3">
    <div class="vstack align-start w-448 lg:w-auto py-28 w-full">
        <h5 class="small-header">21st C. Toolbox</h5>
        <h1 class="large-title title-color">Skills</h1>
        <h3 class="small-content w-224">All the necessary skills for a creative yet technical person.</h3>
    </div>
    <div class="spacer hstack">
        <div class="spacer"></div>
            <div class="align-self-stretch grid grid-cols-1 lg:grid-cols-2 gap-8">
                <CustomCardWebsite title="Mobile Developer" content="Experienced iOS developer who has messed around with SwiftUI since launch. Feel free to contact me
                for quotation." text="Contact Me" link="mailto: donchia@hotmail.com?subject=App Dev Quote Enquiry" />
                <CustomCardWebsite title="Web Developer" content="That's what you're looking at right now. A fully responsive 
                    website built with a variety of web development tools." text="Contact Me" link="mailto: donchia@hotmail.com?subject=Web Dev Quote Enquiry" />
                <CustomCardWebsite title="Colorizer" content="Proficient restorer and colorizer of old photographs. Contact me for quotes." text="Contact Me" link="mailto: donchia@hotmail.com?subject=Restoration and Colorizing Quote Enquiry" />
                <CustomCardWebsite title="UI/UX Designer for Web and App" content="A familiar Figma user with deep understanding of various frontend technologies." text="Contact Me" link="mailto: donchia@hotmail.com?subject=Design UI/UX" />
            </div>
    </div>
</div>
</template>

<script>
import CustomCardWebsite from './CustomCardWebsite.vue'
export default {
    components: {
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
