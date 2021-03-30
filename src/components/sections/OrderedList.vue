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
						{{ item }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
    export default {
        name: "OrderedList",
        props: ["content"]
    }
</script>

<style scoped>
</style>
