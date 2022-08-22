

class Modals{

  constructor(){

    this.Primer_modal();
    this.Segundo_Modal();
  }


  Primer_modal(){
    let boton_modal_1 = document.querySelector(".boton_modal_1");
    boton_modal_1.addEventListener("click", ()=>{
      let modal = document.querySelector(".modal");
      modal.classList.add("active");



      console.log("click");


    });


    let boton_cerrar_modal = document.querySelector(".boton_cerrar_modal");
    boton_cerrar_modal.addEventListener("click", ()=>{

      let modal = document.querySelector(".modal");
      modal.classList.remove("active");


    })  ;
  }


  Segundo_Modal(){



  }



}


let modals = new Modals();
