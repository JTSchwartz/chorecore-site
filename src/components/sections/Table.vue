<template>
	<v-simple-table>
		<thead>
		<tr>
			<th v-for="header in content.headers" :key="header">
				{{ header }}
			</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="(row, index) in content.rows" :key="index">
			<td v-for="item in row" :key="item">
				{{ item }}
			</td>
		</tr>
		</tbody>
	</v-simple-table>
</template>

<script>
    export default {
        name: "Table",
        props: ["content"]
    }
</script>

<style scoped>

</style>
