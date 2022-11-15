export default class Team {
    constructor(persons) {
        this.persons = persons;
    }

    iterator() {
        const { persons } = this;
        return {
            next() {
                if (persons.length > 0) {
                    return { value: persons.shift(), done: true };
                }
                return { value: undefined, done: false };
            },
        };
    }
}