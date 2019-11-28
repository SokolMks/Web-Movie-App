<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="movie in results" :movie="movie" v-bind:key="movie.id">
                <v-card>
                    <v-responsive>
                        <v-img
                            :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
                            :alt="movie.title"
                        ></v-img>
                    </v-responsive>
                    <v-card-text>
                        <div class="title my-5">{{ movie.title }}</div>
                        <div class="subheading">Description</div>
                        <ul>
                            <li>{{ movie.overview }}</li>
                        </ul>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="green"
                            dark
                            @click="orderMovie(movie)"
                            v-if="['CardDisplay'].includes($route.name)"
                        >Add</v-btn>
                        <v-btn
                            :color="movie.watched ? 'grey':'green'"
                            dark
                            v-on:click="watchedMovie(movie)"
                            v-if="['about'].includes($route.name)"
                        >{{movie.watched ? 'Watched':'To watch'}}</v-btn>
                        <v-btn
                            color="red"
                            dark
                            @click="dontOrderMovie(movie)"
                            v-if="['about'].includes($route.name)"
                        >Remove</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { log } from 'util';
export default {
    data() {
        return {
            color: 'green',
            text: 'To watch'
        };
    },
    name: 'MovieCards',
    props: ['results'],
    computed: {
        movies() {
            return this.$store.state.movies;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        pauseEvent() {
            this.color = 'grey';
            this.text = 'Watched';
        },
        watchedMovie(movie) {
            if (this.isAuthenticated) {
                this.$store.dispatch('isWatchedMovie', movie);
            } else {
                this.$router.push('/sign-in');
            }
        },
        orderMovie(movie) {
            if (this.isAuthenticated) {
                this.$store.dispatch('addMovie', movie);
            } else {
                this.$router.push('/sign-in');
            }
        },
        dontOrderMovie(movie) {
            if (this.isAuthenticated) {
                this.$store.dispatch('removeMovie', movie);
            } else {
                this.$router.push('/sign-in');
            }
        }
    }
};
</script>
<style scoped></style>
