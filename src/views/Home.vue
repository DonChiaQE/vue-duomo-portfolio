<template>
<div class="container">
  <div id="app" class='pb-8'>
    <About/>
    <CustomDivider />
    <SkillsCardRow />
    <CustomDivider />
    <ProjectsCardRow />
    <CustomDivider />
    <HobbiesCardRow />
    <CustomDivider />
    <CustomFooter />

  </div>
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
html,
body {
    height: 100%;
    background: #F6F5F1;
    background-size: 40px 40px;
    background-image: radial-gradient(circle, #433E40 0.75px, rgba(0, 0, 0, 0) 0.75px);
}

#typed2 {
  color: #433E40 !important; 
  opacity: 100%;
  font-size: 38px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #433E40;
}

.bg-beige {
  background: #F6F5F1;
}
</style>