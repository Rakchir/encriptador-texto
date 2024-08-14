// Obtener elementos del DOM
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");

// Función para validar y limpiar el texto
function validateAndCleanText(text) {
    // Filtra caracteres que no sean minúsculas (a-z)
    const cleanedText = text.replace(/[^a-z\s]/g, '');
    return cleanedText;
}

// Función para encriptar el texto
function encryptText() {
    let text = validateAndCleanText(inputText.value);
    let encryptedText = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    outputText.textContent = encryptedText;
}

// Función para desencriptar el texto
function decryptText() {
    let text = validateAndCleanText(inputText.value);
    let decryptedText = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    outputText.textContent = decryptedText;
}

// Función para copiar el texto de salida
function copyText() {
    navigator.clipboard.writeText(outputText.textContent).then(() => {
        outputText.textContent = "Texto copiado al portapapeles";
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Asignar eventos a los botones
encryptBtn.addEventListener("click", encryptText);
decryptBtn.addEventListener("click", decryptText);
copyBtn.addEventListener("click", copyText);

