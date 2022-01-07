<template>
	<v-row>
		<v-col>
			<h1 class="mb-4">{{ docLang }} Documentation</h1>
			<component v-for="(item, index) in $data.langData[docLang]"
				:key="index"
				:is="item.constructor.name"
				:content="item.content">
			</component>
			<!--<h6 id="bottom"></h6>-->
		</v-col>
		<v-col
			v-if="$vuetify.breakpoint.mdAndUp"
			cols="2"
			class="side-nav"
		>
			<v-list flat>
				<v-list-item-group>
					<v-list-item
						v-for="(item, i) in headers"
						:key="i"
					>
						<v-list-item-content>
							<component :is="item.content.level === 1 ? 'v-list-item-title' : 'v-list-item-subtitle'" @click="$router.push(`#${item.content.anchor}`)">
								{{ item.content.header }}
							</component>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-col>
	</v-row>
</template>

<script>
	import CodeHeading from "../components/sections/CodeHeading";
	import CodeList from "../components/sections/CodeList";
	import Heading from "../components/sections/Heading";
	import OrderedList from "../components/sections/OrderedList";
	import Paragraph from "../components/sections/Paragraph";
	import Snippet from "../components/sections/Snippet";
	import Table from "../components/sections/Table";
	import UnorderedList from "../components/sections/UnorderedList";

	export default {
		name: "Documentation",
		created() {
			this.setLanguage()
		},
		components: {
			/* eslint vue/no-unused-components: 0 */
			CodeHeading,
			CodeList,
			Heading,
			OrderedList,
			Paragraph,
			Snippet,
			Table,
			UnorderedList
		},
		data: () => ({
			docLang: ''
		}),
		methods: {
			setLanguage() {
				this.$store.dispatch('setDocLanguage', this.$route.params.language).then((lang) => {
					if (!lang) this.$router.push("/docs")
					this.docLang = lang
					document.title = `${lang} Documentation - ChoreCore`
				})

			}
		},
		computed: {
			headers() {
				if (!this.$data.langData[this.docLang]) return
				return this.$data.langData[this.docLang].filter(item => item.constructor.name === "Heading" && item.content.anchor)
			}
		},
		watch:{
			$route (){
				this.setLanguage()
			}
		}
	}
</script>

<style scoped>
	h1 {
		text-decoration: underline;
	}

	hr {
		margin-bottom: 16px;
	}

	code {
		white-space: nowrap !important;
	}
</style>
