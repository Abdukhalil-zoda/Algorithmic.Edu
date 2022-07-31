import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';



@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  theme: any;


  constructor(private router: ActivatedRoute) {
    
    this.theme = this.router.snapshot.params['name'];
   }
  
  ngOnInit(): void {
  }



}
