
// Seleccione modal-btn,modal-overlay,close-btn
// Llama los eventos de clic en modal-btn y close-btn
// Cuando el usuario hace clic en modal-btn agrega .open-modal a modal-overlay
// Cuando el usuario hace clic en cerrar-btn eliminar .open-modal de modal-overlay
//Variables HTML
const modalBtn=document.querySelector(".modal-btn");
const modal=document.querySelector(".modal-overlay");
const closeBtn=document.querySelector(".close-btn");
//Boton modal: para abrir la ventanita
modalBtn.addEventListener("click", function(){
    //Uso de classlist
    modal.classList.add("open-modal");
});

//Boton cerrar: para cerrar la ventanita
closeBtn.addEventListener("click", function(){
    //Uso de classlist
    modal.classList.remove("open-modal");
});
/* Temas Vsitos
classList.add(): Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
classList.remove(): Elimina las clases indicadas.

*/