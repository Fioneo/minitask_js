/* Заметки */
const inputvalue = document.getElementById('title')
const createbtn = document.getElementById('create')
const listElement = document.getElementById('list')
createbtn.onclick = function () {
    if (inputvalue.value.length === 0) {
        return
    }
    listElement.insertAdjacentHTML('beforeend', `<li class="list-item">
    <span class="name_card">${inputvalue.value}</span>
    <span class="button red">&times;</span>
    </div>
    </li>`)
    inputvalue.value = ''
    list.onclick = function (event) {
        // Если нажали на элемент с классом "red"
        if (event.target.classList.contains('red')) {
          // Удаляем родительский <li>
          const li = event.target.closest('li');
          li.remove();
        }
      };
}