import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            { 
            imageUrl: 'https://s16-us2.ixquick.com/cgi-bin/serveimage?url=https:%2F%2Fmedia.timeout.com%2Fimages%2F103444978%2Fimage.jpg&sp=c40c14bccab1cf8b2bde1e45add4906e', 
            id: ';ljhskda;lfkjhs;dlf', 
            title: 'Meet up in NY',
            date: new Date(),
            location: 'New York',
            description: 'It\'s New York'
            },
            { 
            imageUrl: 'https://s14-eu5.ixquick.com/cgi-bin/serveimage?url=http:%2F%2Ftheflightfinder.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fparis.jpg&sp=ccd63f89d29f7b2b52394f644effed47', 
            id: 'dasfsdfasdfasdfasdfa', 
            title: 'Meet up in Paris',
            date: new Date(),
            location: 'Paris',
            description: 'It\'s Paris'
            }
        ],
        user: null
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        createMeetup ({commit}, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: ';klasjh;lfkas'
            }
            // Reach out to firebase and store it
            commit('createMeetup', meetup)
        },
        signUserUp ({commit}, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
        }
    },
    getters: {
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id == meetupId
                })
            }
        },
        user (state) {
            return state.user
        }
    }

})