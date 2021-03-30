<template>
	<v-app>
		<Header/>
		<v-sheet
			id="scroll-target"
			class="overflow-y-auto pt-16"
			max-height="100vh"
		>
			<v-container>
				<router-view style="min-height: 100vh"></router-view>
			</v-container>
		</v-sheet>
	</v-app>
</template>

<script>
	import Header from "./components/Header";

	export default {
		components: {
			Header
		}
	}
</script>

<style>
	* {
		overflow-x: hidden;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
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

	::-webkit-scrollbar {
		width: 5px;
		height: 10px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background: transparent;
	}

	::-webkit-scrollbar-thumb:hover {
		background: transparent;
	}

	::-webkit-scrollbar-track {
		border-radius: 5px;
		background: transparent;
	}

	body::-webkit-scrollbar {
		display: none;
	}

	body {
		-ms-overflow-style: none;
	}

	code {
		background-color: transparent !important;
		padding: 0 !important;
	}

	h1, h2, h3, h4, h5, h6 {
		text-transform: capitalize;
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
</style>
