import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';



@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  theme: any;
  public ss = ["sdd", "sdsd"]
  constructor(private router: ActivatedRoute) {
    this.theme = this.router.snapshot.params['name'];
   }
  
  ngOnInit(): void {
  }

}
