<template>
	<ol>
		<li v-for="item in content" :key="item">{{ item }}</li>
	</ol>
</template>

<script>
    export default {
        name: "OrderedList",
        props: ["content"]
    }
</script>

<style scoped>

</style>
