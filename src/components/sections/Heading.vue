<template>
	<component :is="`h${content.level}`" :id="content.anchor">
		{{ content.header }}
	</component>
</template>

<script>
    export default {
        name: "Heading",
        props: ["content"]
    }
</script>

<style scoped>

</style>
