import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[formatRut]',
})
export class FormatRutDirective {
  constructor(private element: ElementRef) {}

  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    const inputElement = this.element.nativeElement as HTMLInputElement;
    inputElement.value = inputElement.value.trim();

    // Se quitan todos los puntos y guiones
    const rutLimpio = inputElement.value.replace(/[\s\.\-]/g, "");
    // Se quita el digito verificador
    const rutSinDigito = rutLimpio.slice(0, -1);
    // Se obtiene el digito verificador
    const digito = rutLimpio.slice(-1);
    inputElement.value = `${rutSinDigito}-${digito}`
  }
}
