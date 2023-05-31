const inputText = document.getElementById("inputText")
const resultadoTexto = document.getElementById("resultadoTexto")
const seccionNoEncontrado = document.getElementById("seccionNoEncontrado")
const seccionEncontrado = document.getElementById("seccionEncontrado")
const botonEncriptar = document.getElementById("botonEncriptar")
const botonDesencriptar = document.getElementById("botonDesencriptar")
const botonCopiar = document.getElementById("botonCopiar")
const Diccionario = {
  e: "enter",
  i: "imes",
  o: "ober",
  a: "ai",
  u: "ufat",
}

 const cifrarDescifrar = (texto, type) => {
  for (const key  in Diccionario) {
      type === "cifrar" && (texto = texto.replaceAll(key, Diccionario[key]))
      type === "descifrar" && (texto = texto.replaceAll(Diccionario[key],key))
     }
   return texto
}

  const traerTexto = () => {
    return inputText.value
  }
 
  const mostrarResultado = (texto) => {
    resultadoTexto.value = texto

    seccionNoEncontrado.classList.toggle("oculto",texto)
    seccionEncontrado.classList.toggle("oculto",!texto)
  }

  const copiarTexto = ()=> {
    const texto = resultadoTexto.value
    navigator.clipboard.writeText(texto)
    mostrarResultado("")
    inputText.value = ""
  }

  const limpiarTexto = (event)=>{
    inputText.value = event.target.value.replaceAll(/[^a-z\s]+/g,"") 
  }

botonEncriptar.addEventListener("click",()=>{
  const textoOriginal = traerTexto()
  const resultado = cifrarDescifrar(textoOriginal, "cifrar")
 mostrarResultado(resultado)
})

botonDesencriptar.addEventListener("click",()=>{
  const textoOriginal = traerTexto()
  const resultado = cifrarDescifrar(textoOriginal, "descifrar")
 mostrarResultado(resultado)
})

botonCopiar.addEventListener("click", copiarTexto)
inputText.addEventListener("input", (e)=>limpiarTexto(e))
