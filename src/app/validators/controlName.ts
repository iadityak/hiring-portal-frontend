import { AbstractControl } from "@angular/forms";



export function  ControlLicenseNumber(c: AbstractControl):  string | null {
  const formGroup = c.parent.controls;
  return Object.keys(formGroup).find(license_number => c === formGroup[license_number])  || null;
 }
