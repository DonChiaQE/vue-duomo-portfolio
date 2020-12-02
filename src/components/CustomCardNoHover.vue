<template>
    <div class="w-full lg:w-320 2xl:w-320 h-256 bg-beige radius-5 m-2 border border-black pointer" @click="$bvModal.show(modal)">
        <div class="vstack align-start p-24">
            <div class="text-black">
                <h5>{{ title }}</h5>
            </div>
            <div class="text-black">
                {{ content }}
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
        modal: String
    }
}
</script>

<style scoped>

</style>