import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
<<<<<<< HEAD
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
=======
>>>>>>> 7418a35fa51c97000201aeaaa6b46a4d8fdbc693

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent,RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DummyApi';
<<<<<<< HEAD

  // constructor(private modalService: BsModalService) {}
=======
  
  modalRef?: BsModalRef;


  constructor(private http:HttpClient , private modalService: BsModalService){
    this.userData = JSON.parse(localStorage.getItem("DummyApi")|| '')
  }

  fName:any=''
  lName:any=''
  mobile:any=''
  isUpdate = false
  selectIndex:any = ''

  userData:any =[]

  openModal(template: TemplateRef<void>,index:any) {

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
>>>>>>> 7418a35fa51c97000201aeaaa6b46a4d8fdbc693
  

}
