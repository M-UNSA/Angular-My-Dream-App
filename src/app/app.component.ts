import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['ryan','joe','cameron','john'];
  activated = false;
  title = 'my-dream-app';
  name : string;
  email; // : string;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;

  nameA2 : string = "Marco Edmundo E. Centeno Quispe";
  age : number = 40;

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

  sayHello() {
    alert("Hola Desde app.component");
  }

  deleteUser(user: string) {
    for(let i=0; i<this.users.length; i++) {
      if (user==this.users[i]) {
        this.users.splice(i,1);
      }
    }
  }

  addUser(newUser: { value: string; focus: () => void; }) {
    //console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}
