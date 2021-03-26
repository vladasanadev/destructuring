const array = ["yura", () => "showValue"];

// let value = array[0];
const [value, showValue] = array;

alert(value); // должно быть выведено 'value'
alert(showValue()); // должно быть выведено 'showValue'
