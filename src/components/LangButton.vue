<template>
	<v-row class="pa-3">
		<v-col v-for="lang in languages"
			:key="lang"
		>
			<v-hover v-slot="{ hover }">
				<v-img
					:src="lang.logo"
					:class="{ 'on-hover': hover }"
					class="image"
					contain
					@click="$router.push(`/docs/${lang.name}#${anchor}`)"
				/>
			</v-hover>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: "LangButton",
		props: ["not", "anchor"],
		computed: {
			languages: function () {
				let arr = this.$data.languages
				if (this.not) arr = arr.filter(l => !this.not?.includes(l.name.toLowerCase()))
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
		cursor: pointer;
	}

	.theme--dark .on-hover {
		background-color: var(--v-info-base);
		-webkit-box-shadow: 0 0 15px 5px var(--v-info-base);
		box-shadow: 0 0 5px 5px var(--v-info-base);
	}

	.theme--light .on-hover {
		background-color: var(--v-success-base);
		-webkit-box-shadow: 0 0 15px 5px var(--v-success-base);
		box-shadow: 0 0 5px 5px var(--v-success-base);
	}
</style>
