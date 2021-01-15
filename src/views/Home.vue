<template>
<div class="container pb-8">
        <About />
        <CustomDivider />
        <SkillsCardRow />
        <CustomDivider />
        <ProjectsCardRow />
        <CustomDivider />
        <HobbiesCardRow />
        <CustomDivider />
        <CustomFooter />
</div>
</template>

<script>
import About from '../components/About.vue';
import CustomDivider from '../components/CustomDivider';
import SkillsCardRow from '../components/SkillsCardRow';
import ProjectsCardRow from '../components/ProjectsCardRow';
import HobbiesCardRow from '../components/HobbiesCardRow';
import CustomFooter from '../components/CustomFooter';

export default {
    name: 'App',
    components: {
        About,
        CustomDivider,
        SkillsCardRow,
        ProjectsCardRow,
        HobbiesCardRow,
        CustomFooter,
    }
}
</script>

<style>

</style>
