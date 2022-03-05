import '@babel/polyfill'
import App from './App.vue'
import router from './plugins/router'
import Vue from 'vue'
import VueBus from 'vue-bus';
import vuetify from './plugins/vuetify';
import store from './plugins/vuex'

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(VueBus);
Vue.mixin({
	data: () => ({
		languages: [
            {name: "Java", logo: require("@/assets/logos/java.svg")},
            {name: "JavaScript", logo: require("@/assets/logos/javascript.svg")},
            {name: "Kotlin", logo: require("@/assets/logos/kotlin.svg")},
            {name: "Python", logo: require("@/assets/logos/python.svg")},
            {name: "TypeScript", logo: require("@/assets/logos/typescript.svg")}
		]
	}),
})

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
