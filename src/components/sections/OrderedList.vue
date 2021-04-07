<template>
	<v-list flat disabled>
		<v-list-item-group>
			<v-list-item
				v-for="(item, i) in content"
				:key="i"
			>
				<span style="margin-right: 6px">{{ i + 1 }}.)</span>
				<v-list-item-content>
					<v-list-item-title>
						<span v-if="typeof item === 'string'">{{ item }}</span>
						<Snippet v-else :content="item.content" :inline="true"/>
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
    import Snippet from "./Snippet";
	export default {
        name: "OrderedList",
		components: {Snippet},
		props: ["content"]
    }
</script>

<style scoped>
</style>
