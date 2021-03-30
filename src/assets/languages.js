class Section {
	constructor(contents) {
		this.content = contents
	}
}

class Snippet extends Section {
}

class Paragraph extends Section {
}

class Heading extends Section {
}

class OrderedList extends Section {
}

class Table extends Section {
}

class UnorderedList extends Section {
}

const languages = {
	Java: [
		new Heading({
			level: 1,
			header: "This is a Heading",
			anchor: "header"
		}),
		new Snippet(`
            int x =  1;
            char y = 'c';
            String z = "String";
            for (int i  = 0; i < 10; i++) {
            \tSystem.out.println(i);
            }
            `),
		new Paragraph("This is a paragraph"),
		new OrderedList([
			"This",
			"Is",
			"An",
			"Ordered",
			"List"
		]),
		new UnorderedList([
			"This",
			"Is",
			"An",
			"Unordered",
			"List"
		]),
		new Table({
			headers: ["Letters", "Numbers"],
			rows: [
				["A", 1],
				["B", 2],
				["C", 3]
			]

		})
	],
	JavaScript: [],
	Kotlin: [],
	Python: [],
	TypeScript: [],
}

export {
	Heading,
	Snippet,
	Paragraph,
	OrderedList,
	UnorderedList,
	Table,
	languages
}
