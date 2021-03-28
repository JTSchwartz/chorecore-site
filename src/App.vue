<template>
	<v-app>
			<Header/>
			<v-sheet
				id="scroll-target"
				class="overflow-y-auto pt-16"
				max-height="100vh"
			>
				<router-view style="min-height: 100vh"></router-view>
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
</style>
