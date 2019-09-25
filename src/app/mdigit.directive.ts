import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMdigit]'
})
export class MdigitDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onMouseEnter() {

    this.el.nativeElement.value = this.update(this.el.nativeElement.value);
  }

  private update(value) {
    let final = "";
    const nums = '-១២៣៤៥៦៧៨៩០';

    for (var i = 0; i <= value.length; i++) {
      let char = value.charAt(i - 1);
      let n = nums.indexOf(char);
      n > 0 ?
        n == 10 ? final += 0 : final += n
        : final += char;
    }
    return final;
  }

}