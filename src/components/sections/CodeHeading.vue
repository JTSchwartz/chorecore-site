<template>
	<div
		class="code-heading mb-4 pa-2"
		:style="`border-color: ${isTrue($vuetify.theme.dark, 'dim', 'light')}gray`"
	>
		<component :is="`h${level}`">
			<Prism
				inline
				:language="lang || $store.getters.docLang.toLowerCase()"
				:code="content.header"/>
		</component>
	</div>
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
		name: "CodeHeading",
		components: {
			Prism
		},
		props: ["content", "lang"],
		data: () => ({
			isTrue
		}),
		computed: {
			level() {
				let level = this.content.level + 1
				if (level > 6) level = 6
				return level
			}
		}
	}
</script>

<style scoped>
	* {
		text-transform: none;
	}

	.code-heading {
		display: inline-block;
		border: 1px solid;
		border-radius: 0.3em;
	}
</style>
