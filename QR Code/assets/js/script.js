let btnGerar = document.querySelector("#gerar-qr")
let box = document.querySelector(".box")
let DivQrCode = document.querySelector(".qr-code")


function gerarCodigo(){
let campoQR = document.querySelector("#campo-qr").value

box.innerHTML = ""

if(campoQR.trim() != ""){

    var qrcode = new QRCode(box, {
        text: campoQR,
        width: 300,
        height: 300,
    
    },);

DivQrCode.classList.add("display-hidden")

setTimeout(() => {
    const img = box.querySelector("img")
const dowloand = document.querySelector("#dowloand")

dowloand.href = img.src

},300);

}else{
    DivQrCode.classList.remove("display-hidden")
}

}

btnGerar.addEventListener("click", gerarCodigo)