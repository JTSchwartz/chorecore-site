<template>
	<component :is="`h${level}`"
		class="mb-4"
		:id="content.anchor">
		<span v-if="typeof content.header === 'string'">{{ content.header }}</span>
		<Snippet v-else class="font-italic" :content="content.header.content" :inline="true"/>
	</component>
</template>

<script>
	import Snippet from "./Snippet";
	export default {
		name: "Heading",
		components: {Snippet},
		props: ["content"],
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

</style>
