function getSortedList() {
    return {
        internalArray: [],
        size: 0,
        add: function (element) {
            this.internalArray.push(element);
            this.size++;
            this.internalArray.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < this.internalArray.length) {
                this.internalArray.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.internalArray.length) {
                return this.internalArray[index];
            }
        },
        toString: function () {
            return this.internalArray.join(' ');
        }
    }
}

let sortedList = getSortedList();

sortedList.add(5);
sortedList.add(3);
sortedList.remove(0);
console.log(sortedList.get(0));
console.log(sortedList.size);