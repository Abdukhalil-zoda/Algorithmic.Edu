import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() 
  lessonChange: EventEmitter<EduGet> = new EventEmitter();
  title = 'Themes';
  // public themes: string[];
  
  constructor(public http: HttpClient){
    var a: string[];
    console.log(this.eduGet())
  }

  eduGet()
  {
    let huyta = this.http.get<EduGet>("https://algorithmic.uz/api/Education");
    huyta.subscribe(result => {
      //this code is not executed, I do not understand why                
      this.lessonChange.emit(result);
      console.log(result.data)
      return result.data;
    });
    return huyta;
  }

}
export interface EduGet{
  ok: boolean
  data: string[]
}