<template>
	<Prism
		:language="lang || $store.getters.docLang.toLowerCase()"
		:inline="inline"
		class="code-snippet"
		:class="{
			code: !inline,
			'h-full': noClip
		}"
		:style="`border-color: ${isTrue($vuetify.theme.dark, 'dim', 'light')}gray`"
		:code="codeSnippet"/>
</template>

<script>
	const {isTrue} = require("chorecore")
	import 'prismjs'
	import 'prismjs/components/prism-java'
	import 'prismjs/components/prism-javascript'
	import 'prismjs/components/prism-kotlin'
	import 'prismjs/components/prism-python'
	import 'prismjs/components/prism-typescript'
	import Prism from 'vue-prism-component'

	export default {
		name: "Snippet",
		components: {
			Prism
		},
		props: ["content", "lang", "inline", "noClip"],
		data: () => ({
			isTrue
		}),
		computed: {
			codeSnippet: function () {
				if (!this.content) return ""
				let arr = this.content.split("\n").map(str => str.replace(/^\t*/, ""))
				if (!this.noClip && !this.inline && arr.length !== 1) {
					arr.pop()
					arr.shift()
					return arr.join("\n")
				}

				return this.content
			}
		}
	}
</script>

<style scoped>
	.code {
		border: 1px solid;
		border-radius: 0.3em;
	}

	.code-snippet {
		overflow-x: scroll !important;
		white-space: pre;
	}

	.h-full {
		height: 100%;
	}
</style>
