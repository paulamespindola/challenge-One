const textArea = document.querySelector(".caixa__de__entrada");
const mensagem = document.querySelector(".mensagem");

function sumir(){
    document.getElementById("iniciacao-mensagem").style.display = "none";
}

function aparecerResposta(){
    document.getElementById("resposta-mensagem").style.display = "block";
}
function btnEncriptar() {
    sumir();
    aparecerResposta();
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDecriptar() {
    const textoDecriptado = decriptar(textArea.value);
    mensagem.value = textoDecriptado;
    textArea.value = "";
    // Retorne true se a decriptação for bem-sucedida
    return true;
}

function decriptar(stringDecriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecriptada = stringDecriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDecriptada.includes(matrizCodigo[i][1])) { // Correção aqui
            stringDecriptada = stringDecriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDecriptada;
}

function copiarTexto(){

    
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(mensagem.value);

    alert("Texto copiado com sucesso!");
}