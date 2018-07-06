class Rat {
    constructor (name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = this.name + '\n';
        for(let rat of this.unitedRats) {
            result += `##${rat.name}\n`;
        }

        return result.trim();
    }
}

let ratOne = new Rat('Jamie');
console.log(ratOne.toString());
console.log(ratOne.getRats());
ratOne.unite(new Rat('John'));
ratOne.unite(new Rat('Paul'));
console.log(ratOne.getRats());
console.log(ratOne.toString());