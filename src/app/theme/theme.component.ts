import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {IEducation} from "../Models/Education";
import {IResponse} from "../Models/Response";



@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  theme = this.router.snapshot.params['name'];

  constructor(private router: ActivatedRoute, public http: HttpClient) { }

  Theme = this.getTheme()
  ngOnInit(): void { }

 getTheme(){
    return this.http.get<IResponse<IEducation>>('https://algorithmic.uz/api/Education/' + this.theme)
  }
  post(){

  }

}
