const list = document.querySelector('ul')
const btn = document.querySelector('#addButton')

btn.addEventListener('click', addMission)

function addMission(){
    const liEl = document.createElement('li')
    const field = document.querySelector('input')
    liEl.textContent = field.value
    liEl.classList.add('decor')
    list.append(liEl)
    field.value = ''
    liEl.addEventListener('click', addDecoration)
    function addDecoration(){
        liEl.classList.add('line-through')
    }
    liEl.addEventListener('dblclick', removeDecoration)
    function removeDecoration(){
        liEl.classList.remove('line-through')
    }
}
