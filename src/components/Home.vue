<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        data () {
            return {
                meetups: [
                    { imageUrl: 'https://s16-us2.ixquick.com/cgi-bin/serveimage?url=https:%2F%2Fmedia.timeout.com%2Fimages%2F103444978%2Fimage.jpg&sp=c40c14bccab1cf8b2bde1e45add4906e', id: ';ljhskda;lfkjhs;dlf', title: 'Meet up in NY'},
                    { imageUrl: 'https://s14-eu5.ixquick.com/cgi-bin/serveimage?url=http:%2F%2Ftheflightfinder.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fparis.jpg&sp=ccd63f89d29f7b2b52394f644effed47', id: ';ljhskda;lfkjhs;dlf', title: 'Meet up in Paris'}
                ]
            }
        }
    }
</script>

<style scoped>
.title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
    }
</style>

