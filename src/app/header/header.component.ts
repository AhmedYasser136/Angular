import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  homename: string = "home";
  textId: string = "myId"

  StoreName: string = "A.IOT";
  StoreLogo: string = "https://cdn3.emoji.gg/emojis/1946_anemo.png";
}
