<template>
	<div>
		<v-row wrap>
			<v-col
				v-for="(item, i) in content"
				:key="i"
				align-self="stretch"
				cols="12"
				md="4"
				sm="6"
				class="code-list-item"
			>
				<Snippet
					:content="format(item.content)"
					:no-clip="true"
				/>
			</v-col>
		</v-row>
		<br/>
	</div>
</template>

<script>
	const {replacementMap} = require("chorecore")
	import Snippet from "./Snippet";

	export default {
		name: "CodeList",
		components: {Snippet},
		props: ["content"],
		methods: {
			format(str) {
				return replacementMap(str, {
					"(": "(\n\t",
					", ": ",\n\t",
					")": "\n)"
				})
			}
		}
	}
</script>

<style scoped>
	.code-list-item {
		overflow-y: hidden
	}
</style>
