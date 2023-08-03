const bordaEsquerdaCima = document.getElementById('border-edit-left-up');
const bordaDireitaCima = document.getElementById('border-edit-right-up');
const bordaEsquerdaBaixo = document.getElementById('border-edit-left-bottom');
const bordaDireitaBaixo = document.getElementById('border-edit-right-bottom');

const btnEnviar = document.querySelector('#btn-enviar');

const borda = document.getElementsByClassName('border-edit');

btnEnviar.addEventListener("click", () => {
    addBorderEdit(bordaEsquerdaCima, bordaDireitaCima, bordaEsquerdaBaixo, bordaDireitaBaixo, borda)
})

function addBorderEdit(bordaLUP, bordaRUP, bordaLBO, bordaRBO, borda) {

   
    }
}