export const modules = {
	Alphabet: {
		desc: "A prime example of why we call this project ChoreCore, we can all type out the alphabet, or find a way to generate it in every language, and of course you could just map" +
			" or filter that to get all the variants you could ever want, but what if you didn't have to? What if someone already took care of that? That's where we come in",
		not: ['java', 'kotlin', 'python']
	},
	Conditionals: {
		desc: "Whether the language has a true ternary operator or not, they still aren't perfect. None of them offer a one sided ternary case, and we not only offer this support, but" +
			" also provided simplified cases specific for testing Null cases, Equality, and more.",
		not: ['python']
	},
	Math: {
		desc: "Sure every language has a Math library, and they often have a lot to offer, but nothing has everything, and this module aims to close that gap",
		not: ['java', 'kotlin', 'python']
	},
	Strings: {
		desc: "Offerings in this module are highly language dependent, but is made up of a lot of String altering functions that many of us wish were built into languages and have to" +
			" search out the easiest way take care of our requirements instead.",
		not: ['java', 'python']
	},
	Symbols: {
		desc: "Right now this module purely has one function, give it a floating point number (less than on) in either float or string format, and you can get the closest Unicode" +
			" fraction symbol in return. Nothing too fancy, but can definitely come in handy in some situations.",
		not: ['java', 'kotlin', 'python']
	},
	Time: {
		desc: "Nothing too complex, the time module doesn't bring anything too intense to the table, this is just a utility module to help by not making you have to write the same code" +
			" we did.",
		not: ['java', 'kotlin', 'python']
	}
}
