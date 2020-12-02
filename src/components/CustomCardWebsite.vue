<template>
    <div class="w-full lg:w-320 2xl:w-320 h-256 bg-beige radius-5 m-2 border border-black pointer" @click="$bvModal.show(modal)">
        <div class="vstack align-start p-24 h-full">
            <div class="">
                <h5>{{ title }}</h5>
            </div>
            <div class="">
                {{ content }}
            </div>
            <div class="spacer"></div>
            <div class="underline"><a :href="link" class="link-color">{{text}}</a></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
        modal: String,
        link: String,
        text: String
    }
}
</script>

<style scoped>
/*.pointer {
    cursor: pointer;
}*/

.underline {
    text-decoration: underline;
    color: black !important;
    cursor: pointer;
}
</style>