console.log('):')
console.log('Bienvenido a mi primer script')

function imprimir() {
    console.log('dentro de la función imprimir')
    const contenedor = document.getElementById('box')
    console.log(contenedor)
    for (i=1;i<=1001;i++){
        contenedor.innerText += i 
        contenedor.innerHTML += '<br>'
    }
}

imprimir()