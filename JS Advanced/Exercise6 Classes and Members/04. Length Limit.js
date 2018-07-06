class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        if(value < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = value;
        }
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
    }

    toString() {
        if(this.innerString.length <= this.innerLength) {
            return this.innerString;
        }

        return this.innerString.substring(0, this.innerLength) + '...';
    }
}

let newStr = new Stringer('Test', 5);
console.log(newStr.toString()); // Test

newStr.decrease(3);
console.log(newStr.toString()); // Te...

newStr.decrease(5);
console.log(newStr.toString()); // ...

newStr.increase(4);
console.log(newStr.toString()); // Test