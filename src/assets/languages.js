class Section {
	constructor(contents) {
		this.content = contents
	}
}

class Snippet extends Section {
}

class CodeList extends Section {
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

class BR {}

class HR {
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
			    System.out.println(i);
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
	JavaScript: [
		new Heading({
			level: 1,
			header: "Alphabet",
			anchor: "alphabet"
		}),
		new Heading({
			level: 2,
			header: "Constants",
			anchor: "alphabet-constants"
		}),
		new Heading({
			level: 3,
			header: new Snippet("alphabet")
		}),
		new Paragraph(
			"Contains the alphabet in an abundance of variants in Array form."
		),
		new Table(
			{
				headers: ["Name", "Value"],
				rows: [
					['LOWERCASE', new Snippet('["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]')],
					['UPPERCASE', new Snippet('["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]')],
					['LOWERCASE_VOWELS', new Snippet('["a", "e", "i", "o", "u", "y"]')],
					['UPPERCASE_VOWELS', new Snippet('["A", "E", "I", "O", "U", "Y"]')],
					['LOWERCASE_NON_VOWELS', new Snippet('["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]')],
					['UPPERCASE_NON_VOWELS', new Snippet('["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"]')]
				]
			}
		),
		new Heading({
			level: 3,
			header: new Snippet("alphabet.strings")
		}),
		new Paragraph(
			"Contains the alphabet in an abundance of variants in String form."
		),
		new Table(
			{
				headers: ["Name", "Value"],
				rows: [
					['LOWERCASE', new Snippet('"abcdefghijklmnopqrstuvwxyz"')],
					['UPPERCASE', new Snippet('"ABCDEFGHIJKLMNOPQRSTUVWXYZ"')],
					['LOWERCASE_VOWELS', new Snippet('"aeiouy"')],
					['UPPERCASE_VOWELS', new Snippet('"AEIOUY"')],
					['LOWERCASE_NON_VOWELS', new Snippet('"bcdfghjklmnpqrstvwxz"')],
					['UPPERCASE_NON_VOWELS', new Snippet('"BCDFGHJKLMNPQRSTVWXZ"')]
				]
			}
		),
		new Heading({
			level: 2,
			header: "Methods",
			anchor: "alphabet-methods"
		}),
		new Paragraph("All constants have an accompanying method that will accept an integer as an argument and simply return the character at that index"),
		new CodeList([
			new Snippet("lowercaseAt(i: number): string"),
			new Snippet("uppercaseAt(i: number): string"),
			new Snippet("lowercaseVowelAt(i: number): string"),
			new Snippet("uppercaseVowelAt(i: number): string"),
			new Snippet("lowercaseNonVowelAt(i: number): string"),
			new Snippet("uppercaseNonVowelAt(i: number): string"),
		]),
		new HR(),
		new Heading({
			level: 1,
			anchor: 'conditionals',
			header: 'Conditionals'
		}),
		new Paragraph("Conditionals are a group of functions to simplify ternary operations, and are specialized for string interpolation in cases of one-sided situations. However all" +
			" functions do provide the option to pass along a value to return in the case the condition is false using the /`elseVal//`."),
		new Paragraph("Example:"),
		new Snippet(`
		let x = 1
		let y = 2
		console.log(\`X and Y are \${x !== y ? 'not ' : ''}equal\`)
		// Or using ChoreCore:
		console.log(\`X and Y are \${isNotEqual(x, y, 'not ')}equal\`)
		// Both will display "X and Y are not equal"
		`),
		new BR(),
		new Paragraph("In this situation, the use is not to write less code, but rather cleaner code and reduce useless code"),
		new Paragraph("This module is made up of exclusively functions which can be broken up into 2 classifications: Comparisons and Checks"),
		new BR(),
		new Heading({
			level: 2,
			anchor: 'comparisons',
			header: 'Comparisons'
		}),
		new Paragraph("These functions test against the first two parameters to determine whether or not to return the /`returnVal//`. In functions that determine equality, there is an" +
			" option (using the /`sameType//` parameter) to switch between whether or not values should be coalesced. This means that when /`sameType//` is true (which is the default)," +
			" ChoreCore will use the triple equality operator (=== or !==), or double equality when false (== or !=). Functions with abbreviations in the name stand for Greater Than," +
			" Less Than, and both have a Or Equal To variant. If a /`returnVal//` is not provided, it will use the /`originalVal//`."),
		new CodeList([
			new Snippet("isEqual(originalVal: any, testVal: any, returnVal: any = originalVal, sameType: boolean = true, elseVal: any = ''): any"),
			new Snippet("isNotEqual(originalVal: any, testVal: any, returnVal: any = originalVal, sameType: boolean = true, elseVal: any = ''): any"),
			new Snippet("isGT(originalVal: any, testVal: any, returnVal: any = originalVal, elseVal: any = ''): any"),
			new Snippet("isGTE(originalVal: any, testVal: any, returnVal: any = originalVal, elseVal: any = ''): any"),
			new Snippet("isLT(originalVal: any, testVal: any, returnVal: any = originalVal, elseVal: any = ''): any"),
			new Snippet("isLTE(originalVal: any, testVal: any, returnVal: any = originalVal, elseVal: any = ''): any"),
		]),
		new Heading({
			level: 2,
			anchor: 'checks',
			header: 'Checks'
		}),
		new Paragraph("Check functions determine which value to return based on just a single argument and what each function tests is self-explanatory. Similarly to the Comparisons, if" +
			" a /`returnVal//` is not provided, it will use the /`testVal//`"),
		new CodeList([
			new Snippet("isTrue(testVal: any, returnVal: any = testVal, elseVal: any = ''): any"),
			new Snippet("isFalse(testVal: any, returnVal: any = testVal, elseVal: any = ''): any"),
			new Snippet("isEven(testVal: number, returnVal: any = testVal, elseVal: any = ''): any"),
			new Snippet("isOdd(testVal: number, returnVal: any = testVal, elseVal: any = ''): any"),
			new Snippet("isNull(testVal: any, returnVal: any = testVal, elseVal: any = ''): any"),
			new Snippet("isNotNull(testVal: any, returnVal: any = testVal, elseVal: any = ''): any"),
			new Snippet("isUndefined(testVal: any, returnVal: any = testVal, elseVal: any = ''): any"),
			new Snippet("isNotUndefined(testVal: any, returnVal: any = testVal, elseVal: any = ''): any"),
		])
	],
	Kotlin: [
		new Heading({
			level: 1,
			header: "Kotlin",
			anchor: "header"
		})
	],
	Python: [
		new Heading({
			level: 1,
			header: "Python",
			anchor: "header"
		})
	],
	TypeScript: [
		new Heading({
			level: 1,
			header: "TypeScript",
			anchor: "header"
		})
	],
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
