const contenedor = document.querySelector("#container");

document.querySelector("#boton-menu").addEventListener('click', () => {
    contenedor.classList.toggle("active");
});

const comprobarAncho = () =>{

    if(window.innerWidth <=768){
        contenedor.classList.remove('active');
    } else{
        contenedor.classList.add('active');
    }
}
comprobarAncho();

window.addEventListener('resize', () => {

    comprobarAncho();

});