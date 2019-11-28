<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Movie List Choices</v-flex>
        </v-layout>
        <v-layout row wrap class="movie-plans">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/classic-movie-poster-charlie-chaplin-in-payday-esoterica-art-agency.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox></v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Movie Search</h3>
                            <div>
                                If you know the movie you want to add to the
                                list or just search for a movie using a "keyword"
                                type it and see the movies that contain that word
                                in its name.
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <input
                            v-model="searchTerm"
                            type="text"
                            class="form-control"
                            id="searchTerm"
                            placeholder="Enter a movie title..."
                        />
                        <v-btn
                            type="submit"
                            class="btn btn-primary"
                            :to="`/CardDisplay/find/${searchTerm}`"
                        >GO</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://media.zenfs.com/en-US/investorplace_417/006638bf8cea720c8826f5d0580fb19c"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox></v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">New movies coming out</h3>
                            <div>
                                This section will present you the latest
                                movies that are going to come out soon or
                                are currently in cinemas.
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" to="/CardDisplay/upcoming">See more</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://4.bp.blogspot.com/-JWpoRKQW4vI/V7NzfTr44cI/AAAAAAAAB40/_twhGDqYojI125E2AWbF9iSo03RDNMloACLcB/s1600/4591008-0129881048-best..jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox></v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Most popular movies ever</h3>
                            <div>
                                This is a list of movies that have
                                the highest rating of all time according
                                to IMDB rating. Pick some classic movies
                                to watch!
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" to="/CardDisplay/top_rated">See more</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import MovieCards from '@/components/MovieCards';
export default {
    name: 'HomePlans',
    components: {
        MovieCards
    },
    data: () => ({
        searchTerm: '',
        results: []
    })
};
</script>

<style scoped></style>
