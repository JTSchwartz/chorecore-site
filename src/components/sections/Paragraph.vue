<template>
	<p v-html="text">
	</p>
</template>

<script>
	const {replacementMap} = require("chorecore")

	export default {
		name: "Paragraph",
		props: ["content"],
		computed: {
			text() {
				return replacementMap(this.content, {
					"//`": "</code>",
					"/`": "<code>",
				})
			}
		}
	}
</script>

<style scoped>

</style>
