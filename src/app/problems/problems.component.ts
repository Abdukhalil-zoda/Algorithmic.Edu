import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IResponse} from "../Models/Response";
import {IProblem} from "../Models/Problem";
import {Observable} from "rxjs";

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  @Input() id: number

  constructor(public http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<IResponse<IProblem>>('https://algorithmic.uz/api/Problems/' + this.id!).subscribe(data =>{
      this.problem = data.data
    })
  }
  problem : IProblem
  getProblem(){


  }

}
