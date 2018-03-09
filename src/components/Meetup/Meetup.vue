<template>
  <v-container>
      <v-layout row wrap>
          <v-flex xs12>
              <v-card>
                  <v-card-title>
                      <h4 class="primary--text">{{ meetup.title }}</h4>
                  </v-card-title>
                  <v-card-media
                      :src="meetup.imageUrl"
                      height="400px"
                      >
                </v-card-media>
                <v-card-text>
                <div class="info--text">{{ meetup.date }} - Where it takes place</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolor eos animi facere omnis odio nam ad explicabo excepturi quasi, labore quia natus expedita aspernatur, doloribus dignissimos, similique porro quo laudantium consequatur incidunt delectus aliquid iure unde. Saepe aspernatur nisi, cum ipsa deleniti unde, magnam veniam labore dolorum, soluta optio!</div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="primary mr-2">Register</v-btn>
                </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            meetup () {
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>
