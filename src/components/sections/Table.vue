<template>
	<div>
		<v-simple-table>
			<thead>
			<tr>
				<th v-for="header in content.headers"
					:key="header">
					{{ header }}
				</th>
			</tr>
			</thead>
			<tbody>
			<tr
				v-for="(row, i) in content.rows"
				:key="i">
				<td
					v-for="(item, j) in row"
					:key="j"
					:class="{'whitespace-nowrap': $vuetify.breakpoint.smAndDown}"
				>
					<span v-if="typeof item === 'string'">{{ item }}</span>
					<Snippet v-else :content="item.content" :inline="true"/>
				</td>
			</tr>
			</tbody>
		</v-simple-table>
		<br/>
	</div>
</template>

<script>
	const {isEqual} = require("chorecore")

    import Snippet from "./Snippet";
	export default {
        name: "Table",
		components: {Snippet},
		props: ["content"],
		data: () => ({
			isEqual
		})
    }
</script>

<style scoped>
	td:first-child {
		padding-left: 0 !important;
		padding-right: 0 !important;
	}

	td:not(:first-child) {
		padding-right: 0 !important;
	}

	.whitespace-nowrap {
		white-space: nowrap;
	}

	.whitespace-nowrap > code {
		white-space: nowrap !important;
	}
</style>
