<template>
	<div>
		<p class="text-h2 text-center py-16 my-16">Choose From One of Our Supported Languages</p>
		<v-row>
			<v-hover
				v-for="(lang, i) in Object.keys($data.langData)"
				:key="i"
				v-slot="{ hover }">
				<v-col
					class="ma-5"
					:class="{ 'on-hover': hover }"
					@click="$router.push(`/docs/${lang}`)"
				>
					<p class="text-h4 text-center">{{ lang }}</p>
					<v-img
						:src="$data.logos[lang]"
						contain
						height="10vh"
					/>
				</v-col>
			</v-hover>
		</v-row>
	</div>
</template>

<script>
export default {
name: "ChooseLanguage"
}
</script>

<style scoped>
	.on-hover {
		cursor: pointer;
		border-radius: 15px;
	}

	.theme--dark .on-hover {
		background-color: #262626;
		-webkit-box-shadow: 0 0 15px 5px #262626;
		box-shadow: 0 0 5px 5px #262626;
	}

	.theme--light .on-hover {
		background-color: #d0d0d0;
		-webkit-box-shadow: 0 0 15px 5px #d0d0d0;
		box-shadow: 0 0 5px 5px #d0d0d0;
	}
</style>
