<template>
	<Prism
		:language="$route.params.language.toLowerCase()"
		class="code"
		:style="`border-color: ${isTrue(darkMode, 'dim', 'light')}gray`"
	>
		{{ content }}
	</Prism>
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
        props: ["content"],
        data: () => ({
            isTrue
        }),
        computed: {
            darkMode: function () {
                return this.$store.getters.darkMode
            }
        },
        watch: {
            darkMode: function (toggle) {
                this.$vuetify.theme.dark = toggle;
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
