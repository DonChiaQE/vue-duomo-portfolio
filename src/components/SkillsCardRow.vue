<template>
    <div class="vstack lg:hstack px-3">
        <div class="vstack align-start w-448 lg:w-auto py-28 w-full">
            <h5 class="small-header">21st C. Toolbox</h5>
            <h1 class="large-title">Skills</h1>
            <h3 class="small-content text-left">All the necessary skills for creative yet technical person.</h3>
        </div>
        <div class="spacer"></div>
        <div class="spacer">
            <div class="vstack">
                <div class="vstack lg:hstack">
                    <CustomCard title="Mobile Developer" content="Experienced iOS developer who has messed around with SwiftUI since launch. Feel free to contact me
                for quotation."  />
                    <CustomCard title="Web Developer" content="That's what you're looking at right now. A fully responsive 
                    website built with a variety of web development tools."  />
                </div>
                <div class="vstack lg:hstack w-full">
                    <div class="spacer"></div>
                    <router-link to="/colorizer" class="vstack router-link">
                    <CustomCard title="Colorizer" content="You like history? I do too, but I prefer to see it in color.
            It's a long process but almost always worth the time."  />
                    </router-link>
                    
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