<template>
	<ul>
		<li v-for="item in content" :key="item">{{ item }}</li>
	</ul>
</template>

<script>
    export default {
        name: "UnorderedList",
        props: ["content"]
    }
</script>

<style scoped>

</style>
