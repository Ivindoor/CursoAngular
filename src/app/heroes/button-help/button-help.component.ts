import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-button-help',
  templateUrl: './button-help.component.html',
  styleUrls: ['./button-help.component.css', './button-help.component.scss']
})

export class ButtonHelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* Pop Up's */
  timer(){

  /* Presentation */
  
  let title = document.querySelector('.title');
  setTimeout(function(){ 
    title.classList.add('active');
  }, 1000);

  /* Remove Class None */
  document.getElementById("backModal").classList.remove("none");
  document.getElementById("frontModal").classList.remove("none");
  /* Add Classes of Modal */
  document.getElementById("backModal").classList.add("dark");
  document.getElementById("frontModal").classList.add("free");

  setTimeout(function(){ 
    /* Remove Presentation */
    title.classList.remove('active');
    title.classList.add("none");
    

    setTimeout(function(){ 
      /* Call Element */
      let view = document.getElementById("buttonHelp"); /* Id  */
      /* Get Position and Measurements of Element */
      let properties = view.getBoundingClientRect();
      let frontModal = document.getElementById("frontModal");
      /* console.log(properties); */
      frontModal.style.top = properties.top + 265 +'px';
      frontModal.style.right = properties.right +'px';
      frontModal.style.left = properties.left - 30 +'px';
      frontModal.style.bottom = properties.bottom +'px';
      frontModal.style.width = 50 + properties.width+'px';
      frontModal.style.height = 50 + properties.height+'px';
      /* Append to Modal */
      frontModal.append(view);
      /* Center Element with the Modal*/
      view.style.marginTop = '25px';
      view.style.marginLeft = '25px';

      /* Create Variable of Bubble */
      let bubble = document.getElementById("instruction");
      /* Remove Class of Bubble */
      bubble.classList.remove("none");
      /* Add Class of Bubble */
      bubble.classList.add("bubble");

      /* Text of Instruction */
      let bubbleText = document.getElementById("bubbleText");
      bubbleText.innerHTML= 'This is the first instruction of this Tutorial <br> With Space'; /* Write instruccion */

      /* Get Position and Measurements of Bubble*/
      let bubbleProperties = bubble.getBoundingClientRect();

      console.log( properties + " y La resolución de tu pantalla es: " + screen.width + " x " + screen.height);

      /* Validate Position of Element */
      /* switch(){
      } */

    


        /* Top | Right Bubble */
        let height = (properties.height / 2) + bubbleProperties.height ; 
        /* Center Bubble */
        let width = properties.width / 2;
        /* Call Position and Measurements of element*/
        
/******************************************************************************************************/
/* Right position and bubble top*/
bubble.style.transform = 'scaleX(-1)';
document.getElementById("bubbleText").style.transform = 'scaleX(-1)';
bubble.style.top = properties.top + 265 - height +'px';
bubble.style.left = properties.left - width*6.5 +'px';

/* Right position and bubble down*/
/* bubble.style.transform = 'scaleY(-1)';
document.getElementById("bubbleText").style.transform = 'scaleY(-1) scaleX(-1)' ;
bubble.style.top = properties.top + 240 + height +'px';
bubble.style.left = properties.left + width*6.5 +'px';
bubble.style.transform = 'rotate(180deg)'; */
/******************************************************************************************************/
/* Left position and bubble down*/
/* bubble.style.transform = 'scaleY(-1)';
document.getElementById("bubbleText").style.transform = 'scaleY(-1)';
bubble.style.top = properties.top + 240 + height +'px';
bubble.style.left = properties.left + width +'px'; */
/* Left position and bubble top*/
/* bubble.style.top = properties.top + 265 - height +'px';
bubble.style.left = properties.left + width +'px'; */
/******************************************************************************************************/


      /* Next and Prev */
      

     }, 1500);/* End Element */
    

    }, 3500); /* End of presentation transition */
    

  }

}