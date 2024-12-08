let f1 = document.forms.f1;
let arr = []
let div1 = document.getElementById('div1');

const byName = document.getElementById('byName');
const byValue = document.getElementById('byValue');
const del = document.getElementById('del');



f1.onsubmit = function (e){
    e.preventDefault()
    let Q = this.textName.value.replaceAll(' ', '')

    let [name, value] = Q.split('=')

    if (name.match(/^[a-zA-Z0-9]+$/) && value.match(/^[a-zA-Z0-9]+$/)) {
        arr.push(Q)
    }
    div1.innerHTML = arr.join('<br>');
    this.textName.value = '';
}



byName.onclick = function (e){
    e.preventDefault()
    arr.sort((a, b)=>a.localeCompare(b))
    div1.innerHTML = arr.join('<br>')
}



// не смогла сделать
byValue.onclick = function (e){
    e.preventDefault()
}



del.onclick = function (e){
    e.preventDefault()
    arr = []
    div1.innerText = arr
}


























