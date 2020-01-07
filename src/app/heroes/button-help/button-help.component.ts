import { Component, OnInit } from '@angular/core';

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
      let view = document.getElementById("test"); /* Id  */
      /* Get Position and Measurements of Element */
      let properties = view.getBoundingClientRect();
      let frontModal = document.getElementById("frontModal");
      /* console.log(properties); */
      frontModal.style.top = properties.top - 25 +'px';
      frontModal.style.right = properties.right +'px';
      frontModal.style.left = properties.left - 25  +'px';
      frontModal.style.bottom = properties.bottom +'px';
      frontModal.style.width = 50 + properties.width+'px';
      frontModal.style.height = 50 + properties.height+'px';
      /* Append to Modal */
      frontModal.append(view);
      /* Remove properties from position */
      view.style.top = 0 + "px";
      view.style.left = 0 + "px";
      view.style.right = 0 + "px";
      view.style.bottom = 0 + "px";
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

      /* Center Bubble */
      let height = (properties.height / 2) + bubbleProperties.height ; 
      let width = properties.width / 2;
      let bubbleWidth = bubbleProperties.width; 


      console.log( properties + " y La resolución de tu pantalla es: " + screen.width + " x " + screen.height);

      /* Validate Position of Element */
      if (properties.top < bubbleProperties.height + 20 && properties.left > bubbleProperties.width + 20){
        
        /* Bottom | Left Bubble */

        /* Call Position and Measurements of element*/
        bubble.style.top = properties.top + 25 + height +'px';
        bubble.style.left = properties.left + width - bubbleWidth +'px';
        /* Rotate Bubble */
        bubble.style.transform = "scaleX(-1) scaleY(-1)";
        /* Adjust Text */
        bubbleText.style.transform = "scaleX(-1) scaleY(-1)";

      } else if( (screen.width / 2) < properties.left && properties.top > bubbleProperties.height + 20 ){

        /* Top | Left Bubble */

        /* Call Position and Measurements of element*/
        bubble.style.top = properties.top - 25 - height +'px';
        bubble.style.left = properties.left + width - bubbleWidth +'px';
        /* Rotate Bubble */
        bubble.style.transform = "scaleX(-1)";
        /* Adjust Text */
        bubbleText.style.transform = "scaleX(-1)";
        console.log("Si sirvo");

      } else if (properties.top < bubbleProperties.height + 20 && properties.left < bubbleProperties.width + 20){

        /* Bottom | Right Bubble */
        
          /* Call Position and Measurements of element*/
          bubble.style.top = properties.top + 25 + height +'px';
          bubble.style.left = properties.right - width +'px';
          /* Rotate Bubble */
          bubble.style.transform = "scaleY(-1)";
          /* Adjust Text */
          bubbleText.style.transform = "scaleY(-1)";

      } else{

        /* Top | Right Bubble */

        /* Call Position and Measurements of element*/
        bubble.style.top = properties.top - 25 - height +'px';
        bubble.style.left = properties.right - width +'px';

      }


      /* Next and Prev */
      

     }, 1500);/* End Element */
    

    }, 3500); /* End of presentation transition */
    

  }

}