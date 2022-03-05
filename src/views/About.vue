<template>
	<div>
		<h2>What is it?</h2>
		<p>
			ChoreCore is a multi-language utility library built to make every developer's life easier. We all know a plethora of functionalities we wish were built into languages just
			because of how often we use them, but instead we have to copy the same functions over and over again between projects. Take the following lines of code as an example:
		</p>
		<pre><code>
		const MILLISECOND = 1
		const SECOND = 1000
		const MINUTE = 60000
		const HOUR = 3600000
		const DAY = 86400000
		const WEEK = 604800000
		// Or
		const MILLISECOND = 1
		const SECOND = 1000 * MILLISECOND
		const MINUTE = 60 * SECOND
		const HOUR = 60 * MINUTE
		const DAY = 24 * HOUR
		const WEEK = 7 * DAY
		</code></pre>
		<br/>
		<p>
			This is in JavaScript, but you would be hard pressed to find a developer who has not written these exact lines of code before, the the equivalent in whatever language they were
			using; so much so that I imagine it is useless to point out that those constants are calculations of each unit it milliseconds (Sure, adding milliseconds to that list is
			pointless, but it drives home the point). But what if we could shorten those 6 lines to only one, an import? Not only would we save lines, but we also the time of doing all of
			those computations if you decided to go with the first route of providing the exact amounts
		</p>
		<p>
			But we didn't stop there, that's simply the easiest way to demonstrate the need for what we've created here, we haven't even scratched the surface of everything this library
			provides, which leads very nicely into our next section.
		</p>
		<h2 id="provisions">What is provided?</h2>
		<p>
			First off, we should explain that not every piece of functionality is available in every language's library, and this can be for a couple of reasons. Some languages already
			have the functionality we implement for others (obviously making it redundant for us to repeat it), while in other cases, it simply isn't possible. Take for example the Kotlin
			variant: the Kotlin library uses Operator Overloading in some places, this simply isn't possible in other supported languages, because the other languages don't support
			Operator Overloading. Trust us, we'd love to offer that in every language, but we too are restricted by the limitations of each language.
		</p>
		<p>
			Enough of that though, let's get to the fun stuff, the overview of everything that is supported, and which languages it is supported in:
		</p>
		<h2 id="modules">Modules</h2>
		<v-row>
			<v-col
				v-for="(module, index) in Object.keys(modules)"
				:key="index"
				cols="12"
				md="4"
				align-self="stretch"
			>
				<v-card class="card-outer"
					:color="isTrue($vuetify.theme.dark, 'accent', 'info')">
					<v-card-title>
						{{ module }}
					</v-card-title>
					<v-card-text>
						{{ modules[module].desc }}
					</v-card-text>
					<div class="card-actions">
						<v-divider class="mx-4"></v-divider>
						<LangButton :not="modules[module].not"
							:anchor="module.toLowerCase()"/>
					</div>
				</v-card>
			</v-col>
		</v-row>
		<br/>
		<h2 id="status">Library Status</h2>
		<v-simple-table>
			<thead>
			<tr>
				<th>Language</th>
				<th>Repository Link</th>
				<th>Package Link</th>
			</tr>
			</thead>
			<tbody>
			<tr
				v-for="lang in status"
				:key="lang.name"
			>
				<td>{{ lang.name }}</td>
				<td>
					<a :href="lang.repo"
						target="_blank">GitHub</a>
				</td>
				<td>
					<a :href="lang.pkg.url"
						target="_blank">{{ lang.pkg.name }}</a>
				</td>
			</tr>
			</tbody>
		</v-simple-table>
		<br/>
		&nbsp;
	</div>
</template>

<script>
	import LangButton from "../components/LangButton";
	
	const {isTrue, isNull} = require("chorecore")
	const {modules} = require("@/assets/modules")
	
	export default {
		name: "About",
		components: {LangButton},
		created() {
			document.title = "About - ChoreCore"
		},
		data: () => ({
			isNull,
			isTrue,
			modules,
			status: [
				{
					name: "Java & Kotlin",
					status: "In Production",
					repo: "https://github.com/JTSchwartz/chorecore-kt",
					pkg: {name: "Maven", url: "https://search.maven.org/artifact/com.jtschwartz/chorecore"}
				},
				{
					name: "JavaScript & TypeScript",
					status: "In Production",
					repo: "https://github.com/JTSchwartz/chorecore-ts",
					pkg: {name: "NPM", url: "https://www.npmjs.com/package/chorecore"}
				},
				{
					name: "Python",
					status: "In Production",
					repo: "https://github.com/JTSchwartz/chorecore-py",
					pkg: {name: "Pip", url: "https://pypi.org/project/chorecore/"}
				}
			]
		})
	}
</script>

<style scoped>
	pre code {
		border: 1px solid var(--v-anchor-base);
		background: var(--v-info-base) !important;
		color: black !important;
		display: inline-block;
		padding: 2px 8px !important;
	}

	a:not([href]) {
		color: var(--v-font-base);
		cursor: grab;
	}

	h2 {
		margin-bottom: 8px;
	}

	p {
		padding-left: 16px;
	}

	.card-outer {
		height: 100%;
		position: relative;
		padding-bottom: 50px;
	}

	.card-actions {
		width: 100%;
		position: absolute;
		bottom: 0;
	}
</style>
