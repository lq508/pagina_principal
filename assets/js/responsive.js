class Responsive{

  constructor(){

    this.Boton_responsive();
  }

  Boton_responsive(){
    let boton_responsive = document.querySelector(".header__button_responsive");

    boton_responsive.addEventListener("click", ()=>{

      let header__nav = document.querySelector(".header__nav");
      header__nav.style.left="0px";



    });

  }


}

let responsive = new Responsive();
