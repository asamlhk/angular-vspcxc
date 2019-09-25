import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  value = "123"
  nums = '០១២៣៤៥៦៧៨៩';

  update() {
    let final = "";

    for (var i = 0; i <= this.value.length; i++) {
      let char = this.value.charAt(i - 1);
      let n = this.nums.indexOf(char);
      n > 0 ? final += n : final += char;
    }
    this.value = final;
  }
}
