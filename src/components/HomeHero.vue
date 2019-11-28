<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">Movie List</div>
            <div
                class="display-1 font-weight-bold white--text text-xs-center"
            >Keep track of all movies out and what have you watched.</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://i.pinimg.com/originals/60/f5/00/60f500b914d6b82a82e9318e4f2fe395.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
