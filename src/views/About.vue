<template>
    <v-container>
        <MovieCards :results="userMovies" />
    </v-container>
</template>

<script>
import MovieCards from '@/components/MovieCards';
import HomePlans from '@/components/HomePlans';

export default {
    name: 'About',
    components: {
        MovieCards
    },
    computed: {
        userMovies() {
            return this.$store.state.userMovies;
        }
    },
    mounted() {
        this.getMovies();
    },
    methods: {
        getMovies() {
            this.$store.dispatch('getUserMovies');
        }
    }
};
</script>

<style scoped></style>
