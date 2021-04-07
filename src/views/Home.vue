<template>
	<div>
		<v-row no-gutters
			wrap>
			<v-col
				cols="12"
				md="1"
			>
				<v-img
					id="chorecore"
					:class="{'mt-10': $vuetify.breakpoint.mdAndUp}"
					:height="`${isTrue($vuetify.breakpoint.mdAndUp, 200, 50)}px`"
					contain
					src="@/assets/ChoreCore.png"
				/>
			</v-col>
			<v-col
				:class="{
				'pt-8': $vuetify.breakpoint.smAndDown,
				'pt-16': $vuetify.breakpoint.mdAndUp
			}"
				cols="12"
				lg="10"
				md="11"
				offset-lg="1"
				offset-xl="2"
				xl="9"
			>
				<h1 class="text-h3 text-md-h1 font-weight-bold mb-12 ml-md-5 overflow-hidden text-center text-md-left">
					ChoreCore
				</h1>
				<span
					:class="{'font-weight-regular': $vuetify.breakpoint.smAndDown}"
					class="text-h6 mr-5"
				>
					No one likes doing chores, after all, there's a reason it's called a chore.
				</span>
				<br v-if="$vuetify.breakpoint.lgAndDown"/>
				<br v-if="$vuetify.breakpoint.lgAndDown"/>
				<span class="text-body-1 font-italic">
					So let us do your chores for you
				</span>
			</v-col>
		</v-row>
		<div class="py-16 mt-md-16 mx-md-16 px-md-16 mb-md-0">
			<span class="text-h5 text-md-h3 ml-md-16">How We Help</span>
			<br v-if="$vuetify.breakpoint.mdAndUp"/>
			<br v-if="$vuetify.breakpoint.mdAndUp"/>
			<hr
				v-if="$vuetify.breakpoint.smAndDown"
				class="mb-12"
			/>
			<p>
				You haven't used a language long enough if you haven't thought up a piece of missing functionality.
			</p>
			<p>
				Or you have to write the same kind of functionality over and over and wish you didn't have to.
			</p>
			<p class="text-right mt-10 mt-md-6">
				Well you've come to the right place.
			</p>
			<p class="text-right">
				ChoreCore is the end all be all for general-use functionality additions.
			</p>
			<p class="text-right">
				And if we don't have the functionality you need, let us know.
			</p>
			<p class="text-center mt-12 mt-md-16 text-body-1 font-italic">
				Even this page utilizes ChoreCore, every single page relies on it.
			</p>
			<div class="pt-16 mt-md-16 overflow-hidden">
				<p class="text-h5 text-md-h3 ml-md-16 text-right">What We Have To Offer</p>
				<br v-if="$vuetify.breakpoint.mdAndUp"/>
				<br v-if="$vuetify.breakpoint.mdAndUp"/>
				<hr
					v-if="$vuetify.breakpoint.smAndDown"
					class="mb-12"
				/>
				<v-expansion-panels
					id="accordion-wrapper"
					class="ma-5 px-3"
					inset
				>
					<v-expansion-panel
						v-for="lang in Object.keys($data.langData)"
						:key="lang"
						class="language-card my-3">
						<v-expansion-panel-header
							class="text-h4"
						>
							{{ lang }}
						</v-expansion-panel-header>
						<v-expansion-panel-content>
							<v-list>
								<v-list-item-group>
									<v-list-item
										v-for="(item, i) in headers(lang)"
										:key="i"
										@click="$router.push(`/docs/${lang}#${item.content.anchor}`)"
									>
										<v-list-item-content>
											<component
												:is="item.content.level === 1 ? 'v-list-item-title' : 'v-list-item-subtitle'"
											>
												{{ item.content.header }}
											</component>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</div>
		</div>
	</div>
</template>

<script>
	const {isTrue} = require("chorecore")

	export default {
		name: 'Home',
		created() {
			document.title = "ChoreCore"
		},
		data: () => ({
			isTrue
		}),
		methods: {
			headers: function (lang) {
				if (!this.$data.langData[lang]) return
				return this.$data.langData[lang].filter(item => item.constructor.name === "Heading" && item.content.anchor)
			}
		}
	}
</script>

<style scoped>
	#accordion-wrapper {
		width: calc(100% - 25px);
		border-radius: 25px;
	}

	#accordion-wrapper > div {
		background-color: inherit;
	}

	#accordion-wrapper .v-list {
		background-color: inherit;
	}

	.theme--dark #accordion-wrapper {
		background-color: #262626;
		-webkit-box-shadow: 0 0 15px 5px #262626;
		box-shadow: 0 0 5px 5px #262626;
	}

	.theme--light #accordion-wrapper {
		background-color: #d0d0d0;
		-webkit-box-shadow: 0 0 15px 5px #d0d0d0;
		box-shadow: 0 0 5px 5px #d0d0d0;
	}

	.theme--dark #chorecore {
		filter: invert(.5);
	}

	.v-expansion-panels {
		z-index: 0 !important;
	}
</style>
