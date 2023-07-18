import { Component, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {
@ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
modalRef!: BsModalRef;
title!: string;

constructor(private modalService: BsModalService) { }

openModal(title: string): void {
  this.title = title;
  this.modalRef = this.modalService.show(this.modalTemplate);
}

closeModal(): void {
  this.modalRef.hide();
}

save(): void {
  // Handle the save action here
  this.closeModal();
}
}
