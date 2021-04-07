<template>
	<div>
		<v-footer
			dark
			padless
			color="transparent"
		>
			<svg width="100vw"
				viewBox="0 0 1000 60">
				<path style="fill: var(--v-primary-base)"
					d="M 0 10
						C 100,0 100,0 250,30
						S 600,15 750,40
						S 900,30 1000,60
						L 0,60 Z"
				/>
			</svg>
			<v-card
				flat
				tile
				class="primary white--text text-center"
				width="100vw"
			>
				<v-card-text class="white--text pt-0">
					<v-row>
						<v-col>
							<strong>Reach Out</strong><br/>
							<a href="mailto:support@chorecore.com"
								target="_blank">Email</a><br/>
							<a href="https://github.com/search?q=user%3AJTSchwartz+chorecore"
								target="_blank">GitHub</a>
						</v-col>
						<v-col>
							<strong>Resources</strong><br/>
							<a href="/about">About</a><br/>
							<a href="/about#modules">Modules</a><br/>
						</v-col>
						<v-col>
							<strong>Languages</strong><br/>
							<div
								v-for="lang in Object.keys($data.langData)"
								:key="lang"
							>
								<a :href="`/docs/${lang}`">
									{{ lang }}
								</a><br/>
							</div>
						</v-col>
					</v-row>
				</v-card-text>

				<v-divider></v-divider>

				<v-card-text class="white--text">
					{{ new Date().getFullYear() }} — <strong>ChoreCore</strong>
				</v-card-text>
			</v-card>
		</v-footer>
	</div>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped>

</style>
