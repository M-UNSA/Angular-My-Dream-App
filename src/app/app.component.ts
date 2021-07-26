import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email; // : string;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;

  constructor() {
    console.log("Constructor working...");
    this.name = "Marco Centeno Quispe";
    this.email = "mcentenoqu@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Fútbol","Programación","Netflix"];
    this.showHobbies = false;
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby: { value: string; }){
    //console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
}
