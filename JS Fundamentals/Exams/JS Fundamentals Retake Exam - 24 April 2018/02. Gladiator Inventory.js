function solve(arr) {
    let inventory = arr.shift().split(' ');
    let allCommands = {
        'Buy': function (item) {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        },
        'Trash': function (item) {
            let index = inventory.indexOf(item);
            if (index > -1) {
                inventory.splice(index, 1);
            }
        },
        'Repair': function (item) {
            let index = inventory.indexOf(item);
            if (index > -1) {
                let element = inventory.splice(index, 1);
                inventory.push(element[0]);
            }
        },
        'Upgrade': function (item) {
            let [realItem, upgrade] = item.split('-');
            let index = inventory.indexOf(realItem);
            if (index > -1) {
                inventory.splice(index + 1, 0, realItem + ':' + upgrade);
            }
        },
        'Fight!': function () {
            console.log(inventory.join(' '));
        }
    }
    for (const string of arr) {
        let [command, item] = string.split(' ');
        allCommands[command](item);
    }
    
}

solve(['SWORD Shield Spear',
    'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel', 'Fight!']);
solve(['SWORD Shield Spear',
    'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V', 'Fight!']);