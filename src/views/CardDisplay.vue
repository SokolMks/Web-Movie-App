<template>
    <div>
        <movie-cards :results="results"></movie-cards>
    </div>
</template>

<script>
import MovieCards from '@/components/MovieCards';
import HomePlans from '@/components/HomePlans';

export default {
    name: 'CardDisplay',
    props: ['type', 'movie'],
    components: {
        MovieCards,
        HomePlans
    },
    data() {
        return {
            results: null,
            error: null
        };
    },
    created() {
        this.getResults();
    },
    methods: {
        async getResults() {
            if (this.movie == undefined) {
                const url = `https://api.themoviedb.org/3/movie/${this.type}?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&page=1`;
                const response = await fetch(url);
                if (response.ok) {
                    let data = await response.json();
                    this.results = data.results;
                    this.error = '';
                } else {
                    this.results = [];
                    this.error = data.errors[0];
                }
            } else {
                const urls = `https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=`;
                const API_URL = `${urls}${this.movie}`;
                const responses = await fetch(API_URL);
                if (responses.ok) {
                    let data = await responses.json();
                    this.results = data.results;
                    this.error = '';
                } else {
                    this.results = [];
                    this.error = data.errors[0];
                }
            }
        }
    }
};
</script>
<style scoped>
</style>