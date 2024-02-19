
// Função principal para processar o texto
function processarTexto(texto, operacao) {
    const resultado = operacao === "criptografar" ? criptografarTexto(texto) : descriptografarTexto(texto);
    exibirResultado(resultado);

    if (texto.trim() === "") {
        // Se nada for digitado, exibir uma imagem
        exibirImagem();
        exibirElementosHTML()
        return;
    }
}

// Função para exibir o resultado na página
function exibirResultado(resultado) {
    const paragrafo = document.getElementById("mensagem_resposta");
    paragrafo.innerHTML = resultado;

    // Ocultar elementos adicionais, se necessário
    const elementosParaOcultar = ["imagem_principal", "meuParagrafo"];
    elementosParaOcultar.forEach((elementoId) => {
        const elemento = document.getElementById(elementoId);
        if (elemento) {
            elemento.style.display = "none";
        }
    });
}

// Função para exibir uma imagem quando nada for digitado
function exibirImagem() {
    const imagem = document.getElementById("imagem_principal");
    const paragrafo = document.getElementById("mensagem_resposta");

    // Exibir imagem e limpar parágrafo
    if (imagem) {
        imagem.style.display = "block";
    }
    if (paragrafo) {
        paragrafo.innerHTML = "";
    }
}




// Função de criptografia do texto
function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Função de descriptografia do texto
function descriptografarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Evento de clique para criptografar ou descriptografar
function adicionarEventoBotao(operacao) {
    const botao = document.getElementById(`botao${operacao === "criptografar" ? 1 : 2}`);
    
    botao.addEventListener("click", function() {
        
        const input = document.getElementById("meuInput");
        const texto = input.value;
        processarTexto(texto, operacao);
    });
}

// Adicionar eventos aos botões de criptografar e descriptografar
adicionarEventoBotao("criptografar");
adicionarEventoBotao("descriptografar");










function exibirElementosHTML() {
    const elementosParaExibir = [ "meuParagrafo"];
    
    elementosParaExibir.forEach((elementoId) => {
        const elemento = document.getElementById(elementoId)
        if(elemento){
            elemento.style.display = "block";
        }
    })

    


}   

