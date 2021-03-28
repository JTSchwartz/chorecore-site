<template>
	<v-app-bar
		:collapse-on-scroll="true"
		color="accent"
		dark
		absolute
		scroll-target="#scroll-target"
	>
		<link rel="stylesheet"
			:href="isTrue(darkMode, 'https://unpkg.com/prismjs/themes/prism-tomorrow.css', 'https://unpkg.com/prismjs/themes/prism-solarizedlight.css')"/>

		<v-app-bar-nav-icon>
			<v-icon>
				fas fa-bars
			</v-icon>
		</v-app-bar-nav-icon>


		<v-btn
			class="hide-on-scroll"
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
		>
			About
		</v-btn>

		<v-menu
			left
			bottom
		>
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
					v-for="lang in Object.keys($data.langData)"
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
			:style="`color: var(--v-${isTrue(darkMode, 'success', 'primary')}-base)`"
		>
			{{ $route.params.language }}
		</h3>

		<v-spacer class="hide-on-scroll"></v-spacer>
		<v-spacer class="hide-on-scroll"></v-spacer>

		<v-btn
			icon
			@click="toggleDarkMode()"
		>
			<v-icon v-if="darkMode">
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
        data: () => ({
            isTrue
        }),
        computed: {
            darkMode: function () {
                return this.$store.getters.darkMode
            }
        },
        methods: {
            toggleDarkMode: function () {
                this.$store.dispatch("toggleDarkMode", !this.darkMode)
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

	.v-icon {
		height: 48px !important;
		width: 48px !important;
	}

	.v-toolbar.v-toolbar--collapsed .hide-on-scroll {
		display: none;
	}
</style>
