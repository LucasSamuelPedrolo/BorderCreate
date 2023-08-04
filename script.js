const bordaEsquerdaCima = document.getElementById('border-edit-left-up');
const bordaDireitaCima = document.getElementById('border-edit-right-up');
const bordaEsquerdaBaixo = document.getElementById('border-edit-left-bottom');
const bordaDireitaBaixo = document.getElementById('border-edit-right-bottom');

const btnEnviar = document.querySelector('#btn-enviar');

const borda = document.querySelectorAll('.border-edit');

const areaCssCopy = document.querySelector('.span-text-css');
const text2copy = document.querySelector('.border-text-css');

const btnCopy = document.querySelector('.copy-mode');

btnEnviar.addEventListener("click", () => {
    addBorderEdit(bordaEsquerdaCima, bordaDireitaCima, bordaEsquerdaBaixo, bordaDireitaBaixo, borda);

    cssDisplay();
});

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(text2copy.innerText);
})

function addBorderEdit(btnLeftUp, btnRightUp, btnLeftDown, btnRightDown, bordas) {
    const valores = [
        btnLeftUp.value,
        btnRightUp.value,
        btnLeftDown.value,
        btnRightDown.value
    ];

    const bordaEdit = [
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-left-radius',
        'border-bottom-right-radius'
    ]

    for (let i = 0; i < valores.length; i++) {
        for (const iterator of bordas) {
            iterator.style.cssText += `${bordaEdit[i]} : ${detectaValorVazio(valores[i])}px`
        }
    }

}

function detectaValorVazio(value, elem) {
    const adicionaZero = value ? value : 0;
    return adicionaZero
}

function cssDisplay() {
    areaCssCopy.innerHTML = `${bordaEsquerdaCima.value}px ${bordaDireitaCima.value}px ${bordaEsquerdaBaixo.value}px ${bordaDireitaBaixo.value}px`
}
