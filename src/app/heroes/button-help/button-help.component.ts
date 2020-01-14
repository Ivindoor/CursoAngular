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

  
  /* Number of Instructions */
  x:number = 0;

  /* Total Instructions */
  totalPages = 4 ; /* You Need Add the Total Pages */

  /* Number of Pagination */
  numberPage = this.x + 1;


  /* Principal Title */
  firstInstruction(){

  /* Presentation */

  let title = document.querySelector('.title');
  setTimeout(function(){ 
    title.classList.add('active');
  }, 1000);

  /* Remove Class None */
  document.getElementById("backModal").classList.remove("none");
  /* Add Classes of Modal */
  document.getElementById("backModal").classList.add("dark");

    setTimeout(function(){ 
      /* Remove Presentation */
      title.classList.remove('active');
      title.classList.add("none");

    }, 3500); /* End of presentation transition */
  
  }


  /* Button Next */
  next(){
    if(this.x!=this.totalPages-1)
    {
      /* Clean FrontModal */
      document.getElementById("frontModal").innerHTML = '';
      /* Next Instruction */
      this.x++;
      /* Number of Pagination */
      this.numberPage = this.x + 1;
      //alert(this.x);
      /* Validate other Instruction */
      this.numberInstructions();
      return this.x;
    } else{
      /* Remove Class bubble */
      document.getElementById("instruction").classList.remove("bubble");
      /* Add Classe none */
      document.getElementById("instruction").classList.add("none");
      /* Remove Class free */
      document.getElementById("frontModal").classList.remove("free");
      /* Add Classe none */
      document.getElementById("frontModal").classList.add("none");
      /* Return to 0 counter */
      this.x = 0;
      /* Clean FrontModal */
      document.getElementById("frontModal").innerHTML = '';
      /* Fareewll */
      this.farewell();
      return this.x;
    }
  }

  /* Button Prev */
  prev(){
    if(this.x!=0)
    {
      /* Clean FrontModal */
      document.getElementById("frontModal").innerHTML = '';
      /* Back Instruction */
      this.x--;
      /* Number of Pagination */
      this.numberPage = this.x + 1;
      //alert(this.x);
      /* Validate other Instruction */
      this.numberInstructions();
      return this.x;
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Just now you are in the beginning',
      })
    }
  }


  /* Instruction One */
  instructionOne(){
    setTimeout(function(){
      /* Remove Class None */
      document.getElementById("frontModal").classList.remove("none");
      /* Add Classes of Modal */
      document.getElementById("frontModal").classList.add("free");
      /* Call Element */
      let view = document.getElementById("buttonHelp"); /* Id  */
      /* Get Position and Measurements of Element */
      const properties = view.getBoundingClientRect();
      let frontModal = document.getElementById("frontModal");
      /* console.log(properties); */
      frontModal.style.top = properties.top - 25 +'px';
      frontModal.style.right = properties.right +'px';
      frontModal.style.left = properties.left - 25  +'px';
      frontModal.style.bottom = properties.bottom +'px';
      frontModal.style.width = 50 + properties.width+'px';
      frontModal.style.height = 50 + properties.height+'px';
      /* Remove properties from position */
      view.style.top = 0 + "px";
      view.style.left = 0 + "px";
      view.style.right = 0 + "px";
      view.style.bottom = 0 + "px"; 
      /* Center Element with the Modal*/
      view.style.marginTop = '25px';
      view.style.marginLeft = '25px';
      /* Append to Modal */
      let clone = view.cloneNode(true);
      frontModal.append(clone);
      /* Drop Off From Containers */
      view.style.position = "fixed";
      view.style.zIndex = "10";
      /* Adding properties of Element */
      view.style.top = properties.top +'px';
      view.style.left = properties.left +'px';
      view.style.width = properties.width + "px";
      view.style.height = properties.height + "px"; 
      view.style.marginTop = '0px';
      view.style.marginLeft = '0px';

      /* Create Variable of Bubble */
      let bubble = document.getElementById("instruction");
      /* Remove Class of Bubble */
      bubble.classList.remove("none");
      /* Add Class of Bubble */
      bubble.classList.add("bubble");

      /* Text of Instruction */
      let bubbleText = document.getElementById("bubbleText");
      bubbleText.innerHTML= "This is the first instruction of this Tutorial <br> With Space"; /* Write instruccion */

      /* Button Next and Prev */
      let buttons = document.getElementById("containerButtonsInstructions");

      /* Get Position and Measurements of Bubble*/
      let bubbleProperties = bubble.getBoundingClientRect();

      /* Center Bubble */
      let height = (properties.height / 2) + bubbleProperties.height ; 
      let width = properties.width / 2;
      let bubbleWidth = bubbleProperties.width; 


      /* Validate Position of Element */
      if (properties.top < bubbleProperties.height + 20 && properties.left > bubbleProperties.width + 20){
        
        /* Bottom | Left Bubble */

        /* Call Position and Measurements of element*/
        bubble.style.top = properties.top - 75 + height +'px';
        bubble.style.left = properties.left + width - bubbleWidth +'px';
        /* Rotate Bubble */
        bubble.style.transform = "scaleX(-1) scaleY(-1)";
        /* Adjust Text */
        bubbleText.style.transform = "scaleX(-1) scaleY(-1)";
        buttons.style.transform = "scaleX(-1) scaleY(-1)";
        buttons.style.marginTop = "0px";
        buttons.style.marginBottom = "-20px";
        /* Align Pagination to Right */
        document.getElementById("pagination").style.cssFloat = "right";
        document.getElementById("pagination").style.marginTop = "25px";

      } else if( (screen.width / 2) < properties.left && properties.top > bubbleProperties.height + 20 ){

        /* Top | Left Bubble */

        /* Call Position and Measurements of element*/
        bubble.style.top = properties.top - 25 - height +'px';
        bubble.style.left = properties.left + width - bubbleWidth +'px';
        /* Rotate Bubble */
        bubble.style.transform = "scaleX(-1)";
        /* Adjust Text */
        bubbleText.style.transform = "scaleX(-1)";
        buttons.style.transform = "scaleX(-1)";

      } else if (properties.top < bubbleProperties.height + 20 && properties.left < bubbleProperties.width + 20){

        /* Bottom | Right Bubble */
        
          /* Call Position and Measurements of element*/
          bubble.style.top = properties.top - 75 + height +'px';
          bubble.style.left = properties.right - width +'px';
          /* Rotate Bubble */
          bubble.style.transform = "scaleY(-1)";
          /* Adjust Text */
          bubbleText.style.transform = "scaleY(-1)";
          buttons.style.transform = "scaleY(-1)";
          buttons.style.marginTop = "0px";
          buttons.style.marginBottom = "-20px";
          /* Align Pagination to Right */
          document.getElementById("pagination").style.cssFloat = "right";
          document.getElementById("pagination").style.marginTop = "25px";

      } else{

        /* Top | Right Bubble */

        /* Call Position and Measurements of element*/
        bubble.style.top = properties.top - 25 - height +'px';
        bubble.style.left = properties.right - width +'px';
      }

    }, 4500);
      
  }

  /* Instruction */
  instruction(id : string , intructions : string){
    /* Call Element */
    let view = document.getElementById(this.id); /* Id  */
    /* Get Position and Measurements of Element */
    const properties = view.getBoundingClientRect();
    let frontModal = document.getElementById("frontModal");
    /* console.log(properties); */
    frontModal.style.top = properties.top - 25 +'px';
    frontModal.style.right = properties.right +'px';
    frontModal.style.left = properties.left - 25  +'px';
    frontModal.style.bottom = properties.bottom +'px';
    frontModal.style.width = 50 + properties.width+'px';
    frontModal.style.height = 50 + properties.height+'px';
    /* Remove properties from position */
    view.style.top = 0 + "px";
    view.style.left = 0 + "px";
    view.style.right = 0 + "px";
    view.style.bottom = 0 + "px"; 
    /* Center Element with the Modal*/
    view.style.marginTop = '25px';
    view.style.marginLeft = '25px';
    /* Append to Modal */
    let clone = view.cloneNode(true);
    frontModal.append(clone);
    /* Drop Off From Containers */
    view.style.position = "fixed";
    view.style.zIndex = "10";
    /* Adding properties of Element */
    view.style.top = properties.top +'px';
    view.style.left = properties.left +'px';
    view.style.width = properties.width + "px";
    view.style.height = properties.height + "px"; 
    view.style.marginTop = '0px';
    view.style.marginLeft = '0px';
    
    
    /* Create Variable of Bubble */
    let bubble = document.getElementById("instruction");
    /* Remove Class of Bubble */
    bubble.classList.remove("none");
    /* Add Class of Bubble */
    bubble.classList.add("bubble");


    /* Text of Instruction */
    let bubbleText = document.getElementById("bubbleText");
    bubbleText.innerHTML= this.instructions; /* Write instruccion */
    
    /* Button Next and Prev */
    let buttons = document.getElementById("containerButtonsInstructions");

    /* Get Position and Measurements of Bubble*/
    let bubbleProperties = bubble.getBoundingClientRect();

    /* Center Bubble */
    let height = (properties.height / 2) + bubbleProperties.height ; 
    let width = properties.width / 2;
    let bubbleWidth = bubbleProperties.width; 


    /* Reset Bubble */
    bubble.style.top = properties.top - 25 - height +'px';
    bubble.style.left = properties.right - width +'px';
    document.getElementById("pagination").style.cssFloat = "left";
    document.getElementById("pagination").style.marginTop = "7.5px";
    bubble.style.transform = "scaleX(1) scaleY(1)";
    bubbleText.style.transform = "scaleX(1) scaleY(1)";
    buttons.style.transform = "scaleX(1) scaleY(1)";
    buttons.style.marginTop = "-20px";
    buttons.style.cssFloat = "right";
    buttons.style.paddingBottom = "10px";

    /* Validate Position of Element */
    if (properties.top < bubbleProperties.height + 20 && properties.left > bubbleProperties.width + 20){
      
      /* Bottom | Left Bubble */

      /* Call Position and Measurements of element*/
      bubble.style.top = properties.top - 75 + height +'px';
      bubble.style.left = properties.left + width - bubbleWidth +'px';
      /* Rotate Bubble */
      bubble.style.transform = "scaleX(-1) scaleY(-1)";
      /* Adjust Text */
      bubbleText.style.transform = "scaleX(-1) scaleY(-1)";
      buttons.style.transform = "scaleX(-1) scaleY(-1)";
      buttons.style.marginTop = "0px";
      buttons.style.marginBottom = "-20px";
      /* Align Pagination to Right */
      document.getElementById("pagination").style.cssFloat = "right";
      document.getElementById("pagination").style.marginTop = "25px";

    } else if( (screen.width / 2) < properties.left && properties.top > bubbleProperties.height + 20 ){

      /* Top | Left Bubble */

      /* Call Position and Measurements of element*/
      bubble.style.top = properties.top - 25 - height +'px';
      bubble.style.left = properties.left + width - bubbleWidth +'px';
      /* Rotate Bubble */
      bubble.style.transform = "scaleX(-1)";
      /* Adjust Text */
      bubbleText.style.transform = "scaleX(-1)";
      buttons.style.transform = "scaleX(-1)";

    } else if (properties.top < bubbleProperties.height + 20 && properties.left < bubbleProperties.width + 20){

      /* Bottom | Right Bubble */
      
        /* Call Position and Measurements of element*/
        bubble.style.top = properties.top - 75 + height +'px';
        bubble.style.left = properties.right - width +'px';
        /* Rotate Bubble */
        bubble.style.transform = "scaleY(-1)";
        /* Adjust Text */
        bubbleText.style.transform = "scaleY(-1)";
        buttons.style.transform = "scaleY(-1)";
        buttons.style.marginTop = "0px";
        buttons.style.marginBottom = "-20px";
        /* Align Pagination to Right */
        document.getElementById("pagination").style.cssFloat = "right";
        document.getElementById("pagination").style.marginTop = "25px";

    } else{

      /* Top | Right Bubble */

      /* Call Position and Measurements of element*/
      bubble.style.top = properties.top - 25 - height +'px';
      bubble.style.left = properties.right - width +'px';
    }  
    
  }


  /* Instruction Variables */
  id : string;
  instructions : string;

  
  /* Number Instructions */
  numberInstructions(){
    switch(this.x){
      case 0:
        /* You already declared this instruction */
        this.id = "buttonHelp";
        this.instructions = "This is the first instruction of this Tutorial <br> With Space";
        this.instruction(this.id,this.instructions);
        break;
      case 1:
        /* Change Id and Instruction */
        this.id = "test";
        this.instructions = "This is the second instruction of this Tutorial";
        this.instruction(this.id,this.instructions);
        break;
      case 2:
        /* Change Id and Instruction */
        this.id = "sliderTxt";
        this.instructions = "This is the three instruction of this Tutorial <br> With Space";
        this.instruction(this.id,this.instructions);
        break;
      case 3:
      /* Change Id and Instruction */
      this.id = "otherTest";
      this.instructions = "This is the four instruction of this Tutorial";
      this.instruction(this.id,this.instructions);
      break;
      default:
        break;
    }
  }

  /* Final Title */
  farewell(){

    /* Presentation */
    document.getElementById("farewell").classList.add("farewell");
    let title = document.querySelector('.farewell');
    setTimeout(function(){ 
      title.classList.add('active');
    }, 800);
  
  
      setTimeout(function(){ 
        /* Remove Presentation */
        title.classList.remove('active');
        title.classList.add("none");
  
      }, 3500); /* End of presentation transition */

      setTimeout(function(){ 
        
      /* Remove Class of Modal */
      document.getElementById("backModal").classList.remove("dark");
      /* Add Classes None */
      document.getElementById("backModal").classList.add("none");

      }, 4000); /* End presentation */
    
  }

}
