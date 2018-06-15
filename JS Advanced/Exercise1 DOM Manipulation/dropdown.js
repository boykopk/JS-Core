function addItem() {
    let input1 = document.getElementById('newItemText');
    let input2 = document.getElementById('newItemValue');
    let dropdown = document.getElementById('menu');

    let newItem = document.createElement('option');
    newItem.textContent = input1.value;
    newItem.setAttribute('value', input2.value);
    dropdown.appendChild(newItem);

    input1.value = '';
    input2.value = '';
}