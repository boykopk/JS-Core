function assignProperties(arr) {
    let prop1 = arr[0];
    let value1 = arr[1];
    let prop2 = arr[2];
    let value2 = arr[3];
    let prop3 = arr[4];
    let value3 = arr[5];

    console.log({
          [prop1]: value1,
          [prop2]: value2,
          [prop3]: value3
    })
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);