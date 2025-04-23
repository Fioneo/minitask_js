/* Калькулятор */
const result = document.getElementById('result')
const firstnumber = document.getElementById('input1')
const secondnumber = document.getElementById('input2')
const submitbtn = document.getElementById('submit_button')
let action = '+'
plus.onclick = function() {
    action = '+'
}
minus.onclick = function() {
    action = '-'
}
mult.onclick = function() {
    action = '*'
}
division.onclick = function() {
    action = '/'
}
submitbtn.onclick = function() {
    if (action == '+') {
    const plus = Number(firstnumber.value) + Number(secondnumber.value)
    result.textContent = plus
   }
   else if (action == '-') {
    const minus = Number(firstnumber.value) - Number(secondnumber.value)
    result.textContent = minus
   }
    else if (action == '*') {
    const mult = Number(firstnumber.value) * Number(secondnumber.value)
    result.textContent = mult
   }
   else if (action == '/') {
    const division = Number(firstnumber.value) / Number(secondnumber.value)
    result.textContent = division
   }
}
const buttons = document.querySelectorAll('.selectable');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Снимаем класс "active" со всех кнопок
    buttons.forEach(btn => btn.classList.remove('active'));

    // Добавляем "active" к нажатой кнопке
    button.classList.add('active');
  });
});