import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {IResponse} from "../Models/Response";
import {IProblem} from "../Models/Problem";
import {Observable} from "rxjs";

@Component({
  selector: 'app-solve-problem',
  templateUrl: './solve-problem.component.html',
  styleUrls: ['./solve-problem.component.css']
})
export class SolveProblemComponent implements OnInit {

  constructor(public router: ActivatedRoute, public http: HttpClient) { }
  id = this.router.snapshot.params['id'];
  problem: IProblem
  ngOnInit(): void {
    this.getProblem().subscribe(data =>{
      this.problem = data.data
      console.log(this.problem.examples)
    })
  }

  getProblem(){
    return this.http.get<IResponse<IProblem>>('https://algorithmic.uz/api/Problems/'+this.id)
  }

}
