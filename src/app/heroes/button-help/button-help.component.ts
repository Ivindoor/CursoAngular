import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import * as $ from "jquery"
import { delay } from 'q';

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
            /* Call element */
            let view = document.getElementById("buttonHelp"); /* Id  */
            /* Get Position and Measurements */
            let position = view.getBoundingClientRect();
            let frontModal = document.getElementById("frontModal");
            /* console.log(position); */
            frontModal.style.top = position.top+265 +'px';
            frontModal.style.right = position.right +'px';
            frontModal.style.left = position.left-30 +'px';
            frontModal.style.bottom = position.bottom +'px';
            frontModal.style.width = 50+position.width+'px';
            frontModal.style.height = 50+position.height+'px';
            /* Append to Modal */
            frontModal.append(view);
            /* Center Element with the Modal*/
            view.style.marginTop = '25px';
            view.style.marginLeft = '25px';
            
          }, 1500);/* End Element */
          
          }, 3500); /* End of presentation transition */
          
        }

        
    });
  }

}