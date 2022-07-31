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
  public themes = this.eduGet();
  
  constructor(public http: HttpClient){
    var a: string[];
    console.log(this.eduGet())
  }

  eduGet()
  {
    return this.http.get<EduGet>("https://algorithmic.uz/api/Education");
    
    
  }

}
export interface EduGet{
  ok: boolean
  data: string[]
}