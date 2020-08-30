import { Injectable } from '@angular/core';

@Injectable()
export declare class SweetAlert {
  constructor();
  swal(): any;
  confirm(options: any): any;
  prompt(options: any): any;
  alert(options: any): any;
  question(options: any): any;
  success(options: any): any;
  warning(options: any): any;
  error(options: any): any;
  info(options: any): any;
}