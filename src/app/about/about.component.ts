import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  modalRef?: BsModalRef;


  constructor(private http:HttpClient , private modalService: BsModalService){
    this.userData = JSON.parse(localStorage.getItem("CRUD")|| '')
  }

  fName:any=''
  lName:any=''
  mobile:any=''
  isUpdate = false
  selectIndex:any = ''

  userData:any =[]

  openModal(template: TemplateRef<void>,index:any) {

    // this.isUpdate = true
    this.selectIndex = index
    this.modalRef = this.modalService.show(template,index);
    console.log(this.userData[index]);
    console.log(this.userData);
  }

  submit(){
    let user={
      fName : this.fName,
      lName : this.lName,
      mobile : this.mobile
    }
  
    this.userData.push(user);
    localStorage.setItem("CRUD",JSON.stringify(this.userData));
    this.fName=''
    this.lName=''
    this.mobile=''
    console.log(this.userData);    
  }

  delete(index:any){
    this.userData.splice(index,1)
    localStorage.setItem("CRUD",JSON.stringify(this.userData));
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
    localStorage.setItem("CRUD",JSON.stringify(this.userData));
    this.fName=''
    this.lName=''
    this.mobile=''
    this.isUpdate = false
  }
}
