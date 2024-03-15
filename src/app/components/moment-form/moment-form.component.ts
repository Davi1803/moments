import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit{
  @Input() btnText!: String

  constructor(){}

  ngOnInit(): void {
    
  }

}
