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
