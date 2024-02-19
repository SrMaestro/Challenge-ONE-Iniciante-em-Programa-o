const input = document.getElementById("meuInput")
const texto = input.value

const criptografar = document.getElementById("botao1")
criptografar.addEventListener("click" , function() {
    alert("botão clicado")
    const input = document.getElementById("meuInput")
    const texto = input.value
    console.log(criptografarTexto(texto));


    const paragrafo = document.getElementById("mensagem_resposta");
    console.log(paragrafo);

     paragrafo.innerHTML = criptografarTexto(texto);
     
     const imagemPrincipal = document.getElementById("imagem_principal")
     imagemPrincipal.style.display ="none";

     const paragrafoPrincipal = document.getElementById("meuParagrafo")
     paragrafoPrincipal.style.display = "none"


     

    


})


const descriptografar = document.getElementById("botao2")
descriptografar.addEventListener("click" , function(){
    
    alert("botão clicado")
    const input = document.getElementById("meuInput")
    const texto = input.value
    console.log(descriptografarTexto(texto));

    const paragrafo = document.getElementById("mensagem_resposta");
    console.log(paragrafo);

     paragrafo.innerHTML = descriptografarTexto(texto);
     
     const imagemPrincipal = document.getElementById("imagem_principal")
     imagemPrincipal.style.display ="none";

     const paragrafoPrincipal = document.getElementById("meuParagrafo")
     paragrafoPrincipal.style.display = "none"
    


})






//esta funçãp criptografa o texto
function criptografarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

//Esta função descriptografa o texto
function descriptografarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}