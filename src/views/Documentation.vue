<template>
	<v-container>
		{{ $route.params.language }}
		{{ $route.path }}
		<component :is="'Paragraph'" :content="'const a = b'">

		</component>
	</v-container>
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
