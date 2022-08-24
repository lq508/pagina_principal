

class Modals{

  constructor(){

    this.Primer_modal();
    this.Segundo_Modal();
    this.Tercer_Modal();
  }


  Tercer_Modal(){
    let botones = document.querySelectorAll(".boton_modal_3");

    botones.forEach((valor)=>{

      valor.addEventListener("click", ()=>{
        let modal = document.querySelector(".modal_3");
        modal.classList.add("active");



        console.log("click");


      });

    });





    let boton_cerrar_modal = document.querySelector(".boton_cerrar_modal_3");
    boton_cerrar_modal.addEventListener("click", ()=>{

      let modal = document.querySelector(".modal_3");
      modal.classList.remove("active");


    })  ;



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

    let boton_modal_2 = document.querySelector(".boton_planes");
    boton_modal_2.addEventListener("click", ()=>{
      let modal = document.querySelector(".modal_2");
      modal.classList.add("active");



      console.log("click");


    });


    let boton_cerrar_modal = document.querySelector(".boton_cerrar_modal_2");
    boton_cerrar_modal.addEventListener("click", ()=>{

      let modal = document.querySelector(".modal_2");
      modal.classList.remove("active");


    })  ;



  }



}


let modals = new Modals();
