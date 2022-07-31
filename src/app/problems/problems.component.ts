import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  @Input()
  id: number = 0

  constructor() 
  { 

  }

  ngOnInit(): void {
  }

}
