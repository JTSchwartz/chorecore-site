import '@babel/polyfill'
import App from './App.vue'
import router from './plugins/router'
import Vue from 'vue'
import VueBus from 'vue-bus';
import vuetify from './plugins/vuetify';
import store from './plugins/vuex'

const { languages } = require("./assets/languages")

Vue.config.productionTip = false

Vue.use(VueBus);
Vue.mixin({
    created() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.darkMode === "true") {
                store.dispatch("toggleDarkMode", localStorage.darkMode)
                this.$vuetify.theme.dark = localStorage.darkMode;
            }
        }
    },
    data: () => ({
        langData: languages
    }),
})

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
