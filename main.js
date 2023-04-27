let contador = 0;
let variavel_1 = document.getElementById('nome')
let variavel_2 = document.getElementById('sobrenome')
let variavel_3 = document.getElementById('telefone')
let buttonAdd = document.getElementById('button-add')
let main = document.getElementById('areaDaLista')

function addNumero(){
    let valorVariavelU = variavel_1.value;
    let valorVariavelD = variavel_2.value;
    let valorVariavelT = variavel_3.value;

    if ((valorVariavelU, valorVariavelD, valorVariavelT  !=="") && (valorVariavelU,valorVariavelD, valorVariavelT !==null) && (valorVariavelU,valorVariavelD, valorVariavelT !==undefined)){

            ++contador;

            let novoContato = `<div id="${contador}" class="lista">
            <div>

            </div>
            <div>
            </div>
            <div class="nome">
                ${valorVariavelU}
            </div>
            <div class="sobrenome">
                ${valorVariavelD}
            </div>
            <div class="telefone">
                ${valorVariavelT}
        </div>`;
                main.innerHTML += novoContato;

                variavel_1.value ="";
                variavel_2.value ="";
                variavel_3.value ="";

                variavel_1.focus ();
                variavel_2.focus ();
                variavel_3.focus ();

    }}




