<template>
	<div>
		<component v-for="(item, index) in $data.langData[$route.params.language]" :key="index" :is="item.constructor.name" :content="item.content">
			{{ typeof item}}
		</component>
	</div>
</template>

<script>
    import Heading from "../components/sections/Heading";
    import OrderedList from "../components/sections/OrderedList";
    import Paragraph from "../components/sections/Paragraph";
    import Snippet from "../components/sections/Snippet";
    import Table from "../components/sections/Table";
    import UnorderedList from "../components/sections/UnorderedList";

    export default {
        name: "Documentation",
        components: {
			/* eslint vue/no-unused-components: 0 */
			Heading,
			OrderedList,
			Paragraph,
            Snippet,
			Table,
			UnorderedList
        }
    }
</script>

<style scoped>

</style>
