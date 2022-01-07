import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		docLanguage: null
	},
	mutations: {
		docLanguage(state, lang) {
			state.docLanguage = lang
		}
	},
	actions: {
		setDocLanguage(context, keyword) {
			return new Promise((resolve => {
				let lang;

				switch (keyword.toLowerCase()) {
					case 'java':
						lang = 'Java'
						break
					case 'js':
					case 'javascript':
						lang = 'JavaScript'
						break
					case 'kt':
					case 'kotlin':
						lang = 'Kotlin'
						break
					case 'py':
					case 'python':
						lang = 'Python'
						break
					case 'ts':
					case 'typescript':
						lang = 'TypeScript'
						break
					default:
						lang = null
				}

				context.commit('docLanguage', lang)
				resolve(lang)
			}))

		}
	},
	getters: {
		docLang(state) {
			return state.docLanguage
		}
	}
})
