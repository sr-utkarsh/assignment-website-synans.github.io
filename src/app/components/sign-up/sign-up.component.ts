import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( public authService:AuthService) { }

  private username:string;

  

  ngOnInit(): void {
  }

  @Output() emitter:EventEmitter<string> 
  = new EventEmitter<string>(); 

emit(keyword){ 
 this.emitter.emit(keyword); 
} 

}
