<template>
	<div>
		<v-row>
			<v-col cols="7" align-self="center">
				<span class="text-h1">Ruh Roh Raggy!</span>
				<p class="mt-6">
					Uh Oh! It looks like even Mystery Incorporated couldn't the mystery of what you were looking for.
				</p>
				<p>
					Hopefully though, we can help you find your way with one of the links below.
				</p>
			</v-col>
			<v-col>
				<v-img
					src="@/assets/MysteryMachine.png"
					class="mt-16"
					max-width="30vw"
				/>
			</v-col>
		</v-row>
		<v-row justify="space-around">
			<v-col cols="3">
				<span class="text-h5">Documentation Languages</span>
				<v-list>
					<v-list-item-group>
						<v-list-item
							v-for="(lang, i) in Object.keys($data.langData)"
							:key="i"
							@click="$router.push(`/docs/${lang}`)"
						>
							<v-list-item-avatar>
								<v-img
									:src="$data.logos[lang]"
									class="image"
									contain
								/>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title>
									{{ lang }}
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-col>
			<v-col cols="3">
				<span class="text-h5">Resources</span>
				<v-list>
					<v-list-item-group>
						<v-list-item
							@click="$router.push(`/about`)"
						>
							<v-list-item-content>
								<v-list-item-title>
									What is ChoreCore?
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item
							@click="$router.push(`/about#modules`)"
						>
							<v-list-item-content>
								<v-list-item-title>
									What Does ChoreCore Provide?
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-col>
			<v-col cols="3">
				<span class="text-h5">Reach Out</span>
				<v-list>
					<v-list-item-group>
						<v-list-item
							href="mailto:support@chorecore.com"
							target="_blank"
						>
							<v-list-item-content>
								<v-list-item-title>
									Contact Us
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item
							href="https://github.com/search?q=user%3AJTSchwartz+chorecore"
							target="_blank"
						>
							<v-list-item-content>
								<v-list-item-title>
									Check Out Our Repositories
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		name: "Error",
		created() {
			document.title = "Page Not Found - ChoreCore"
		}
	}
</script>

<style scoped>
	.v-avatar {
		border-radius: 0 !important;
	}

	.image {
		left: 50%;
		transform: translateX(-50%);
		max-height: 30px;
		max-width: 30px
	}
</style>
