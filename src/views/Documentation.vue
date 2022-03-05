<template>
	<component :is="documentation"/>
</template>

<script>
	export default {
		name: "Documentation",
		created() {
			this.setLanguage()
		},
		components: {},
		data: () => ({
			docLang: '',
			documentation: null
		}),
		methods: {
			setLanguage() {
				this.$store.dispatch('setDocLanguage', this.$route.params.language).then((lang) => {
					if (!lang) this.$router.push("/docs")
					this.docLang = lang
					document.title = `${lang} Documentation - ChoreCore`

					if (lang === "TypeScript") lang = "JavaScript"
					const markdown = require(`@/assets/docs/${lang}.md`)
					this.documentation = markdown.vue.component
				})
			}
		},
		watch: {
			$route() {
				this.setLanguage()
			}
		}
	}
</script>

<style>
	h1, h2, h3, h5, h6 {
		margin: 16px 0;
	}

	h1 {
		text-decoration: underline;
	}

	h4:not(li h4) {
		margin: 16px 0;
	}

	h4 code, pre code {
		border: 1px solid var(--v-anchor-base);
		background: var(--v-info-base) !important;
		color: black !important;
		padding: 2px 4px !important;
		display: inline-block;
	}

	pre code {
		padding: 2px 8px !important;
	}

	table {
		border-spacing: 0 !important;
		margin-bottom: 32px;
		width: 100%;
	}

	th {
		border-bottom: 1px solid var(--v-font-darken4);
	}

	tr:nth-child(2n) {
		background: var(--v-primary-lighten4);
	}

	td {
		padding: 2px 4px 1px 6px;
	}

	p {
		padding-left: 1em;
	}

	ul, li {
		overflow-x: visible;
	}

	li h4 code {
		transform: translateY(25%);
	}
</style>
