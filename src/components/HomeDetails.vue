<template>
    <v-container fluid class="grey darken-1">
        <v-container grid-list-lg>
            <v-layout column>
                <v-flex
                    class="display-2 font-weight-black white--text text-xs-center my-5"
                >What is this app?</v-flex>
                <v-flex>
                    <div
                        class="headline mt-3 white--text font-weight-bold"
                    >Keep track of what you watched</div>
                    <p class="subheading mt-3 white--text">
                        Create a list of all the movies that you
                        have watched and never lose them!
                        Once you watched a movie just search for
                        its name and add to a list. (Further
                        filtering of list will come in future updates)
                    </p>
                </v-flex>
                <v-flex>
                    <div class="headline mt-3 white--text font-weight-bold">Other features</div>
                    <p class="subheading mt-3 white--text">
                        There are other lists that you can choose movies from,
                        there are new movies list which will tell you about
                        new coming out right now or soon. There is also another
                        list that can help you to pick a movie. The idea is that
                        if you cant pick a movie you want to watch just let the app
                        handle the job. It will pick a random movie that will suit
                        your taste. Just choose a genre that you want and be presented
                        with option of movies. If you are ready to use the app click
                        "Pick a Movie" button on top left of the screen.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style scoped></style>
