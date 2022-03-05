<template>
	<v-app-bar
		:collapse-on-scroll="collapse"
		color="accent"
		dark
		absolute
		scroll-target="#scroll-target"
	>
		<link rel="stylesheet"
			:href="isTrue($vuetify.theme.dark, 'https://unpkg.com/prismjs/themes/prism-tomorrow.css', 'https://unpkg.com/prismjs/themes/prism-solarizedlight.css')"/>

		<v-app-bar-nav-icon
			v-if="!atTop"
			@click="collapse = !collapse"
			id="collapse-icon"
		>
			<v-icon v-if="collapse">
				fas fa-arrow-alt-from-left
			</v-icon>
			<v-icon v-else>
				fas fa-arrow-alt-from-right
			</v-icon>
		</v-app-bar-nav-icon>

		<!--{{ $vuetify.breakpoint.name }}-->

		<v-btn
			class="hide-on-scroll hidden-sm-and-down"
			plain
			@click="$router.push('/')"
		>
			<v-app-bar-title>
				ChoreCore
			</v-app-bar-title>
		</v-btn>

		<v-btn
			class="hide-on-scroll"
			plain
			@click="$router.push(`/about`)"
		>
			About
		</v-btn>

		<v-menu	offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					class="hide-on-scroll"
					plain
					v-bind="attrs"
					v-on="on"
				>
					Language
				</v-btn>
			</template>

			<v-list>
				<v-list-item
					v-for="lang in this.languages.map(entry => entry.name)"
					:key="lang"
					@click="$router.push(`/docs/${lang}`)"
				>
					<v-list-item-title>{{ lang }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>

		<v-spacer class="hide-on-scroll"></v-spacer>
		<h3
			v-if="$route.path.startsWith('/docs')"
			class="hide-on-scroll"
			:style="`color: var(--v-${isTrue($vuetify.theme.dark, 'success', 'primary')}-base)`"
		>
			{{ docLang }}
		</h3>

		<v-spacer class="hide-on-scroll"></v-spacer>
		<v-spacer class="hide-on-scroll"></v-spacer>

		<v-btn
			icon
			@click="toggleDarkMode()"
		>
			<v-icon v-if="$vuetify.theme.dark">
				fas fa-moon-stars
			</v-icon>
			<v-icon v-else>
				fas fa-sun
			</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
	const {isTrue} = require("chorecore")

	export default {
		name: "Header",
		props: ["atTop"],
		created() {
			if (typeof (Storage) !== "undefined") {
				if (localStorage.darkMode === "true") this.$vuetify.theme.dark = true
				this.toggleDarkMode(localStorage.darkMode === "true")
			}
		},
		data: () => ({
			collapse: true,
			isTrue
		}),
		computed: {
			docLang() {
				return this.$store.getters.docLang;
			}
		},
		methods: {
			toggleDarkMode: function (toggle = !this.$vuetify.theme.dark) {
				if (typeof (Storage) !== "undefined") localStorage.darkMode = toggle
				this.$vuetify.theme.dark = toggle
			}
		}
	}
</script>

<style scoped>
	.v-toolbar.v-toolbar--collapsed .hide-on-scroll {
		display: none;
	}
</style>
