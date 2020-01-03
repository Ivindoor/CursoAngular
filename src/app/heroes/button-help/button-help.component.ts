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
    let timerInterval
    Swal.fire({
      title: '3 seconds for the Tour',
      html: 'I will explain to you in details <br><br><b>',
      timer: 3000,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('b')
            .textContent = '' + Swal.getTimerLeft()
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.timer
      ) {
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
             bubble.style.top = properties.top + 265 - height +'px';
             bubble.style.left = properties.right - width +'px';



            /* Top | Left Bubble */
            /* let height = (properties.height / 2) + bubbleProperties.height; */
            /* Center Bubble */
            /* let width = properties.width / 2;
            let bubbleWidth = bubbleProperties.width; */
            /* Call Position and Measurements of element*/
            /* bubble.style.top = properties.top + 265 - height +'px';
            bubble.style.left = properties.left + width - bubbleWidth +'px'; */
            /* Rotate Bubble */
            /* bubble.style.transform = "scaleX(-1)"; */
            /* Adjust Text */
            /* bubbleText.style.transform = "scaleX(-1)"; */

            /* Bottom | Right Bubble */
            /* let height = (properties.height / 2) + bubbleProperties.height ;  */
            /* Center Bubble */
            /* let width = properties.width / 2; */
            /* Call Position and Measurements of element*/
            /* bubble.style.top = properties.top + 265 + height +'px';
            bubble.style.left = properties.right - width +'px'; */
            /* Rotate Bubble */
            /* bubble.style.transform = "scaleY(-1)"; */
            /* Adjust Text */
            /* bubbleText.style.transform = "scaleY(-1)"; */

            /* Bottom | Left Bubble */
            /* let height = (properties.height / 2) + bubbleProperties.height; */
            /* Center Bubble */
            /* let width = properties.width / 2;
            let bubbleWidth = bubbleProperties.width; */
            /* Call Position and Measurements of element*/
            /* bubble.style.top = properties.top + 265 + height +'px';
            bubble.style.left = properties.left + width - bubbleWidth +'px'; */
            /* Rotate Bubble */
            /* bubble.style.transform = "scaleX(-1) scaleY(-1)"; */
            /* Adjust Text */
            /* bubbleText.style.transform = "scaleX(-1) scaleY(-1)"; */


            /* Next and Prev */
            

          }, 1500);/* End Element */
          

          }, 3500); /* End of presentation transition */
          

        }
    });
  }

}