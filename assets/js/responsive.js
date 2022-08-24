class Responsive{

  constructor(){
    this.Botones_cerrado_responsive();

    this.Boton_responsive();

    }


  Botones_cerrado_responsive(){
    if(window.screen.width <= 768){
      let botones_responsive = document.querySelectorAll(".header__a");

      botones_responsive.forEach(function(valor){
        console.log(valor);
        valor.addEventListener("click", ()=>{
          console.log("hola");
          let header__nav = document.querySelector(".header__nav");
          header__nav.style.left="100%";



        });



      });





    }


  }

  Boton_responsive(){
    let boton_responsive = document.querySelector(".header__button_responsive");

    boton_responsive.addEventListener("click", ()=>{

      let header__nav = document.querySelector(".header__nav");
      header__nav.style.left="0px";



    });


    let boton_close_responsive = document.querySelector(".boton_close_responsive");
    boton_close_responsive.addEventListener("click", function(){

      let header__nav = document.querySelector(".header__nav");
      header__nav.style.left="100%";



    });
  }


}

let responsive = new Responsive();
