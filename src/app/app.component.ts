import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DummyApi';


  constructor(private http:HttpClient){
    this.userData = JSON.parse(localStorage.getItem("DummyApi")|| '')
  }

  fName:any=''
  lName:any=''
  mobile:any=''
  isUpdate = false
  selectIndex:any = ''

  userData:any =[]

  submit(){
    let user={
      fName : this.fName,
      lName : this.lName,
      mobile : this.mobile
    }
    this.userData.push(user);
    localStorage.setItem("DummyApi",JSON.stringify(this.userData));
    this.fName=''
    this.lName=''
    this.mobile=''
    console.log(this.userData);    
  }

  delete(index:any){
    this.userData.splice(index,1)
    localStorage.setItem("DummyApi",JSON.stringify(this.userData));
  }

  edit(index:any){
    this.isUpdate = true
    this.selectIndex = index
    this.fName = this.userData[index].fName
    this.lName = this.userData[index].lName
    this.mobile = this.userData[index].mobile
  }

  update(){
    this.userData[this.selectIndex].fName = this.fName
    this.userData[this.selectIndex].lName = this.lName
    this.userData[this.selectIndex].mobile = this.mobile
    localStorage.setItem("DummyApi",JSON.stringify(this.userData));
    this.fName=''
    this.lName=''
    this.mobile=''
    this.isUpdate = false
  }

}
