class Section {
    constructor(contents) {
        this.contents = contents
    }
}

class Snippet extends Section {}

class Paragraph extends Section {}

class Heading extends Section {}

class OrderedList extends Section {}

class Table extends Section {}

class UnorderedList extends Section {}

const languages = {
    Java: [],
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
