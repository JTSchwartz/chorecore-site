<template>
	<Prism
		:language="lang || $route.params.language.toLowerCase()"
		class="code"
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
        props: ["content", "lang"],
        data: () => ({
            isTrue
        }),
        computed: {
            codeSnippet: function () {
				let arr = this.content.split("\n").map(str => str.replace(/^ */, ""))
				arr.pop()
				arr.shift()
				return arr.join("\n")
            }
        }
    }
</script>

<style scoped>
	.code {
		border: 1px solid;
		border-radius: 0.3em;
	}
</style>
