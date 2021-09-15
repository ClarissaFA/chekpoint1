// seleciona o input do título
const titulo = document.querySelector('#title')
// Seleciona o input da url da imagem
const imagemURL = document.querySelector('#url')
// Seleciona o input da descrição
const descricao = document.querySelector('#description')
// Seleciona o botão de adicionar 
const btnAdicionar = document.querySelector('#submit')
const boxItens = document.querySelector('.container')

btnAdicionar.addEventListener('click', (e) => {
    e.preventDefault()
    // Condicional geral que verifica os valores inserios nos três campos
    if(imagemURL.value && titulo.value && descricao.value) {
        let validarImg = false
        // Condicional para validar o formato da imagem
        if(imagemURL.value.includes('jpg') || imagemURL.value.includes('png') || imagemURL.value.includes('jpeg') || imagemURL.value.includes('webp') || imagemURL.value.includes('gif')){
            validarImg = true
        // Condicional para verificar o campo URL do formulário
        } else {
            alert('Coloque um link de imagem válido.')
        }
    
        if(validarImg) { 
            boxItens.innerHTML += `<div class="container">
            <div class="card">
                <div id="content">
                    <h2>${titulo.value}</h2>
                    <p>${descricao.value}</p>
                    <div class="img">
                        <img src="${imagemURL.value}" alt="">
                    </div img>
                </div>
            </div>
        </div>`
            
        }    
    } else {
        alert('Preencha todos os campos')
    }
})