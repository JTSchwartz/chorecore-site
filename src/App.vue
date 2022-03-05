<template>
	<v-app>
		<Header :at-top="offsetTop === 0"/>
		<v-sheet
			id="scroll-target"
			ref="scroll-sheet"
			class="overflow-y-auto px-0"
			max-height="100vh"
			width="100vw"
			v-scroll.self="onScroll"
		>
			<v-btn
				v-if="offsetTop > 150"
				class="fab"
				fab
				bottom
				right
				fixed
				medium
				href="#top"
			>
				<v-icon large>
					fas fa-angle-up
				</v-icon>
			</v-btn>
			<span id="top"
				style="height: 64px; display: block"></span>
			<v-container>
				<router-view></router-view>
			</v-container>
			<Footer v-if="!['Error', 'Choose A Language'].includes($route.name)"/>
		</v-sheet>
	</v-app>
</template>

<script>
	import Header from "./components/Header";
	import Footer from "./components/Footer";

	const {isTrue} = require("chorecore")

	export default {
		components: {
			Footer,
			Header
		},
		created() {
			this.$bus.on("scroll", this.scrollTo)
			this.$nextTick(() => {
				this.scrollTo()
			})
		},
		data: () => ({
			offsetTop: 0,
			isTrue
		}),
		methods: {
			onScroll(e) {
				this.offsetTop = e.target.scrollTop
			},
			scrollTo(target = this.$route.hash.substring(1)) {
				let stateCheck = setInterval(() => {
					if (document.readyState === 'complete') {
						clearInterval(stateCheck);

						document.getElementById(target ? target : "top").scrollIntoView()
						document.getElementById("scroll-target").scrollBy(0, -60)
					}
				}, 100);
			}
		},
		watch: {
			$route() {
				this.scrollTo()
			}
		}
	}
</script>

<style>
	::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	::-webkit-scrollbar-thumb {
		background: transparent;
		border-radius: 0;
	}

	::-webkit-scrollbar-thumb:hover {
		background: transparent;
	}

	::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 0;
	}

	* {
		overflow-x: hidden;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		width: 100vw;
	}

	.theme--dark#app {
		background-color: #1e1e1e !important;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	body {
		-ms-overflow-style: none;
	}

	code {
		background-color: transparent !important;
		padding: 0 !important;
	}

	.highlight {
		background-color: #d2d200;
		border-radius: 8px;
		color: black;
		margin-bottom: 8px;
	}

	h1.highlight,
	h2.highlight,
	h3.highlight,
	h4.highlight,
	h5.highlight,
	h6.highlight {
		text-align: center;
	}

	.v-icon {
		height: 48px !important;
		width: 48px !important;
	}

	.theme--dark .fab {
		background-color: var(--v-accent-base) !important;
		color: var(--v-success-base) !important;
	}

	.theme--light .fab {
		background-color: var(--v-anchor-base) !important;
		color: var(--v-success-base) !important;
	}
</style>
