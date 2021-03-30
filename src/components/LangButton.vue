<template>
	<v-row class="pa-3">
		<v-col v-for="lang in languages"
			:key="lang"
		>
			<v-hover v-slot="{ hover }">
				<v-img
					:src="logos[lang.toLowerCase()]"
					:class="{ 'on-hover': hover }"
					class="image"
					contain
					@click="$router.push(`/docs/${lang}#${anchor}`)"
				/>
			</v-hover>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: "LangButton",
		props: ["not", "anchor"],
		data: () => ({
			logos: {
				java: require("@/assets/logos/java.svg"),
				javascript: require("@/assets/logos/javascript.svg"),
				kotlin: require("@/assets/logos/kotlin.svg"),
				python: require("@/assets/logos/python.svg"),
				typescript: require("@/assets/logos/typescript.svg")
			}
		}),
		computed: {
			languages: function () {
				let arr = Object.keys(this.$data.langData)
				if (this.not) arr = arr.filter(l => !this.not?.includes(l.toLowerCase()))
				return arr
			}
		}
	}
</script>

<style scoped>
	.image {
		left: 50%;
		transform: translateX(-50%);
		max-height: 30px;
		max-width: 30px
	}

	.on-hover {
		background-color: var(--v-font-base);
		cursor: pointer;
		-webkit-box-shadow: 0 0 15px 5px var(--v-font-base);
		box-shadow: 0 0 5px 5px var(--v-font-base);
	}
</style>
