import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/_core/components/modal/modal.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit, AfterViewInit {
  @ViewChild('modalComponent') modalComponent!: ModalComponent;
  constructor(private router: Router){

  }
  ngOnInit(): void {
    // this.openModal();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.openModal();
    }, 0);
  }
  openModal(): void {
    this.modalComponent.openModal('My Modal');
  }
}
