import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private toastr: ToastrService) { }

  info(message: string): void {
    this.toastr.info(message, '', {
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }

  error(message: string): void {
    this.toastr.error(`${message}`, '', {
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }
}