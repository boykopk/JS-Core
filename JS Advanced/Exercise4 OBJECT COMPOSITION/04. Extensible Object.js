function getExtensibleObject() {
    let obj = {
        extend: function (template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    let element = template[key];
                    if (typeof element === 'function') {
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element;
                    }
                }
            }
        }
    };
    return obj;
}


let template =  {
    extensionMethod: () => {
        console.log("From extension method");
    },
    extensionProperty: 'someString'
};

let myObj = getExtensibleObject();
myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));