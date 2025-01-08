import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent,RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DummyApi';

  // constructor(private modalService: BsModalService) {}
  

}
