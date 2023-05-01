let contador = 0
let input = document.getElementById('list')
let btnAdd = document.getElementById('btn')
let main = document.getElementById('lista')

function addTarefa () {
    let valorList = list.value;

    if((valorList !== " ") && (valorList !== null) &&(valorList !== undefined)){

        ++contador;

        let novoItem = 
        `<div id="${contador}"class="itens">
        <div>
            <button id="select">Selecionar</button>
        </div>
        <div class="tarefa">
            ${valorList}
        </div>
        <div>
            <button id="deletar">Deletar</button>
        </div>
        </div>`

        $('form').on('submit', function(e){
            e.preventDefault();
        })
        
        main.innerHTML += novoItem;

        list.value = "";
        list.focus();
    }
}

list.addEventListener("keyup",function(event){

    if (event.keycode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})




